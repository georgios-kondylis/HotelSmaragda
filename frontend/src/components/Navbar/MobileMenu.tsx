import { useGlobalProps } from "../../GlobalContext";
import { navLinks, logo } from "./utils";
import { NavLink } from "react-router-dom";


const MobileMenu = () => {
  const { isMobileMenuOpen, toggleMobileMenu, } =
    useGlobalProps();

  return (
    <>
      {isMobileMenuOpen /* Backdrop */ && <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" onClick={toggleMobileMenu}/>}

      {/* Slide-in menu */}
      <div className={`fixed top-0 right-0 h-full w-[50%] max-w-sm z-50 transition1 mainPX 
        ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-[2000px]'}`}
      >

        {/* ✅ This wrapper ensures all content sits above the video */}
        <div className={`relative z-10`}>
          <div className="flex justify-between items-center p-4 border-b border-[#8080804f]">
            <i className="fa-solid fa-left-long text-[30px] p-1 transition1 cursor-pointer
                          hover:scale-[1.1] hover:translate-x-[-10px] hover:px-[10px]"
              onClick={toggleMobileMenu}>
            </i>
            <h2 className="text-xl font-bold">{logo}</h2>
          </div>

          <ul className="flex flex-col mainPX py-4">
            {navLinks.map((link, i) => (
              <NavLink key={i} to={link.href} onClick={toggleMobileMenu} className="flex w-full relative group">
              {link.title}
              </NavLink>
            ))}
          </ul>
        </div>
      </div>

    </>
  );
};

export default MobileMenu;
