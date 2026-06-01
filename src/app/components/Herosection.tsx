"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

// --- Trusted By Partners ---
// Replace src with real logo image paths. Name is used as alt text.
const partners = [
  { name: "D`namaz Capital", src: "/logos/visa.svg" },
  { name: "Golden Securities", src: "/logos/mastercard.svg" },
  { name: "Readiespay Gateway", src: "/logos/interswitch.svg" },
  { name: "Manam Professional", src: "/logos/access-bank.svg" },
  { name: "Readies MFB", src: "/logos/flutterwave.svg" },
  // { name: "SEC Nigeria", src: "/logos/sec.svg" },
];

// Flip ticker — cycles through partners vertically
function PartnerTicker() {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % partners.length);
        setAnimating(false);
      }, 350);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative overflow-hidden"
      style={{ height: "28px", minWidth: "120px" }}
    >
      <div
        style={{
          transform: animating ? "translateY(-110%)" : "translateY(0%)",
          opacity: animating ? 0 : 1,
          transition:
            "transform 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease",
        }}
        className="flex items-center gap-2"
      >
        {/* Logo placeholder box */}
        <div
          className="w-5 h-5 rounded flex-shrink-0"
          style={{ background: "rgba(255,255,255,0.15)" }}
          aria-hidden
        />
        <span className="text-white/70 text-sm font-medium whitespace-nowrap">
          {partners[index].name}
        </span>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="relative w-full min-h-screen flex flex-col overflow-hidden"
      style={{ fontFamily: "'Sora', 'DM Sans', sans-serif" }}
    >
      {/* ── BACKDROP ──────────────────────────────────────────── */}
      {/* Replace the div below with your own <Image> or <video> */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(135deg, #080a12 0%, #0d1b2a 40%, #0a1628 70%, #080a12 100%)",
        }}
      >
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/cooperate.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Gradient orbs for depth */}
        <div
          className="absolute rounded-full blur-[120px]"
          style={{
            width: "600px",
            height: "600px",
            background: "rgba(220,38,38,0.12)",
            top: "-100px",
            right: "-100px",
          }}
        />
        <div
          className="absolute rounded-full blur-[100px]"
          style={{
            width: "400px",
            height: "400px",
            background: "rgba(29,78,216,0.15)",
            bottom: "100px",
            left: "-50px",
          }}
        />
      </div>

      {/* Dark overlay gradient */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,1.25) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,1.25) 100%)",
        }}
      />

      {/* ── MAIN CONTENT ─────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col flex-1 max-w-7xl mx-auto w-full px-6 md:px-10 pt-36 pb-16">
        {/* Headline */}
        <h1
          className="mx-auto text-center text-white font-bold leading-[1.05] tracking-tight mb-6"
          style={{
            fontSize: "clamp(2.6rem, 4.6vw, 3.8rem)",
            fontFamily: "'Sora', sans-serif",
            letterSpacing: "-0.03em",
            maxWidth: "820px",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
          }}
        >
          Building Africa&apos;s Most{" "}
          <span
            className="relative inline-block"
            style={{
              WebkitTextStroke: "1.5px rgba(3, 209, 106,0.8)",
              color: "transparent",
            }}
          >
            Trusted
          </span>{" "}
          Financial Ecosystem.
        </h1>

        {/* Subline */}
        <p
          className="mx-auto text-center text-white/60 text-xs md:text-sm leading-relaxed mb-10"
          style={{
            maxWidth: "560px",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease 0.35s, transform 0.7s ease 0.35s",
          }}
        >
          One group. Powerful platforms for seamless payments, accessible
          microfinance, and intelligent investing. Built for individuals and
          businesses across Africa.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap items-center gap-4 mx-auto justify-center"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s",
          }}
        >
          <Link
            href="/#portfolio"
            className="group flex items-center gap-2.5 px-7 py-3.5 rounded-full text-white font-semibold text-xs md:text-sm transition-all duration-300 hover:gap-4"
            style={{
              background: "#03d16a",
              boxShadow: "0 0 32px rgba(3, 209, 106, 0.4)",
            }}
          >
            Explore Our Portfolio
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0.5">
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path
                  d="M1.5 5.5h8M6 2l3.5 3.5L6 9"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
          <Link
            href="/partner_with_us"
            className="flex items-center gap-2 px-7 py-3.5 rounded-full text-white/80 font-medium text-xs md:text-sm border border-white/20 hover:border-white/50 hover:text-white transition-all duration-300"
          >
            Partner With Us
          </Link>
        </div>

        {/* ── TRUSTED BY ───────────────────────────────────────── */}
        <div
          className="mt-auto pt-16"
          style={{
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.7s ease 0.8s",
          }}
        >
          {/* Divider */}
          <div
            className="mb-5 h-px w-full"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)",
            }}
          />

          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <p className="text-white/40 text-xs tracking-[0.15em] uppercase flex-shrink-0">
              Our Subsidiaries
            </p>

            {/* Partner flip ticker strip */}
            <div className="flex items-center gap-6 flex-wrap">
              {/* Static logos (replace img src with your real logos) */}
              {partners.map((partner, i) => (
                <PartnerLogoFlip
                  key={partner.name}
                  partner={partner}
                  index={i}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Individual logo with staggered vertical flip-in animation + periodic re-flip
function PartnerLogoFlip({
  partner,
  index,
}: {
  partner: { name: string; src: string };
  index: number;
}) {
  const [flipped, setFlipped] = useState(false);
  const [entered, setEntered] = useState(false);

  // Entrance stagger
  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 900 + index * 120);
    return () => clearTimeout(t);
  }, [index]);

  // Periodic re-flip every ~4s with stagger offset
  useEffect(() => {
    const base = 4000 + index * 600;
    const run = () => {
      setFlipped(true);
      setTimeout(() => setFlipped(false), 420);
    };
    const t = setInterval(run, base);
    return () => clearInterval(t);
  }, [index]);

  return (
    <div
      className="relative overflow-hidden"
      style={{
        height: "32px",
        opacity: entered ? 1 : 0,
        transform: entered ? "translateY(0)" : "translateY(14px)",
        transition: `opacity 0.5s ease, transform 0.5s ease`,
      }}
    >
      {/* Current logo */}
      <div
        style={{
          transform: flipped
            ? "translateY(-120%) rotateX(45deg)"
            : "translateY(0) rotateX(0deg)",
          opacity: flipped ? 0 : 1,
          transition:
            "transform 0.38s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease",
        }}
        className="flex items-center gap-2"
      >
        {/* Logo placeholder — replace with <Image> */}
        <div
          className="rounded flex items-center justify-center"
          style={{
            width: "120px",
            height: "28px",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <span className="text-white/50 text-[10px] font-semibold tracking-wide">
            {partner.name}
          </span>
        </div>
      </div>

      {/* Flipped-in next state (same content, just the animation illusion) */}
      <div
        className="absolute inset-0 flex items-center"
        style={{
          transform: flipped
            ? "translateY(0) rotateX(0deg)"
            : "translateY(120%) rotateX(-45deg)",
          opacity: flipped ? 1 : 0,
          transition:
            "transform 0.38s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease",
        }}
      >
        <div
          className="rounded flex items-center justify-center"
          style={{
            width: "80px",
            height: "28px",
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.18)",
          }}
        >
          <span className="text-white/70 text-[10px] font-semibold tracking-wide">
            {partner.name}
          </span>
        </div>
      </div>
    </div>
  );
}
