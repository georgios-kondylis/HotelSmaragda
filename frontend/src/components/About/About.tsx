import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useGlobalProps } from "../../GlobalContext";
import VideoBg from "../ui/VideoBg";
import { features, logo } from "../../constants";

const About = () => {
  const { isDarkMode, customBG } = useGlobalProps();

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

    tl.from(".about-container", {
      opacity: 0,
      y: 30,
      scale: 0.97,
    })
      .from(".about-heading", { opacity: 0, x: -40 }, "-=0.6")
      .from(".about-text", { opacity: 0, y: 20 }, "-=0.6")
      .from(gsap.utils.toArray(".features"), {
        opacity: 0,
        y: 20,
        stagger: 0.2,
      }, "-=0.6");
  }, []);

  return (
    <section className="w-full flex justify-center">
      <VideoBg />

      <main className="flex justify-center mainPX MAX_W w-full h-full mt-[50px]">
        <div className="content-wrapper p-[2px] rounded-[16px]">
          <div className={`about-container text-white text-center p-8 rounded-[12px] shadow-xl max-w-3xl w-full 
            ${isDarkMode ? 'bg-[#050505] border border-[#58585848]' : 'bg-gradient-to-l from-[#e7e7e7] to-[#bebebe] border'}`}>
            
            <h2 className={`about-heading text-3xl font-bold mb-4 ${isDarkMode ? 'text-gradient' : 'textShadowBl'}`}>
              About {logo}
            </h2>

            <p className={`about-text text-lg mb-6 ${isDarkMode ? 'text-gradient' : 'textShadowBl'}`}>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto itaque consequuntur ut atque at, doloremque nihil rerum amet pariatur suscipit quo aspernatur cupiditate expedita incidunt, earum perspiciatis unde quibusdam! Soluta.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {features.map((item, i) => (
                <button key={i}
                  className={`features ${customBG} ${isDarkMode ? 'shadow-[2px_2px_5px_#00ffee40]' : 'shadow-2xl'} p-2 px-4 rounded-lg font-semibold`}
                >
                  {item}
                </button>
              ))}
            </div>

          </div>
        </div>
      </main>
    </section>
  );
};

export default About;
