"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const fields = [
    {
      name: "name",
      placeholder: "Name",
      type: "text",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-5 h-5"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0"
          />
        </svg>
      ),
    },
    {
      name: "phone",
      placeholder: "Phone",
      type: "tel",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-5 h-5"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      ),
    },
    {
      name: "email",
      placeholder: "Email Address",
      type: "email",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-5 h-5"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
    },
    {
      name: "subject",
      placeholder: "Subject",
      type: "text",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-5 h-5"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      <Navbar />
      <div className="font-sora min-h-screen bg-white">
        {/* ── Hero ── */}
        <section className="relative h-[300px] md:h-[360px] overflow-hidden">
          {/* Hero background image */}
          <Image
            src="/partner-bg.jpg"
            alt="Partner background"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark overlay */}
          {/* Dark overlay gradient */}
          <div
            className="absolute inset-0 z-[1]"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,1.25) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,1.25) 100%)",
            }}
          />

          <div
            className="relative z-10 h-full flex flex-col justify-center px-8 md:px-20 max-w-7xl mx-auto"
            style={{ fontFamily: "'Sora', 'DM Sans', sans-serif" }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
              Partner With{" "}
              <span
                style={{
                  WebkitTextStroke: "1.5px rgba(3, 209, 106,0.8)",
                  color: "transparent",
                }}
              >
                Us
              </span>
            </h1>
            <p className="mt-4 text-sm md:text-base text-white/60 max-w-md leading-relaxed">
              Let&apos;s build a sustainable future together. Reach out and our
              team will connect with you promptly.
            </p>
          </div>
        </section>

        {/* ── Body ── */}
        <section
          className="bg-[#FFFFFF] py-20 px-8 md:px-20"
          style={{ fontFamily: "'Sora', 'DM Sans', sans-serif" }}
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left copy */}
            <div className="flex flex-col justify-center pt-4 text-[#171717]">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0d1a12] leading-[1.15] tracking-tight">
                Get your custom fintech solution blueprint today.
              </h2>
              <p className="mt-6 text-base font-semibold text-[#0d1a12]">
                Directly to your business | Into your operations
              </p>
              <p className="mt-3 text-sm text-[#4a5a4e] leading-relaxed max-w-sm">
                Our expert team evaluates your processing or payment needs and
                outlines a tailored deployment strategy
              </p>

              {/* Phone CTA */}
              <div className="mt-10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#03D16A] flex items-center justify-center shadow-lg flex-shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-5 h-5 text-white"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
                <span className="text-xl font-semibold text-[#0d1a12] tracking-wide">
                  0 800 555 44 33
                </span>
              </div>

              {/* Trust badges */}
              <div className="mt-12 flex flex-wrap gap-6">
                {["Licensed & Regulated", "24/7 Support"].map((badge) => (
                  <div
                    key={badge}
                    className="flex items-center gap-2 text-sm text-[#1a3d24] font-medium"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#1a3d24] inline-block" />
                    {badge}
                  </div>
                ))}
              </div>
            </div>

            {/* Right – Contact Card */}
            <div className="bg-white rounded-2xl shadow-[0_8px_48px_rgba(0,0,0,0.08)] p-8 md:p-10">
              <div className="space-y-0 divide-y divide-[#e8ede8]">
                {fields.map((field) => (
                  <div
                    key={field.name}
                    className={`flex items-center gap-3 py-5 transition-colors ${
                      focused === field.name ? "bg-[#f6faf6] -mx-10 px-10" : ""
                    }`}
                  >
                    <span
                      className={`flex-shrink-0 transition-colors ${
                        focused === field.name
                          ? "text-[#1a3d24]"
                          : "text-[#b0bdb0]"
                      }`}
                    >
                      {field.icon}
                    </span>
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      onFocus={() => setFocused(field.name)}
                      onBlur={() => setFocused(null)}
                      className="flex-1 bg-transparent text-sm text-[#0d1a12] placeholder:text-[#b0bdb0] outline-none font-sora"
                    />
                  </div>
                ))}

                {/* Textarea */}
                <div
                  className={`flex items-start gap-3 py-5 transition-colors ${
                    focused === "message" ? "bg-[#f6faf6] -mx-10 px-10" : ""
                  }`}
                >
                  <span
                    className={`flex-shrink-0 mt-0.5 transition-colors ${
                      focused === "message"
                        ? "text-[#1a3d24]"
                        : "text-[#b0bdb0]"
                    }`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-5 h-5"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125"
                      />
                    </svg>
                  </span>
                  <textarea
                    name="message"
                    placeholder="How can we help you? Feel free to get in touch!"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    className="flex-1 bg-transparent text-sm text-[#0d1a12] placeholder:text-[#b0bdb0] outline-none resize-none font-sora leading-relaxed"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="mt-8">
                <button
                  onClick={handleSubmit}
                  className="bg-[#03D16A] hover:bg-[#0d2918] text-white text-sm font-semibold px-10 py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-[#1a3d24]/30 active:scale-[0.98]"
                >
                  Send Message
                </button>
              </div>

              <p className="mt-5 text-xs text-[#a0afa0] leading-relaxed">
                By submitting this form you agree to our{" "}
                <a
                  href="#"
                  className="underline underline-offset-2 hover:text-[#1a3d24]"
                >
                  Privacy Policy
                </a>
                . We&apos;ll never share your data with third parties.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
