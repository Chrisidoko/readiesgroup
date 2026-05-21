"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

interface Destination {
  id: string;
  image: string;
  title: string;

  year: string;
  description: string;
  href: string;
}

const destinations: Destination[] = [
  {
    id: "albania",
    image: "/15640.jpg",
    title: "Readiespay",
    year: "2026",
    description:
      "A leading fintech powering secure payments, financial operations, and business automation for individuals, corporates, SMEs, and governments.",
    href: "https://readiespay.vercel.app/",
  },
  {
    id: "queenstown",
    image: "/15640.jpg",
    title: "Readies Microfinance",
    year: "2026",
    description:
      "A leading microfinance institution providing accessible financial services to underserved communities, enabling economic empowerment and sustainable development.",
    href: "https://readies.ng/",
  },
  {
    id: "hallstatt",
    image: "/15640.jpg",
    title: "Readies Investments",
    year: "2025",
    description:
      "A leading investment firm managing diverse portfolios with a focus on sustainable and responsible investing.",
    href: "/#",
  },
  // Add more destinations as needed — the carousel handles overflow
];

function DestinationCard({ dest }: { dest: Destination }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="group flex-shrink-0 w-[420px] cursor-pointer"
      style={{ perspective: "1200px" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      {/* Flip container */}
      <div
        className="relative w-full"
        style={{
          height: "420px",
          transformStyle: "preserve-3d",
          transition: "transform 0.65s cubic-bezier(0.4, 0.2, 0.2, 1)",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* ── FRONT ─────────────────────────────────────────────────── */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          {/* Dark overlay — mimics the darkened photo look in the reference */}
          <div className="absolute inset-0 bg-black/50" />
          <Image
            src={dest.image}
            alt={dest.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="420px"
          />
        </div>

        {/* ── BACK ──────────────────────────────────────────────────── */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden flex flex-col justify-between p-7 bg-green-50 border-2 border-green-400"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* Watermark year */}
          <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-[96px] font-black text-green-200/60 leading-none select-none pointer-events-none">
            {dest.year}
          </span>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-end h-full gap-3">
            <h3 className="text-navy-900 text-xl font-bold text-[#0f2044] leading-snug">
              {dest.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed line-clamp-4">
              {dest.description}
            </p>

            <Link
              href={dest.href}
              className="mt-2 inline-flex items-center gap-2 bg-green-600 text-white text-sm font-medium rounded-full px-5 py-2.5 w-fit hover:bg-green-700 transition-colors duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              More Information
              <span>↗</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Card footer — visible on both states */}
      <div className="mt-4 px-1">
        <h3 className="text-gray-900 text-lg font-semibold leading-snug">
          {dest.title}
        </h3>
        {/* <p className="text-gray-400 text-sm mt-1">{dest.subtitle}</p> */}
      </div>
    </div>
  );
}

export default function ProductCards() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "right" ? 460 : -460,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-white px-8 md:px-12 py-20">
      <div className="max-w-[1400px] mx-auto">
        {/* Header row */}
        <div className="flex items-start justify-between gap-8 mb-12">
          <div className="max-w-xl">
            <h2 className="text-gray-900 text-4xl md:text-5xl font-semibold leading-tight mb-4">
              Our Portfolio Companies
              {/* <br /> */}
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Readiesgroup portfolio consists of four tech-driven companies,
              each pioneering solutions across digital infrastructure, financial
              technology.
            </p>
          </div>

          {/* Prev / Next buttons */}
          <div className="flex items-center gap-3 pt-2 flex-shrink-0">
            <button
              onClick={() => scroll("left")}
              className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors duration-200"
              aria-label="Previous"
            >
              ←
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors duration-200"
              aria-label="Next"
            >
              →
            </button>
          </div>
        </div>

        {/* Scrollable cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {destinations.map((dest) => (
            <DestinationCard key={dest.id} dest={dest} />
          ))}
        </div>
      </div>
    </section>
  );
}
