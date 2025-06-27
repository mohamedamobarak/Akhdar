import React from 'react'
import { useTranslation } from 'react-i18next';
import i18n from '../../../../public/locales.js';

const OurMissionVision = () => {
  const { t } = useTranslation();
  const lang = i18n.language || 'en';
  const isRTL = lang === 'ar';
  return (
    <section
      className="flex relative flex-col gap-32 justify-center items-center py-16 w-full md:flex-row md:gap-1"
      dir={isRTL ? 'rtl' : 'ltr'}
      style={{ direction: isRTL ? 'rtl' : 'ltr' }}
    >
      {/* Left Side */}
      <div className="bg-primary text-white rounded-[40px] p-14 flex flex-col justify-center w-[480px] min-h-[380px] z-10 shadow-md">
        <h2 className="mb-5 text-3xl font-bold leading-tight">{t('aboutus.missionvision.title')}</h2>
        <p className="mb-5 text-base">{t('aboutus.missionvision.desc')}</p>
        <p className="text-base font-semibold text-main">{t('aboutus.missionvision.plan')}</p>
      </div>

      {/* Center Circle */}
      <div className="absolute left-[calc(50%_-_105px)] top-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-20">
        {/* Big Circle */}
        <div className="relative flex items-center text-white justify-center bg-[#FDFBF1] border-4 border-main rounded-full w-[210px] h-[210px] shadow-lg">
          {/* Small Green Circle on Top (inside border) */}
          <div className="flex absolute top-0 left-1/2 z-30 justify-center items-center w-10 h-10 bg-white rounded-full border-4 -translate-x-1/2 -translate-y-1/2 border-main">
            <div className="w-5 h-5 rounded-full bg-main"></div>
          </div>
          {/* Gray Dots */}
          <div className="absolute -left-4 top-1/2 z-30 w-7 h-7 bg-gray-300 rounded-full -translate-y-1/2"></div>
          <div className="absolute -right-4 top-1/2 z-30 w-7 h-7 bg-gray-300 rounded-full -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-1/2 z-30 w-7 h-7 bg-gray-300 rounded-full -translate-x-1/2 translate-y-1/2"></div>
          {/* Text */}
          <div className="flex flex-col justify-center items-center text-center">
            <span className="mb-1 text-4xl font-bold text-primary">{t('aboutus.missionvision.byLabel')}</span>
            <span className="text-4xl font-bold text-primary">2026</span>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className={`flex flex-col justify-center gap-6 w-[95%] max-w-[700px] font-medium min-h-[260px] z-10 ${isRTL ? 'md:mr-[-150px]' : 'md:ml-[-150px]'}`}>
        <div className="flex justify-end p-6 text-black rounded-2xl border-2 border-primary md:border-l-0" >
          <p>{t('aboutus.missionvision.future1')}</p>
        </div>
        <div className={`flex justify-end p-6 text-black rounded-2xl border-2 border-primary  ${isRTL ? 'md:border-r-0' : 'md:border-l-0'}`} >
          <p>{t('aboutus.missionvision.future2')}</p>
        </div>
        <div className={`flex justify-end p-6 text-black rounded-2xl border-2 border-primary  ${isRTL ? 'md:border-r-0' : 'md:border-l-0'}`} >
          <p>{t('aboutus.missionvision.future3')}</p>
        </div>
      </div>
    </section>
  )
}

export default OurMissionVision
