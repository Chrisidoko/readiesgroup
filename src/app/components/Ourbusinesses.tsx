"use client";

import { useState, useRef, useEffect, useCallback } from "react";
// import Link from "next/link";
import Image from "next/image";

interface Business {
  id: number;
  title: string;
  categories: string[];
  description: string;
  accent: string;
  bgGradient: string;
  // stats: { label: string; value: string }[];
  link?: string;
  image?: string; // e.g. "/images/payment-bg.jpg"
  video?: string; // e.g. "/videos/payment-loop.mp4"
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
    // stats: [
    //   { label: "Uptime", value: "99.99%" },
    //   { label: "Currencies", value: "15+" },
    // ],
    link: "https://readiespay.vercel.app/",
    image: "/images/pay.jpg", // ← replace with your image
    video: "/videos/payment_gateway.mp4",
  },
  {
    id: 2,
    title: "Microfinance Bank",
    categories: ["Banking", "Lending", "Finance"],
    description:
      "Democratizing access to financial services for individuals and SMEs. From nano-loans to business credit lines — banking built for the underserved.",
    accent: "#059669",
    bgGradient: "from-emerald-900 via-teal-800 to-slate-900",
    // stats: [
    //   { label: "Loan Disbursed", value: "₦2B+" },
    //   { label: "Customers", value: "50K+" },
    // ],
    link: "/#",
    image: "/images/gateway.jpg",
    video: "/videos/banking.mp4",
  },
  {
    id: 3,
    title: "All-in-One Platform",
    categories: ["Asset Management", "Investments", "Trading"],
    description:
      "Readies brings together mobile banking, halal investments, and stock trading into a single, seamless financial ecosystem — built for the modern Nigerian.",
    accent: "#DC2626",
    bgGradient: "from-red-900 via-rose-800 to-slate-900",
    // stats: [
    //   { label: "AUM", value: "₦5B+" },
    //   { label: "Returns", value: "18% avg" },
    // ],
    link: "https://readies.ng/",
    image: "/images/all.jpg",
    video: "/videos/invest.mp4",
  },
];

