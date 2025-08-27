import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { useGlobalProps } from "../../GlobalContext";
import { BookingsBar, BookingsBarMobile } from "../../exports";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(useGSAP);

const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      <section className="relative w-full min-h-screen flex flex-col items-center mainPX justify-between bg-[url('/bgs/testbg.jpeg')] bg-cover bg-center">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#00000052] z-0" />

        {/* Main Hero */}
        <main className="relative flex justify-center MAX_W w-full h-full mt-[15%] z-10">
          <div id="InfoContainer" className="flex flex-col items-center gap-4 text-white text-center"  >
            {/* Stars */}
            <div id="Stars" className="flex gap-1">
              {[1, 2, 3, 4, 5].map((_, i) => ( <img key={i} src="/icons/star.png" className="w-[20px]" alt="star" /> ))}
            </div>

            {/* Sub-title */}
            <h1 className="tracking-[1px] font-extralight uppercase">
              Luxury Hotel & Best Resort
            </h1>

            {/* Title */}
            <h5 className="tracking-[1px] font-light text-[50px] md:text-[60px] leading-tight">
              Enjoy a Luxury <br /> Experience
            </h5>

            {/* CTA */}
            <button className="border border-white px-6 py-2 mt-4 text-sm uppercase tracking-wider hover:bg-white hover:text-black transition">
              Rooms & Suites
            </button>
          </div>
        </main>

        {/* Desktop bookings bar */}
        {!isMobile && <BookingsBar />}
      </section>

      {/* Mobile bookings bar */}
      {isMobile && (
        <div className="relative z-50">
          <BookingsBarMobile />
        </div>
      )}
    </>
  );
};

export default Home;
