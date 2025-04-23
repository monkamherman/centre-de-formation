import { AiOutlineBars } from "react-icons/ai";
import { FaTimes, FaChevronDown, FaGlobe, FaSun, FaMoon, FaGraduationCap } from "react-icons/fa";
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import React from "react";
interface INavbarProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const Navbar: React.FC<INavbarProps> = ({ darkMode, setDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language] = useState('en');
  const [windowScroll, setWindowScroll] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState({
    home: false,
    academics: false,
    admissions: false
  });
  const navbarRef = useRef<HTMLDivElement>(null);

  // Gestion du scroll
  useEffect(() => {
    const handleScroll = () => {
      setWindowScroll(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer les menus quand on clique à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setDropdownOpen({
          home: false,
          academics: false,
          admissions: false
        });
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [navbarRef]);

  const toggleDropdown = (menu: keyof typeof dropdownOpen) => {
    setDropdownOpen(prev => ({
      ...prev,
      [menu]: !prev[menu],
      ...(menu === 'home' ? { academics: false, admissions: false } : 
          menu === 'academics' ? { home: false, admissions: false } : 
          { home: false, academics: false })
    }));
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setDropdownOpen({
      home: false,
      academics: false,
      admissions: false
    });
  };

  // Données pour les menus
  const menuItems = {
    home: [
      { name: "Welcome", link: "#welcome" },
      { name: "About Us", link: "#about" },
      { name: "Our Team", link: "#team" }
    ],
    academics: [
      { name: "Curriculum", link: "#curriculum" },
      { name: "STEM Programs", link: "#stem" },
      { name: "Arts & Humanities", link: "#arts" },
      { name: "Sports Academy", link: "#sports" }
    ],
    admissions: [
      { name: "How to Apply", link: "#apply" },
      { name: "Tuition", link: "#tuition" },
      { name: "Scholarships", link: "#scholarships" }
    ]
  };

  return (
    <nav 
      ref={navbarRef}
      className={`fixed w-full z-50 transition-all duration-300 ${
        windowScroll > 50 
          ? 'bg-white/95 dark:bg-gray-900/95 shadow-md py-2' 
          : 'bg-white/90 dark:bg-gray-900/90 py-3'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link 
              to="/" 
              className="flex items-center"
              onClick={closeAllMenus}
            >
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                <FaGraduationCap className="text-white text-xl" />
              </div>
              <span className="text-xl font-bold dark:text-white">
                Future<span className="text-yellow-500">Academy</span>
              </span>
            </Link>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {/* Menu Items */}
            {Object.entries(menuItems).map(([key, items]) => (
              <div key={key} className="relative">
                <button
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                    dropdownOpen[key as keyof typeof dropdownOpen]
                      ? 'text-yellow-500 dark:text-yellow-400'
                      : 'text-gray-700 hover:text-yellow-500 dark:text-gray-300 dark:hover:text-yellow-400'
                  }`}
                  onClick={() => toggleDropdown(key as keyof typeof dropdownOpen)}
                >
                  <span className="capitalize">{key}</span>
                  <FaChevronDown 
                    className={`ml-1 text-xs transition-transform ${
                      dropdownOpen[key as keyof typeof dropdownOpen] ? 'transform rotate-180' : ''
                    }`} 
                  />
                </button>
                
                {dropdownOpen[key as keyof typeof dropdownOpen] && (
                  <div className="absolute left-0 mt-2 w-56 origin-top-right bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                    <div className="py-1">
                      {items.map((item) => (
                        <Link
                          key={item.name}
                          to={item.link}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                          onClick={closeAllMenus}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Right side items */}
            <div className="flex items-center ml-4 space-x-2 lg:space-x-4">
              {/* Language Selector */}
              <div className="relative">
                <button className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-yellow-500 dark:text-gray-300 dark:hover:text-yellow-400">
                  <FaGlobe className="mr-1" />
                  <span className="hidden lg:inline">
                    {language === 'en' ? 'English' : 
                     language === 'fr' ? 'Français' : 
                     language === 'ar' ? 'العربية' : language}
                  </span>
                </button>
              </div>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full text-gray-700 hover:text-yellow-500 dark:text-gray-300 dark:hover:text-yellow-400 focus:outline-none"
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <FaTimes className="block h-6 w-6" />
              ) : (
                <AiOutlineBars className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-800 shadow-lg">
          {/* Mobile Menu Items */}
          {Object.entries(menuItems).map(([key, items]) => (
            <div key={key} className="space-y-1">
              <button
                className={`w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium ${
                  dropdownOpen[key as keyof typeof dropdownOpen]
                    ? 'text-yellow-500 dark:text-yellow-400'
                    : 'text-gray-700 hover:text-yellow-500 dark:text-gray-300 dark:hover:text-yellow-400'
                }`}
                onClick={() => toggleDropdown(key as keyof typeof dropdownOpen)}
              >
                <span className="capitalize">{key}</span>
                <FaChevronDown 
                  className={`text-xs transition-transform ${
                    dropdownOpen[key as keyof typeof dropdownOpen] ? 'transform rotate-180' : ''
                  }`} 
                />
              </button>
              
              <div className={`pl-4 space-y-1 ${
                dropdownOpen[key as keyof typeof dropdownOpen] ? 'block' : 'hidden'
              }`}>
                {items.map((item) => (
                  <Link
                    key={item.name}
                    to={item.link}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-yellow-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-yellow-400 dark:hover:bg-gray-700"
                    onClick={closeAllMenus}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Mobile Right Side Items */}
          <div className="pt-4 pb-2 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between px-3 py-2">
              <span className="text-base font-medium text-gray-700 dark:text-gray-300">Language</span>
              <button className="flex items-center text-gray-700 hover:text-yellow-500 dark:text-gray-300 dark:hover:text-yellow-400">
                <FaGlobe className="mr-2" />
                <span>
                  {language === 'en' ? 'English' : 
                   language === 'fr' ? 'Français' : 
                   language === 'ar' ? 'العربية' : language}
                </span>
              </button>
            </div>
            <div className="flex items-center justify-between px-3 py-2">
              <span className="text-base font-medium text-gray-700 dark:text-gray-300">Theme</span>
              <button
                onClick={toggleDarkMode}
                className="flex items-center text-gray-700 hover:text-yellow-500 dark:text-gray-300 dark:hover:text-yellow-400"
              >
                {darkMode ? (
                  <>
                    <FaSun className="mr-2 text-yellow-400" />
                    <span>Light</span>
                  </>
                ) : (
                  <>
                    <FaMoon className="mr-2" />
                    <span>Dark</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;