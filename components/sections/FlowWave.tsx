"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { GammaCorrectionShader } from "three/examples/jsm/shaders/GammaCorrectionShader";
import { CopyShader } from "three/examples/jsm/shaders/CopyShader";
import { ArrowUpRight, Bot, CalendarCheck2, PhoneCall, Zap } from "lucide-react";
import { site } from "@/lib/site";

/* ============================================================
   Fixed parameters (baked in)
   ============================================================ */
const bgColor = "#02160c";
const flameColor = "#0aff7f";
const flameColor2 = "#aef0c0";
const flameAmt = 0.2;
const atmoColor = "#7affbf";
const atmoCount = 300;
const atmoSize = 24;
const atmoSpeed = 1.0;
const colorLow = "#02160c";
const colorHigh = "#34e89a";
const opacity = 0.26;
const pointSize = 5.5;
const brightness = 0.45;
const waveHeight = 3;
const flow = 1;
const tilt = 0;
const scale = 0.275;
const scrollRise = 1.0;
const camStartY = 7;
const camStartZ = 16;
const camEndY = 0.8;
const camEndZ = -2;
const lookStartZ = 2;
const lookEndZ = -16;
const parallax = 1.2;
const pointerRadius = 7.0;
const pointerStrength = 0.9;

const LAYERS = { NONE: 0, TORUS_SCENE: 1, BLOOM_SCENE: 2, ENTIRE_SCENE: 3 };

const Lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));
function hexToVec3(hex: string) {
  const n = parseInt(hex.slice(1), 16);
  return new THREE.Vector3(((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255);
}

/* ============================================================
   Shared GLSL — 3D Simplex noise
   ============================================================ */
const SNOISE = /* glsl */ `
vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
float snoise(vec3 v){
  const vec2 C = vec2(1.0/6.0, 1.0/3.0); const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i = floor(v + dot(v, C.yyy)); vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz); vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy); vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + 1.0 * C.xxx; vec3 x2 = x0 - i2 + 2.0 * C.xxx; vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;
  i = mod(i, 289.0);
  vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 1.0/7.0; vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z *ns.z);
  vec4 x_ = floor(j * ns.z); vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ *ns.x + ns.yyyy; vec4 y = y_ *ns.x + ns.yyyy; vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy); vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0)*2.0 + 1.0; vec4 s1 = floor(b1)*2.0 + 1.0; vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy; vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
  vec3 p0 = vec3(a0.xy,h.x); vec3 p1 = vec3(a0.zw,h.y); vec3 p2 = vec3(a1.xy,h.z); vec3 p3 = vec3(a1.zw,h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.5 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0); m = m * m;
  return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}
`;

const POINTS_VERT = /* glsl */ `
uniform float uTime; uniform float uStream; uniform float uSize; uniform float uWaveHeight; uniform float uFlow; uniform float uScale;
uniform vec3 uColLow; uniform vec3 uColHigh;
uniform vec3 uCursor; uniform float uRepelRadius; uniform float uRepelStrength; uniform float uActivity;
varying float vFade; varying vec3 vColor;
${SNOISE}
void main() {
  vec3 wp = vec3(position.x * 13.0, 0.0, position.z * 25.0);
  wp.x += position.y * 6.0;
  float zc = wp.z + uStream;
  float wn = snoise(vec3(wp.x * 0.08, zc * 0.08, uTime * 0.15 * uFlow)) * 2.0;
  wn += snoise(vec3(wp.x * 0.16, zc * 0.16, uTime * 0.3 * uFlow)) * 0.8;
  wp.y += wn * uWaveHeight;

  vec3 finalPos = wp * uScale;
  vec4 modelPosition = modelMatrix * vec4(finalPos, 1.0);
  vec3 toP = modelPosition.xyz - uCursor;
  float cd = length(toP);
  float fall = smoothstep(uRepelRadius, 0.0, cd);
  modelPosition.xyz += normalize(toP + vec3(0.0001)) * fall * uRepelStrength * uActivity;
  vec4 mvPosition = viewMatrix * modelPosition;

  float colMix = smoothstep(-3.0, 3.0, position.y + position.x * 0.5);
  vColor = mix(uColLow, uColHigh, clamp(colMix, 0.0, 1.0));
  vFade = 1.0;

  gl_PointSize = uSize * (10.0 / -mvPosition.z);
  gl_PointSize = max(gl_PointSize, 1.5);
  gl_Position = projectionMatrix * mvPosition;
}
`;

const POINTS_FRAG = /* glsl */ `
uniform float uOpacity; uniform float uBrightness; uniform float uAppear;
varying float vFade; varying vec3 vColor;
void main() {
  vec2 xy = gl_PointCoord - 0.5;
  float ll = length(xy);
  if (ll > 0.5) discard;
  float a = smoothstep(0.5, 0.1, ll);
  gl_FragColor = vec4(vColor * uBrightness, vFade * a * uOpacity * uAppear);
}
`;

const FINAL_VERT = /* glsl */ `
varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position, 1.0); }
`;

const FINAL_FRAG = /* glsl */ `
uniform float iTime; uniform sampler2D tDiffuse; uniform sampler2D bloomTexture; uniform sampler2D torusTexture; uniform sampler2D haloTexture;
uniform vec3 uBg; uniform vec3 uFlameA; uniform vec3 uFlameB; uniform float uFlameAmt;
varying vec2 vUv;
vec3 warp3d(vec3 pos, float t){ float curv=.8,a=1.9,b=0.7; pos*=2.;
  pos.x+=curv*sin(t+a*pos.y)+t*b; pos.y+=curv*cos(t+a*pos.x);
  pos.y+=curv*sin(t+a*pos.z)+t*b; pos.z+=curv*cos(t+a*pos.y);
  pos.z+=curv*sin(t+a*pos.x)+t*b; pos.x+=curv*cos(t+a*pos.z);
  return 0.5+0.5*cos(pos.xyz+vec3(1,2,4)); }
void main(){
  vec2 uv = 2.*vUv - 1.;
  vec3 w = pow(warp3d(vec3(uv.x, sin(uv.y), uv.y), iTime*1.5), vec3(1.5));
  vec3 flame = 1.5*uFlameA*w.x; flame*=w.y; flame += uFlameB*w.z;
  flame *= smoothstep(0.25, 1., abs(uv.y));
  float md = smoothstep(-0.7, 1., -uv.y*uv.x); flame *= md*md;
  vec3 bg = uBg * (1.0 - 0.4 * length(uv));
  vec3 halo = texture2D(haloTexture, vUv).xyz;
  gl_FragColor = vec4(bg + flame*uFlameAmt + texture2D(bloomTexture, vUv).xyz + texture2D(torusTexture, vUv).xyz + texture2D(tDiffuse, vUv).xyz + halo, 1.);
}
`;

const ATMO_VERT = /* glsl */ `
attribute float size; attribute float seed; uniform float uTime; uniform vec2 uRes;
varying float vA;
vec3 warp(vec3 p, float t){ float c=0.9,a=1.9,b=0.02,s=0.05; p*=2.;
  p.x+=c*sin(s*t+a*p.y)+t*b; p.y+=c*cos(s*t+a*p.x); p.y+=c*sin(s*t+a*p.z)+t*b;
  p.z+=c*cos(s*t+a*p.y); p.z+=c*sin(s*t+a*p.x)+t*b; p.x+=c*cos(s*t+a*p.z);
  return cos(p+vec3(1,2,4)); }
void main(){
  vec3 v = position*4.0 + warp(position, uTime)*1.2;
  vec4 mv = modelViewMatrix * vec4(v, 1.0);
  float r = length(v); float farF = 1.0 - smoothstep(5.0, 6.5, r); float nearF = smoothstep(0.0, 0.5, -mv.z);
  vA = farF * nearF;
  gl_PointSize = size * uRes.y / 900.0 / -mv.z; gl_PointSize = max(gl_PointSize, 1.0);
  gl_Position = projectionMatrix * mv;
}
`;

const ATMO_FRAG = /* glsl */ `
uniform vec3 uColor; varying float vA;
void main(){ vec2 p = gl_PointCoord - 0.5; float l = length(p); if (l > 0.5) discard;
  float tex = smoothstep(0.5, 0.0, l); gl_FragColor = vec4(uColor * tex, tex * vA * 0.6); }
`;

const CARDS = [
  {
    icon: Bot,
    title: "AI lead qualification",
    body: "Every prospect is qualified and pre-sold before they ever reach your calendar.",
  },
  {
    icon: PhoneCall,
    title: "CRM + AI follow-up",
    body: "Automated email, SMS, reminders and follow-up that run 24/7.",
  },
  {
    icon: Zap,
    title: "Meta Ads, managed daily",
    body: "Campaigns launched, optimised and scaled by our team every day.",
  },
  {
    icon: CalendarCheck2,
    title: "90-day written guarantee",
    body: "We keep working at no management fee until you see the results.",
  },
] as const;

const smoothstep = (v: number, a: number, b: number) => {
  const x = clamp((v - a) / (b - a), 0, 1);
  return x * x * (3 - 2 * x);
};

export function FlowWave() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const headlineWrapRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const cardElsRef = useRef<(HTMLDivElement | null)[]>([]);
  const statRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const sectionEl = sectionRef.current;
    if (!canvas || !sectionEl) return;

    /* ------------------------------ scene ------------------------------ */
    const renderer = new THREE.WebGL1Renderer({ canvas, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight, false);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.VSMShadowMap;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    scene.fog = new THREE.Fog(0x000000, 0, 15);

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 400);
    camera.position.set(0, camStartY, camStartZ);
    camera.layers.enable(LAYERS.TORUS_SCENE);
    camera.layers.enable(LAYERS.BLOOM_SCENE);
    camera.layers.enable(LAYERS.ENTIRE_SCENE);
    scene.add(camera);

    /* --------------------------- points sheet --------------------------- */
    const geo = new THREE.SphereGeometry(4.2, 200, 600);
    (geo as unknown as { frustumCulled: boolean }).frustumCulled = false;

    const uniforms: Record<string, THREE.IUniform> = {
      uTime: { value: 0 },
      uStream: { value: 0 },
      uAppear: { value: 0 },
      uColLow: { value: hexToVec3(colorLow) },
      uColHigh: { value: hexToVec3(colorHigh) },
      uOpacity: { value: opacity },
      uSize: { value: pointSize },
      uBrightness: { value: brightness },
      uWaveHeight: { value: waveHeight },
      uFlow: { value: flow },
      uScale: { value: scale },
      uCursor: { value: new THREE.Vector3() },
      uRepelRadius: { value: pointerRadius },
      uRepelStrength: { value: pointerStrength },
      uActivity: { value: 0 },
    };

    const material = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms,
      vertexShader: POINTS_VERT,
      fragmentShader: POINTS_FRAG,
    });

    const points = new THREE.Points(geo, material);
    points.frustumCulled = false;
    points.layers.set(LAYERS.ENTIRE_SCENE);

    const group = new THREE.Group();
    group.add(points);
    scene.add(group);

    /* ----------------------------- composers ----------------------------- */
    const renderScene = new RenderPass(scene, camera);
    const torusComposer = new EffectComposer(renderer);
    torusComposer.addPass(renderScene);
    torusComposer.addPass(new ShaderPass(GammaCorrectionShader));
    torusComposer.addPass(
      new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.22, 0.2, 0)
    );
    torusComposer.addPass(new ShaderPass(CopyShader));
    torusComposer.renderToScreen = false;

    const bloomComposer = new EffectComposer(renderer);
    bloomComposer.addPass(renderScene);
    bloomComposer.addPass(
      new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.4, 0.55, 0)
    );
    bloomComposer.addPass(new ShaderPass(GammaCorrectionShader));
    bloomComposer.renderToScreen = false;

    const finalPass = new ShaderPass({
      uniforms: {
        iTime: { value: 0 },
        tDiffuse: { value: null },
        torusTexture: { value: null },
        bloomTexture: { value: null },
        haloTexture: { value: null },
        uBg: { value: hexToVec3(bgColor) },
        uFlameA: { value: hexToVec3(flameColor) },
        uFlameB: { value: hexToVec3(flameColor2) },
        uFlameAmt: { value: flameAmt },
      },
      vertexShader: FINAL_VERT,
      fragmentShader: FINAL_FRAG,
    });
    finalPass.uniforms.bloomTexture.value = bloomComposer.renderTarget1.texture;
    finalPass.uniforms.torusTexture.value = torusComposer.renderTarget1.texture;

    const finalComposer = new EffectComposer(renderer);
    finalComposer.addPass(renderScene);
    finalComposer.addPass(finalPass);

    /* --------------------------- ambient motes --------------------------- */
    const N = Math.round(atmoCount);
    const positions = new Float32Array(N * 3);
    const sizes = new Float32Array(N);
    const seeds = new Float32Array(N);
    for (let i = 0; i < N; i++) {
      positions[i * 3] = 2 * Math.random() - 1;
      positions[i * 3 + 1] = 2 * Math.random() - 1;
      positions[i * 3 + 2] = 2 * Math.random() - 1;
      sizes[i] = atmoSize * (0.4 + Math.random());
      seeds[i] = Math.random();
    }
    const atmoGeo = new THREE.BufferGeometry();
    atmoGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    atmoGeo.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
    atmoGeo.setAttribute("seed", new THREE.BufferAttribute(seeds, 1));

    const atmoMat = new THREE.ShaderMaterial({
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      depthTest: false,
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: hexToVec3(atmoColor) },
        uRes: {
          value: new THREE.Vector2(
            window.innerWidth * window.devicePixelRatio,
            window.innerHeight * window.devicePixelRatio
          ),
        },
      },
      vertexShader: ATMO_VERT,
      fragmentShader: ATMO_FRAG,
    });

    const pts = new THREE.Points(atmoGeo, atmoMat);
    pts.frustumCulled = false;
    pts.layers.set(LAYERS.ENTIRE_SCENE);
    scene.add(pts);

    (atmoMat as unknown as { onBeforeRender: (renderer: unknown, scene: unknown, camera: unknown, geometry: unknown, material: unknown, group: unknown) => void }).onBeforeRender =
      () => {
        const t = performance.now() / 1000;
        atmoMat.uniforms.uTime.value = t * atmoSpeed * 8.0;
        pts.position.copy(camera.position);
        finalPass.uniforms.iTime.value = t;
      };

    /* ---------------------------- interaction ---------------------------- */
    let scrollTarget = 0;
    let scrollSmooth = 0;
    let scrollCurrent = 0;

    const mouseTarget = { x: 0, y: 0 };
    const mouse = { x: 0, y: 0 };

    const POINTER = {
      world: new THREE.Vector3(),
      activity: 0,
      active: false,
      lastMove: performance.now(),
    };

    const _ndc = new THREE.Vector3();
    const _dir = new THREE.Vector3();
    const _tgt = new THREE.Vector3();

    const updatePointerWorld = () => {
      _tgt.set(0, 0, 0);
      if (POINTER.active) {
        _ndc.set(mouse.x, mouse.y, 0.5).unproject(camera);
        _dir.copy(_ndc).sub(camera.position).normalize();
        const dn = _dir.z;
        if (Math.abs(dn) > 1e-4) {
          const tt = -camera.position.z / dn;
          if (tt > 0 && Number.isFinite(tt)) _tgt.copy(camera.position).addScaledVector(_dir, tt);
        }
      }
      POINTER.world.lerp(_tgt, 0.12);
      const idle = (performance.now() - POINTER.lastMove) / 1000;
      POINTER.activity += ((POINTER.active && idle < 3 ? 1 : 0) - POINTER.activity) * 0.06;
    };

    const onPointerMove = (e: MouseEvent) => {
      mouseTarget.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseTarget.y = -((e.clientY / window.innerHeight) * 2 - 1);
      POINTER.active = true;
      POINTER.lastMove = performance.now();
    };
    const onPointerOut = () => {
      POINTER.active = false;
    };

    /* --------------------------- state & render --------------------------- */
    let stream = 0;
    const appearStart = performance.now();
    let t0 = performance.now() / 1000;

    const computeScroll = () => {
      const el = sectionRef.current;
      const rect = el ? el.getBoundingClientRect() : { top: 0, height: 0 };
      const vh = window.innerHeight;
      const travel = rect.height - vh;
      const out = travel <= 0 ? 0 : clamp(-rect.top / travel, 0, 1);
      return out;
    };

    const render = (scroll: number, m: { x: number; y: number }) => {
      const t = performance.now() / 1000;
      const dt = Math.min(0.05, t - t0);
      t0 = t;
      uniforms.uTime.value = t;

      stream += dt * (flow * 2.0) * 4.0;
      uniforms.uStream.value = stream;
      uniforms.uWaveHeight.value = waveHeight * (1 + scroll * scrollRise);

      const ea = Math.min(scroll / 0.35, 1.0);
      const e = ea * ea * (3 - 2 * ea);
      const camY = Lerp(camStartY, camEndY, e);
      const camZ = Lerp(camStartZ, camEndZ, e);
      camera.position.set(m.x * parallax, camY + m.y * parallax * 0.3, camZ);
      camera.lookAt(m.x * parallax * 0.5, Lerp(0.0, 0.6, e), Lerp(lookStartZ, lookEndZ, e));
      group.rotation.x = -tilt;
      group.rotation.y = 0;
      updatePointerWorld();

      uniforms.uCursor.value.copy(POINTER.world);
      uniforms.uActivity.value = POINTER.activity;
      const elapsed = (performance.now() - appearStart) / 1000;
      uniforms.uAppear.value = Math.max(0, Math.min(1, (elapsed - 0.2) / 1.4));
    };

    const overlay = () => {
      const p = scrollCurrent;
      if (headlineWrapRef.current) {
        const o = 1 - smoothstep(p, 0.28, 0.44);
        headlineWrapRef.current.style.opacity = String(o);
        headlineWrapRef.current.style.transform = `translateY(${(1 - o) * -34}px)`;
        headlineWrapRef.current.style.maxHeight = `${o * 480}px`;
      }
      if (cardsRef.current) {
        const o = smoothstep(p, 0.3, 0.48);
        cardsRef.current.style.opacity = String(o);
        cardsRef.current.style.transform = `translateY(${(1 - o) * 56}px)`;
        cardElsRef.current.forEach((el, i) => {
          if (el) el.style.transform = `translateY(${(1 - o) * (14 + i * 10)}px)`;
        });
      }
      if (statRef.current) {
        const o = smoothstep(p, 0.5, 0.62);
        statRef.current.style.opacity = String(o);
        statRef.current.style.transform = `translateY(${(1 - o) * 20}px)`;
      }
      if (ctaRef.current) {
        const o = smoothstep(p, 0.55, 0.68);
        ctaRef.current.style.opacity = String(o);
        ctaRef.current.style.transform = `translateY(${(1 - o) * 26}px)`;
      }
      if (hintRef.current) {
        hintRef.current.style.opacity = String(1 - smoothstep(p, 0.03, 0.1));
      }
    };

    let raf = 0;
    const loop = () => {
      scrollTarget = computeScroll();
      scrollSmooth = Lerp(scrollSmooth, scrollTarget, 0.1);
      scrollCurrent = Lerp(scrollCurrent, scrollSmooth, 0.06);
      mouse.x = Lerp(mouse.x, mouseTarget.x, 0.06);
      mouse.y = Lerp(mouse.y, mouseTarget.y, 0.06);

      render(scrollCurrent, mouse);

      camera.layers.set(LAYERS.TORUS_SCENE);
      torusComposer.render();
      camera.layers.set(LAYERS.BLOOM_SCENE);
      bloomComposer.render();
      camera.layers.set(LAYERS.ENTIRE_SCENE);
      finalComposer.render();

      overlay();
      raf = requestAnimationFrame(loop);
    };

    const onResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      const dpr = window.devicePixelRatio;
      torusComposer.setPixelRatio(dpr);
      torusComposer.setSize(w, h);
      bloomComposer.setPixelRatio(dpr);
      bloomComposer.setSize(w, h);
      finalComposer.setPixelRatio(dpr);
      finalComposer.setSize(w, h);
      atmoMat.uniforms.uRes.value.set(w * dpr, h * dpr);
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onPointerMove, { passive: true });
    window.addEventListener("mouseout", onPointerOut);

    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("mouseout", onPointerOut);
      geo.dispose();
      material.dispose();
      atmoGeo.dispose();
      atmoMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative"
      style={{ height: "620vh" }}
      aria-label="Qualified demand hero"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#02160c]">
        <canvas ref={canvasRef} className="absolute inset-0 block h-full w-full" />

        {/* readability vignette */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_42%,transparent_38%,rgba(2,22,12,0.86)_100%)]" />

        {/* overlay content */}
        <div className="pointer-events-none absolute inset-0 z-10 flex flex-col">
          <div className="container-x flex items-center justify-between pt-16 sm:pt-20">
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#7affbf]/90">
              QualifiedLeadsX · Flow
            </span>
            <div ref={hintRef} className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#7affbf]/60">
              scroll ↓
            </div>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <div
              ref={headlineWrapRef}
              className="overflow-hidden"
              style={{ maxHeight: 480 }}
            >
              <h1
                ref={headlineRef}
                className="max-w-4xl text-balance text-[clamp(1.5rem,3.9vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-fog"
              >
                We will install our proprietary{" "}
                <em className="text-gradient-lime not-italic">QualifiedLeadsX™</em> client
                acquisition system into your business —{" "}
                <em className="text-gradient-lime not-italic">
                  double your revenue within the next 90 days
                </em>{" "}
                — or we&apos;ll continue working for you at{" "}
                <em className="text-gradient-lime not-italic">no management fee</em> until we do.
              </h1>
              <p
                ref={subRef}
                className="mx-auto mt-5 max-w-2xl text-pretty text-sm leading-relaxed text-mist sm:text-base"
              >
                Stop relying on referrals, inconsistent lead generation and multiple freelancers.{" "}
                <span className="hidden sm:inline">
                  We build your entire client acquisition ecosystem — offer positioning, Meta Ads,
                  ad creatives, landing pages, CRM, AI automations, lead qualification and follow-up
                  — so your only job is to show up, take the calls and close premium clients.
                </span>
              </p>
            </div>

            <div
              ref={cardsRef}
              className="mt-7 grid w-full max-w-5xl grid-cols-2 gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-4"
              style={{ opacity: 0 }}
            >
              {CARDS.map((c, i) => {
                const Icon = c.icon;
                return (
                  <div
                    key={c.title}
                    ref={(el) => {
                      cardElsRef.current[i] = el;
                    }}
                    className="panel-glass rounded-2xl p-4 text-left sm:p-5"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-[#34e89a]/30 bg-[#34e89a]/10 text-[#34e89a] sm:h-10 sm:w-10">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.75} />
                    </div>
                    <p className="mt-3 text-xs font-semibold text-fog sm:mt-4 sm:text-sm">
                      {c.title}
                    </p>
                    <p className="mt-1.5 text-[11px] leading-relaxed text-mist sm:text-xs sm:leading-relaxed">
                      {c.body}
                    </p>
                  </div>
                );
              })}
            </div>

            <div
              ref={statRef}
              className="mt-5 font-mono text-[9px] uppercase tracking-[0.28em] text-[#34e89a]/80 sm:mt-8 sm:text-[11px]"
              style={{ opacity: 0 }}
            >
              Backed by a written agreement
            </div>

            <div ref={ctaRef} className="mt-5 sm:mt-8" style={{ opacity: 0 }}>
              <a
                href={site.bookCallUrl}
                className="pointer-events-auto group inline-flex items-center gap-2 rounded-full bg-[#34e89a] px-8 py-3.5 text-sm font-semibold text-[#02160c] transition-colors hover:bg-[#7affbf] sm:py-4"
              >
                Book Your Free Strategy Call
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          <div className="h-10" />
        </div>
      </div>
    </section>
  );
}
