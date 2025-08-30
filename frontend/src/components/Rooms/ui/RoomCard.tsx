import React, { useState } from "react";

type RoomCardProps = {
  image: string;
  title: string;
  link: string;
};

const RoomCard = ({ image, title, link }: RoomCardProps) => {
  const [overlayIsActive, setOverlayIsActive] = useState(false);
  return (
    <div className="relative flex-1 min-w-[230px] max-w-[700px] max-md:w-full bg-gray-200 rounded-[5px] overflow-hidden shadow-md cursor-pointer"
         onMouseEnter={() => setOverlayIsActive(true)}  onMouseLeave={() => setOverlayIsActive(false)}>
      {/* Image */}
      <img src={image} alt={title} className={`w-full h-80 object-cover ${overlayIsActive && 'scale-110'} transition2`} />

      {/* Info Overlay */}
      <div className={`absolute ${overlayIsActive? 'bottom-0' : 'bottom-[-500px]'} bottom-0 left-0 w-full h-full bg-gradient-to-t from-[#000000b7] to-[#00000000] p-4 transition1`}>
        <div className={`flex flex-col justify-end h-full`}>
        <h5 className="text-white text-xl">{title}</h5> 
        <div className={`bg-[#ffffff4e] mt-2 ${overlayIsActive? 'w-full' : 'w-[1px] opacity-0'} h-[1px] rounded-full pointer-events-none transition3`}></div> 

        {/* Details link */}
        <div className={`flex items-center justify-between`}>
          <div id="ICONS" className="flex items-center gap-1 text-white mt-3">
            <i className="fa-solid fa-wifi | text-[14px] mr-1"/>
            <img src="/icons/double-bed.png" className="w-[22px]" alt="" />
            <img src="/icons/shower.png" className="w-[19px]" alt="" />
            <img src="/icons/towel.png" className="w-[22px]" alt="" />
          </div>


        {link && (
          <a href={link} className="text-white text-xs mt-2 cursor-pointer inline-block hover:text-[#b99154] hover:scale-105 transition1">
            DETAILS →
          </a>
        )}
        </div>
      </div>
      </div>
    </div>
  );
};

export default RoomCard;

