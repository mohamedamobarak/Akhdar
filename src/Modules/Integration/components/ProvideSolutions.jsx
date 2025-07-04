import React from 'react'
import greenLeaf from '../../../assets/api-integration/green-leaf.svg';
import { useTranslation } from 'react-i18next';

const TimelineCircle = () => (
  <div className="flex items-center justify-center mb-2">
    <svg width="32" height="32" viewBox="0 0 32 32">
      <circle cx="16" cy="16" r="14" fill="#F0F5EF" stroke="#81F18E" strokeWidth="3"/>
      <circle cx="16" cy="16" r="8" fill="#81F18E" />
    </svg>
  </div>
);

const ProvideSolutions = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language || 'en';
  const isRTL = lang === 'ar';
  const dir = isRTL ? 'rtl' : 'ltr';

  return (
    <section
      className="flex flex-col w-full min-h-screen bg-[#F0F5EF] px-4 mx-auto py-12"
      dir={dir}
      style={{ direction: dir }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
        We Provide Solutions for <br className="hidden lg:block" />Different Industries
      </h2>
      <div className="relative w-full max-w-6xl mx-auto min-h-[600px] hidden lg:block">
        {/* SVG Curved Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 500"   preserveAspectRatio="xMidYMid meet" fill="none">
          {/* Top left curve */}
          <path d="M 200 65 Q 480 30 500 220" stroke="#81F18E" strokeWidth="3" fill="none" />
          {/* Top right curve */}
          <path d="M 800 65 Q 520 30 500 220" stroke="#81F18E" strokeWidth="3" fill="none" />
          {/* Bottom left curve */}
          {/* Bottom left straight line */}
          <path d="M 200 265 L 440 265" stroke="#81F18E" strokeWidth="3" fill="none" />
          {/* Bottom right straight line */}
          <path d="M 800 265 L 500 265" stroke="#81F18E" strokeWidth="3" fill="none" />
        </svg>
        {/* Center leaf */}
        <img src={greenLeaf} alt="Green Leaf" className="absolute left-1/2 top-1/2 w-52 h-52  xl:w-64 xl:h-64 -translate-x-1/2 -translate-y-1/2 z-10" />
        {/* Top left: E-Commerce */}
        <div className="absolute flex flex-col items-center text-center w-80 top-[12%] left-[6%]" >
          <TimelineCircle />
          <h3 className="text-xl font-bold text-primary mb-1">E-Commerce</h3>
          <p className="text-base text-[#013229] max-w-xs">
            Offer carbon-neutral products, enhancing customer satisfaction and brand loyalty by supporting sustainable shopping choice.
          </p>
        </div>
        {/* Top right: Fintech */}
        <div className="absolute flex flex-col items-center text-center w-80 top-[12%] right-[6%]" >
          <TimelineCircle />
          <h3 className="text-xl font-bold text-primary mb-1">Fintech</h3>
          <p className="text-base text-[#013229] max-w-xs">
            Seamlessly offer carbon offsetting services to meet growing consumer demand for climate-conscious financial products
          </p>
        </div>
        {/* Bottom left: Logistics */}
        <div className="absolute flex flex-col items-center text-center w-80  bottom-[22%] left-[6%]" >
          <TimelineCircle />
          <h3 className="text-xl font-bold text-primary mb-1">Logistics</h3>
          <p className="text-base text-[#013229] max-w-xs">
            Offset their carbon emissions in real-time, providing transparency and accountability in their supply chains while enhancing your sustainability commitments
          </p>
        </div>
        {/* Bottom right: Mobile Apps */}
        <div className="absolute flex flex-col items-center text-center w-80 bottom-[18%] right-[6%]">
          <TimelineCircle />
          <h3 className="text-xl font-bold text-primary mb-1">Mobile Apps</h3>
          <p className="text-base text-[#013229] max-w-xs">
            Enable real-time carbon emission offsets directly from your app, ensuring transparency and accountability across your supply chain while strengthening your sustainability goals.
          </p>
        </div>
      </div>
      {/* Mobile layout */}
      <div className="flex flex-col lg:hidden items-center w-full gap-8">
        <img src={greenLeaf} alt="Green Leaf" className="w-40 h-40 mx-auto mb-4" />
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center text-center">
            <TimelineCircle />
            <h3 className="text-lg font-bold text-primary mt-2">E-Commerce</h3>
            <p className="text-base text-[#013229] max-w-xs">
              Offer carbon-neutral products, enhancing customer satisfaction and brand loyalty by supporting sustainable shopping choice.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <TimelineCircle />
            <h3 className="text-lg font-bold text-primary mt-2">Logistics</h3>
            <p className="text-base text-[#013229] max-w-xs">
              Offset their carbon emissions in real-time, providing transparency and accountability in their supply chains while enhancing your sustainability commitments
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <TimelineCircle />
            <h3 className="text-lg font-bold text-primary mt-2">Fintech</h3>
            <p className="text-base text-[#013229] max-w-xs">
              Seamlessly offer carbon offsetting services to meet growing consumer demand for climate-conscious financial products
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <TimelineCircle />
            <h3 className="text-lg font-bold text-primary mt-2">Mobile Apps</h3>
            <p className="text-base text-[#013229] max-w-xs">
              Enable real-time carbon emission offsets directly from your app, ensuring transparency and accountability across your supply chain while strengthening your sustainability goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvideSolutions;
