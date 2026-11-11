"use client";

import { useEffect, useState } from "react";

/**
 * True once the visitor has scrolled past `fraction` of the first screen.
 * Used to keep floating widgets off the hero call-to-action buttons on phones.
 */
export function useScrolledPast(fraction = 0.6) {
  const [past, setPast] = useState(false);
  useEffect(() => {
    const check = () => setPast(window.scrollY > window.innerHeight * fraction);
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [fraction]);
  return past;
}
