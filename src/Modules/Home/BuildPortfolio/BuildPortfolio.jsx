import React from 'react';
import MapImage from '../../../assets/home/Build a Portfolio/Mappp 1.svg';

const BuildPortfolio = () => (
  <section className="py-16 text-center">
    <h3 className="text-2xl md:text-4xl font-bold mb-4 text-[#003B2D]">Build a Portfolio of Carbon Offset</h3>
    <p className="text-gray-700 max-w-2xl mx-auto mb-1 text-lg">
      Gain access to Support and fund carbon projects, supporting Saudi Vision 2030 by protecting nature and removing carbon from the atmosphere.
    </p>
    <div className="flex justify-center my-1">
      <img src={MapImage} alt="Saudi Arabia Map" className="w-full max-w-4xl h-auto mx-auto" style={{minHeight: '340px'}} />
    </div>
    <div className="flex flex-wrap justify-center gap-4 mt-0">
      <div className="flex items-center gap-2">
        <span className="inline-block w-6 h-6 rounded-full bg-[#2D253B]"></span>
        <span className="text-[#003B2D] font-medium">projects set 1</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="inline-block w-6 h-6 rounded-full bg-[#FFE05D]"></span>
        <span className="text-[#003B2D] font-medium">Projects set 2</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="inline-block w-6 h-6 rounded-full bg-[#7CE495]"></span>
        <span className="text-[#003B2D] font-medium">Projects set 3</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="inline-block w-6 h-6 rounded-full bg-[#009A56]"></span>
        <span className="text-[#003B2D] font-medium">Projects set 4</span>
      </div>
    </div>
  </section>
);

export default BuildPortfolio; 