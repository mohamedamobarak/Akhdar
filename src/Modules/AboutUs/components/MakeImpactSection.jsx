import React from 'react'
import { useTranslation } from 'react-i18next';
import i18n from '../../../../public/locales.js';

const MakeImpactSection = () => {
  const { t } = useTranslation();
  const lang = i18n.language || 'en';
  const isRTL = lang === 'ar';
  const impactData = t('aboutus.impact.items', { returnObjects: true });
  return (
    <section className=" py-12 px-2 sm:px-0" dir={isRTL ? 'rtl' : 'ltr'} style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary mb-12">{t('aboutus.impact.title')}</h2>
        <div className={`flex flex-col sm:flex-row items-center sm:items-center relative ${isRTL ? 'flex-row-reverse' : ''}`}>
          {/* Timeline Line - Desktop */}
          <div className={`hidden sm:flex flex-col items-center justify-center h-full ${isRTL ? 'ml-8' : 'mr-8'}`}> 
            {impactData.map((_, idx) => (
              <React.Fragment key={idx}>
                <div className="w-7 h-7 flex items-center justify-center">
                  <div className="w-7 h-7 rounded-full border-4 border-main flex items-center justify-center ">
                    <div className="w-3 h-3 rounded-full bg-main"></div>
                  </div>
                </div>
                {idx !== impactData.length - 1 && (
                  <div className="w-1 bg-main" style={{ height: '150px' }}></div>
                )}
              </React.Fragment>
            ))}
          </div>
          {/* Timeline Line for mobile */}
          <div className={`sm:hidden flex flex-col items-center w-full mb-3 absolute top-0 ${isRTL ? 'right-0' : 'left-0'} h-full`}>
            {impactData.map((_, idx) => (
              <React.Fragment key={idx}>
                <div className="w-7 h-7 flex items-center justify-center mx-auto">
                  <div className="w-7 h-7 rounded-full border-4 border-main flex items-center justify-center ">
                    <div className="w-3 h-3 rounded-full bg-main"></div>
                  </div>
                </div>
                {idx !== impactData.length - 1 && (
                  <div className="w-1 bg-main h-96 mx-auto"></div>
                )}
              </React.Fragment>
            ))}
          </div>
          {/* Cards */}
          <div className="flex-1 flex flex-col gap-10  md:gap-2 w-full z-3 ">
            {impactData.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#D6EFD7] rounded-xl px-6 py-8 shadow-sm"
                style={
                  idx === 1 && window.innerWidth >= 640
                    ? { marginTop: '48px', marginBottom: '48px' }
                    : {}
                }
              >
                <h3 className={`font-bold text-[14px]  md:text-2xl  mb-2 text-primary ${isRTL ? 'text-right' : ''}`}>{item.title}</h3>
                <p className={`text-primary text-base text-[10px]  md:text-lg ${isRTL ? 'text-right' : ''}`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MakeImpactSection
