"use client";

// import { link } from "fs";
// import { Link } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface Business {
  id: number;
  title: string;
  categories: string[];
  description: string;
  accent: string;
  bgGradient: string;
  stats: { label: string; value: string }[];
  link?: string;
}

const businesses: Business[] = [
  {
    id: 1,
    title: "Payment Gateway",
    categories: ["Fintech", "Payments", "API"],
    description:
      "A seamless, secure payment infrastructure powering thousands of transactions across Africa. Accept cards, bank transfers, and mobile money with record processing speeds.",

    accent: "#2563EB",
    bgGradient: "from-blue-900 via-blue-800 to-slate-900",
    stats: [
      { label: "Uptime", value: "99.99%" },
      { label: "Currencies", value: "15+" },
    ],
    link: "https://readiespay.vercel.app/",
  },
  {
    id: 2,
    title: "Microfinance Bank",
    categories: ["Banking", "Lending", "Finance"],
    description:
      "Democratizing access to financial services for individuals and SMEs. From nano-loans to business credit lines — banking built for the underserved.",

    accent: "#059669",
    bgGradient: "from-emerald-900 via-teal-800 to-slate-900",
    stats: [
      { label: "Loan Disbursed", value: "₦2B+" },
      { label: "Customers", value: "50K+" },
    ],
    link: "/#",
  },
  {
    id: 3,
    title: "All-in-One Finance",
    categories: ["Banking", "Investments", "Trading"],
    description:
      "Readies brings together mobile banking, halal investments, and stock trading into a single, seamless financial ecosystem — built for the modern Nigerian.",

    accent: "#DC2626",
    bgGradient: "from-red-900 via-rose-800 to-slate-900",
    stats: [
      { label: "AUM", value: "₦5B+" },
      { label: "Returns", value: "18% avg" },
    ],
    link: "https://readies.ng/",
  },
];

const patterns = [
  `<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg" style="opacity:0.08">
    <defs><pattern id="pg1" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M0 20h15M25 20h15M20 0v15M20 25v15" stroke="white" stroke-width="1" fill="none"/>
      <circle cx="20" cy="20" r="3" fill="white"/>
      <circle cx="0" cy="0" r="1.5" fill="white"/>
      <circle cx="40" cy="0" r="1.5" fill="white"/>
      <circle cx="0" cy="40" r="1.5" fill="white"/>
      <circle cx="40" cy="40" r="1.5" fill="white"/>
    </pattern></defs>
    <rect width="400" height="400" fill="url(#pg1)"/>
  </svg>`,
  `<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg" style="opacity:0.07">
    <defs><pattern id="pg2" x="0" y="0" width="60" height="30" patternUnits="userSpaceOnUse">
      <path d="M0 15 Q15 0 30 15 Q45 30 60 15" stroke="white" stroke-width="1.5" fill="none"/>
    </pattern></defs>
    <rect width="400" height="400" fill="url(#pg2)"/>
  </svg>`,
  `<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg" style="opacity:0.07">
    <defs><pattern id="pg3" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
      <path d="M0 30L30 0" stroke="white" stroke-width="1" fill="none"/>
      <path d="M15 5L20 15L15 25L10 15Z" stroke="white" stroke-width="0.8" fill="none"/>
    </pattern></defs>
    <rect width="400" height="400" fill="url(#pg3)"/>
  </svg>`,
];

