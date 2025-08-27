import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useGlobalProps } from "../../GlobalContext";

const About = () => {
  const { } = useGlobalProps();

  return (
    <section className="w-full flex justify-center">
      {/* <VideoBg /> */}

      <main className="flex justify-center mainPX MAX_W w-full h-full mt-[50px]">
        <div className="content-wrapper p-[2px] rounded-[16px]">
         
        </div>
      </main>
    </section>
  );
};

export default About;
