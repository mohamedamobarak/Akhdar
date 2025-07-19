import React, { useState, useRef } from 'react'
import { useTranslation } from 'react-i18next';
import i18n from '../../../../public/locales.js';
import { gsapAnimation } from '@/lib/animations';
import { useGSAP } from '@gsap/react';

const OurMissionVision = () => {
  const { t } = useTranslation();
  const lang = i18n.language || 'en';
  const isRTL = lang === 'ar';

  // State for active timeline tab
  const [activeTimeline, setActiveTimeline] = useState('2026');

  // Animation refs
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const dotsRef = useRef([]);

  // Get current timeline content
  const getCurrentContent = () => {
    return t(`aboutus.missionvision.timeline.${activeTimeline}`, { returnObjects: true });
  };

  // Handle timeline tab change
  const handleTimelineChange = (timeline) => {
    if (timeline === activeTimeline) return;

    // Animate content out
    if (contentRef.current) {
      gsapAnimation(
        contentRef.current,
        { opacity: 1, y: 0 },
        { opacity: 0, y: 20, duration: 0.3, ease: 'power2.in' },
        { disableScrollTrigger: true }
      );
    }

    // Change timeline after animation
    setTimeout(() => {
      setActiveTimeline(timeline);

      // Animate content back in
      if (contentRef.current) {
        gsapAnimation(
          contentRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'back.out(1.7)' },
          { disableScrollTrigger: true }
        );
      }
    }, 300);
  };

  // GSAP animations
  useGSAP(() => {
    // Initial content animation
    if (contentRef.current) {
      gsapAnimation(
        contentRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'back.out(1.7)' },
        {
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 85%',
            once: true,
          }
        }
      );
    }

    // Animate dots
    if (dotsRef.current.length > 0) {
      gsapAnimation(
        dotsRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.7)' },
        {
          stagger: 0.1,
          scrollTrigger: {
            trigger: dotsRef.current[0],
            start: 'top 90%',
            once: true,
          }
        }
      );
    }
  }, { scope: sectionRef });
  return (
    <section
      className="flex relative flex-col gap-40 justify-center items-center py-16 w-full sm:gap-32 lg:flex-row lg:gap-1"
      dir={isRTL ? 'rtl' : 'ltr'}
      style={{ direction: isRTL ? 'rtl' : 'ltr' }}
    >
      {/* Left Side */}
      <div className="bg-primary text-white rounded-[40px] p-8 sm:p-14 flex flex-col justify-center w-full sm:w-[480px] min-h-[380px] z-20 shadow-md">
        <h2 className="mb-5 text-3xl font-bold leading-tight">{t('aboutus.missionvision.title')}</h2>
        <p className="mb-5 text-base">{t('aboutus.missionvision.desc')}</p>
        <p className="text-base font-semibold text-main">{t('aboutus.missionvision.plan')}</p>

      </div>

      {/* Center Circle */}
      <div className={`absolute ${isRTL ? 'lg:left-[calc(50%_-_80px)]' : 'lg:left-[calc(50%_-_120px)]'} top-1/2 -translate-y-2/3 sm-translate-y-1/2 flex flex-col items-center justify-center z-20`}>
        {/* Big Circle */}
        <div className={`relative flex items-center text-white justify-center bg-[#FDFBF1] border-4 border-main rounded-full w-[160px] h-[160px] shadow-lg`}>
          {/* Top Node - 2026 (active style if selected) */}
          <button
            onClick={() => handleTimelineChange('2026')}
            className={`flex cursor-pointer absolute top-0 left-1/2 z-30 justify-center items-center  rounded-full border-4 -translate-x-1/2 -translate-y-1/2 transition-all duration-300
              ${activeTimeline === '2026' ? 'bg-[#FDFBF1] border-main w-10 h-10' : 'bg-gray-300 border-gray-300 hover:bg-gray-200 w-7 h-7'}`}
            aria-label="Switch to 2026 timeline"
          >
            <div className={`w-5 h-5 rounded-full ${activeTimeline === '2026' ? 'bg-main' : 'bg-gray-400'}`}></div>
          </button>
          {/* Left Node - 2027 */}
          <button
            onClick={() => handleTimelineChange('2027')}
            className={`flex justify-center items-center cursor-pointer absolute -left-4 top-1/2 z-30  rounded-full -translate-y-1/2 border-4 transition-all duration-300
              ${activeTimeline === '2027' ? 'bg-[#FDFBF1] border-main w-10 h-10 -left-5' : 'bg-gray-300 border-gray-300 hover:bg-gray-200 w-7 h-7'}`}
            aria-label="Switch to 2027 timeline"
          >
                        <div className={`w-5 h-5 rounded-full ${activeTimeline === '2027' ? 'bg-main' : 'bg-gray-400'}`}></div>

          </button>
          {/* Right Node - 2029 */}
          <button
            onClick={() => handleTimelineChange('2029')}
            className={` flex justify-center items-center cursor-pointer absolute -right-4 top-1/2 z-30  rounded-full -translate-y-1/2 border-4 transition-all duration-300
              ${activeTimeline === '2029' ? 'bg-[#FDFBF1] border-main w-10 h-10 -right-5' : 'bg-gray-300 border-gray-300 hover:bg-gray-200 w-7 h-7'}`}
            aria-label="Switch to 2029 timeline"
          >
                                    <div className={`w-5 h-5 rounded-full ${activeTimeline === '2029' ? 'bg-main' : 'bg-gray-400'}`}></div>

          </button>
          {/* Bottom Node - 2030 */}
          <button
            onClick={() => handleTimelineChange('2030')}
            className={` flex justify-center items-center cursor-pointer absolute bottom-0 left-1/2 z-30  rounded-full border-4 -translate-x-1/2 translate-y-1/2 transition-all duration-300
              ${activeTimeline === '2030' ? 'bg-[#FDFBF1] border-main w-10 h-10' : 'bg-gray-300 border-gray-300 hover:bg-gray-200 w-7 h-7'}`}
            aria-label="Switch to 2030 timeline"
          >
                                    <div className={`w-5 h-5 rounded-full ${activeTimeline === '2030' ? 'bg-main' : 'bg-gray-400'}`}></div>

          </button>
          {/* Text */}
          <div className="flex flex-col justify-center items-center text-center">
            <span className="mb-1 text-3xl font-bold text-primary">{t('aboutus.missionvision.byLabel')}</span>
            <span className="text-3xl font-bold text-primary">{activeTimeline}</span>
          </div>
        </div>
      </div>

      {/* Right Side - Dynamic Content */}
      <div
        ref={contentRef}
        className={`flex flex-col justify-center gap-6 w-[95%] max-w-[700px] font-medium min-h-[260px] z-10 ${isRTL ? 'lg:mr-[-150px]' : 'lg:ml-[-150px]'}`}
      >
        {getCurrentContent()?.goals?.map((goal, index) => (
          <div
            key={`${activeTimeline}-${index}`}
            className={`flex justify-center p-6 text-center text-black rounded-2xl border-2 lg:justify-end border-primary ${isRTL ? 'lg:border-r-0' : 'lg:border-l-0'}`}
          >
            <p className={`${(index === 0 || index === 2) ? (isRTL ? 'lg:pr-52' : 'lg:pl-52') : ''}`}>
              {goal}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default OurMissionVision