export default function OurBusinesses() {
  const [active, setActive] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#F4F5F7] overflow-hidden"
      style={{ fontFamily: "'Sora', 'DM Sans', sans-serif" }}
    >
      {/* Blueprint watermark */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
            `<svg width="80" height="80" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h80v80H0z" stroke="%231E3A8A" stroke-width="0.5" fill="none"/><path d="M40 0v80M0 40h80" stroke="%231E3A8A" stroke-width="0.3" fill="none"/><circle cx="40" cy="40" r="10" stroke="%231E3A8A" stroke-width="0.3" fill="none"/></svg>`,
          )}")`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Header */}
      <div className="relative px-8 md:px-16 pt-16 pb-8">
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F1C3F] mb-4 tracking-tight">
            Our Businesses
          </h2>
          <p className="text-[#4B5563] text-base md:text-lg max-w-xl leading-relaxed">
            As a technology-driven group, our portfolio spans the full financial
            ecosystem — built to power Africa&apos;s digital economy.
          </p>
          <div className="mt-6 flex items-center gap-1">
            <div className="h-[3px] w-16 bg-[#DC2626] rounded-full" />
            <div className="h-[3px] w-28 bg-[#E5E7EB] rounded-full" />
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="relative flex w-full" style={{ height: "460px" }}>
        {businesses.map((biz, i) => {
          const isActive = active === biz.id;
          const isInactive = active !== null && !isActive;

          const accentLight =
            biz.accent === "#DC2626"
              ? "#FCA5A5"
              : biz.accent === "#059669"
                ? "#6EE7B7"
                : "#93C5FD";

          return (
            <div
              key={biz.id}
              onMouseEnter={() => setActive(biz.id)}
              onMouseLeave={() => setActive(null)}
              className="relative overflow-hidden cursor-pointer select-none"
              style={{
                flex: isActive ? "2.8" : isInactive ? "0.6" : "1",
                opacity: visible ? 1 : 0,
                transition:
                  "flex 0.55s cubic-bezier(0.4,0,0.2,1), opacity 0.6s ease",
                transitionDelay: visible ? `${i * 120}ms` : "0ms",
              }}
            >
              {/* BG gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${biz.bgGradient}`}
              />

              {/* SVG pattern */}
              <div
                className="absolute inset-0 w-full h-full"
                dangerouslySetInnerHTML={{ __html: patterns[i] }}
              />

              {/* Glow */}
              <div
                className="absolute rounded-full blur-3xl pointer-events-none"
                style={{
                  width: "300px",
                  height: "300px",
                  background: biz.accent,
                  opacity: isActive ? 0.25 : 0.1,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  transition: "opacity 0.5s ease",
                }}
              />

              {/* Collapsed label */}
              <div
                className="absolute bottom-0 left-0 right-0 p-6 z-10"
                style={{
                  opacity: isActive ? 0 : 1,
                  transform: isActive ? "translateY(8px)" : "translateY(0)",
                  transition: "opacity 0.3s ease, transform 0.3s ease",
                  pointerEvents: isActive ? "none" : "auto",
                }}
              >
                <h3 className="text-white text-xl font-semibold leading-tight">
                  {biz.title}
                </h3>
                <p className="text-white/60 text-xs mt-1">
                  {biz.categories.join(" / ")}
                </p>
              </div>

              {/* Expanded content */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-8 z-10"
                style={{
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? "translateY(0)" : "translateY(16px)",
                  transition:
                    "opacity 0.4s ease 0.15s, transform 0.4s ease 0.15s",
                  pointerEvents: isActive ? "auto" : "none",
                }}
              >
                <div>
                  <p
                    className="text-xs font-semibold tracking-[0.18em] uppercase mb-2"
                    style={{ color: accentLight }}
                  >
                    {biz.categories.join(" · ")}
                  </p>

                  <div
                    className="mb-3 h-[2px] rounded-full"
                    style={{
                      background: biz.accent,
                      width: isActive ? "48px" : "0px",
                      transition: "width 0.5s ease 0.25s",
                    }}
                  />

                  <h3 className="text-white text-2xl font-bold mb-3 leading-snug">
                    {biz.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-5 max-w-xs">
                    {biz.description}
                  </p>

                  <div className="flex gap-6 mb-6">
                    {biz.stats.map((s) => (
                      <div key={s.label}>
                        <p className="text-white font-bold text-lg leading-tight">
                          {s.value}
                        </p>
                        <p className="text-white/50 text-xs">{s.label}</p>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={biz.link ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex group flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white border border-white/30 hover:border-white/70 transition-all duration-300"
                    style={{ background: "rgba(255,255,255,0.1)" }}
                  >
                    READ MORE
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>

              {/* Bottom accent bar */}
              <div
                className="absolute bottom-0 left-0 h-[3px] transition-all duration-500"
                style={{
                  width: isActive ? "100%" : "0%",
                  background: biz.accent,
                  transitionDelay: isActive ? "0.1s" : "0s",
                }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
