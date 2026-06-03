"use client";

import Link from "next/link";

const links = {
  Products: [
    { label: "Payment Gateway", href: "#" },
    { label: "Microfinance Bank", href: "#" },
    { label: "Investment Platform", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Leadership", href: "#" },
    { label: "Careers", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Compliance", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer
      className="w-full bg-[#080a12] border-t border-white/[0.06]"
      style={{ fontFamily: "'Sora', 'DM Sans', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start gap-12 md:gap-20">
          {/* Brand */}
          <div className="flex-shrink-0 max-w-xs">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="text-white font-bold text-lg tracking-tight">
                ReadiesGroup<span style={{ color: "#DC2626" }}>.</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Africa&apos;s technology-driven financial group — payments,
              banking, and investing in one ecosystem.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { label: "X", path: "M4 4l6 6m0 0l6 6M10 4l6 6m-6 0L4 16" },
                {
                  label: "Li",
                  path: "M4 8h2v8H4zM5 4a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM8 8h2v1.1A3 3 0 0114 12v4h-2v-4a1 1 0 00-2 0v4H8V8z",
                },
                {
                  label: "Ig",
                  path: "M8 3H16a5 5 0 015 5v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5zm4 4.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm5.5-.75a.75.75 0 110 1.5.75.75 0 010-1.5z",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-white/10"
                  style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(255,255,255,0.5)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-10">
            {Object.entries(links).map(([group, items]) => (
              <div key={group}>
                <p className="text-white/30 text-xs font-semibold tracking-[0.18em] uppercase mb-4">
                  {group}
                </p>
                <ul className="flex flex-col gap-3">
                  {items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-white/55 text-sm hover:text-white transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-14 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Readies Group. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Regulated by the CBN &amp; SEC Nigeria.
          </p>
        </div>
      </div>
    </footer>
  );
}
