import React from 'react'
import phone from '../../../assets/api-integration/phone.png';
import shippingMethod from '../../../assets/api-integration/shipping-Method.png'
import { useTranslation } from 'react-i18next';
import i18n from '../../../../public/locales.js';
import { Link } from 'react-router-dom';


const EmpowerUsers = () => {
    const { t } = useTranslation();
    const lang = i18n.language || 'en';
    const isRTL = lang === 'ar';
    const dir = t('integration.direction') || (isRTL ? 'rtl' : 'ltr')
   
  return (
    <section
      className="flex flex-col w-full min-h-screen bg-[#F0F5EF] px-4 mx-auto py-12"
      dir={dir}
      style={{ direction: dir }}
    >
      {/* First row */}
      <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto mb-12 gap-6 md:gap-0">
        {/* Left: Text */}
        <div className={`flex-1 flex flex-col justify-center items-center md:items-start ${isRTL ? 'md:pl-8' : 'md:pr-8'}`}>
          <h2 className={`text-4xl font-bold text-primary mb-2 text-center ${isRTL ? 'md:text-right' : 'md:text-start'}`}>
            {t('integration.empowerUsers.empowerTitle')}
          </h2>
          <p className={`text-lg text-black text-center ${isRTL ? 'md:text-right' : 'md:text-start'}`}>
            {t('integration.empowerUsers.empowerDescription')}
          </p>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center items-center">
          <img src={shippingMethod} alt="Shipping Method" className="w-96 max-w-full rounded-2xl " />
        </div>
      </div>

      {/* Second row */}
      <div className="flex flex-col-reverse md:flex-row w-full max-w-5xl mx-auto gap-6 md:gap-0">
        {/* Left: Image */}
        <div className="flex-1 flex justify-center items-center">
          <img src={phone} alt="phone" className="w-64 md:w-72 h-auto" />
        </div>
        {/* Right: Text */}
        <div className={`flex-1 flex flex-col justify-center items-center md:items-start ${isRTL ? 'md:pr-8' : 'md:pl-8'}`}>
          <h2 className={`text-4xl font-bold text-primary mb-2 text-center ${isRTL ? 'md:text-right' : 'md:text-start'}`}>
            {t('integration.empowerUsers.shareTitle')}
          </h2>
          <p className={`text-lg text-black text-center ${isRTL ? 'md:text-right' : 'md:text-start'}`}>
            {t('integration.empowerUsers.shareDescription')}
          </p>
        </div>
      </div>
    </section>
  )
}

export default EmpowerUsers
