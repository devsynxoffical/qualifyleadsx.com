"use client";

import Image from "next/image";
import { ArrowUpRight, Users, Zap, TrendingUp } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const communityStats = [
  { icon: Users, value: "1,200+", label: "Active Members" },
  { icon: Zap, value: "Daily", label: "Strategy Drops" },
  { icon: TrendingUp, value: "Live", label: "Campaign Data" },
];

// Placeholder community post cards
const communityPosts = [
  {
    avatar: "HK",
    name: "Hassan K.",
    role: "Agency Owner",
    time: "2h ago",
    content: "Just scaled a client from $8k → $34k MRR in 6 weeks using the exact framework from the training. Here's the full breakdown 🧵",
    likes: 47,
    comments: 23,
    color: "#c9f26b",
  },
  {
    avatar: "SA",
    name: "Sara A.",
    role: "High-Ticket Coach",
    time: "5h ago",
    content: "Week 3 update: 14 qualified calls booked at $11 cost per appointment. The qualification sequence is doing exactly what it's supposed to. 🔥",
    likes: 31,
    comments: 14,
    color: "#6bf2e2",
  },
  {
    avatar: "MR",
    name: "Marcus R.",
    role: "Consultant",
    time: "1d ago",
    content: "Sharing my full Meta Ads creative testing template — this alone cut our CPL in half. Drop a 🙋 if you want me to post the full doc.",
    likes: 89,
    comments: 41,
    color: "#9b8bff",
  },
];

export function Community() {
  return (
    <Section id="community" className="relative overflow-hidden bg-ink">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-lime/[0.05] blur-[150px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,242,107,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(201,242,107,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative z-10">
        <SectionHeading
          eyebrow="Private community"
          title={
            <>
              See What&apos;s Working.{" "}
              <em className="font-semibold not-italic text-lime">In Real Time.</em>
            </>
          }
          subtitle="Join the private QualifiedLeadsX Community for Agency Owners, High-Ticket Coaches & Service Providers where we share real campaigns, client wins, strategies, tests, and what's working right now."
        />

        {/* Stats row */}
        <Reveal y={24}>
          <div className="mx-auto mt-10 flex max-w-lg justify-center gap-10 sm:gap-16">
            {communityStats.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="flex flex-col items-center gap-1.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-lime/20 bg-lime/[0.08]">
                    <Icon className="h-5 w-5 text-lime" />
                  </div>
                  <span className="text-xl font-bold text-fog">{s.value}</span>
                  <span className="text-[11px] uppercase tracking-widest text-dim">{s.label}</span>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Community post mockups */}
        <Reveal y={40} delay={0.08}>
          <div className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {communityPosts.map((post, i) => (
              <div
                key={post.name}
                className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-500 hover:border-lime/25 hover:bg-white/[0.06]"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {/* Top accent dot */}
                <div
                  className="absolute right-5 top-5 h-2 w-2 rounded-full opacity-80"
                  style={{ backgroundColor: post.color }}
                />

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[12px] font-bold text-ink"
                    style={{ backgroundColor: post.color }}
                  >
                    {post.avatar}
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-fog">{post.name}</div>
                    <div className="text-[11px] text-dim">{post.role} · {post.time}</div>
                  </div>
                </div>

                {/* Content */}
                <p className="mt-4 text-[13px] leading-relaxed text-mist">{post.content}</p>

                {/* Engagement row */}
                <div className="mt-5 flex items-center gap-5 border-t border-white/[0.06] pt-4">
                  <span className="flex items-center gap-1.5 text-[11px] text-dim">
                    <span className="text-base">👍</span> {post.likes}
                  </span>
                  <span className="flex items-center gap-1.5 text-[11px] text-dim">
                    <span className="text-base">💬</span> {post.comments}
                  </span>
                  <span className="ml-auto rounded-full bg-lime/10 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-widest text-lime">
                    Live
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal delay={0.18}>
          <div className="mx-auto mt-12 flex max-w-md flex-col items-center gap-4 text-center">
            <p className="text-sm leading-relaxed text-dim">
              Free to join. Updated daily with real results, strategies and what's working right now across 30+ niches.
            </p>
            <a
              href="https://www.facebook.com/groups/qualifiedleadsx"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full bg-lime px-8 py-4 text-sm font-semibold text-ink shadow-[0_0_50px_-12px_rgba(201,242,107,0.5)] transition-all duration-300 hover:scale-105 hover:bg-lime-soft hover:shadow-[0_0_70px_-10px_rgba(201,242,107,0.6)]"
            >
              Join the Community — It&apos;s Free
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-dim">
              Facebook Group · Free Access
            </span>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
