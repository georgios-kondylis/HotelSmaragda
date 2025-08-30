import React, { useState } from "react";
import RoomCard from "./ui/RoomCard";

const Rooms = () => {
  const [displayStupidios, setDisplayStudios] = useState(false)
  const rooms = [
    {
      image: "/about/img1.png",
      title: "Junior Suite",
      link: '/'
    },
    {
      image: "/about/img2.png",
      title: "Junior Suite",
      link: '/'
    },
    {
      image: "/about/img1.png",
      title: "Junior Suite",
      link: '/'
    },
  ];

  return (
    <section className="mainPX w-full flex justify-center py-16 mainCream">
      <div className="MAX_W w-full flex flex-col">

        {/* Section Header */}
        <div className="flex items-start justify-between">
          <div className="mb-12">
            <p className="uppercase tracking-[0.2em] text-gray-500 text-sm mb-2 txtElegant">
              The Smaragda Luxury Hotel
            </p>
            <h5 className="text-4xl font-serif font-semibold">Apartments & Studios</h5>
          </div>

          <div id="Toggle" className="border border-[#5e5e5e41] rounded-[8px]">
            <button className={`px-[15px] py-[7px] rounded-l-[6px] ${displayStupidios ? 'bg-[#b99154] text-white' : 'hover:bg-[#35353550] hover:text-white '} cursor-pointer`}
                      onClick={() => setDisplayStudios(true)} >
                Studios
            </button>
            <span className='h-[38px] rounded-full bg-white w-[2px]'></span>
            <button className={`px-[15px] py-[7px] rounded-r-[6px] ${!displayStupidios ? 'bg-[#b99154] text-white' : 'hover:bg-[#35353550] hover:text-white'} cursor-pointer`}
                    onClick={() => setDisplayStudios(false)} >
              Apartments
            </button>
          </div>
        </div>

        {/* Room Cards */}
        <div className="flex justify-center max-md:flex-col max-md:items-center gap-6 max-lg:gap-4">
          {rooms.map((room, i) => (
            <RoomCard
              key={i}
              image={room.image}
              title={room.title}
              link={room.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
