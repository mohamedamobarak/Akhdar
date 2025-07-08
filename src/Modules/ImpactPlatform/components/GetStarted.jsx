import React, { useRef, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import headphone from '../../../assets/impact-platform/headphone-icon.svg'
import cursor from '../../../assets/impact-platform/cursor-icon.svg'
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { gsapAnimation } from '@/lib/animations';
gsap.registerPlugin(ScrollTrigger);

const StepText = ({ number, title, description, dir  }) => (
  <div
    className={`flex flex-col gap-2 justify-center items-center md:flex-row ${dir === 'en' ? 'md:flex-row-reverse' : 'md:flex-row'}`}
  >
    <span className="text-6xl md:text-8xl font-extrabold text-main md:mr-4">{number}</span>
    <div className={`flex flex-col md:items-start text-center  ${dir === 'en' ? 'md:text-left' : 'md:text-right'}`}> 
      <span className="text-xl  sm:text-2xl font-bold text-[#013229] mb-1">{title}</span>
      <span className={`text-lg text-[#013229] font-normal `}>{description}</span>
    </div>
  </div>
);

const TimelineColumn = React.forwardRef(({ isFinal, onFinalNodeRef, nodeRef }, ref) => (
  <div className="flex relative flex-col justify-center items-center py-0 w-full h-full" ref={ref}>
    {/* Grey background line */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-gray-300 z-0" />
    {/* Green overlay line for animation */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-main z-10 origin-top" style={{ height: 0 }} data-anim-line />
    {/* Node */}
    <div className="flex relative z-20 justify-center items-center h-full">
      <svg ref={nodeRef} width="48" height="48" viewBox="0 0 48 48" style={{ opacity: 0, transform: 'scale(0)' }}>
        <circle cx="24" cy="24" r="22" fill="#81F18E" />
        <circle cx="24" cy="24" r="19" fill="#F0F5EF" />
        <circle cx="24" cy="24" r="13" fill="#81F18E" />
      </svg>
    </div>
    {isFinal && (
      <div ref={onFinalNodeRef} className="absolute bottom-0 left-1/2 -translate-x-1/2 z-30" data-final-node style={{ opacity: 0, transform: 'scale(0)' }} />
    )}
  </div>
));

const ProjectTypeDropdown = () => {
  const { t } = useTranslation();
  const dir = t('impactPlatform.direction') || (t('impactPlatform.direction') === 'rtl' ? 'rtl' : 'ltr');

  // Animation refs
  const pillRef = useRef(null);
  const cursorRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (!pillRef.current || !cursorRef.current || !dropdownRef.current) return;
    // Set initial state
    gsap.set(dropdownRef.current, { opacity: 0, y: 20, pointerEvents: 'none' });
    gsap.set(cursorRef.current, { scale: 1, zIndex: 50 });
    // Timeline for cursor click and dropdown
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pillRef.current,
        start: 'top 80%',
        once: true,
      }
    });
    tl.to(cursorRef.current, { scale: 0.8, duration: 0.4, ease: 'power1.in', zIndex: 50 }) // click down
      .to(cursorRef.current, { scale: 1, duration: 0.4, ease: 'power1.out', zIndex: 50 }) // click up
      .to(dropdownRef.current, { opacity: 1, y: 0, pointerEvents: 'auto', duration: 1.5, ease: 'power2.out' }, '-=0.1');
  }, []);

  return (
    <div className="flex flex-col items-start w-full max-w-[340px]">
      {/* Top pill bar */}
      <div ref={pillRef} className={`relative flex items-center w-full px-3 sm:px-6 py-1.5 sm:py-2 bg-[#D6F5DF] rounded-full mb-2 ${dir === 'rtl' ? 'text-right' : ''}`}>
        <span className="text-base sm:text-lg md:text-xl font-bold text-[#0000007D]">{t('impactPlatform.GetStarted.projectTypes')}</span>
        <span className="flex-1" />
        {/* Dropdown arrow */}
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="ml-2"><path d="M5 8L10 13L15 8" stroke="#81F18E" strokeWidth="2" strokeLinecap="round"/></svg>
        {/* Cursor absolute */}
        <img ref={cursorRef} src={cursor} alt="Cursor" className={`absolute z-50 ${dir === 'rtl' ? 'left-2 sm:left-10' : 'right-2 sm:right-6'} top-1/2 w-10 h-10 -translate-y-1/2  sm:w-14 sm:h-14 md:w-20 md:h-20 pointer-events-none`} />
      </div>
      {/* List box */}
      <div ref={dropdownRef} className={`w-full bg-[#D6F5DF] rounded-2xl p-3 sm:p-4 md:p-6 flex flex-col gap-2 sm:gap-3 md:gap-4 ${dir === 'rtl' ? 'text-right' : ''}`}> 
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 text-[#0000007D] text-base sm:text-lg md:text-xl font-semibold">
          {/* Modern leaf icon */}
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M8 24C8 13 24 8 24 8C24 8 19 24 8 24Z" stroke="#009867" strokeWidth="2"/></svg>
          {t('impactPlatform.GetStarted.restoration')}
        </div>
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 text-[#0000007D] text-base sm:text-lg md:text-xl font-semibold">
          {/* Modern wind icon */}
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M6 16H26M10 22H22M12 10H20" stroke="#009867" strokeWidth="2" strokeLinecap="round"/></svg>
          {t('impactPlatform.GetStarted.cleanEnergy')}
        </div>
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 text-[#0000007D] text-base sm:text-lg md:text-xl font-semibold">
          {/* Modern recycle icon */}
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16 4L20 12H12L16 4ZM4 20L12 16L4 12V20ZM28 20L20 16L28 12V20Z" stroke="#009867" strokeWidth="2"/></svg>
          {t('impactPlatform.GetStarted.plasticReduction')}
        </div>
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 text-[#0000007D] text-base sm:text-lg md:text-xl font-semibold">
          {/* Modern waves icon */}
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M4 20C8 24 16 24 20 20M12 12C16 16 24 16 28 12" stroke="#009867" strokeWidth="2" strokeLinecap="round"/></svg>
          {t('impactPlatform.GetStarted.oceanCleanup')}
        </div>
      </div>
    </div>
  );
};

const GetStarted = () => {
  const { t } = useTranslation();
  const dir = t('impactPlatform.direction') || (t('impactPlatform.direction') === 'rtl' ? 'rtl' : 'ltr');
  // Progress ring values
  const progress = 35.3;
  const progressCircleRef = useRef(null);

  // Refs for timeline columns, node SVGs, and final node
  const timelineRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const nodeSVGRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const finalNodeRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    timelineRefs.forEach((timelineRef, idx) => {
      if (!timelineRef.current) return;
      const animLine = timelineRef.current.querySelector('[data-anim-line]');
      if (!animLine) return;
      gsap.set(animLine, { height: 0 });
      gsap.to(animLine, {
        height: '100%',
        ease: 'power2.out',
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 90%',
          end: 'bottom 20%',
          scrub: true,
        }
      });
      // Animate node SVG when line is filled (at end of scroll range)
      if (nodeSVGRefs[idx] && nodeSVGRefs[idx].current) {
        gsap.set(nodeSVGRefs[idx].current, { opacity: 0, scale: 0 });
        ScrollTrigger.create({
          trigger: timelineRef.current,
          start: 'top 90%',
          end: 'bottom 50%',
          scrub: true,
          onUpdate: (self) => {
            gsap.to(nodeSVGRefs[idx].current, { 
              opacity: self.progress, 
              scale: self.progress, 
              duration: 0.1, 
              overwrite: 'auto',
              ease: 'none'
            });
          },
        });
      }
    });
    // Final node animation
    if (finalNodeRef.current) {
      gsap.set(finalNodeRef.current, { opacity: 0, scale: 0 });
      ScrollTrigger.create({
        trigger: finalNodeRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.to(finalNodeRef.current, { opacity: 1, scale: 1, duration: 0.7, ease: 'back.out(1.7)' });
        },
        onLeaveBack: () => {
          gsap.to(finalNodeRef.current, { opacity: 0, scale: 0, duration: 0.5, ease: 'back.in(1.7)' });
        },
      });
    }
    // Animate headphone icon
    if (iconRef.current) {
      gsapAnimation(
        iconRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.9, delay: 0.5, ease: 'back.out(1.7)' },
        {
          scrollTrigger: {
            trigger: iconRef.current,
            start: 'top 90%',
            end: 'bottom 40%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    }
    // Animate progress ring and number
    if (progressCircleRef.current) {
      const circumference = 2 * Math.PI * 88;
      gsap.set(progressCircleRef.current, { strokeDashoffset: circumference });
      gsap.to(progressCircleRef.current, {
        strokeDashoffset: circumference * (1 - progress / 100),
        duration: 2.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: progressCircleRef.current,
          start: 'top 70%',
          once: true,
        },
      });
    }
  }, []);

  return (
    <section
      className="w-full max-w-5xl mx-auto px-2 sm:px-4 py-8 sm:py-12 md:py-16 bg-[#F0F5EF]"
      dir={dir}
      style={{ direction: dir }}
    >
      <h2 className="mb-8 text-2xl font-bold text-center sm:mb-12 md:mb-16 sm:text-3xl md:text-5xl text-primary">{t('impactPlatform.GetStarted.title')}</h2>
      <div className="grid grid-cols-3 gap-x-0 gap-y-0 w-full max-w-full">
        {/* Row 1: Step 1 */}
        <div className="flex justify-end items-center py-4 pr-2 w-full max-w-full sm:py-6 md:py-8 sm:pr-4 md:pr-6">
          <StepText
            number={1}
            title={t('impactPlatform.GetStarted.step1')}
            description={t('impactPlatform.GetStarted.step1Desc')}
            dir={dir}
          />
        </div>
        {/* Timeline column */}
        <TimelineColumn ref={timelineRefs[0]} nodeRef={nodeSVGRefs[0]} />
        {/* Icon column */}
        <div className="flex flex-col justify-center items-start py-4 pl-2 w-full max-w-full sm:py-6 md:py-8 sm:pl-4 md:pl-6">
          <div ref={iconRef} className="flex justify-center items-center w-32 max-w-full h-32 max-h-full rounded-full sm:w-44 sm:h-44 md:w-64 md:h-64 bg-secondary">
            <img src={headphone} alt="Consultation" className="w-3/4 max-w-full h-3/4 max-h-full" />
          </div>
        </div>

        {/* Row 2: Step 2 */}
        <div className="flex justify-end items-center py-4 pr-2 w-full max-w-full sm:py-6 md:py-8 sm:pr-4 md:pr-6">
          <ProjectTypeDropdown />
        </div>
        {/* Timeline column */}
        <TimelineColumn ref={timelineRefs[1]} nodeRef={nodeSVGRefs[1]} />
        {/* Dropdown column */}
        <div className="flex flex-col justify-center items-center py-4 pl-2 w-full max-w-full sm:py-6 md:py-8 sm:pl-4 md:pl-6">
          <StepText
            number={2}
            title={t('impactPlatform.GetStarted.step2')}
            description={t('impactPlatform.GetStarted.step2Desc')}
            dir={dir}
          />
        </div>

        {/* Row 3: Step 3 */}
        <div className="flex justify-end items-center py-4 pr-2 w-full max-w-full sm:py-6 md:py-8 sm:pr-4 md:pr-6">
          <StepText
            number={3}
            title={t('impactPlatform.GetStarted.step3')}
            description={t('impactPlatform.GetStarted.step3Desc')}
            dir={dir}
          />
        </div>
        {/* Timeline column */}
        <TimelineColumn ref={timelineRefs[2]} nodeRef={nodeSVGRefs[2]} />
        {/* Progress ring column */}
        <div className="flex flex-col justify-center items-center py-4 pl-2 w-full max-w-full sm:py-6 md:py-8 sm:pl-4 md:pl-6">
          <span className="text-[#009867] font-semibold mb-2">{t('impactPlatform.GetStarted.yourOffset')}</span>
          <div className="flex relative justify-center items-center w-32 max-w-full h-32 max-h-full rounded-full sm:w-44 sm:h-44 md:w-64 md:h-64 bg-secondary">
            <svg
              width="120" height="120" viewBox="0 0 220 220"
              className="absolute top-1/2 left-1/2 w-24 h-24 -translate-x-1/2 -translate-y-1/2 sm:w-36 sm:h-36 md:w-56 md:h-56"
              style={{ display: 'block' }}
            >
              {/* Progress background */}
              <circle cx="110" cy="110" r="88" stroke="#DADADA" strokeWidth="20" fill="none" />
              {/* Progress ring */}
              <circle
                ref={progressCircleRef}
                cx="110"
                cy="110"
                r="88"
                stroke="#81F18E"
                strokeWidth="20"
                fill="none"
                strokeDasharray={2 * Math.PI * 88}
                strokeDashoffset={2 * Math.PI * 88}
                strokeLinecap="round"
              />
            </svg>
            <div
              className="flex absolute z-10 flex-col justify-center items-center bg-white rounded-full shadow-lg size-16 md:w-32 md:h-32"
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <span className="text-lg font-bold sm:text-2xl md:text-4xl text-primary">35.3</span>
              <span className="text-xs sm:text-base md:text-xl text-primary">tCO2e</span>
            </div>
          </div>
          <span className="mt-2 text-sm text-center text-primary">12/22 {dir === 'rtl' ? 'طن تم تعويضها' : 'Tons are offsetted'}</span>
        </div>
      </div>
      {/* Timeline End Button Row - integrated with timeline */}
      <div className="grid grid-cols-3 w-full max-w-full">
        {/* Empty left column */}
        <div></div>
        {/* Timeline column with button as final node */}
        <div className="flex flex-col items-center relative">
          {/* Vertical line (extends through button) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-main z-0" style={{height: '100%'}} />
          {/* Button as final node */}
          {/* <TimelineColumn ref={timelineRefs[3]} isFinal onFinalNodeRef={finalNodeRef} nodeRef={nodeSVGRefs[3]} /> */}
          <Link to="/signup">
            <button
              className="relative z-10 bg-main hover:bg-primary hover:text-white text-primary font-semibold rounded-xl px-8 py-3 shadow-md focus:outline-none transition-all duration-200 mt-2 cursor-pointer"
              style={{ minWidth: '180px' }}
              // ref={finalNodeRef}
            >
              {t('impactPlatform.GetStarted.cta')}
            </button>
          </Link>
        </div>
        {/* Empty right column */}
        <div></div>
      </div>
    </section>
  )
}  

export default GetStarted




