import React from "react";
import { FiveStars } from "../../exports";

const About = () => {
  return (
    <section className="mainPX w-full flex justify-center py-16 bg-white">
      <div className="MAX_W w-full flex flex-col lg:flex-row gap-12 items-center">
        
        {/* Left Side - Text */}
        <div className="flex-1">
          <div className="flex items-center gap-2 text-yellow-500 mb-4">
            <FiveStars/>
          </div>
          <p className="uppercase tracking-[0.2em] text-gray-500 text-sm mb-2 txtElegant">
            Smaragda Hotel
          </p>
          <h5 className="text-4xl font-serif font-semibold leading-tight mb-6">
            Enjoy a Luxury <br /> Experience
          </h5>
          <p className="text-gray-600 mb-4">
            Welcome to the best five-star deluxe hotel in New York. Hotel elementum
            sesue the aucan vestibulum aliquam justo in sapien rutrum volutpat.
            Donec in quis the pellentesque velit. Donec id velit ac arcu posuere
            blane.
          </p>
          <p className="text-gray-600 mb-6">
            Hotel ut nisl quam nestibulum ac quam nec odio elementum sceisue the
            aucan ligula. Orci varius natoque penatibus et magnis dis parturient
            monte nascete ridiculus mus nellen tesque habitant morbine.
          </p>

          {/* Reservation */}
          <a href="tel:+302273037017" className="flex items-center gap-4 mt-6 hover:text-[#b99154] group">
            <i className="fa-solid fa-phone text-[35px]" />
            <div>
              <p className="text-gray-500 text-sm">Reservation</p>
              <p className="text-xl font-semibold text-gray-800  group-hover:text-[#b99154] txtElegant">
                +30 2273037017
              </p>
            </div>
          </a>
        </div>

        {/* Right Side - Images */}
        <div className="flex-1 flex flex-col sm:flex-row gap-6 h-full lg:mt-[50px]">
          <div className="flex-1 h-72 bg-gray-200 rounded-[5px] overflow-hidden shadow-md lg:mt-[100px]">
            <img  src="/about/img1.png"  alt="Hotel Restaurant"  className="w-full h-full object-cover"/>
          </div>
          <div className="flex-1 h-72 bg-gray-200 rounded-[5px] overflow-hidden shadow-md">
            <img  src="/about/img2.png"  alt="Hotel Room"  className="w-full h-full object-cover"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
