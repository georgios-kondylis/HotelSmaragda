export type GlobalContextType = {
  isMobileMenuOpen?: boolean;
  toggleMobileMenu?: () => void;
  setIsMobileMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  selectedLanguage: any, setSelectedLanguage: any,
};
