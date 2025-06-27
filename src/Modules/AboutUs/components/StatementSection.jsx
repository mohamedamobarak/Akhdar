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
      className="flex flex-col-reverse gap-8 justify-center items-center px-2 py-8 md:flex-row md:gap-14 lg:gap-24 md:py-16 lg:py-24 md:px-8"
      dir={isRTL ? 'rtl' : 'ltr'}
      style={{ direction: isRTL ? 'rtl' : 'ltr' }}
    >
      {/* Text Content */}
      <div className="sm:max-w-lg lg:max-w-4xl">
        <h2 className={`text-[25px] md:text-[30px] lg:text-[45px] font-[700] text-primary mb-10 md:mb-14 ${isRTL ? 'text-right' : 'text-center md:text-left'}`}>
          {t('aboutus.statement.title')}
        </h2>
        <p className={`text-black text-[16px] md:text-[20px] lg:text-[22px] font-medium ${isRTL ? 'text-right' : 'text-center md:text-left'}`}>
          {t('aboutus.statement.desc')}
        </p>
      </div>
      {/* Image */}
      <div className="flex flex-shrink-0 justify-center items-center w-full md:w-auto">
        <img
          src={megaphoneIcon}
          alt="Sustainability Icon"
          className="
            w-[140px] h-[100px]
            sm:w-[180px] sm:h-[130px]
            md:w-[260px] md:h-[200px]
            lg:w-[400px] lg:h-[300px]
            xl:w-[500px] xl:h-[380px]
            object-contain
            mx-auto
          "
        />
      </div>
    </section>
  )
}

export default StatementSection
