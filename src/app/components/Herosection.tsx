"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";

const NAV_LINKS = [
  //   {
  //     label: "Solutions",
  //     href: "#",
  //     children: [
  //       "Payment Processing",
  //       "Banking Infrastructure",
  //       "Digital Wallets",
  //       "Merchant Tools",
  //     ],
  //   },
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
      <button className="flex items-center gap-1 text-sm font-medium text-white/90 hover:text-white transition-colors py-2">
        {label}
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-2xl shadow-black/20 border border-gray-100 py-2 min-w-[200px] z-50">
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

export default function HeroSection() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <section className="relative w-full min-h-screen overflow-hidden font-sans">
      {/* ── Video background ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        // 👉 Replace /hero-video.mp4 with your actual video path
        src="/cooperate.mp4"
      />

      {/* ── Green-tinted dark overlay ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-950/80 via-green-900/60 to-emerald-950/75" />

      {/* ── Subtle noise grain texture ── */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* ── Decorative green glow ── */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* ── Content wrapper ── */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* ── Navbar ── */}
        <nav className="flex items-center justify-between px-8 xl:px-16 py-5 bg-white/10 border-b border-white/10">
          {/* Logo placeholder — replace with your <Image> component */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            {/* 👉 Replace this placeholder with your actual logo */}

            <Image
              className="dark:invert"
              src="/readies-logo.png"
              alt="Readies logo"
              width={100}
              height={20}
              priority
            />

            {/* <div className="w-36 h-9 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center">
              <span className="text-white/70 text-xs font-semibold tracking-widest uppercase">
                Your Logo
              </span>
            </div> */}
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
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-1"
            >
              Resources <ChevronDown size={14} />
            </a>

            {/* Country flag toggle — Nigeria placeholder */}
            <button className="flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 rounded-full px-3 py-1.5 transition-colors">
              {/* Nigerian flag SVG */}
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
              <ChevronDown size="12" className="text-white/80" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden absolute top-[73px] left-0 right-0 bg-green-950/95 backdrop-blur-md border-b border-white/10 z-50 py-4 px-8">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="py-3 border-b border-white/10">
                <p className="text-sm font-semibold text-white mb-2">
                  {link.label}
                </p>
                {link.children.map((child) => (
                  <a
                    key={child}
                    href="#"
                    className="block text-sm text-white/60 hover:text-white py-1 pl-3 transition-colors"
                  >
                    {child}
                  </a>
                ))}
              </div>
            ))}
            <a href="#" className="block text-sm text-white/80 py-3">
              Resources
            </a>
          </div>
        )}

        {/* ── Hero content ── */}
        <div className="flex-1 flex flex-col justify-center px-8 xl:px-16 pb-20 pt-12 max-w-4xl">
          {/* Eyebrow tag */}
          {/* <div className="inline-flex items-center gap-2 mb-8 self-start">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-300 text-xs font-semibold uppercase tracking-[0.2em]">
              Africa's Payment Infrastructure
            </span>
          </div> */}

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6">
            Powering Tomorrow&apos;s
            <br />
            <span className="text-green-400">Digital</span> Infrastructure
          </h1>

          {/* Subheading */}
          <p className="text-white/70 text-lg sm:text-xl max-w-xl leading-relaxed mb-10 font-light">
            Sustaining technology ecosystems that help commerce evolve,
            businesses grow and individuals thrive.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-white text-green-900 font-bold text-sm px-7 py-4 rounded-xl hover:bg-green-50 transition-colors shadow-lg shadow-black/20"
            >
              Innovate With Us
            </a>
            {/* <a
              href="#"
              className="inline-flex items-center gap-2 bg-green-500/20 hover:bg-green-500/30 border border-green-400/40 text-white font-semibold text-sm px-7 py-4 rounded-xl transition-colors backdrop-blur-sm"
            >
              Get Started
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}
