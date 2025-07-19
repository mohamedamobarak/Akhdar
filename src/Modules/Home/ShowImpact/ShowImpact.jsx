import React from 'react';
import phoneImg from '../../../assets/home/mobile.png';
import greenLeaf from '../../../assets/green_leaf.svg';

const bulletPoints = [
  'Grow your business sustainably',
  'Enhance customer satisfaction',
  'Strengthen brand loyalty',
  'Engage your team and community in climate action',
];

const ShareYourImpact = () => (
  <section className="py-16 bg-[#f7fcf8]">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-12 px-4">
      {/* Left: Mobile Image */}
      <div className="flex-1 flex justify-center mb-8 md:mb-0">
        <img src={phoneImg} alt="Mobile" className="w-60 md:w-80 lg:w-[340px] h-auto" />
      </div>
      {/* Right: Text and Bullets */}
      <div className="flex-1 max-w-xl">
        <h3 className="text-3xl md:text-4xl font-bold text-[#12644f] mb-4 text-left">Share Your Impact!</h3>
        <p className="text-gray-800 text-lg mb-8 text-left">
          Use Akhdar's Verified Impact Page to track your sustainability journey and showcase your climate contributions to customers and stakeholders.
        </p>
        <ul className="space-y-5">
          {bulletPoints.map((point, idx) => (
            <li key={idx} className="flex items-center text-lg text-black">
              <img src={greenLeaf} alt="leaf" className="w-7 h-7 mr-3" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default ShareYourImpact; 