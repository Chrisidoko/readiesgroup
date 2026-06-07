"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";

interface Executive {
  id: number;
  name: string;
  title: string;
  bio: string;
  accentColor: string;
  bgColor: string;
  image: string;
}

const executives: Executive[] = [
  {
    id: 1,
    name: "Muhammad Gabi",
    title: "Group Chief Executive Officer",
    bio: "Muhammad Gabbi brings 20+ years of fintech leadership across West Africa, having previously led digital transformation at two of Nigeria's top-tier banks.",
    accentColor: "#1D4ED8",
    bgColor: "#1e3a8a",
    image: "/leadership/GabiPic.jpeg",
  },
  {
    id: 2,
    name: "Siraj M. Abdullah",
    title: "Chief Technology Officer",
    bio: "Siraj architected Readies' core payment rails and microservices infrastructure.",
    accentColor: "#059669",
    bgColor: "#065f46",
    image: "/leadership/sirage-abdullahi.png",
  },
  {
    id: 3,
    name: "Olushola Nwosu",
    title: "MD, Microfinance Bank",
    bio: "With a background in development finance and CBN regulation, Olushola has grown the bank's loan book from ₦50M to over ₦2B in three years.",
    accentColor: "#DC2626",
    bgColor: "#7f1d1d",
    image: "/leadership/olushola-micheal.png",
  },
  {
    id: 4,
    name: "Abayomi Oyekola",
    title: "Chief Investment Officer",
    bio: "Abayomi manages Readies' ₦5B+ AUM across fixed income, equities and alternative assets. He brings deep capital markets expertise from her tenure at Stanbic IBTC",
    accentColor: "#7C3AED",
    bgColor: "#4c1d95",
    image: "/leadership/abayomi.jpg",
  },
  // {
  //   id: 5,
  //   name: "Tunde Adesanya",
  //   title: "Chief Financial Officer",
  //   bio: "A chartered accountant with Big Four experience, Tunde oversees financial reporting, treasury and investor relations.",
  //   accentColor: "#0891B2",
  //   bgColor: "#0c4a6e",
  //   image: "/leadership/TundePic.jpeg",
  // },
  // {
  //   id: 6,
  //   name: "Ngozi Okonkwo",
  //   title: "Chief Risk & Compliance Officer",
  //   bio: "Ngozi ensures Readies operates within the full bounds of CBN, SEC and NDIC regulations.",
  //   accentColor: "#D97706",
  //   bgColor: "#78350f",
  //   image: "/leadership/NgoziPic.jpeg",
  // },
];

