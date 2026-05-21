"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";

const NAV_LINKS = [
  {
    label: "Products",
    href: "#",
    children: ["Readiespay", "Readies Banking", "Readies Finance"],
  },
  {
    label: "Company",
    href: "#",
    children: ["About Us", "Leadership", "Careers", "Press"],
  },
];

function NavDropdown({
  label,
  children,
}: {
  label: string;
  children: string[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors py-2">
        {label}
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl shadow-black/10 border border-gray-100 py-2 min-w-[200px] z-50">
          {children.map((item) => (
            <a
              key={item}
              href="#"
              className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function HeroSection2() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="bg-white font-sans">
      {/* ── White Navbar (outside the video card) ── */}
      <nav className="flex items-center justify-between px-6 xl:px-12 py-4 bg-white border-b border-gray-100">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          {/* 👉 Replace with your actual logo */}
          <Image
            src="/readies-logo.png"
            alt="Readies logo"
            width={100}
            height={20}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <NavDropdown key={link.label} label={link.label}>
              {link.children}
            </NavDropdown>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1"
          >
            Resources <ChevronDown size={14} />
          </a>

          {/* Nigeria flag */}
          <button className="flex items-center gap-1.5 border border-gray-200 hover:border-gray-300 rounded-full px-3 py-1.5 transition-colors">
            <svg
              width="20"
              height="14"
              viewBox="0 0 20 14"
              className="rounded-sm overflow-hidden"
            >
              <rect width="7" height="14" fill="#008751" />
              <rect x="7" width="6" height="14" fill="#ffffff" />
              <rect x="13" width="7" height="14" fill="#008751" />
            </svg>
            <ChevronDown size={12} className="text-gray-500" />
          </button>

          {/* CTA button */}
          <a
            href="#"
            className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2 rounded-xl transition-colors"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-700 p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 py-4 px-6 z-50">
          {NAV_LINKS.map((link) => (
            <div key={link.label} className="py-3 border-b border-gray-100">
              <p className="text-sm font-semibold text-gray-800 mb-2">
                {link.label}
              </p>
              {link.children.map((child) => (
                <a
                  key={child}
                  href="#"
                  className="block text-sm text-gray-500 hover:text-green-700 py-1 pl-3 transition-colors"
                >
                  {child}
                </a>
              ))}
            </div>
          ))}
          <a href="#" className="block text-sm text-gray-600 py-3">
            Resources
          </a>
          <a
            href="#"
            className="inline-block mt-2 bg-green-600 text-white text-sm font-semibold px-5 py-2 rounded-xl"
          >
            Get Started
          </a>
        </div>
      )}

      {/* ── Hero video card — padded so it floats with rounded corners ── */}
      <div className="px-4 sm:px-6 xl:px-10 pt-5 pb-10">
        <div
          className="relative w-full overflow-hidden rounded-2xl xl:rounded-3xl"
          style={{ minHeight: "78vh" }}
        >
          {/* Video background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            src="/cooperate.mp4" // 👉 replace with your video
          />

          {/* Green-tinted dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-950/80 via-green-900/60 to-emerald-950/75" />

          {/* Subtle noise grain */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
              backgroundSize: "128px 128px",
            }}
          />

          {/* Decorative glow */}
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none" />

          {/* Hero content */}
          <div className="relative z-10 flex flex-col justify-center min-h-[78vh] px-8 xl:px-16 pb-24 pt-14 max-w-4xl">
            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6">
              Powering Tomorrow&apos;s
              <br />
              <span className="text-green-400">Digital</span> Infrastructure
            </h1>

            <p className="text-white/70 text-lg sm:text-xl max-w-xl leading-relaxed mb-10 font-light">
              Sustaining technology ecosystems that help commerce evolve,
              businesses grow and individuals thrive.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-white text-green-900 font-bold text-sm px-7 py-4 rounded-xl hover:bg-green-50 transition-colors shadow-lg shadow-black/20"
              >
                Innovate With Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
