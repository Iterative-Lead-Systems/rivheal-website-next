"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Solutions", href: "/#modules" },
  { label: "Features", href: "/#features" },
  { label: "Impact", href: "/#impact" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          {/* <Link href="/" className="flex items-center gap-2"> */}
          {/* TODO: add /public/rivheal.png — use text fallback until then */}
          <Image
            src="/rivheal.png"
            alt="RivHeal"
            width={499}
            height={499}
            // className="h-16 w-auto object-contain"
            className="h-[100px] w-auto object-contain-m-2"
            style={{ maxHeight: "none" }} // override any max-height
            onError={() => {}}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/request-demo"
            className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-soft"
          >
            Request Demo
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border/50 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block py-2.5 px-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-border/50">
            <Link
              href="/request-demo"
              className="block py-3 text-center rounded-xl text-sm font-semibold bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity"
              onClick={() => setMobileOpen(false)}
            >
              Request Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
