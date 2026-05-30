// import Image from "next/image";
import HeroSection from "./components/Herosection";
// import HeroSection2 from "./components/Herosection2";
import Navbar from "@/app/components/Navbar";
// import HeroSection3 from "@/app/components/HeroSection3";
import IntroSection from "@/app/components/IntroSection";
// import ProductCards from "./components/productcards";
import OurBusinesses from "@/app/components/Ourbusinesses";
import Contactcta from "./components/contactcta";
import ExecutiveLeadership from "./components/ExecutiveLeadership";
import Footer from "./components/footer";
import BusinessesWeServe from "./components/Businessesweserve";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      {/* <HeroSection2 /> */}
      {/* <HeroSection3 /> */}
      <IntroSection />

      {/* <ProductCards /> */}
      <OurBusinesses />
      <ExecutiveLeadership />
      <BusinessesWeServe />
      <Contactcta />
      <Footer />
      {/* <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          /> */}
    </>
  );
}
