import React from 'react'
import { useTranslation } from 'react-i18next';
import headphone from '../../../assets/impact-platform/headphone-icon.svg'
import cursor from '../../../assets/impact-platform/cursor-icon.svg'
import { Link } from 'react-router-dom';

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

const TimelineColumn = () => (
  <div className="flex relative flex-col justify-center items-center py-0">
    {/* Vertical line */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-main z-0" />
    {/* Node */}
    <div className="flex relative z-10 justify-center items-center h-full">
      <svg width="48" height="48" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="22" fill="#81F18E" />
        <circle cx="24" cy="24" r="19" fill="#F0F5EF" />
        <circle cx="24" cy="24" r="13" fill="#81F18E" />
      </svg>
    </div>
  </div>
);

const ProjectTypeDropdown = () => {
  const { t } = useTranslation();
  const dir = t('impactPlatform.direction') || (t('impactPlatform.direction') === 'rtl' ? 'rtl' : 'ltr');
  return (
    <div className="flex flex-col items-start w-full max-w-[340px]">
      {/* Top pill bar */}
      <div className={`relative flex items-center w-full px-3 sm:px-6 py-1.5 sm:py-2 bg-[#D6F5DF] rounded-full mb-2 ${dir === 'rtl' ? 'text-right' : ''}`}>
        <span className="text-base sm:text-lg md:text-xl font-bold text-[#0000007D]">{t('impactPlatform.GetStarted.projectTypes')}</span>
        <span className="flex-1" />
        {/* Dropdown arrow */}
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="ml-2"><path d="M5 8L10 13L15 8" stroke="#81F18E" strokeWidth="2" strokeLinecap="round"/></svg>
        {/* Cursor absolute */}
        <img src={cursor} alt="Cursor" className={`absolute ${dir === 'rtl' ? 'left-2 sm:left-10' : 'right-2 sm:right-6'} top-1/2 w-10 h-10 -translate-y-1/2  sm:w-14 sm:h-14 md:w-20 md:h-20 `} />

      </div>
      {/* List box */}
      <div className={`w-full bg-[#D6F5DF] rounded-2xl p-3 sm:p-4 md:p-6 flex flex-col gap-2 sm:gap-3 md:gap-4 ${dir === 'rtl' ? 'text-right' : ''}`}>
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
        <TimelineColumn />
        {/* Icon column */}
        <div className="flex flex-col justify-center items-start py-4 pl-2 w-full max-w-full sm:py-6 md:py-8 sm:pl-4 md:pl-6">
          <div className="flex justify-center items-center w-32 max-w-full h-32 max-h-full rounded-full sm:w-44 sm:h-44 md:w-64 md:h-64 bg-secondary">
            <img src={headphone} alt="Consultation" className="w-3/4 max-w-full h-3/4 max-h-full" />
          </div>
        </div>

        {/* Row 2: Step 2 */}
        <div className="flex justify-end items-center py-4 pr-2 w-full max-w-full sm:py-6 md:py-8 sm:pr-4 md:pr-6">
          <ProjectTypeDropdown />
        </div>
        {/* Timeline column */}
        <TimelineColumn />
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
        <TimelineColumn />
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
                cx="110"
                cy="110"
                r="88"
                stroke="#81F18E"
                strokeWidth="20"
                fill="none"
                strokeDasharray={2 * Math.PI * 88}
                strokeDashoffset={2 * Math.PI * 88 * (1 - progress / 100)}
                strokeLinecap="round"
                style={{ transition: 'stroke-dashoffset 1s' }}
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
          <Link to="/signup">
            <button
              className="relative z-10 bg-main hover:bg-primary hover:text-white text-primary font-semibold rounded-xl px-8 py-3 shadow-md focus:outline-none transition-all duration-200 mt-2 cursor-pointer"
              style={{ minWidth: '180px' }}
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



