import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you were looking for does not exist. Explore QualifiedLeadsX services, case studies and growth guides instead.",
  robots: { index: false, follow: true },
};

const links = [
  { label: "Meta Ads Agency", href: "/meta-ads-agency" },
  { label: "Appointment Setting", href: "/appointment-setting" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Growth Guides & Blog", href: "/blog" },
  { label: "About QualifiedLeadsX", href: "/about" },
];

export default function NotFound() {
  return (
    <>
      <Nav />
      <main id="main" className="min-h-screen bg-ink text-fog pt-40 pb-24">
        <section className="container-x text-center">
          <p className="eyebrow">404</p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-fog sm:text-6xl">
            This page doesn&apos;t exist{" "}
            <span className="text-gradient-lime">but your next client does.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[1rem] leading-relaxed text-mist sm:text-lg">
            The link may be outdated or mistyped. Head back home, or jump straight to one of the
            pages below.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/" variant="primary" size="lg">
              Back to Home
            </Button>
            <Button href="/book-your-call" variant="outline" size="lg">
              Book Free Strategy Call
            </Button>
          </div>
          <nav aria-label="Popular pages" className="mt-14">
            <ul className="flex flex-wrap items-center justify-center gap-3">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="inline-flex rounded-full border border-line bg-panel px-4 py-2 text-sm text-mist transition-colors hover:border-lime/40 hover:text-lime"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>
      </main>
      <Footer />
    </>
  );
}
