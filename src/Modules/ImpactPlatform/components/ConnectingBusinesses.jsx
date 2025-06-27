import React from 'react'
// import { useTranslation } from 'react-i18next';
import i18n from '../../../../public/locales.js';
import { Link } from 'react-router-dom';

const ConnectingBusinesses = () => {
      // const { t } = useTranslation();
  const lang = i18n.language || 'en';
  const isRTL = lang === 'ar';
  return (
    <section
    className={`flex relative justify-center items-center px-4 mx-auto w-full max-w-6xl text-center`}
    dir={isRTL ? 'rtl' : 'ltr'}
    style={{ direction: isRTL ? 'rtl' : 'ltr' }}
  >
    <div className="bg-[#40D25126] rounded-[22px] w-full h-75  mx-auto justify-center py-10 px-4 flex flex-col items-center">
      <h2 className="text-[20px] lg:text-[39px] md:text-[31px]  font-semibold  mb-2">
        <span className="text-[#004D408A]">Connecting Businesses with</span>
        <br />
        <span className="text-primary">
          Verified Sustainability Projects
        </span>
      </h2>
      <p className="mt-4 text-[13px] md:text-[20px] text-black font-medium max-w-2xl text-center">
        AKHDAR's Impact Marketplace is your all-in-one platform to take climate action,
        track and verify impact, and engage stakeholders in your broader sustainability efforts.
      </p>
    </div>
    </section>
  )
}

export default ConnectingBusinesses
