import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { GlobalContextType } from "./constants/types";
import { languages } from "./exports";

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);


  return (
    <GlobalContext.Provider
      value={{
        isMobileMenuOpen, toggleMobileMenu, setIsMobileMenuOpen,   
        selectedLanguage, setSelectedLanguage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// Optional: custom hook to use context
export const useGlobalProps = () => {
  const props = useContext(GlobalContext);
  if (!props) {
    throw new Error("useGlobalContext must be used within GlobalProvider");
  }
  return props;
};
