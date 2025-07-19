import React from 'react';

const HeroSection = () => (
  <section className="min-h-[600px] flex flex-col items-center justify-center text-center py-16">
    <h1 className="text-[#003B2D] text-4xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight mb-4">
      Offset Your Carbon Footprint, <br /> Maximize Your Impact
    </h1>
    <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-lg">
      Empowering Saudi Arabia’s Journey to Net Zero by Reducing Carbon Footprints with Smart Offsetting Solutions
    </p>
    <div className="flex justify-center space-x-4 mb-8">
      <button className="bg-[#7CE495] text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-green-400 transition-colors">
        Offset Now
      </button>
      <button className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
        Marketplace
      </button>
    </div>
  </section>
);

export default HeroSection; 