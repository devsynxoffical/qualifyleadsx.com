import { Check } from "lucide-react";

const STEPS = ["Your details", "Pick a time"] as const;

/** Two-step progress header shared by the booking form and the calendar step. */
export function BookingSteps({ current }: { current: 1 | 2 }) {
  return (
    <ol className="flex items-center gap-3" aria-label="Booking progress">
      {STEPS.map((label, i) => {
        const step = i + 1;
        const done = step < current;
        const active = step === current;
        return (
          <li key={label} className="flex flex-1 items-center gap-3 last:flex-none">
            <span
              aria-current={active ? "step" : undefined}
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-mono text-xs font-bold transition-colors ${
                done
                  ? "bg-lime text-ink"
                  : active
                    ? "border border-lime bg-lime/15 text-lime"
                    : "border border-line-strong text-dim"
              }`}
            >
              {done ? <Check className="h-4 w-4" /> : step}
            </span>
            <span
              className={`whitespace-nowrap text-xs font-semibold uppercase tracking-wider ${
                active ? "text-fog" : done ? "text-mist" : "text-dim"
              }`}
            >
              {label}
            </span>
            {step < STEPS.length && (
              <span
                aria-hidden="true"
                className={`h-px flex-1 ${done ? "bg-lime/60" : "bg-line-strong"}`}
              />
            )}
          </li>
        );
      })}
    </ol>
  );
}
