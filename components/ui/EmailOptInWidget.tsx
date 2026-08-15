"use client";

import { useState, type FormEvent } from "react";
import { X, ArrowUpRight, CheckCircle2, Loader2, Lock, ShieldCheck, Mail } from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const ENDPOINT = `https://formsubmit.co/ajax/${site.email}`;

export function EmailOptInWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    if (String(fd.get("_honey") || "").trim()) return;

    const payload = {
      _subject: "New Email Opt-In - QualifiedLeadsX",
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
    <>
      {/* Floating Bottom-Left Trigger Button */}
      <div className="fixed bottom-6 left-6 z-50 flex items-center pointer-events-auto">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-2.5 rounded-full border border-lime/40 bg-[#050e08]/95 px-5 py-3.5 shadow-[0_10px_35px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-lime hover:bg-[#07170c]"
        >
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-lime" />
          </span>
          <Mail className="h-4 w-4 text-lime" />
          <span className="text-xs font-bold text-white tracking-wide">
            Instant System Access
          </span>
        </button>
      </div>

      {/* Opt-In Modal Popup */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg overflow-hidden rounded-[32px] border border-lime/30 bg-[#050e08] p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.95)]">
            
            {/* Top Lime Shimmer Line */}
            <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime to-transparent" />

            {/* Close Button */}
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                setStatus("idle");
              }}
              className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-mist transition-colors hover:text-white hover:bg-white/10"
              aria-label="Close opt-in modal"
            >
              <X className="h-4 w-4" />
            </button>

            {status === "success" ? (
              <div className="py-8 text-center">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-lime/20 text-lime">
                  <CheckCircle2 className="h-10 w-10" />
                </span>
                <h3 className="mt-6 text-2xl font-bold text-white">Access Granted!</h3>
                <p className="mt-3 text-sm text-mist leading-relaxed">
                  Thank you for opting in. We have sent your instant access link to your email inbox.
                </p>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-lime px-6 py-2.5 text-xs font-bold text-ink"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <div>
                {/* Header */}
                <div className="text-left space-y-2">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-lime">
                    Instant System Access
                  </span>
                  <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    Get Instant Access To{" "}
                    <span className="text-lime">The Acquisition Blueprint.</span>
                  </h2>
                  <p className="text-xs text-mist leading-relaxed">
                    Enter your details below to unlock our live case studies, ad creative frameworks, and automated qualification workflows.
                  </p>
                </div>

                {/* Form — Single Email Field Only */}
                <form onSubmit={onSubmit} className="mt-6 space-y-4">
                  <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

                  {/* Email Address Only */}
                  <div>
                    <label htmlFor="modal-email" className="mb-2 block text-xs font-mono font-bold uppercase tracking-wider text-lime">
                      Email Address *
                    </label>
                    <input
                      id="modal-email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@company.com"
                      className="w-full rounded-2xl border border-lime/20 bg-black/60 px-5 py-4 text-sm text-white placeholder:text-mist/40 outline-none focus:border-lime focus:bg-black/80"
                    />
                  </div>

                  {status === "error" && (
                    <p className="rounded-lg border border-rose-500/30 bg-rose-500/10 p-2.5 text-xs text-rose-400">
                      Something went wrong. Please check your email and try again.
                    </p>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group flex w-full items-center justify-center gap-2 rounded-full bg-lime px-6 py-4 text-sm font-bold text-ink shadow-[0_0_30px_rgba(201,242,107,0.4)] transition-all hover:bg-lime-soft disabled:opacity-70"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin text-ink" />
                        Unlocking Access…
                      </>
                    ) : (
                      <>
                        Get Instant Access Now
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </button>

                  {/* Privacy Badges */}
                  <div className="flex items-center justify-center gap-4 pt-2 font-mono text-[10px] text-mist/60">
                    <span className="inline-flex items-center gap-1">
                      <Lock className="h-3 w-3 text-lime" />
                      100% Free Access
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <ShieldCheck className="h-3 w-3 text-lime" />
                      Zero Spam Guarantee
                    </span>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
