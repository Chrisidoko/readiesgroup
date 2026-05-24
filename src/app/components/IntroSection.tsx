import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="w-full bg-white px-8 md:px-12 py-20 mx-auto">
      {/* Section label */}
      <div
        className="text-5xl font-semibold pb-20"
        style={{ fontFamily: "'Sora', 'DM Sans', sans-serif" }}
      >
        Powering the largest financial networks. Built for tomorrow&apos;s
        <span className="text-gray-500"> digital infrastructure </span>
      </div>

      <div className="flex items-center gap-4 mb-14">
        <span className="block w-10 h-px bg-gray-400" />
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-700">
          About US
        </span>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
        {/* Left — text */}
        <div />

        {/* Right — image */}
        <div
          className="flex flex-col justify-start pt-2"
          style={{ fontFamily: "'Sora', 'DM Sans', sans-serif" }}
        >
          <p className="text-gray-900 text-xl md:text-2xl font-semibold leading-snug mb-4">
            <span className="font-bold">READIESGROUP</span>{" "}
            <span className="text-gray-500 font-normal">
              A Technology Holding Company (TechHoldCo) and innovation investor
              shaping the future of work, finance, digital experiences, and
              human possibility.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
