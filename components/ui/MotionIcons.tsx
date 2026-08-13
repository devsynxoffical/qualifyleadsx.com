"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface IconProps {
  className?: string;
  size?: number;
}

/* Offer Positioning — Target & Compass pulse */
export function MotionOfferIcon({ className, size = 28 }: IconProps) {
  return (
    <div className={cn("relative flex items-center justify-center text-lime", className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="overflow-visible"
      >
        <circle cx="12" cy="12" r="10" className="opacity-30" />
        <circle cx="12" cy="12" r="6" className="animate-ping opacity-25 text-lime" />
        <circle cx="12" cy="12" r="6" className="stroke-lime" />
        <circle cx="12" cy="12" r="2" className="fill-lime" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" className="opacity-75" />
      </svg>
    </div>
  );
}

/* Messaging Strategy — Animated sound waves */
export function MotionMessagingIcon({ className, size = 28 }: IconProps) {
  return (
    <div className={cn("relative flex items-center justify-center text-lime", className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 11l18-5v12L3 13v-2z" />
        <path d="M11.6 16.8a3 3 0 11-5.8-1.6" />
        <path
          d="M19 8c1.5 1.5 1.5 4 0 5.5"
          className="animate-pulse opacity-80"
          style={{ animationDuration: "1.5s" }}
        />
        <path
          d="M22 6c2.5 2.5 2.5 7 0 9.5"
          className="animate-pulse opacity-50"
          style={{ animationDuration: "2s" }}
        />
      </svg>
    </div>
  );
}

/* Meta Ads — Growing bar chart with spark line */
export function MotionMetaAdsIcon({ className, size = 28 }: IconProps) {
  return (
    <div className={cn("relative flex items-center justify-center text-lime", className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 3v18h18" />
        <path d="M18 9l-5 5-4-4-4 4" className="stroke-mint" />
        <path d="M18 9h-4M18 9v4" className="stroke-mint" />
        <rect x="7" y="14" width="2" height="4" rx="0.5" className="fill-lime/30" />
        <rect x="11" y="10" width="2" height="8" rx="0.5" className="fill-lime/50" />
        <rect x="15" y="7" width="2" height="11" rx="0.5" className="fill-lime" />
      </svg>
    </div>
  );
}

/* Ad Creatives — Rotating magic palette spark */
export function MotionCreativesIcon({ className, size = 28 }: IconProps) {
  return (
    <div className={cn("relative flex items-center justify-center text-lime", className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" className="animate-spin-slow opacity-40 origin-center" />
        <path d="M12 8a4 4 0 100 8 4 4 0 000-8z" className="fill-lime/20" />
        <circle cx="12" cy="12" r="2" className="fill-lime" />
      </svg>
    </div>
  );
}

/* Landing Pages — Floating browser window */
export function MotionLandingIcon({ className, size = 28 }: IconProps) {
  return (
    <div className={cn("relative flex items-center justify-center text-lime", className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="18" rx="2" className="stroke-lime" />
        <path d="M2 8h20" />
        <circle cx="5" cy="5.5" r="0.75" className="fill-lime" />
        <circle cx="8" cy="5.5" r="0.75" className="fill-mint" />
        <circle cx="11" cy="5.5" r="0.75" className="fill-fog" />
        <path d="M6 12h6M6 15h12M6 18h8" className="stroke-mint opacity-80" />
      </svg>
    </div>
  );
}

/* Sales Funnel — Pulsing stream funnel */
export function MotionFunnelIcon({ className, size = 28 }: IconProps) {
  return (
    <div className={cn("relative flex items-center justify-center text-lime", className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
        <line x1="12" y1="3" x2="12" y2="12" className="stroke-mint animate-pulse" />
      </svg>
    </div>
  );
}

/* CRM Setup — Database node connection */
export function MotionCrmIcon({ className, size = 28 }: IconProps) {
  return (
    <div className={cn("relative flex items-center justify-center text-lime", className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <circle cx="12" cy="12" r="1.5" className="fill-lime animate-ping" />
      </svg>
    </div>
  );
}

/* AI Automations — AI Bot eye & circuit glow */
export function MotionAiIcon({ className, size = 28 }: IconProps) {
  return (
    <div className={cn("relative flex items-center justify-center text-lime", className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v4" />
        <line x1="8" y1="15" x2="8" y2="17" className="stroke-mint animate-pulse" />
        <line x1="16" y1="15" x2="16" y2="17" className="stroke-mint animate-pulse" />
        <path d="M2 15h1M21 15h1" />
      </svg>
    </div>
  );
}

/* Email Sequences — Envelope open & float */
export function MotionEmailIcon({ className, size = 28 }: IconProps) {
  return (
    <div className={cn("relative flex items-center justify-center text-lime", className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" className="stroke-mint" />
      </svg>
    </div>
  );
}

/* Qualification — Shield checkmark glow */
export function MotionQualificationIcon({ className, size = 28 }: IconProps) {
  return (
    <div className={cn("relative flex items-center justify-center text-lime", className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" className="fill-lime/10" />
        <path d="M9 12l2 2 4-4" className="stroke-mint" strokeWidth="2" />
      </svg>
    </div>
  );
}

/* Reminders & Calendar */
export function MotionCalendarIcon({ className, size = 28 }: IconProps) {
  return (
    <div className={cn("relative flex items-center justify-center text-lime", className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <path d="M9 16l2 2 4-4" className="stroke-lime" strokeWidth="2" />
      </svg>
    </div>
  );
}

/* Optimization — Trending up rocket */
export function MotionOptimizationIcon({ className, size = 28 }: IconProps) {
  return (
    <div className={cn("relative flex items-center justify-center text-lime", className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M23 6l-9.5 9.5-5-5L1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    </div>
  );
}
