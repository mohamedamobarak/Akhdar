import React from 'react';
import logo from '../../../assets/Akhdar-01.png';

const Header = () => {
  return (
    <header className="bg-[#F6F7F6] min-h-[160px] flex items-center">
      <nav className="container mx-auto px-4 flex items-center justify-between">
        {/* Left Side: Logo + Nav Links */}
        <div className="flex items-center gap-10">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Akhdar" className="h-36 w-auto" />
          </div>

          {/* Navigation Links */}
          <div className="flex items-center justify-center space-x-6 self-center">
            <a href="#" className="text-gray-700 hover:text-green-500 text-sm">About</a>
            <a href="#" className="text-gray-700 hover:text-green-500 text-sm">Contact</a>
            <a href="#" className="text-gray-700 hover:text-green-500 text-sm">Projects</a>
            <a href="#" className="text-gray-700 hover:text-green-500 text-sm">Solutions</a>
          </div>
        </div>

        {/* Right Side: Language, Login, Get Now */}
        <div className="flex items-center space-x-4 self-center">
          <button className="text-gray-700 text-sm">En</button>
          <a href="#" className="text-gray-700 hover:text-green-500 text-sm">Log in</a>
          <button className="bg-[#7CE495] text-black px-4 py-1.5 rounded-full text-sm hover:bg-green-400 transition-colors">
            Get Now
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
