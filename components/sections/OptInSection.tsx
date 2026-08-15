"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, Loader2, Lock, ShieldCheck, Sparkles } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

const ENDPOINT = `https://formsubmit.co/ajax/${site.email}`;

export function OptInSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    if (String(fd.get("_honey") || "").trim()) return;

    const payload = {
      _subject: "New Opt-In Request - QualifiedLeadsX",
      _template: "table",
      _captcha: "false",
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      niche: fd.get("niche"),
    };

    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { success?: string };
      if (data.success === "true") {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section id="opt-in" className="relative overflow-hidden bg-[#040c07]">
      {/* Aurora glow background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/[0.05] blur-[160px]" />
      </div>

      <div className="container-x relative z-10">
        <SectionHeading
          eyebrow="Instant System Access"
          title={
            <>
              Get Instant Access To The{" "}
              <em className="font-semibold not-italic text-lime">
                Acquisition Blueprint.
              </em>
            </>
          }
          subtitle="Enter your details below to unlock our live case studies, ad creative frameworks, and automated qualification workflows."
        />

        <Reveal y={30} className="mx-auto max-w-3xl">
          <div className="relative overflow-hidden rounded-[32px] border border-lime/20 bg-[#050e08]/90 p-8 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] sm:p-12">
            
            {/* Subtle top shine */}
            <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime/50 to-transparent" />

            {status === "success" ? (
              <div className="py-8 text-center">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-lime/20 text-lime">
                  <CheckCircle2 className="h-10 w-10" />
                </span>
                <h3 className="mt-6 text-2xl font-bold text-white">Access Granted!</h3>
                <p className="mt-3 text-base text-mist max-w-md mx-auto">
                  Thank you for opting in. We have sent your instant access link to your email. Check your inbox to begin.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-6 py-2.5 font-mono text-xs font-bold text-lime transition-all hover:bg-lime/20"
                >
                  Submit Another Opt-In
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

                {/* Email Address Only */}
                <div>
                  <label htmlFor="opt-email" className="mb-2 block text-xs font-mono font-bold uppercase tracking-wider text-lime text-left">
                    Email Address *
                  </label>
                  <input
                    id="opt-email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    className="w-full rounded-2xl border border-lime/20 bg-black/60 px-5 py-4 text-sm text-white placeholder:text-mist/40 outline-none transition-colors focus:border-lime focus:bg-black/80"
                  />
                </div>

                {status === "error" && (
                  <p className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 text-xs text-rose-400">
                    Something went wrong submitting your email. Please try again.
                  </p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group relative flex w-full items-center justify-center gap-2 rounded-full bg-lime px-8 py-4 text-sm font-bold text-ink shadow-[0_0_40px_-10px_rgba(201,242,107,0.5)] transition-all duration-300 hover:bg-lime-soft hover:shadow-[0_0_60px_-10px_rgba(201,242,107,0.7)] hover:scale-[1.01] disabled:opacity-70"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin text-ink" />
                      Unlocking System Access…
                    </>
                  ) : (
                    <>
                      Get Instant Access Now
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>

                {/* Privacy Guarantee */}
                <div className="flex flex-wrap items-center justify-center gap-6 pt-2 font-mono text-[11px] text-mist/70">
                  <span className="inline-flex items-center gap-1.5">
                    <Lock className="h-3.5 w-3.5 text-lime" />
                    100% Free Access
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <ShieldCheck className="h-3.5 w-3.5 text-lime" />
                    Zero Spam Guarantee
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-lime" />
                    Instant Email Delivery
                  </span>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
