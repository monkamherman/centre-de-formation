import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';

interface INavbarProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const Navbar: React.FC<INavbarProps> = ({ darkMode, setDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, ] = useState('en');
  const [windowScroll, setWindowScroll] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState({
    home: false,
    academics: false,
    admissions: false
  });

  useEffect(() => {
    const handleScroll = () => {
      setWindowScroll(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (menu: 'home' | 'academics' | 'admissions') => {
    setDropdownOpen(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className={`sticky-nav bg-white/80 dark:bg-dark-800/80 bg-blur ${windowScroll > 50 ? 'nav-scrolled' : ''}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3">
                <i className="fas fa-graduation-cap text-white text-xl"></i>
              </div>
              <span className="text-xl font-heading font-bold dark:text-white">Future<span className="text-primary">Academy</span></span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Home Dropdown */}
            <div className="relative">
              <button 
                className="flex items-center font-medium hover:text-primary transition-colors"
                onClick={() => toggleDropdown('home')}
              >
                <span>Home</span>
                <i className={`fas fa-chevron-down ml-1 text-xs transition-transform ${dropdownOpen.home ? 'transform rotate-180' : ''}`}></i>
              </button>
              {dropdownOpen.home && (
                <div className="absolute mt-2 py-2 w-48 bg-white dark:bg-dark-800 rounded-md shadow-lg z-10">
                  <Link to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-dark-700">Welcome</Link>
                  <Link to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-dark-700">About Us</Link>
                  <Link to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-dark-700">Our Team</Link>
                </div>
              )}
            </div>
            
            {/* Academics Dropdown */}
            <div className="relative">
              <button 
                className="flex items-center font-medium hover:text-primary transition-colors"
                onClick={() => toggleDropdown('academics')}
              >
                <span>Academics</span>
                <i className={`fas fa-chevron-down ml-1 text-xs transition-transform ${dropdownOpen.academics ? 'transform rotate-180' : ''}`}></i>
              </button>
              {dropdownOpen.academics && (
                <div className="absolute mt-2 py-2 w-48 bg-white dark:bg-dark-800 rounded-md shadow-lg z-10">
                  <Link to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-dark-700">Curriculum</Link>
                  <Link to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-dark-700">STEM Programs</Link>
                  <Link to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-dark-700">Arts & Humanities</Link>
                  <Link to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-dark-700">Sports Academy</Link>
                </div>
              )}
            </div>
            
            {/* Right side buttons */}
            <div className="flex items-center space-x-4">
              {/* Language selector */}
              <div className="relative">
                <button className="flex items-center space-x-1 focus:outline-none">
                  <span className="hidden sm:inline">
                    {language === 'en' ? 'English' : 
                     language === 'fr' ? 'French' : 
                     language === 'ar' ? 'Arabic' : language}
                  </span>
                  <i className="fas fa-globe"></i>
                  <i className="fas fa-chevron-down text-xs"></i>
                </button>
              </div>
              
              {/* Dark mode toggle */}
              <button 
                onClick={toggleDarkMode}
                className="p-2 rounded-full focus:outline-none"
              >
                {darkMode ? (
                  <i className="fas fa-sun text-yellow-300"></i>
                ) : (
                  <i className="fas fa-moon text-gray-700"></i>
                )}
              </button>
              
              {/* Mobile menu button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-full focus:outline-none"
              >
                {mobileMenuOpen ? (
                  <i className="fas fa-times"></i>
                ) : (
                  <i className="fas fa-bars"></i>
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