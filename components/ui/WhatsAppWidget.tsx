"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { site } from "@/lib/site";

export function WhatsAppWidget() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
    "Hi QualifiedLeadsX team! I'm interested in scaling my client acquisition."
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2.5 pointer-events-auto">
      {/* Interactive Tooltip Badge */}
      {showTooltip && (
        <div className="group relative flex items-center gap-2.5 rounded-2xl border border-[#25D366]/40 bg-ink/90 px-4 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-3">
          <div className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#25D366]" />
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-fog hover:text-[#25D366] transition-colors"
          >
            Chat with us on WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            aria-label="Close tooltip"
            className="ml-1 text-dim hover:text-fog transition-colors"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open WhatsApp chat with QualifiedLeadsX (+919582296172)"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_35px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-110 hover:bg-[#20ba5a] hover:shadow-[0_0_50px_rgba(37,211,102,0.8)] active:scale-95"
      >
        <span className="absolute -inset-1.5 rounded-full bg-[#25D366]/30 animate-pulse-ring" />
        <svg viewBox="0 0 32 32" className="relative h-7 w-7 fill-current transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
          <path d="M16.004 3C8.74 3 2.91 8.83 2.91 16.09c0 2.31.6 4.57 1.76 6.56L2.68 29.1l6.62-1.93a13.07 13.07 0 0 0 6.7 1.78c7.27 0 13.09-5.83 13.09-13.1C29.1 8.83 23.27 3 16.004 3Zm0 23.86c-2.06 0-4.08-.55-5.85-1.6l-.42-.25-4.03 1.17 1.13-3.93-.27-.43a10.86 10.86 0 0 1-1.67-5.83c0-6.02 4.9-10.92 10.92-10.92 5.91 0 10.92 4.9 10.92 10.93 0 6.02-5.01 10.86-11.73 10.86Zm6.36-8.17c-.35-.17-2.05-1.01-2.37-1.13-.32-.11-.55-.17-.78.17-.23.35-.9 1.13-1.1 1.36-.2.23-.4.26-.75.09-.35-.17-1.47-.54-2.8-1.73-1.04-.93-1.74-2.07-1.94-2.42-.2-.35-.02-.54.15-.71.15-.16.35-.4.52-.61.17-.2.23-.35.35-.58.11-.23.06-.44-.03-.61-.09-.17-.78-1.89-1.07-2.58-.28-.67-.57-.58-.78-.59h-.67c-.23 0-.6.09-.92.44-.32.35-1.2 1.17-1.2 2.85 0 1.68 1.23 3.31 1.4 3.54.17.23 2.41 3.69 5.85 5.17.82.35 1.46.56 1.96.72.82.26 1.57.22 2.16.13.66-.1 2.05-.84 2.34-1.65.29-.81.29-1.5.2-1.65-.09-.14-.32-.23-.67-.4Z" />
        </svg>
      </a>
    </div>
  );
}
