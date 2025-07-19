import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Akhdar-01.png';
import i18n from '../../../public/locales.js';

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'ar', label: 'العربية' },
];

const Header = () => {
  const [lang, setLang] = useState(i18n.language || 'en');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleLangChanged = (lng) => setLang(lng);
    i18n.on('languageChanged', handleLangChanged);
    return () => {
      i18n.off('languageChanged', handleLangChanged);
    };
  }, []);

  const handleLangChange = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
    setDropdownOpen(false);
  };

  return (
    <header className="bg-[#F6F7F6]  flex items-center">
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
            <Link to="/project" className="text-sm text-gray-700 hover:text-green-500">Projects</Link>
            <Link to="/calc-company" className="text-sm text-gray-700 hover:text-green-500">Solutions</Link>
          </div>
        </div>

        {/* Right Side: Language, Login, Get Now */}
        <div className="flex relative items-center self-center space-x-4">
          {/* Language Dropdown */}
          <div className="relative">
            <button
              className="flex gap-1 items-center px-2 py-1 text-sm text-gray-700 rounded border focus:outline-none focus:ring-2 focus:ring-green-400"
              onClick={() => setDropdownOpen((open) => !open)}
              aria-haspopup="listbox"
              aria-expanded={dropdownOpen}
            >
              {LANGUAGES.find(l => l.code === lang)?.label || 'Language'}
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {dropdownOpen && (
              <ul className="absolute z-10 mt-1 w-full bg-white rounded border shadow-lg" role="listbox">
                {LANGUAGES.map(({ code, label }) => (
                  <li
                    key={code}
                    className={`px-4 py-2 cursor-pointer hover:bg-green-100 ${lang === code ? 'font-bold text-green-600' : ''}`}
                    onClick={() => handleLangChange(code)}
                    role="option"
                    aria-selected={lang === code}
                  >
                    {label}
                  </li>
                ))}
              </ul>
            )}
          </div>
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
