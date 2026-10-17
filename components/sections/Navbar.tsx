"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);
const XIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 md:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Data365" width={140} height={40} className="h-9 w-auto object-contain" />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 md:flex">
          {["Integratsiyalar", "Modullar", "Narxlar", "Blog"].map((l) => (
            <li key={l}>
              <Link
                href={`#${l.toLowerCase()}`}
                className="text-[14.5px] font-medium text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              >
                {l}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="#demo"
            className="rounded-full bg-[var(--lime)] px-5 py-2.5 text-[14px] font-semibold text-black transition-opacity hover:opacity-85"
          >
            Demo so'rash
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="grid place-items-center md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menyuni ochish"
        >
          {open ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-[var(--border)] bg-[var(--background)] px-5 pb-6 pt-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {["Integratsiyalar", "Modullar", "Narxlar", "Blog"].map((l) => (
              <li key={l}>
                <Link
                  href={`#${l.toLowerCase()}`}
                  className="text-[15px] font-medium text-[var(--muted)]"
                  onClick={() => setOpen(false)}
                >
                  {l}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="#demo"
            className="mt-5 block rounded-full bg-[var(--lime)] px-5 py-3 text-center text-[15px] font-semibold text-black"
            onClick={() => setOpen(false)}
          >
            Demo so'rash
          </Link>
        </div>
      )}
    </nav>
  );
}
