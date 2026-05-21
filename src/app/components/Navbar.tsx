"use client";

import Link from "next/link";
import { useState } from "react";

const leftLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about#" },
  { label: "Our Impact", href: "/impact#" },
  { label: "Leadership", href: "/leadership#" },
];

const rightLinks = [
  { label: "Products", href: "/product#" },
  { label: "Company", href: "/company" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-white fixed top-0 left-0 right-0 z-50 px-6 py-5">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Left nav */}
        <ul className="hidden md:flex items-center gap-6">
          {leftLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-gray-800 text-sm font-light tracking-wide hover:opacity-70 transition-opacity duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Logo — center */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link href="/">
            {/* Swap this <span> for your <Image> logo */}
            <span className="text-gray-800 font-semibold text-lg tracking-[0.25em] uppercase">
              READIES GROUP
            </span>
          </Link>
        </div>

        {/* Right nav */}
        <ul className="hidden md:flex items-center gap-6 ml-auto">
          {rightLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-gray-800 text-sm font-light tracking-wide hover:opacity-70 transition-opacity duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden ml-auto text-gray-800 focus:outline-none"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-gray-800 mb-1.5" />
          <span className="block w-6 h-0.5 bg-gray-800 mb-1.5" />
          <span className="block w-6 h-0.5 bg-white" />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden mt-4 bg-black/80 backdrop-blur-md rounded-xl px-6 py-6">
          <ul className="flex flex-col gap-4">
            {[...leftLinks, ...rightLinks].map((link) => (
              <li key={link.label + "-mobile"}>
                <Link
                  href={link.href}
                  className="text-gray-800 text-sm font-light tracking-wide hover:opacity-70 transition-opacity"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
