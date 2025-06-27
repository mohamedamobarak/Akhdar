import React from 'react'
import megaphoneIcon from '../../../assets/about-us/statement-img.png'
import { useTranslation } from 'react-i18next';
import i18n from '../../../../public/locales.js';

const StatementSection = () => {
  const { t } = useTranslation();
  const lang = i18n.language || 'en';
  const isRTL = lang === 'ar';
  return (
    <section
      className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-14 lg:gap-24 py-8 md:py-16 lg:py-24 px-2 md:px-8"
      dir={isRTL ? 'rtl' : 'ltr'}
      style={{ direction: isRTL ? 'rtl' : 'ltr' }}
    >
      {/* Text Content */}
      <div className="sm:max-w-lg lg:max-w-4xl ">
        <h2 className={`text-[25px] md:text-[30px] lg:text-[45px] font-[700] text-primary mb-10 md:mb-14 ${isRTL ? 'text-right' : 'text-center md:text-left'}`}>
          {t('aboutus.statement.title')}
        </h2>
        <p className={`text-black text-[16px] md:text-[20px] lg:text-[22px] font-medium ${isRTL ? 'text-right' : 'text-center md:text-left'}`}>
          {t('aboutus.statement.desc')}
        </p>
      </div>
      {/* Image */}
      <div className="flex-shrink-0">
        <img
          src={megaphoneIcon}
          alt="Sustainability Icon"
          className="w-[190px] h-[144px] md:w-[289.5px] md:h-[219.9px] lg:w-[500px] lg:h-[380px] object-contain"
        />
      </div>
    </section>
  )
}

export default StatementSection
