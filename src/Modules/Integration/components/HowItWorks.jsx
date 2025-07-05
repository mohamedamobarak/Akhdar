import React from 'react'
import { useTranslation } from 'react-i18next';
import i18n from '../../../../public/locales.js';
import bgleaf from '../../../assets/api-integration/bg-leaf.svg'
import congrats from '../../../assets/api-integration/congrats.svg'
import labtop from '../../../assets/api-integration/labtop.png'
import land from '../../../assets/api-integration/land.png'
import productCard from '../../../assets/api-integration/productCart.png'
import { Link } from 'react-router-dom';

const StepText = ({ number, title, description, isRTL  }) => (
  <div
    className={`flex flex-col gap-2 justify-center items-center md:items-start md:flex-row ${isRTL ? 'md:flex-row' : 'md:flex-row'}`}
  >
    <span className={`text-6xl md:text-8xl font-extrabold text-main ${isRTL ? 'md:ml-4' : 'md:mr-4'}`}>{number}</span>
    <div className={`flex flex-col md:items-start items-center ${isRTL ? 'md:text-right' : 'md:text-left'}`}>
      <span className={`text-xl sm:text-2xl font-bold text-[#013229] mb-1 ${isRTL ? 'text-right' : 'text-left'}`}>{title}</span>
      <span className={`text-sm text-center md:text-lg text-[#013229] font-normal ${isRTL ? 'md:text-right ' : 'md:text-left'}`}>{description}</span>
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


const HowItWorks = () => {
  const { t } = useTranslation();
  const lang = i18n.language || 'en';
  const isRTL = lang === 'ar';
  const dir = t('integration.direction') || (isRTL ? 'rtl' : 'ltr');
  const steps = t('integration.howItWorks.steps', { returnObjects: true });
  // Progress ring values
  const progress = 35.3;

  return (
    <section
      className="w-full max-w-5xl mx-auto px-2 sm:px-4 py-8 sm:py-12 md:py-16 bg-[#F0F5EF]"
      dir={dir}
      style={{ direction: dir }}
    >
      <h2 className="mb-8 text-2xl font-bold text-center sm:mb-12 md:mb-16 sm:text-3xl md:text-5xl text-primary">
        {t('integration.howItWorks.title')}
      </h2>
      <div className="grid grid-cols-3 gap-x-0 gap-y-0 w-full max-w-full">
        {/* Row 1: Step 1 */}
        <div className="flex justify-end items-center py-4 pr-0 md:pr-2 w-full max-w-full ">
          <StepText
            number={steps[0].number}
            title={steps[0].title}
            description={steps[0].description}
            isRTL={isRTL}
          />
        </div>
        {/* Timeline column */}
        <TimelineColumn />
        {/* Icon column */}
        <div className="flex flex-col relative justify-center items-start py-4 pl-2 w-full max-w-full ">
          <div className="relative flex justify-center items-center w-full h-auto max-w-full">
            {/* Laptop image */}
            <img
              src={labtop}
              alt="Laptop"
              className="block w-full h-auto max-w-full   -translate-x-2"
              style={{
                minWidth: 0,
                minHeight: 0,
              }}
            />
            {/* Product card image, absolutely positioned over the laptop */}
            <img
              src={productCard}
              alt="Shopping Cart Overlay"
              className="
                absolute
                left-1/2
                top-[12%]
                -translate-x-1/2
                sm:top-[10%]
                md:top-[8%]
                lg:top-[6%]
                w-[80%]
                sm:w-[70%]
                md:w-[60%]
                lg:w-[60%]
                h-auto
                max-w-full
                drop-shadow-lg
              "
              style={{
                zIndex: 2,
              }}
            />
          </div>
        </div>

        {/* Row 2: Step 2 */}
        <div className="flex flex-col relative justify-center items-start py-4 pl-0 md:pl-2 w-full max-w-full my-4 ">
          <div className="relative bg-white flex flex-col justify-center items-center w-full h-auto max-w-full rounded-3xl shadow-2xl -rotate-0 md:-rotate-12 p-8" style={{ minHeight: 280 }}>
            {/* Use the provided congrats image */}
            <img
              src={congrats}
              alt="Congratulations"
              className="mb-4 size-36 object-contain rotate-12"
            />
            {/* Text content */}
            <div className="flex flex-col items-center text-center">
              <span className="font-bold text-sm md:text-2xl text-primary mb-1">{t('integration.howItWorks.congratulations')}</span>
              <span className="text-main text-sm md:text-lg font-medium mb-2">{t('integration.howItWorks.offsetMessage')}</span>
              <span className="text-[#D6EFD7] text-base mt-2">{t('integration.howItWorks.keepUp')}</span>
            </div>
          </div>
        </div>
        {/* Timeline column */}
        <TimelineColumn />
        {/* Dropdown column */}
        <div className="flex flex-col justify-center items-center py-4 pl-0 md:pl-2 w-full max-w-full ">
        <StepText
            number={steps[1].number}
            title={steps[1].title}
            description={steps[1].description}
            isRTL={isRTL}
          />
        </div>

        {/* Row 3: Step 3 */}
        <div className="flex justify-end items-center py-4 pr-0 md:pr-2 w-full max-w-full ">
            <StepText
            number={steps[2].number}
            title={steps[2].title}
            description={steps[2].description}
            isRTL={isRTL}
          />
        </div>
        {/* Timeline column */}
        <TimelineColumn />
        {/* Progress ring column */}
        <div className="flex flex-col justify-center items-center py-4 pl-0 md:pl-2 w-full max-w-full ">
          <div className="relative w-full rounded-3xl rotate-0  md:rotate-12 lg:rotate-12 shadow-lg bg-white max-w-xs sm:max-w-sm md:max-w-md h-60 sm:h-72 md:h-80 flex items-center justify-center">
            {/* Card background with image */}
              <img
                src={land}
                alt="land"
                className="absolute left-0 bottom-0 -rotate-[7deg] scale-x-[114%] translate-y-3 translate-x-0   md:translate-y-6 md:translate-x-0.5  lg:translate-x-1.5 w-full h-1/2 object-contain  md:object-cover"
                style={{ objectPosition: 'bottom' }}
              />
            {/* Content above image */}
            <div className="absolute z-20 flex flex-col items-center justify-between w-full h-full py-6">
              <span className="text-primary font-semibold text-sm sm:text-base mb-2 mt-2 z-30">{t('integration.howItWorks.youAreOffsetting')}</span>
              {/* Progress ring with bgleaf background */}
              <div className="relative flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 z-30">
                {/* bgleaf background */}
                <img
                  src={bgleaf}
                  alt="bg leaf"
                  className="absolute w-1/2 h-full object-cover opacity-30 rounded-full"
                  style={{ zIndex: 1 }}
                />
                <svg
                  width="140"
                  height="140"
                  viewBox="0 0 140 140"
                  className="absolute top-0 left-0 w-full h-full"
                  style={{ display: 'block', zIndex: 2 }}
                >
                  {/* Progress background */}
                  <circle cx="70" cy="70" r="54" stroke="#DADADA" strokeWidth="8" fill="none" />
                  {/* Progress ring */}
                  <circle
                    cx="70"
                    cy="70"
                    r="54"
                    stroke="#81F18E"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={2 * Math.PI * 54}
                    strokeDashoffset={2 * Math.PI * 54 * (1 - progress / 100)}
                    strokeLinecap="round"
                    style={{ transition: 'stroke-dashoffset 1s' }}
                  />
                  {/* Progress dot */}
                  <circle
                    cx={80 + 54 * Math.cos(-Math.PI / 2 + 2 * Math.PI * (progress / 100))}
                    cy={30 + 54 * Math.sin(-Math.PI / 2 + 2 * Math.PI * (progress / 100))}
                    r="7"
                    fill="#81F18E"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                </svg>
                <div className="absolute flex flex-col items-center justify-center w-full h-full" style={{ zIndex: 3 }}>
                  <span className="text-lg sm:text-xl md:text-3xl font-bold text-primary">CO₂</span>
                  <span className="text-[10px] sm:text-base md:text-md text-primary font-semibold">{t('integration.howItWorks.offsetAmount')}</span>
                </div>
              </div>
              <span className="mt-2 text-sm sm:text-base text-white drop-shadow font-medium z-30" style={{ textShadow: '0 1px 8px #0006' }}>
                {t('integration.howItWorks.ofYourFootprint')}
              </span>
            </div>
          </div>
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
              {t('integration.howItWorks.talkToUs')}
            </button>
          </Link>
        </div>
        {/* Empty right column */}
        <div></div>
      </div>
    </section>
  )
}  

export default HowItWorks
