import Link from "next/link";
import type { ReactNode } from "react";
import type { DeepDiveContent } from "@/lib/deep-dive-content";

/**
 * Long-form, server-rendered content sections for industry and service pages
 * (Site Growth Playbook templates). Text supports inline links written as
 * [anchor](/path). FAQs are not rendered here: pages merge `content.faqs`
 * into their own FAQ list so there is one FAQPage per page.
 */
function rich(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  const rx = /\[([^\]]+)\]\((\/[^)\s]*)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = rx.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    out.push(
      <Link key={m.index} href={m[2]} className="text-lime underline decoration-lime/40 underline-offset-2 hover:decoration-lime">
        {m[1]}
      </Link>,
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export function DeepDive({ content }: { content: DeepDiveContent }) {
  return (
    <>
      <section className="py-16 sm:py-20 bg-base/60 border-t border-line">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-lime mb-3">{content.intro.eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-fog">{content.intro.title}</h2>
          {content.intro.paragraphs.map((p, i) => (
            <p key={i} className="mt-5 text-base sm:text-lg text-mist leading-relaxed">
              {rich(p)}
            </p>
          ))}
        </div>
      </section>

      {content.sections.map((s, si) => (
        <section key={si} className={`py-16 sm:py-20 border-t border-line ${si % 2 ? "bg-base/50" : "bg-ink"}`}>
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-lime mb-3">{s.eyebrow}</p>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-fog">{s.title}</h2>
              {s.lead && <p className="mt-4 text-base sm:text-lg text-mist leading-relaxed">{rich(s.lead)}</p>}
            </div>
            {s.table ? (
              <div className="mt-10 overflow-x-auto rounded-2xl border border-line">
                <table className="w-full min-w-[560px] text-left text-sm">
                  <thead className="bg-panel text-fog">
                    <tr>
                      {s.table.head.map((h) => (
                        <th key={h} scope="col" className="px-4 py-3 font-semibold">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {s.table.rows.map((r, ri) => (
                      <tr key={ri} className="border-t border-line text-mist">
                        {r.map((c, ci) => (
                          <td key={ci} className={`px-4 py-3 align-top ${ci === 0 ? "text-fog font-medium" : ""}`}>
                            {rich(c)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}
            {s.items.length > 0 && (
              <ol className={`mt-10 grid gap-5 ${s.items.length > 3 ? "md:grid-cols-2" : "md:grid-cols-3"} list-none p-0`}>
                {s.items.map((it, i) => (
                  <li key={i} className="rounded-2xl border border-line bg-panel p-6 sm:p-7">
                    <h3 className="text-lg font-bold text-fog">
                      {s.numbered && <span className="font-mono text-lime mr-2">{String(i + 1).padStart(2, "0")}</span>}
                      {it.title}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-mist leading-relaxed">{rich(it.text)}</p>
                  </li>
                ))}
              </ol>
            )}
            {s.note && <p className="mt-6 text-sm text-mist/80 italic">{rich(s.note)}</p>}
          </div>
        </section>
      ))}
    </>
  );
}
