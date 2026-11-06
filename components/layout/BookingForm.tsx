"use client";

import { useState, useEffect, type FormEvent } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Loader2, RefreshCw } from "lucide-react";
import { site } from "@/lib/site";
import { fbqTrack } from "@/lib/pixel";
import { googleCalendarBooking } from "@/lib/google-calendar";
import { GoogleCalendarEmbed } from "@/components/booking/GoogleCalendarEmbed";
import { BookingSteps } from "@/components/booking/BookingSteps";

const ENDPOINT = `https://formsubmit.co/ajax/${site.email}`;

const inputCls =
  "w-full rounded-xl border border-line-strong bg-elevated/70 px-4 py-3 text-sm text-fog placeholder:text-dim/70 outline-none transition-colors focus:border-lime/70 focus:bg-elevated";

const labelCls = "mb-1.5 block text-xs font-medium uppercase tracking-wider text-mist";

type Status = "idle" | "sending" | "success" | "error";

const NOTIFY_TIMEOUT_MS = 12000;

/** Email the booking details via FormSubmit, giving up after 12 seconds. */
async function sendNotification(payload: Record<string, unknown>) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), NOTIFY_TIMEOUT_MS);
  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
      keepalive: true,
      signal: controller.signal,
    });
    return (await res.json()) as { success?: string | boolean; message?: string };
  } finally {
    clearTimeout(timer);
  }
}

export function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    fbqTrack("Schedule");
  }, []);

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

    const firstName = String(fd.get("name") || "").trim().split(/\s+/)[0] || "";
    const emailValue = String(fd.get("email") || "").trim();

    // With a calendar connected, booking must never wait on the email
    // notification: show step 2 immediately and send the details in the
    // background. keepalive lets the request finish even if the page changes.
    if (googleCalendarBooking) {
      setFirstName(firstName);
      setEmail(emailValue);
      setStatus("success");
      fbqTrack("CompleteRegistration");
      void sendNotification(payload).catch(() => {
        /* the visitor still books on the calendar; nothing to show them */
      });
      return;
    }

    setStatus("sending");
    setErrorMessage("");
    try {
      const data = await sendNotification(payload);
      if (data.success === "true" || data.success === true) {
        setFirstName(firstName);
        setEmail(emailValue);
        setStatus("success");
        fbqTrack("CompleteRegistration");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(data.message || "");
      }
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error && err.name === "AbortError"
          ? "This is taking longer than expected."
          : ""
      );
    }
  }

  if (status === "success" && googleCalendarBooking) {
    return <GoogleCalendarEmbed booking={googleCalendarBooking} firstName={firstName} email={email} />;
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

      {googleCalendarBooking && (
        <div className="mb-7 border-b border-line pb-6">
          <BookingSteps current={1} />
        </div>
      )}

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
        <div className="mt-5 rounded-xl border border-rose/30 bg-rose/10 px-4 py-3 text-sm text-rose">
          {errorMessage ? (
            <p className="font-medium">{errorMessage}</p>
          ) : (
            <p>
              Something went wrong sending your request. Please try again, or email us directly at{" "}
              <a href={`mailto:${site.email}`} className="underline font-semibold">
                {site.email}
              </a>
              .
            </p>
          )}
        </div>
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
            {googleCalendarBooking ? "Continue to Pick a Time" : "Request My Free Strategy Call"}
            <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </>
        )}
      </button>

      <p className="mt-4 text-center text-xs text-dim">
        {googleCalendarBooking
          ? "Step 1 of 2 · Free 30-minute call · Pick your time on the next step."
          : "Free 30-minute call · No pressure, no obligation. Your details stay private."}
      </p>

      {googleCalendarBooking && (
        <div className="mt-5 flex flex-col items-center gap-1 border-t border-line pt-5 text-center sm:flex-row sm:justify-center sm:gap-2">
          <span className="text-sm text-mist">Already know you want to talk?</span>
          <Link
            href="/book-your-call/schedule#calendar"
            className="inline-flex items-center gap-1 text-sm font-semibold text-lime underline-offset-4 hover:underline"
          >
            Skip the form and pick a time
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </form>
  );
}
