/**
 * "Short answer" block (AEO): a 40-60 word direct answer to the page's main
 * question, placed right under the H1 where the layout allows. The
 * `short-answer` class is the SpeakableSpecification selector.
 */
export function ShortAnswer({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`short-answer mx-auto mt-6 max-w-3xl rounded-2xl border border-lime/30 bg-lime/[0.04] p-5 text-left ${className}`}>
      <p className="font-mono text-xs font-bold uppercase tracking-wider text-lime">Short answer</p>
      <p className="mt-1.5 text-[0.95rem] leading-relaxed text-fog sm:text-base">{children}</p>
    </div>
  );
}
