import React from 'react'
import { useTranslation } from 'react-i18next';
import i18n from '../../../../public/locales.js';

const WhyIntegrate = () => {
  const { t } = useTranslation();
  const lang = i18n.language || 'en';
  const isRTL = lang === 'ar';
  const dir = t('integration.direction') || (isRTL ? 'rtl' : 'ltr');
  const stats = t('integration.whyIntegrate.stats', { returnObjects: true });

  return (
    <section
      className="bg-secondary rounded-[40px] p-8 md:p-14 lg:p-28 flex flex-col items-center max-w-4xl md:max-w-5xl  lg:max-w-6xl mx-auto my-12"
      dir={dir}
      style={{ direction: dir }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
        {t('integration.whyIntegrate.title')}
      </h2>
      <p className="text-black text-center max-w-2xl mb-24 text-base md:text-lg font-medium">
        {t('integration.whyIntegrate.subtitle')}
      </p>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-center px-4 ${
              index > 0 ? 'border-t md:border-t-0 md:border-l border-primary/10' : ''
            }`}
          >
            <div className="w-12 h-12 mb-4 bg-white/60 rounded-full flex items-center justify-center">
              <span className="text-2xl text-primary">{stat.icon}</span>
            </div>
            <div className="text-primary font-bold text-3xl md:text-4xl mb-2">{stat.percentage}</div>
            <div className={`text-black text-base md:text-lg font-medium text-center`}>
              {stat.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyIntegrate
