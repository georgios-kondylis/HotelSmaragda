import React, { useState } from "react";
import { languages } from "./utils";
import { useGlobalProps } from "../../GlobalContext";

const ChooseLanguage = () => {
  const { selectedLanguage, setSelectedLanguage } = useGlobalProps();
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (lang: any) => { setSelectedLanguage?.(lang); setIsOpen(false); };

  return (
    <div className={`relative group ${isOpen ? "w-[150px]" : "w-[95px] hover:w-[150px]"} text-[12px] transition1`}>
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between bg-white/10 backdrop-blur-md text-white px-3 py-2 rounded-lg border border-white/20 cursor-pointer">
        <div className="flex items-center gap-1">
          <img src={selectedLanguage?.flag || languages[0].flag} alt={selectedLanguage?.name || "flag"} className="w-5 h-5"/>
          <span className="hidden group-hover:inline-block">{selectedLanguage?.name}</span>
          <span className="text-gray-300">({selectedLanguage?.short || ""})</span>
        </div>
        <i className={`fa-solid ${isOpen ? "fa-chevron-up" : "fa-chevron-down"} text-white text-[10px]`} />
      </button>

      {isOpen && (
        <ul className="absolute mt-3 w-full bg-[#414141c8] backdrop-blur-[50px] border border-white/20 rounded-lg shadow-lg z-10 overflow-hidden text-white">
          {languages.map((lang) => (
            <li key={lang.short} onClick={() => handleSelect(lang)} className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-white/20 transition">
              <img src={lang.flag} alt={lang.name} className="w-5 h-5" />
              <span>{lang.name}</span>
              <span className="text-gray-300">({lang.short})</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ChooseLanguage;
