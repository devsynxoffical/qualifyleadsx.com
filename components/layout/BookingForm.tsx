"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, Loader2, RefreshCw } from "lucide-react";
import { site } from "@/lib/site";

const ENDPOINT = `https://formsubmit.co/ajax/${site.email}`;

const inputCls =
  "w-full rounded-xl border border-line-strong bg-elevated/70 px-4 py-3 text-sm text-fog placeholder:text-dim/70 outline-none transition-colors focus:border-lime/70 focus:bg-elevated";

const labelCls = "mb-1.5 block text-xs font-medium uppercase tracking-wider text-mist";

type Status = "idle" | "sending" | "success" | "error";

export function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    if (String(fd.get("_honey") || "").trim()) return;

    const payload = {
      _subject: "New booking request - QualifiedLeadsX",
      _template: "table",
      _captcha: "false",
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      company: fd.get("company"),
      niche: fd.get("niche"),
      message: fd.get("message"),
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

  if (status === "success") {
    return (
      <div className="panel-glass rounded-3xl p-10 text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-lime/15">
          <CheckCircle2 className="h-9 w-9 text-lime" />
        </span>
        <h2 className="mt-6 text-2xl font-semibold tracking-tight text-fog">
          Request received!
        </h2>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-mist">
          Thanks for reaching out. Our team will email you within one business day to lock in
          your free strategy call - keep an eye on your inbox.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-7 inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-2.5 text-sm font-semibold text-fog transition-colors hover:border-lime/60 hover:text-lime"
        >
          <RefreshCw className="h-4 w-4" />
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="panel rounded-3xl border-line-strong p-6 sm:p-8"
      data-cursor="text"
    >
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelCls}>
            Full name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Smith"
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@company.com"
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelCls}>
            Phone number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="+1 (555) 000-0000"
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="company" className={labelCls}>
            Company / Website
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="yourcompany.com"
            className={inputCls}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="niche" className={labelCls}>
            What best describes your business?
          </label>
          <select id="niche" name="niche" className={inputCls} defaultValue="">
            <option value="" disabled>
              Select one…
            </option>
            <option>Coaching / Consulting</option>
            <option>Health &amp; Fitness</option>
            <option>Real Estate</option>
            <option>SaaS / Tech</option>
            <option>Finance &amp; Insurance</option>
            <option>Local Services</option>
            <option>E-commerce</option>
            <option>Other</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelCls}>
            Anything you&apos;d like us to know?
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us a bit about your offer, monthly lead goals, or what you're currently doing…"
            className={`${inputCls} resize-none`}
          />
        </div>
      </div>

      {status === "error" && (
        <p className="mt-5 rounded-xl border border-rose/30 bg-rose/10 px-4 py-3 text-sm text-rose">
          Something went wrong sending your request. Please try again, or email us directly at{" "}
          <a href={`mailto:${site.email}`} className="underline">
            {site.email}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-lime px-8 py-4 text-[1rem] font-bold text-ink transition-all duration-300 hover:shadow-[0_0_40px_-8px_var(--color-lime)] disabled:cursor-not-allowed disabled:opacity-70"
        data-cursor="book"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Request My Free Strategy Call
            <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </>
        )}
      </button>

      <p className="mt-4 text-center text-xs text-dim">
        Free 30-minute call · No pressure, no obligation. Your details stay private.
      </p>
    </form>
  );
}
