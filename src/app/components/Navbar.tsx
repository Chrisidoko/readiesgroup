"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Businesses we serve", href: "#businesses-we-serve" },
  { label: "Careers", href: "#careers" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(8, 10, 18, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        fontFamily: "'Sora', 'DM Sans', sans-serif",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <div className="flex gap-18 items-center">
          {/* Logo */}
          {/* <Link href="/" className="flex items-center gap-2.5 group">
            <span
              className="text-white font-bold text-xl tracking-tight"
              style={{ letterSpacing: "-0.02em" }}
            >
              Readies<span style={{ color: "#03D16A" }}>.</span>
            </span>
          </Link> */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src="/readies-gold.png"
              alt="ReadiesGroup Logo"
              width={110}
              height={32}
              className="object-contain mb-2"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative text-white/70 text-base font-medium hover:text-white transition-colors duration-200 group"
                style={{ letterSpacing: "0.01em" }}
              >
                {link.label}
                <span
                  className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 group-hover:w-full transition-all duration-300 rounded-full"
                  style={{ background: "#DC2626" }}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            // href="#get-started"
            href="/partner_with_us"
            className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:gap-3"
            style={{
              background: "#03d16a",
              boxShadow: "0 0 32px rgba(3, 209, 106, 0.4)",
            }}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block h-[1.5px] bg-white transition-all duration-300 rounded-full"
            style={{
              width: "22px",
              transform: menuOpen ? "rotate(45deg) translateY(5px)" : "none",
            }}
          />
          <span
            className="block h-[1.5px] bg-white transition-all duration-300 rounded-full"
            style={{
              width: "22px",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block h-[1.5px] bg-white transition-all duration-300 rounded-full"
            style={{
              width: "22px",
              transform: menuOpen ? "rotate(-45deg) translateY(-5px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-400"
        style={{
          maxHeight: menuOpen ? "400px" : "0px",
          background: "rgba(8,10,18,0.97)",
          borderTop: menuOpen ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-white/70 text-base font-medium hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <Link href="#login" className="text-white/60 text-sm">
              Sign In
            </Link>
            <Link
              href="#get-started"
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-white"
              style={{ background: "#03d16a" }}
            >
              Get Started →
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
