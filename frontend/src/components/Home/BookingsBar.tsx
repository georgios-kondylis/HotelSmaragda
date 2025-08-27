import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar, ChevronDown } from "lucide-react";

const BookingsBar = () => {
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  const [adultsOpen, setAdultsOpen] = useState(false);
  const [childrenOpen, setChildrenOpen] = useState(false);
  const [roomsOpen, setRoomsOpen] = useState(false);

  const closeAll = () => {
    setAdultsOpen(false);
    setChildrenOpen(false);
    setRoomsOpen(false);
  };

  const toggleAdults = () => {
    setAdultsOpen(!adultsOpen);
    setChildrenOpen(false);
    setRoomsOpen(false);
  };
  const toggleChildren = () => {
    setChildrenOpen(!childrenOpen);
    setAdultsOpen(false);
    setRoomsOpen(false);
  };
  const toggleRooms = () => {
    setRoomsOpen(!roomsOpen);
    setAdultsOpen(false);
    setChildrenOpen(false);
  };

  return (
    <main className="fixed bottom-[2%] w-full MAX_W mainPX flex items-center justify-center text-nowrap z-20">
      <div className="bg-white flex items-center shadow-lg rounded-md md:text-[14px] lg:text-[16px]">
        {/* Check in */}
        <div className="relative border-r max-md:border-b border-[#b9905468] flex-1 max-md:border-r-0 max-md:w-full">
          <div className="flex items-center py-4 px-6 max-lg:px-2">
            <Calendar className="text-[#b99154] w-7 mr-2" />
            <DatePicker
              selected={checkIn}
              onChange={(date) => setCheckIn(date)}
              placeholderText="Check In"
              className="w-full focus:outline-none text-gray-700 txtElegant"
              dateFormat="dd/MM/yyyy"
              onCalendarOpen={closeAll}
            />
          </div>
        </div>

        {/* Check out */}
        <div className="relative border-r border-[#b9905468] flex-1 ">
          <div className="flex items-center py-4 px-6 max-lg:px-2">
            <Calendar className="text-[#b99154] w-7  mr-2" />
            <DatePicker
              selected={checkOut}
              onChange={(date) => setCheckOut(date)}
              placeholderText="Check Out"
              className="w-full focus:outline-none text-gray-700 txtElegant"
              dateFormat="dd/MM/yyyy"
              minDate={checkIn || new Date()}
              onCalendarOpen={closeAll}
            />
          </div>
        </div>

        {/* Adults */}
        <div className="relative border-r border-[#b9905468] cursor-pointer flex-1">
          <div onClick={toggleAdults} className="flex px-6 max-lg:px-2 py-4 items-center justify-between w-full text-gray-700 txtElegant">
            <span>
              {adults} Adult{adults > 1 ? "s" : ""}
            </span>
            <ChevronDown className="w-4 h-4 ml-2 text-[#b99154]" />
          </div>
          {adultsOpen && (
            <div className="absolute left-0 bottom-[60px] mt-2 bg-white shadow-md rounded-md z-20 w-full overflow-hidden">
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num} onClick={() => {setAdults(num); closeAll(); }}
                     className={`px-4 py-2 hover:bg-[#00000064] cursor-pointer ${ adults === num ? "bg-[#b99154] text-white" : "" }`}
                >
                  {num} Adult{num > 1 ? "s" : ""}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Children */}
        <div className="relative border-r border-[#b9905468] cursor-pointer flex-1">
          <div onClick={toggleChildren} className="flex px-6 max-lg:px-2 py-4 items-center justify-between w-full text-gray-700 txtElegant" >
            <span>
              {children} {children === 1 ? "Child" : "Children"}
            </span>
            <ChevronDown className="w-4 h-4 ml-2 text-[#b99154]" />
          </div>
          {childrenOpen && (
            <div className="absolute left-0 bottom-[60px] mt-2 bg-white shadow-md rounded-md z-20 w-full overflow-hidden">
              {[0, 1, 2, 3, 4].map((num) => (
                <div key={num} onClick={() => {setChildren(num);closeAll();}} 
                     className={`px-4 py-2 hover:bg-[#00000064] cursor-pointer ${ children === num ? "bg-[#b99154] text-white" : "" }`}
                >
                  {num} {num === 1 ? "Child" : "Children"}
                </div>
              ))}
            </div> 
          )}
        </div>

        {/* Rooms */}
        <div className="relative border-r border-[#b9905468] cursor-pointer flex-1">
          <div onClick={toggleRooms} className="flex px-6 max-lg:px-2 py-4 items-center justify-between w-full text-gray-700 txtElegant">
            <span>
              {rooms} Room{rooms > 1 ? "s" : ""}
            </span>
            <ChevronDown className="w-4 h-4 ml-2 text-[#b99154]" />
          </div>
          {roomsOpen && (
            <div className="absolute left-0 bottom-[60px] mt-2 bg-white shadow-md rounded-md z-20 w-full overflow-hidden">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} onClick={() => { setRooms(num); closeAll();}}
                     className={`px-4 py-2 hover:bg-[#00000064] cursor-pointer ${rooms === num ? "bg-[#b99154] text-white" : ""}`}
                >
                  {num} Room{num > 1 ? "s" : ""}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Submit */}
        <button className="bg-[#b99154] text-white px-8 max-lg:px-2 uppercase tracking-wider py-[18px] hover:bg-[#424242] cursor-pointer rounded-r-[5px] text-nowrap text-[14px] ">
          Check Availability
        </button>
      </div>
    </main>
  );
};

export default BookingsBar;
