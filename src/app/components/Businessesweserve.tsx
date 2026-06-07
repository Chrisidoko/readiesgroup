"use client";

import { useState, useRef, useEffect } from "react";

interface Sector {
  id: number;
  label: string;
  tag: string;
  description: string;
  image: string; // replace with your actual image path
  //   services: string[];
  accentColor: string;
}

const sectors: Sector[] = [
  {
    id: 1,
    label: "Retail & E-commerce",
    tag: "FINTECH",
    description:
      "Supercharge your checkout with instant payment acceptance, fraud detection, and multi-currency settlements.",
    image: "/images/sector-ecom.jpg",
    // services: ["Online checkout", "Recurring billing", "Refund automation"],
    accentColor: "#2563EB",
  },
  {
    id: 2,
    label: "Public Sector",
    tag: "GOVERNMENT",
    description:
      "Providing efficiency in government services and revenue assurance.",
    image: "/images/sector-gov.jpg",
    // services: ["Insurance billing", "Patient collections", "HMO settlements"],
    accentColor: "#059669",
  },
  {
    id: 3,
    label: "Education",
    tag: "BANKING",
    description:
      "Fee collection, student wallets, and institutional accounts for schools and EdTech platforms.",
    image: "/images/sector-edu.jpg",
    // services: [
    //   "School fees portal",
    //   "Student accounts",
    //   "Scholarship disbursement",
    // ],
    accentColor: "#DC2626",
  },
  {
    id: 4,
    label: "Logistics & Mobility",
    tag: "FINTECH",
    description:
      "Fleet payments, driver wallets, and real-time earnings disbursement for the movement economy.",
    image: "/images/sector-logistics.png",
    // services: ["Driver earnings", "Fuel cards", "Fleet management"],
    accentColor: "#D97706",
  },
  {
    id: 5,
    label: "SMEs & Startups",
    tag: "MICROFINANCE",
    description:
      "Working capital loans, business accounts, and growth tools built for Nigeria's emerging businesses.",
    image: "/images/sector-sme.png",
    // services: ["Business loans", "Invoicing", "Expense tracking"],
    accentColor: "#7C3AED",
  },
  {
    id: 6,
    label: "Real Estate",
    tag: "INVESTMENTS",
    description:
      "Property-backed investment instruments, rent collection, and developer escrow for the built environment.",
    image: "/images/sector-realestate.jpg",
    // services: ["Rent collection", "Escrow accounts", "Property bonds"],
    accentColor: "#0891B2",
  },
];

const TABS = ["All", "Banking", "Microfinance", "Investments", "Fintech"];

// Placeholder image gradient (removed once real images are added)
const placeholderGradients = [
  "linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)",
  "linear-gradient(135deg, #064e3b 0%, #0f172a 100%)",
  "linear-gradient(135deg, #7f1d1d 0%, #0f172a 100%)",
  "linear-gradient(135deg, #78350f 0%, #0f172a 100%)",
  "linear-gradient(135deg, #4c1d95 0%, #0f172a 100%)",
  "linear-gradient(135deg, #0c4a6e 0%, #0f172a 100%)",
];

