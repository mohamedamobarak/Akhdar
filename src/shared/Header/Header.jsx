import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Akhdar-01.png';
import i18n from '../../../public/locales.js';

const Header = () => {
  const [lang, setLang] = useState(i18n.language || 'en');

  useEffect(() => {
    const handleLangChanged = (lng) => setLang(lng);
    i18n.on('languageChanged', handleLangChanged);
    return () => {
      i18n.off('languageChanged', handleLangChanged);
    };
  }, []);

  const changeToArabic = () => {
    i18n.changeLanguage('ar');
    localStorage.setItem('i18nextLng', 'ar');
  };

  return (
    <header className="bg-[#F6F7F6] min-h-[160px] flex items-center">
      <nav className="container flex justify-between items-center px-4 mx-auto">
        {/* Left Side: Logo + Nav Links */}
        <div className="flex gap-10 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Akhdar" className="w-auto h-36" />
          </div>

          {/* Navigation Links */}
          <div className="flex justify-center items-center self-center space-x-6">
            <Link to="/" className="text-sm text-gray-700 hover:text-green-500">Home</Link>
            <Link to="/about" className="text-sm text-gray-700 hover:text-green-500">About Us</Link>
            <a href="#" className="text-sm text-gray-700 hover:text-green-500">Contact</a>
            <a href="#" className="text-sm text-gray-700 hover:text-green-500">Projects</a>
            <a href="#" className="text-sm text-gray-700 hover:text-green-500">Solutions</a>
          </div>
        </div>

        {/* Right Side: Language, Login, Get Now */}
        <div className="flex items-center self-center space-x-4">
          <button
            className={`text-gray-700 text-sm ${lang === 'ar' ? 'font-bold underline' : ''}`}
            onClick={changeToArabic}
          >
            العربية
          </button>
          <a href="#" className="text-sm text-gray-700 hover:text-green-500">Log in</a>
          <button className="bg-[#7CE495] text-black px-4 py-1.5 rounded-full text-sm hover:bg-green-400 transition-colors">
            Get Now
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