export default function ExecutiveLeadership() {
  const [visible, setVisible] = useState(false);
  const [activeId, setActiveId] = useState<number | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

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

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll();
    return () => el.removeEventListener("scroll", checkScroll);
  }, [checkScroll]);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "right" ? 360 : -360, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white overflow-hidden py-20"
      style={{ fontFamily: "'Sora', 'DM Sans', sans-serif" }}
    >
      {/* Subtle dot grid background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.4,
        }}
      />

      {/* Decorative left stripe */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#DC2626] to-transparent opacity-60" />

      {/* Header */}
      <div
        className="relative text-center px-6 mb-14"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#DC2626] mb-3">
          The People Behind the Vision
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#0F1C3F] mb-5 tracking-tight">
          Our Board of Directors
        </h2>
        <p className="text-[#64748B] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Our senior leadership team brings deep expertise across fintech,
          banking, capital markets, and technology — united by a single mission
          to redefine Africa&apos;s financial future.
        </p>

        {/* Divider */}
        <div className="flex items-center justify-center gap-1 mt-8">
          <div className="h-[1.5px] w-16 bg-[#E2E8F0] rounded-full" />
          <div className="h-[3px] w-20 bg-[#03D16A] rounded-full" />
          <div className="h-[1.5px] w-16 bg-[#E2E8F0] rounded-full" />
        </div>
      </div>

      {/* Scroll track */}
      <div className="relative">
        {/* Left fade */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 transition-opacity duration-300"
          style={{
            background:
              "linear-gradient(to right, rgba(255,255,255,0.95), transparent)",
            opacity: canScrollLeft ? 1 : 0,
          }}
        />
        {/* Right fade */}
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 transition-opacity duration-300"
          style={{
            background:
              "linear-gradient(to left, rgba(255,255,255,0.95), transparent)",
            opacity: canScrollRight ? 1 : 0,
          }}
        />

        {/* Cards strip */}
        <div
          ref={scrollRef}
          className="flex items-center justify-center gap-8 overflow-x-auto px-10 md:px-16 pb-6"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {executives.map((exec, i) => {
            const isActive = activeId === exec.id;
            return (
              <div
                key={exec.id}
                onMouseEnter={() => setActiveId(exec.id)}
                onMouseLeave={() => setActiveId(null)}
                className="relative flex-shrink-0 cursor-pointer group"
                style={{
                  width: "300px",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(32px)",
                  transition: `opacity 0.6s ease ${i * 80}ms, transform 0.6s ease ${i * 80}ms`,
                }}
              >
                {/* Photo placeholder — replace with next/image */}
                <div
                  className="relative w-full rounded-xl overflow-hidden"
                  style={{ height: "360px" }}
                >
                  {/* Gradient stand-in for photo */}
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${exec.bgColor} 0%, #1e293b 100%)`,
                    }}
                  >
                    <Image
                      src={exec.image}
                      alt={exec.name}
                      width={300}
                      height={360}
                      className="object-cover w-full h-full"
                      loading="eager"
                    />
                    {/* Subtle pattern */}
                    {/* <svg
                      className="absolute inset-0 w-full h-full opacity-10"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <pattern
                          id={`pat-${exec.id}`}
                          x="0"
                          y="0"
                          width="20"
                          height="20"
                          patternUnits="userSpaceOnUse"
                        >
                          <circle cx="10" cy="10" r="1" fill="white" />
                        </pattern>
                      </defs>
                      <rect
                        width="100%"
                        height="100%"
                        fill={`url(#pat-${exec.id})`}
                      />
                    </svg> */}
                  </div>

                  {/* Hover bio overlay */}
                  <div
                    className="absolute inset-0 flex flex-col justify-end p-5 rounded-xl"
                    style={{
                      background: `linear-gradient(to top, rgba(15,28,63,0.97) 0%, rgba(15,28,63,0.7) 50%, transparent 100%)`,
                      opacity: isActive ? 1 : 0,
                      transform: isActive
                        ? "translateY(0)"
                        : "translateY(12px)",
                      transition: "opacity 0.35s ease, transform 0.35s ease",
                    }}
                  >
                    <p className="text-white/80 text-sm leading-relaxed line-clamp-5">
                      {exec.bio}
                    </p>
                  </div>

                  {/* Top accent corner */}
                  <div
                    className="absolute top-0 right-0 w-12 h-12 rounded-bl-2xl rounded-tr-xl transition-all duration-300"
                    style={{
                      background: exec.accentColor,
                      opacity: isActive ? 1 : 0.7,
                      transform: isActive ? "scale(1.15)" : "scale(1)",
                    }}
                  />
                </div>

                {/* Name plate — red bar like reference */}
                <div
                  className="relative mt-0 rounded-b-xl px-5 py-4 transition-all duration-300"
                  style={{
                    background: isActive ? exec.accentColor : "#DC2626",
                    transform: isActive ? "translateY(-2px)" : "translateY(0)",
                  }}
                >
                  <p className="text-white font-bold text-sm tracking-wide uppercase leading-tight">
                    {exec.name}
                  </p>
                  <p className="text-white/80 text-xs mt-0.5 leading-snug">
                    {exec.title}
                  </p>
                </div>
              </div>
            );
          })}

          {/* End padding block */}
          <div className="flex-shrink-0 w-10" />
        </div>
      </div>

      {/* Navigation arrows */}
      {/* <div
        className="flex items-center justify-center gap-4 mt-10"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 0.6s ease 0.5s",
        }}
      >
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className="group flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 disabled:opacity-30"
          style={{
            borderColor: canScrollLeft ? "#DC2626" : "#CBD5E1",
            background: canScrollLeft ? "transparent" : "transparent",
          }}
          aria-label="Scroll left"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 4L6 9l5 5"
              stroke={canScrollLeft ? "#DC2626" : "#94A3B8"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

      
        <div className="flex gap-2">
          {executives.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const el = scrollRef.current;
                if (!el) return;
                el.scrollTo({ left: i * 324, behavior: "smooth" });
              }}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === 0 ? "24px" : "8px",
                height: "8px",
                background: i === 0 ? "#DC2626" : "#CBD5E1",
              }}
              aria-label={`Go to executive ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className="flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 disabled:opacity-30"
          style={{
            borderColor: canScrollRight ? "#DC2626" : "#CBD5E1",
          }}
          aria-label="Scroll right"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 4l5 5-5 5"
              stroke={canScrollRight ? "#DC2626" : "#94A3B8"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div> */}
    </section>
  );
}
