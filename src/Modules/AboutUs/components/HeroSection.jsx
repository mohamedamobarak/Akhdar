import React from 'react'
import backgroundImage from '../../../assets/about-us/bg-cover.png';
import { useTranslation } from 'react-i18next';
import i18n from '../../../../public/locales.js';

const HeroSection = () => {
  const { t } = useTranslation();
  const lang = i18n.language || 'en';
  const isRTL = lang === 'ar';
  return (
    <section
      className={`relative w-full h-screen px-4 text-center flex items-center justify-center`}
      dir={isRTL ? 'rtl' : 'ltr'}
      style={{ direction: isRTL ? 'rtl' : 'ltr' }}
    >
      {/* Background image */}
      <img
        src={backgroundImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-contain pointer-events-none"
      />
      {/* Text content */}
      <div className="relative z-10 max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-6">
        <h1 className="text-[30px] md:text-[51px] lg:text-[75px] font-bold text-text-hero mb-4">
          {t('aboutus.hero.title')}
        </h1>
        <p className="text-black text-[16px] md:text-[20px] lg:text-[24px] font-medium py-2">
          {t('aboutus.hero.subtitle')}
        </p>
      </div>
    </section>
  )
}

export default HeroSection
