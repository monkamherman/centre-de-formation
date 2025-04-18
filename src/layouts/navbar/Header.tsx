import Navbar from './Navbar';
import React from 'react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  return (
    <header className="relative z-10">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
    </header>
  );
};

export default Header;