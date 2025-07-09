// Navbar.tsx
import { useGlobalProps } from "../../GlobalContext";
import { useMediaQuery } from "react-responsive";

import { NavLink } from "react-router-dom";
import { navLinks } from "../../constants";
import SwichBtn from "../ui/SwichBtn";
import MobileMenu from "./MobileMenu";
import { logo } from "../../constants";

const Navbar = () => {
  const { isDarkMode, customBG, toggleMobileMenu, } = useGlobalProps();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <nav className={`${customBG} ${isDarkMode? 'shadow-[0_5px_10px_#00ffee30]' : ''} fixed`}>
      
      <div className="w-full flex justify-between items-center mainPX MAX_W">
        <h1 className="">{logo}</h1>

        <ul className="max-md:hidden flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link, i) => {
            return (
              <NavLink  key={i} to={link.href} className={({ isActive }) =>
                `${isDarkMode? 'hover:text-[#00ffee]' : 'hover:text-[#ff8000] '} transition-colors ${
                  isActive ? 
                  `${isDarkMode ? "txtBrightBlueSm txtMainBlue" : "txtBrightOrangeSm txtMainOrange "}  font-semibold` : "text-inherit"}`
               }
              >
              {link.title}
            </NavLink>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <SwichBtn />
          {isMobile &&( <i className={`${customBG} text-2xl fa-solid fa-bars cursor-pointer`} onClick={toggleMobileMenu}> </i>)}
        </div>

        <MobileMenu  />
      </div>
    </nav>
  );
};

export default Navbar;
