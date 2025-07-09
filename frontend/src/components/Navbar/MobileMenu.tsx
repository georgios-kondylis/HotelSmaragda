import { useGlobalProps } from "../../GlobalContext";
import { navLinks } from "../../constants";
import { NavLink } from "react-router-dom";
import VideoBg from "../ui/VideoBg";
import { logo } from "../../constants";

const MobileMenu = () => {
  const { isMobileMenuOpen, toggleMobileMenu, isDarkMode, customBG, coloredText } =
    useGlobalProps();

  return (
    <>
      {isMobileMenuOpen /* Backdrop */ && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={toggleMobileMenu}
        ></div>
      )}

      {/* Slide-in menu */}
      <div className={`fixed top-0 right-0 h-full w-[50%] max-w-sm z-50 transition1 mainPX 
        ${isMobileMenuOpen ? `translate-x-0 ${isDarkMode && 'shadow-[0px_-10px_10px_#00ffee60]'}` : "translate-x-full"}
        ${customBG}`}
      >
        <VideoBg />

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
                <div className="text-[40px] max-md:text-[30px] font-bold group-hover:opacity-[8%] py-2 transition1 group-hover:translate-y-[-15px]">
                  {link.title}
                </div>
                <p className={`absolute bottom-2 text-[18px] tracking-[50px] transition1 opacity-0 pointer-events-none 
                               group-hover:tracking-wide group-hover:opacity-100 ${coloredText} ${isDarkMode && 'txtBrightBlue'} `}>
                  {link.title}
                </p>
              </NavLink>
            ))}
          </ul>
        </div>
      </div>

    </>
  );
};

export default MobileMenu;
