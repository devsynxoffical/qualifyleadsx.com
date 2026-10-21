import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

type LegalPageProps = {
  title: string;
  updated: string;
  children: React.ReactNode;
};

export function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <>
      <Nav />
      <main id="main" className="pt-40">
        <div className="container-x max-w-3xl">
          <header className="border-b border-line pb-10">
            <h1 className="text-4xl font-semibold tracking-tight text-fog sm:text-5xl">{title}</h1>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-widest text-dim">
              Last updated: {updated}
            </p>
          </header>
          <div className="prose-custom space-y-6 py-12 text-sm leading-relaxed text-mist">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
