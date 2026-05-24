import Link from "next/link";

export default function ContactCard() {
  return (
    <section
      className="w-full px-8 md:px-12 py-40 bg-[#03d16a]"
      style={{ fontFamily: "'Sora', 'DM Sans', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-900">
          If you&apos;re building for scale, there&apos;s <br /> no alternative
        </h1>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-white text-black text-base font-medium rounded-full px-6 py-3 w-fit hover:bg-white/90 transition-colors duration-200 [&>span]:hover:translate-x-0.5 [&>span]:hover:-translate-y-0.5"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