const patterns = [
  `<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg" style="opacity:0.06">
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
  `<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg" style="opacity:0.06">
    <defs><pattern id="pg2" x="0" y="0" width="60" height="30" patternUnits="userSpaceOnUse">
      <path d="M0 15 Q15 0 30 15 Q45 30 60 15" stroke="white" stroke-width="1.5" fill="none"/>
    </pattern></defs>
    <rect width="400" height="400" fill="url(#pg2)"/>
  </svg>`,
  `<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg" style="opacity:0.06">
    <defs><pattern id="pg3" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
      <path d="M0 30L30 0" stroke="white" stroke-width="1" fill="none"/>
      <path d="M15 5L20 15L15 25L10 15Z" stroke="white" stroke-width="0.8" fill="none"/>
    </pattern></defs>
    <rect width="400" height="400" fill="url(#pg3)"/>
  </svg>`,
];

// ─── Redirect Overlay ──────────────────────────────────────────────
function RedirectOverlay({
  visible,
  accent,
  label,
  onCancel,
}: {
  visible: boolean;
  accent: string;
  label: string;
  onCancel: () => void;
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!visible) {
      setProgress(0);
      return;
    }
    const start = performance.now();
    // Made an edit here --- check for later
    const duration = 6000; // ms — matches the redirect delay
    let frame: number;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setProgress(p);
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [visible]);

  const r = 36; // circle radius
  const circ = 2 * Math.PI * r;
  const dash = circ * progress;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[100]"
        style={{
          background: "rgba(8, 10, 18, 0.75)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          opacity: visible ? 1 : 0,
          pointerEvents: visible ? "auto" : "none",
          transition: "opacity 0.35s ease",
        }}
        onClick={onCancel}
      />

      {/* Card */}
      <div className="fixed inset-0 z-[101] flex items-center justify-center pointer-events-none">
        <div
          className="flex flex-col items-center gap-6 px-10 py-10 rounded-3xl"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow: `0 0 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)`,
            opacity: visible ? 1 : 0,
            transform: visible
              ? "scale(1) translateY(0)"
              : "scale(0.92) translateY(16px)",
            transition:
              "opacity 0.4s ease, transform 0.4s cubic-bezier(0.34,1.56,0.64,1)",
            pointerEvents: visible ? "auto" : "none",
            minWidth: "260px",
          }}
        >
          {/* Spinner with logo in centre */}
          <div
            className="relative flex items-center justify-center"
            style={{ width: 100, height: 100 }}
          >
            {/* Track circle */}
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              className="absolute inset-0"
            >
              <circle
                cx="50"
                cy="50"
                r={r}
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="4"
              />
            </svg>

            {/* Progress arc */}
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              className="absolute inset-0"
              style={{ transform: "rotate(-90deg)" }}
            >
              <circle
                cx="50"
                cy="50"
                r={r}
                fill="none"
                stroke={accent}
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray={`${dash} ${circ - dash}`}
                style={{
                  transition: "stroke-dasharray 0.05s linear",
                  filter: `drop-shadow(0 0 6px ${accent})`,
                }}
              />
            </svg>

            {/* Logo placeholder — when image is not present */}
            <div
              className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              {/* Image tag with logo */}
              <Image
                src="/logo_initial.png"
                alt="Readies"
                width={40}
                height={40}
                className="object-contain"
                onError={(e) => {
                  // Fallback if image not found yet
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              {/* Fallback wordmark shown until you add the real logo */}
              <span
                className="text-white font-bold text-sm absolute"
                style={{
                  fontFamily: "'Sora', sans-serif",
                  letterSpacing: "-0.03em",
                }}
              >
                R.
              </span>
            </div>
          </div>

          {/* Text */}
          <div className="text-center">
            <p
              className="text-white font-semibold text-base"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Redirecting you to
            </p>
            <p
              className="text-white/50 text-sm mt-1"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              {label}
            </p>
          </div>

          {/* Cancel */}
          <button
            onClick={onCancel}
            className="text-white/30 text-xs hover:text-white/60 transition-colors duration-200"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}

// ─── Individual card ────────────────────────────────────────────────
function BusinessCard({
  biz,
  index,
  isActive,
  isInactive,
  visible,
  onEnter,
  onLeave,
  onLinkClick,
}: {
  biz: Business;
  index: number;
  isActive: boolean;
  isInactive: boolean;
  visible: boolean;
  onEnter: () => void;
  onLeave: () => void;
  onLinkClick: (href: string, label: string, accent: string) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    if (isActive) {
      vid.play().catch(() => {});
    } else {
      vid.pause();
      setTimeout(() => {
        if (!videoRef.current) return;
        videoRef.current.currentTime = 0;
      }, 600);
    }
  }, [isActive]);

  const accentLight =
    biz.accent === "#DC2626"
      ? "#FCA5A5"
      : biz.accent === "#059669"
        ? "#6EE7B7"
        : "#93C5FD";

  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="relative overflow-hidden cursor-pointer select-none"
      style={{
        flex: isActive ? "2.8" : isInactive ? "0.6" : "1",
        opacity: visible ? 1 : 0,
        transition: "flex 0.55s cubic-bezier(0.4,0,0.2,1), opacity 0.6s ease",
        transitionDelay: visible ? `${index * 120}ms` : "0ms",
      }}
    >
      {/* Layer 1 — gradient base */}
      <div className={`absolute inset-0 bg-gradient-to-br ${biz.bgGradient}`} />

      {/* Layer 2 — static image */}
      {biz.image && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${biz.image})`,
            opacity: isActive ? 0 : 0.45,
            transition: "opacity 0.7s ease",
          }}
        />
      )}

      {/* Layer 3 — video */}
      {biz.video && (
        <video
          ref={videoRef}
          src={biz.video}
          muted
          loop
          playsInline
          preload="metadata"
          onCanPlay={() => setVideoReady(true)}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: isActive && videoReady ? 0.45 : 0,
            transition: "opacity 0.7s ease",
          }}
        />
      )}

      {/* Layer 4 — colour tint (preserves brand identity over media) */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${biz.bgGradient}`}
        style={{ opacity: 0.6, mixBlendMode: "multiply" }}
      />

      {/* Layer 5 — bottom vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)",
        }}
      />

      {/* Layer 6 — SVG pattern */}
      <div
        className="absolute inset-0 w-full h-full"
        dangerouslySetInnerHTML={{ __html: patterns[index] }}
      />

      {/* Layer 7 — glow */}
      <div
        className="absolute rounded-full blur-3xl pointer-events-none"
        style={{
          width: "300px",
          height: "300px",
          background: biz.accent,
          opacity: isActive ? 0.2 : 0.08,
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
        <h3 className="text-white text-xl font-semibold leading-tight drop-shadow-md">
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
          transition: "opacity 0.4s ease 0.15s, transform 0.4s ease 0.15s",
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

          <h3 className="text-white text-2xl font-bold mb-3 leading-snug drop-shadow-md">
            {biz.title}
          </h3>
          <p className="text-white/75 text-sm leading-relaxed mb-5 max-w-xs drop-shadow">
            {biz.description}
          </p>

          {/* <div className="flex gap-6 mb-6">
            {biz.stats.map((s) => (
              <div key={s.label}>
                <p className="text-white font-bold text-lg leading-tight">
                  {s.value}
                </p>
                <p className="text-white/50 text-xs">{s.label}</p>
              </div>
            ))}
          </div> */}

          <button
            onClick={() => onLinkClick(biz.link ?? "#", biz.title, biz.accent)}
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white border border-white/30 hover:border-white/70 transition-all duration-300"
            style={{
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(8px)",
            }}
          >
            READ MORE
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>

      {/* Bottom accent bar */}
      <div
        className="absolute bottom-0 left-0 h-[3px] transition-all duration-500 z-20"
        style={{
          width: isActive ? "100%" : "0%",
          background: biz.accent,
          transitionDelay: isActive ? "0.1s" : "0s",
        }}
      />
    </div>
  );
}

// ─── Section ────────────────────────────────────────────────────────
export default function OurBusinesses() {
  const [active, setActive] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Overlay state
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [overlayAccent, setOverlayAccent] = useState("#DC2626");
  const [overlayLabel, setOverlayLabel] = useState("");
  const redirectTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  const handleLinkClick = useCallback(
    (href: string, label: string, accent: string) => {
      if (!href || href === "#" || href === "/#") return;
      setOverlayAccent(accent);
      setOverlayLabel(label);
      setOverlayVisible(true);

      redirectTimer.current = setTimeout(() => {
        setOverlayVisible(false);
        window.open(href, "_blank", "noopener,noreferrer");
      }, 6000);
    },
    [],
  );

  const handleCancel = useCallback(() => {
    if (redirectTimer.current) clearTimeout(redirectTimer.current);
    setOverlayVisible(false);
  }, []);

  // Cancel on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleCancel();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [handleCancel]);

  return (
    <>
      <RedirectOverlay
        visible={overlayVisible}
        accent={overlayAccent}
        label={overlayLabel}
        onCancel={handleCancel}
      />

      <section
        id="portfolio"
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
        <div className="relative px-8 mt-30 md:px-16 pt-16 pb-8">
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
              As a technology-driven group, our portfolio spans the full
              financial ecosystem — built to power Africa&apos;s digital
              economy.
            </p>
            <div className="mt-6 flex items-center gap-1">
              <div className="h-[3px] w-16 bg-[#03D16A] rounded-full" />
              <div className="h-[3px] w-28 bg-[#E5E7EB] rounded-full" />
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="relative flex w-full" style={{ height: "480px" }}>
          {businesses.map((biz, i) => (
            <BusinessCard
              key={biz.id}
              biz={biz}
              index={i}
              isActive={active === biz.id}
              isInactive={active !== null && active !== biz.id}
              visible={visible}
              onEnter={() => setActive(biz.id)}
              onLeave={() => setActive(null)}
              onLinkClick={handleLinkClick}
            />
          ))}
        </div>
      </section>
    </>
  );
}
