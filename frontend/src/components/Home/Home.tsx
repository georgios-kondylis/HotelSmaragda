import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { useGlobalProps } from "../../GlobalContext";
import VideoBg from "../ui/VideoBg";
import { logo, recruiter } from "../../constants";

gsap.registerPlugin(useGSAP);

const Home = () => {
  const { isDarkMode} = useGlobalProps();

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 1 },
    });

    tl.from(".fade-container", { opacity: 0, scale: 0.95 })
      .from(".title", { y: -60, opacity: 0 }, "-=0.6")
      .from(".name", { x: -80, opacity: 0 }, "-=0.5")
      .from(".subtitle", { y: 40, opacity: 0 }, "-=0.5")
      .to(".name", {
        scale: 1.05,
        repeat: 1,
        yoyo: true,
        duration: 0.6,
        ease: "power1.inOut",
      });
  }, []);

  return (
    <section className={`w-full flex justify-center`} >
     <VideoBg />
     <main className="flex justify-center mainPX MAX_W w-full h-full mt-[50px]">

        <div className="content-wrapper p-[2px] rounded-[16px]">
          <div className={`fade-container text-white text-center p-8 rounded-[12px] shadow-xl max-w-2xl
            ${isDarkMode ? 'bg-[#050505] border border-[#58585848]' : 'bg-gradient-to-l from-[#e7e7e7] to-[#bebebe] border'}`}>
            
            <h1 className={`title text-4xl sm:text-5xl md:text-5xl ${isDarkMode ? 'text-gradient' : 'textShadowBl'}`}>
              Hello {recruiter}
            </h1>
            <h2 className={`name text-xl sm:text-3xl font-medium mt-4 ${isDarkMode ? 'text-gradient' : 'textShadowBl'}`}>
              CEO of {logo}
            </h2>
            <p className={`subtitle mt-6 text-sm sm:text-lg ${isDarkMode ? 'text-gradient' : 'textShadowBl'}`}>
              I built this simple project to showcase clean architecture and simple
              frontend animation
            </p>

          </div>
        </div>
        
      </main>

    </section>
  );
};

export default Home;
