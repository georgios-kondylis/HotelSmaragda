// Navbar.tsx
import { useGlobalProps } from "../../GlobalContext";
import { useMediaQuery } from "react-responsive";

import { NavLink } from "react-router-dom";

import MobileMenu from "./MobileMenu";
import { navLinks } from "./utils";
import ChooseLanguage from "./ChooseLanguage";

const Navbar = () => {
  const { toggleMobileMenu, } = useGlobalProps();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <nav className={`fixed top-0 w-full flex justify-center z-50`}>
      
      <div className="w-full flex justify-between items-center mainPX MAX_W 
            border border-white/10 py-2 m-[10px] rounded-[12px] 
            backdrop-blur-[20px] bg-black/40 shadow-lg">

        <img id="LOGO" src="/icons/logoPlainWhite.png" className="w-[200px]" alt="" />

        <ul className="max-md:hidden flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link, i) => {
            return (
              <NavLink  key={i} to={link.href} className={({ isActive }) =>
                `${isActive ? `` : ""} text-[#e1e1e1] hover:text-white tracking-[1px] font-extralight`
               }
              >
              {link.title}
            </NavLink>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <ChooseLanguage/>
          {isMobile &&( <i className={`text-2xl fa-solid fa-bars cursor-pointer`} onClick={toggleMobileMenu}> </i>)}
        </div>

        <MobileMenu  />
      </div>
    </nav>
  );
};

export default Navbar;
