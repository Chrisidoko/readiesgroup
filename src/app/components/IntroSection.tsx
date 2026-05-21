import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="w-full bg-white px-8 md:px-12 py-20 mx-auto">
      {/* Section label */}
      <div className="flex items-center gap-4 mb-14">
        <span className="block w-10 h-px bg-gray-400" />
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-700">
          About US
        </span>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
        {/* Left — text */}
        <div className="flex flex-col justify-start pt-2">
          <p className="text-gray-900 text-2xl md:text-3xl font-semibold leading-snug mb-4">
            Welcome to <span className="font-bold">READIESGROUP!</span>{" "}
            <span className="text-gray-500 font-normal">
              A Technology Holding Company (TechHoldCo) and innovation investor
              shaping the future of work, finance, digital experiences, and
              human possibility.
            </span>
          </p>
        </div>

        {/* Right — image */}
        {/*  Replace /images/intro.jpg with your actual image path   */}
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
          <Image
            src="/45.jpg"
            alt="Nature landscape with a red house by the lake"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}
