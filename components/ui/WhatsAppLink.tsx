"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { usePathname } from "next/navigation";
import { whatsappMessageFor, whatsappUrl } from "@/lib/whatsapp";
import { fbqTrack } from "@/lib/pixel";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  children: ReactNode;
  /** Visitor's first name, when known (e.g. after the booking form). */
  name?: string;
  /** Where on the page the button sits, sent to the Meta pixel. */
  placement?: string;
};

/**
 * WhatsApp link whose opening message matches the current page.
 * The href is built from the route for no-JS and crawlers; on click it is
 * rebuilt with the live page title so guides and case studies are named.
 */
export function WhatsAppLink({ children, name, placement = "unknown", onClick, ...rest }: Props) {
  const pathname = usePathname() || "/";
  const href = whatsappUrl(whatsappMessageFor(pathname, undefined, name));

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    const heading = document.querySelector("main h1, h1")?.textContent ?? undefined;
    e.currentTarget.href = whatsappUrl(
      whatsappMessageFor(window.location.pathname, document.title, name, heading)
    );
    fbqTrack("Contact", { method: "whatsapp", placement, page: window.location.pathname });
    onClick?.(e);
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
