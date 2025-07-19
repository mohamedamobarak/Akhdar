import React, { useEffect, useRef, useState } from 'react'
import greenLeaf from '../../../assets/api-integration/green-leaf.svg';
import { useTranslation } from 'react-i18next';
import i18n from '../../../../public/locales.js';

const TimelineCircle = () => (
  <div className="flex items-center justify-center mb-2">
    <svg width="32" height="32" viewBox="0 0 32 32">
      <circle cx="16" cy="16" r="14" fill="#F0F5EF" stroke="#81F18E" strokeWidth="3"/>
      <circle cx="16" cy="16" r="8" fill="#81F18E" />
    </svg>
  </div>
);

const ProvideSolutions = () => {
  const { t } = useTranslation();
  const lang = i18n.language || 'en';
  const isRTL = lang === 'ar';
  const dir = t('integration.direction') || (isRTL ? 'rtl' : 'ltr');
  const industries = t('integration.provideSolutions.industries', { returnObjects: true });

  // Refs for dynamic SVG connections
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const centerRef = useRef(null);
  const topLeftRef = useRef(null);
  const topRightRef = useRef(null);
  const bottomLeftRef = useRef(null);
  const bottomRightRef = useRef(null);
  const [svgPaths, setSvgPaths] = useState('');



  // Function to calculate dynamic SVG paths
  const updateSVGPaths = () => {
    if (!containerRef.current || !centerRef.current || !topLeftRef.current ||
        !topRightRef.current || !bottomLeftRef.current || !bottomRightRef.current) {
      return;
    }

    const containerRect = containerRef.current.getBoundingClientRect();
    const centerRect = centerRef.current.getBoundingClientRect();
    const topLeftRect = topLeftRef.current.getBoundingClientRect();
    const topRightRect = topRightRef.current.getBoundingClientRect();
    const bottomLeftRect = bottomLeftRef.current.getBoundingClientRect();
    const bottomRightRect = bottomRightRef.current.getBoundingClientRect();

    // Calculate relative positions as percentages
    const centerX = ((centerRect.left + centerRect.width / 2) - containerRect.left) / containerRect.width * 100;
    const centerY = ((centerRect.top + centerRect.height / 2) - containerRect.top) / containerRect.height * 100;

    const topLeftX = ((topLeftRect.left + topLeftRect.width / 2) - containerRect.left) / containerRect.width * 100;
    const topLeftY = ((topLeftRect.top + topLeftRect.height / 2) - containerRect.top) / containerRect.height * 100;

    const topRightX = ((topRightRect.left + topRightRect.width / 2) - containerRect.left) / containerRect.width * 100;
    const topRightY = ((topRightRect.top + topRightRect.height / 2) - containerRect.top) / containerRect.height * 100;

    const bottomLeftX = ((bottomLeftRect.left + bottomLeftRect.width / 2) - containerRect.left) / containerRect.width * 100;
    const bottomLeftY = ((bottomLeftRect.top + bottomLeftRect.height / 2) - containerRect.top) / containerRect.height * 100;

    const bottomRightX = ((bottomRightRect.left + bottomRightRect.width / 2) - containerRect.left) / containerRect.width * 100;
    const bottomRightY = ((bottomRightRect.top + bottomRightRect.height / 2) - containerRect.top) / containerRect.height * 100;

    // Generate SVG paths
    const paths = `
      <path d="M ${topLeftX} ${topLeftY} Q ${(topLeftX + centerX) / 2} ${topLeftY - 5} ${centerX} ${centerY}"
            stroke="#81F18E" stroke-width="5" fill="none" vector-effect="non-scaling-stroke" class="opacity-90" />
      <path d="M ${topRightX} ${topRightY} Q ${(topRightX + centerX) / 2} ${topRightY - 5} ${centerX} ${centerY}"
            stroke="#81F18E" stroke-width="5" fill="none" vector-effect="non-scaling-stroke" class="opacity-90" />
      <path d="M ${bottomLeftX} ${bottomLeftY} L ${centerX} ${centerY}"
            stroke="#81F18E" stroke-width="5" fill="none" vector-effect="non-scaling-stroke" class="opacity-90" />
      <path d="M ${bottomRightX} ${bottomRightY} L ${centerX} ${centerY}"
            stroke="#81F18E" stroke-width="5" fill="none" vector-effect="non-scaling-stroke" class="opacity-90" />
    `;

    setSvgPaths(paths);
  };

  // Update paths on mount and resize
  useEffect(() => {
    const handleResize = () => {
      setTimeout(updateSVGPaths, 100); // Small delay to ensure layout is complete
    };

    updateSVGPaths();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      className="flex flex-col w-full min-h-screen bg-[#F0F5EF] px-4 mx-auto py-6"
      dir={dir}
      style={{
        direction: dir,
        '--connection-opacity': '2',
        '--stroke-width-lg': '2',
        '--stroke-width-md': '2'
      }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
        {t('integration.provideSolutions.title')}
      </h2>
      <div ref={containerRef} className="relative w-full max-w-6xl mx-auto min-h-[600px] hidden md:block">
        {/* Dynamic SVG Curved Lines */}
        <svg
          ref={svgRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="none"
          style={{
            width: '100%',
            height: '100%'
          }}
          dangerouslySetInnerHTML={{ __html: svgPaths }}
        />
        {/* Center leaf */}
        <img ref={centerRef} src={greenLeaf} alt="Green Leaf" className="absolute left-1/2 top-1/2 w-52 h-52 xl:w-64 xl:h-64 -translate-x-1/2 -translate-y-1/2 z-10" />

        {/* Top left: E-Commerce */}
        <div
          className="absolute flex flex-col items-center text-center w-72 lg:w-80"
          style={{ top: '5%', left: '5%' }}
        >
          <div ref={topLeftRef}>
            <TimelineCircle />
          </div>
          <h3 className="text-lg lg:text-xl font-bold text-primary mb-1 text-center">{industries[0].name}</h3>
          <p className="text-sm lg:text-base text-[#013229] max-w-xs text-center">
            {industries[0].description}
          </p>
        </div>

        {/* Top right: Fintech */}
        <div
          className="absolute flex flex-col items-center text-center w-72 lg:w-80"
          style={{ top: '5%', right: '5%' }}
        >
          <div ref={topRightRef}>
            <TimelineCircle />
          </div>
          <h3 className="text-lg lg:text-xl font-bold text-primary mb-1 text-center">{industries[1].name}</h3>
          <p className="text-sm lg:text-base text-[#013229] max-w-xs text-center">
            {industries[1].description}
          </p>
        </div>

        {/* Bottom left: Logistics */}
        <div
          className="absolute flex flex-col items-center text-center w-72 lg:w-80 bottom-[27%] lg:bottom-[25%] left-[5%]"
      
        >
          <div ref={bottomLeftRef}>
            <TimelineCircle />
          </div>
          <h3 className="text-lg lg:text-xl font-bold text-primary mb-1 text-center">{industries[2].name}</h3>
          <p className="text-sm lg:text-base text-[#013229] max-w-xs text-center">
            {industries[2].description}
          </p>
        </div>

        {/* Bottom right: Mobile Apps */}
        <div
          className="absolute flex flex-col items-center text-center w-72 lg:w-80 bottom-[27%]  lg:bottom-[21%] right-[5%]"
          
        >
          <div ref={bottomRightRef}>
            <TimelineCircle />
          </div>
          <h3 className="text-lg lg:text-xl font-bold text-primary mb-1 text-center">{industries[3].name}</h3>
          <p className="text-sm lg:text-base text-[#013229] max-w-xs text-center">
            {industries[3].description}
          </p>
        </div>
      </div>



      {/* Mobile layout */}
      <div className="flex flex-col md:hidden items-center w-full gap-8">
        <img src={greenLeaf} alt="Green Leaf" className="w-40 h-40 mx-auto mb-4" />
        <div className="flex flex-col items-center gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <TimelineCircle />
              <h3 className="text-lg font-bold text-primary mt-2 text-center">{industry.name}</h3>
              <p className="text-base text-[#013229] max-w-xs text-center">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvideSolutions;
