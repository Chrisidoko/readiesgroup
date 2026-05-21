"use client";

import Link from "next/link";

const categories = ["Banking", "Payments", "Finance", "Investment"];

export default function HeroSection3() {
  return (
    <section className="bg-white px-1 md:px-2">
      <div className="relative w-full h-screen min-h-[600px] overflow-hidden">
        {/* ── Video Background ───────────────────────────────────────────── */}
        {/*  Replace /videos/hero.mp4 with your actual video path           */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/cooperate.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Dark overlay — mimics the darkened photo look in the reference */}
        <div className="absolute inset-0 bg-black/50" />

        {/* ── Content ────────────────────────────────────────────────────── */}
        <div className="relative z-10 h-full flex flex-col justify-between px-8 md:px-12 pt-32 pb-10 max-w-[1400px] mx-auto w-full">
          {/* Top-left: headline + CTA */}
          <div className="flex-1 flex flex-col justify-center max-w-2xl">
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight mb-8">
              Powering Tomorrow&apos;s Digital Infrastructure
            </h1>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-black text-sm font-medium rounded-full px-6 py-3 w-fit hover:bg-white/90 transition-colors duration-200 [&>span]:hover:translate-x-0.5 [&>span]:hover:-translate-y-0.5"
              //   className="inline-flex items-center gap-2 bg-white text-black text-sm font-medium rounded-full px-6 py-3 w-fit
              //            hovr:bg-white/90 transition-colors duration-200 group"
            >
              Get In Touch
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </Link>
          </div>

          {/* Bottom-right: description + category pills */}
          <div className="flex flex-col items-end gap-5 md:max-w-[45%] self-end text-right">
            <p className="text-white/80 text-sm leading-relaxed">
              Sustaining technology ecosystems that help commerce evolve,
              businesses grow and individuals thrive. Embracing The Thrill Of
              Innovation And Discovery Beauty.
            </p>

            <div className="flex flex-wrap justify-end gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className="border border-white/50 text-white text-xs font-light rounded-full px-4 py-1.5 hover:bg-white hover:text-black transition-colors duration-200 backdrop-blur-sm"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Slide indicator dots (decorative — wire up if you add slides later) */}
          <div className="absolute bottom-10 left-8 md:left-12 flex items-center gap-3">
            <button
              aria-label="Previous"
              className="text-white/60 hover:text-white transition-colors"
            >
              ←
            </button>
            <div className="flex gap-2">
              <span className="w-6 h-0.5 bg-white/40 rounded-full" />
              <span className="w-6 h-0.5 bg-white rounded-full" />
              <span className="w-6 h-0.5 bg-white/40 rounded-full" />
            </div>
            <button
              aria-label="Next"
              className="text-white/60 hover:text-white transition-colors"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