function SectorCard({
  sector,
  index,
  visible,
}: {
  sector: Sector;
  index: number;
  visible: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex-shrink-0 overflow-hidden rounded-2xl cursor-pointer"
      style={{
        width: "260px",
        height: "340px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ease ${index * 80}ms, transform 0.6s ease ${index * 80}ms`,
      }}
    >
      {/* Background image — replace backgroundImage with url(sector.image) */}
      <div
        className="absolute inset-0"
        style={{
          background: placeholderGradients[index % placeholderGradients.length],
        }}
      >
        {/* When you have real images: */}
        <img
          src={sector.image}
          alt={sector.label}
          className="w-full h-full object-cover"
        />

        {/* Placeholder icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <span
            className="text-white text-[80px] font-bold"
            style={{ fontFamily: "serif" }}
          >
            {sector.label[0]}
          </span>
        </div>
      </div>

      {/* Always-on bottom gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.5) 45%, rgba(0,0,0,0.05) 100%)",
        }}
      />

      {/* Hover colour tint */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: sector.accentColor,
          opacity: hovered ? 0.18 : 0,
          mixBlendMode: "screen",
        }}
      />

      {/* Top tag pill */}
      <div className="absolute top-4 left-4 z-10">
        <span
          className="text-[10px] font-bold tracking-[0.2em] px-2.5 py-1 rounded-full"
          style={{
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.2)",
            color: "rgba(255,255,255,0.7)",
            backdropFilter: "blur(8px)",
            fontFamily: "'Sora', sans-serif",
          }}
        >
          {sector.tag}
        </span>
      </div>

      {/* Accent dot top-right */}
      <div
        className="absolute top-4 right-4 w-2 h-2 rounded-full z-10 transition-all duration-300"
        style={{
          background: sector.accentColor,
          boxShadow: hovered ? `0 0 12px ${sector.accentColor}` : "none",
          transform: hovered ? "scale(1.4)" : "scale(1)",
        }}
      />

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
        {/* Accent line */}
        <div
          className="mb-3 h-[2px] rounded-full transition-all duration-500"
          style={{
            background: sector.accentColor,
            width: hovered ? "36px" : "20px",
            opacity: hovered ? 1 : 0.5,
          }}
        />

        <h3
          className="text-white font-bold text-lg leading-tight mb-2"
          style={{ fontFamily: "'Sora', sans-serif", letterSpacing: "-0.02em" }}
        >
          {sector.label}
        </h3>

        {/* Description — slides up on hover */}
        <div
          style={{
            maxHeight: hovered ? "120px" : "0px",
            opacity: hovered ? 1 : 0,
            overflow: "hidden",
            transition: "max-height 0.45s ease, opacity 0.35s ease",
          }}
        >
          <p
            className="text-white/65 text-xs leading-relaxed mb-3"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            {sector.description}
          </p>
          {/* <ul className="flex flex-col gap-1">
            {sector.services.map((s) => (
              <li
                key={s}
                className="flex items-center gap-2 text-white/50 text-[11px]"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                <span
                  className="w-1 h-1 rounded-full flex-shrink-0"
                  style={{ background: sector.accentColor }}
                />
                {s}
              </li>
            ))}
          </ul> */}
        </div>

        {/* Sector label visible when not hovered */}
        <div
          style={{
            maxHeight: hovered ? "0px" : "30px",
            opacity: hovered ? 0 : 1,
            overflow: "hidden",
            transition: "max-height 0.3s ease, opacity 0.25s ease",
          }}
        >
          {/* <p
            className="text-white/40 text-xs"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            {sector.services.length} services →
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default function BusinessesWeServe() {
  const [activeTab, setActiveTab] = useState("All");
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filtered =
    activeTab === "All"
      ? sectors
      : sectors.filter((s) => s.tag === activeTab.toUpperCase());

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{
        fontFamily: "'Sora', 'DM Sans', sans-serif",
        background: "#020d07",
      }}
    >
      {/* ── HERO BACKGROUND ─────────────────────────────────────── */}
      <div className="relative w-full" style={{ height: "420px" }}>
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ background: "#020d07" }}
        >
          {/* Deep base layer */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 120% 80% at 50% -10%, #03D16A14 0%, transparent 65%), radial-gradient(ellipse 80% 60% at 80% 60%, #03D16A0a 0%, transparent 55%), #020d07",
            }}
          />

          {/* Large slow-drifting orb — top centre */}
          <div
            className="absolute rounded-full"
            style={{
              width: 700,
              height: 700,
              top: "-280px",
              left: "50%",
              transform: "translateX(-50%)",
              background:
                "radial-gradient(circle, #03D16A28 0%, #03D16A08 45%, transparent 70%)",
              filter: "blur(1px)",
              animation: "drift1 12s ease-in-out infinite alternate",
            }}
          />

          {/* Mid orb — right */}
          <div
            className="absolute rounded-full"
            style={{
              width: 380,
              height: 380,
              top: "30px",
              right: "-80px",
              background:
                "radial-gradient(circle, #03D16A18 0%, transparent 65%)",
              filter: "blur(2px)",
              animation: "drift2 9s ease-in-out infinite alternate",
            }}
          />

          {/* Small accent orb — left */}
          <div
            className="absolute rounded-full"
            style={{
              width: 220,
              height: 220,
              bottom: "60px",
              left: "80px",
              background:
                "radial-gradient(circle, #03D16A22 0%, transparent 70%)",
              filter: "blur(1px)",
              animation: "drift3 7s ease-in-out infinite alternate",
            }}
          />

          {/* Noise / grain texture overlay */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundSize: "200px 200px",
            }}
          />

          {/* Fine dot grid */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, #03D16A18 1px, transparent 1px)",
              backgroundSize: "32px 32px",
              opacity: 0.6,
            }}
          />

          {/* Horizontal scan lines for depth */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 3px, #03D16A 3px, #03D16A 4px)",
            }}
          />

          {/* Thin arc decorations */}
          <svg
            className="absolute"
            style={{
              top: -60,
              left: "50%",
              transform: "translateX(-50%)",
              opacity: 0.12,
            }}
            width="900"
            height="400"
            viewBox="0 0 900 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="450"
              cy="80"
              rx="420"
              ry="160"
              stroke="#03D16A"
              strokeWidth="0.8"
            />
            <ellipse
              cx="450"
              cy="80"
              rx="320"
              ry="110"
              stroke="#03D16A"
              strokeWidth="0.5"
            />
            <ellipse
              cx="450"
              cy="80"
              rx="200"
              ry="65"
              stroke="#03D16A"
              strokeWidth="0.4"
            />
          </svg>

          {/* Keyframe styles */}
          <style>{`
            @keyframes drift1 {
              from { transform: translateX(-50%) translateY(0px) scale(1); }
              to   { transform: translateX(-50%) translateY(18px) scale(1.04); }
            }
            @keyframes drift2 {
              from { transform: translateX(0) translateY(0px); }
              to   { transform: translateX(-12px) translateY(20px); }
            }
            @keyframes drift3 {
              from { transform: translateX(0) translateY(0px); }
              to   { transform: translateX(14px) translateY(-16px); }
            }
          `}</style>
        </div>

        {/* Bottom dark gradient fade — the YouTube Music effect */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: "260px",
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(2,13,7,0.6) 40%, rgba(2,13,7,0.95) 70%, #020d07 100%)",
          }}
        />

        {/* Section heading — sits on the image */}
        <div
          className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-8 z-10"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
          }}
        >
          <p className="text-white/40 text-[11px] font-semibold tracking-[0.25em] uppercase mb-2">
            Who we work with
          </p>
          <h2
            className="text-white font-bold leading-tight"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              letterSpacing: "-0.03em",
            }}
          >
            Businesses We Serve
          </h2>
        </div>
      </div>

      {/* ── CONTENT BELOW THE FOLD ─────────────────────────────── */}
      <div
        className="relative z-10 px-6 md:px-14 pb-20"
        style={{ marginTop: "-16px" }}
      >
        {/* Tab filter strip */}
        <div
          className="flex items-center gap-2 mb-8 overflow-x-auto pb-2"
          style={{
            scrollbarWidth: "none",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.6s ease 0.3s",
          }}
        >
          {TABS.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300"
                style={{
                  fontFamily: "'Sora', sans-serif",
                  background: isActive ? "white" : "rgba(255,255,255,0.07)",
                  color: isActive ? "#080a12" : "rgba(255,255,255,0.5)",
                  border: isActive ? "none" : "1px solid rgba(255,255,255,0.1)",
                  transform: isActive ? "scale(1.04)" : "scale(1)",
                }}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Cards strip — horizontally scrollable */}
        <div
          ref={stripRef}
          className="flex gap-4 overflow-x-auto pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {filtered.map((sector, i) => (
            <SectorCard
              key={sector.id}
              sector={sector}
              index={i}
              visible={visible}
            />
          ))}
          {/* Trailing spacer */}
          <div className="flex-shrink-0 w-6" />
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-10 flex items-center gap-4"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.6s ease 0.6s",
          }}
        >
          <div
            className="h-px flex-1"
            style={{ background: "rgba(255,255,255,0.07)" }}
          />
          <a
            // href="#contact"
            href="mailto:info@readiesgroup.com"
            className="flex items-center gap-2 text-white/50 text-sm font-medium hover:text-white transition-colors duration-200"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Need a tailored solution?
            {/* Don&apos;t see your industry? */}
            <span className="text-white/30">Talk to us →</span>
          </a>
          <div
            className="h-px flex-1"
            style={{ background: "rgba(255,255,255,0.07)" }}
          />
        </div>
      </div>
    </section>
  );
}
