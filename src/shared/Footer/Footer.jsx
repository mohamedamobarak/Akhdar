import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const Footer = ({ rounded = true }) => {
  const footerLinks = {
    'About Us': {
      'Mission & Vision': '#',
      'Impact': '#',
      'Team': '#',
    },
    'Calculator': {
      'Individual': '#',
      'Business': '#',
    },
    'Impact Platform': {
      'Section 1': '#',
      'Section 2': '#',
      'Section 3': '#',
    },
    'Project Owner': {
      'Effects': '#',
      'Section 2': '#',
      'Section 3': '#',
    },
    'API Integration': {
      'Why Akhdar': '#',
      'How is works': '#',
      'Share your Impact': '#',
    },
    'ESG Consultation': {
      'Measure': '#',
      'Reduction': '#',
      'Comply': '#',
    },
  };

  return (
    <footer className={`bg-[#003B2D] text-white py-12 ${rounded ? 'rounded-t-[30px]' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Social Links */}
          <div className="w-full md:w-auto mb-8 md:mb-0">
            <div className="mb-6">
              <img 
                src="/images/akhdar-logo-white.png" 
                alt="Akhdar Logo" 
                className="h-8"
              />
            </div>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#7CE495] transition-colors">
                <FaFacebookF size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#7CE495] transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="mailto:contact@akhdar.com" className="hover:text-[#7CE495] transition-colors">
                <HiMail size={22} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 ml-0 md:ml-16">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-medium mb-4 whitespace-nowrap ">{category}</h3>
                <ul className="space-y-2">
                  {Object.entries(links).map(([label, path]) => (
                    <li key={label}>
                      <a 
                        href={path}
                        className="text-sm text-gray-300 hover:text-[#7CE495] transition-colors whitespace-nowrap"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 