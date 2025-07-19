import React from 'react';
import COP16 from '../../../assets/home/COP16.svg';
import SPA from '../../../assets/home/press.svg'; // Placeholder, replace with actual SPA logo if available
import MISK from '../../../assets/home/MISK.svg';
import AYC from '../../../assets/home/AYCgreen.svg';

const partners = [
  { name: 'COP16', img: COP16 },
  { name: 'SPA', img: SPA }, // Replace with actual SPA logo when available
  { name: 'Misk', img: MISK },
  { name: 'Arab Youth Center', img: AYC },
];

const Partners = () => (
  <section className="py-12">
    <h2 className="text-center font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#003B2D] mb-8">
      Trusted and Featured by:
    </h2>
    <div className="flex flex-wrap justify-center items-center gap-10">
      {partners.map((partner) => (
        <img
          key={partner.name}
          src={partner.img}
          alt={partner.name}
          className="h-20 object-contain grayscale hover:grayscale-0 transition"
        />
      ))}
    </div>
  </section>
);

export default Partners; 