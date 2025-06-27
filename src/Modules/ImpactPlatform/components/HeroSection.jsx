import React from 'react'
import backgroundImage from '../../../assets/impact-platform/bg-cover-img.png';
// import { useTranslation } from 'react-i18next';
import i18n from '../../../../public/locales.js';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  // const { t } = useTranslation();
  const lang = i18n.language || 'en';
  const isRTL = lang === 'ar';
  return (
    <section
      className={`flex relative justify-center items-center px-4 w-full h-screen text-center`}
      dir={isRTL ? 'rtl' : 'ltr'}
      style={{ direction: isRTL ? 'rtl' : 'ltr' }}
    >
      {/* Background image */}
      <img
        src={backgroundImage}
        alt="Background"
        className="object-contain absolute inset-0 w-full h-full pointer-events-none"
      />
      {/* Text content */}
      <div className="relative z-10 px-6 mx-auto max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
        <h1 className="text-[30px] md:text-[51px] lg:text-[75px] font-bold text-primary mb-4">
        Tailored Impact Solutions for Your Business
        </h1>
        <p className="text-black text-[16px] md:text-[20px] lg:text-[24px] font-medium py-2">
        Select from a diverse array of carbon offset initiatives that resonate with your organization's values and sustainability objectives.
        </p>
       {/* buttons */}
      <div className="flex flex-row gap-7 justify-center mt-8">
        <Link
          to="/signup"
          className="px-8 md:px-12 py-3 md:py-4 text-primary text-base md:text-lg bg-main rounded-[19px] text-center font-medium hover:bg-primary hover:text-white transition-all duration-300 min-w-[150px]"
        >
          Create Account
        </Link>
        <button
          className="px-6 md:px-8 py-3 md:py-4 bg-[#E6E6E6] text-primary text-base md:text-lg rounded-[19px] text-center font-medium cursor-pointer hover:bg-primary hover:text-white transition-all duration-300 min-w-[150px]"
        >
          Book a Demo
        </button>
      </div>
      </div>
    </section>
  )
}

export default HeroSection
