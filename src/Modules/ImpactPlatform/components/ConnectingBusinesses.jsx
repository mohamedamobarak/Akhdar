import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ConnectingBusinesses = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || 'en';
  const isRTL = lang === 'ar';
  const dir = t('impactPlatform.direction') || (isRTL ? 'rtl' : 'ltr');
  return (
    <section
    className={`flex relative justify-center items-center px-4 mx-auto w-full max-w-6xl text-center`}
    dir={dir}
    style={{ direction: dir }}
  >
    <div className="bg-[#40D25126] rounded-[22px] w-full h-75  mx-auto justify-center py-10 px-4 flex flex-col items-center">
      <h2 className="text-[20px] lg:text-[39px] md:text-[31px]  font-semibold  mb-2 text-primary">
        {t('impactPlatform.ConnectingBusinesses.title')}
      </h2>
      <p className="mt-4 text-[13px] md:text-[20px] text-black font-medium max-w-2xl text-center">
        {t('impactPlatform.ConnectingBusinesses.desc')}
      </p>
    </div>
    </section>
  )
}

export default ConnectingBusinesses
