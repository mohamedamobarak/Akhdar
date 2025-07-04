import React from 'react'
import phone from '../../../assets/api-integration/phone.png';
import shippingMethod from '../../../assets/api-integration/shipping-Method.png'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


const EmpowerUsers = () => {
    const { t, i18n } = useTranslation();
    const lang = i18n.language || 'en';
    const isRTL = lang === 'ar';
    const dir =isRTL ? 'rtl' : 'ltr'
   
  return (
    <section
      className="flex flex-col w-full min-h-screen bg-[#F0F5EF] px-4 mx-auto py-12"
      dir={dir}
      style={{ direction: dir }}
    >
      {/* First row */}
      <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto mb-12 gap-6 md:gap-0">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start md:pr-8">
          <h2 className="text-4xl font-bold text-primary mb-2 text-center md:text-start">Empower Your Users!</h2>
          <p className="text-lg text-black text-center md:text-start">
            Akhdar's API lets you give your users the ability to take climate action that's important to them.
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
        <div className="flex-1 flex flex-col justify-center items-center md:items-start md:pl-8">
          <h2 className="text-4xl font-bold text-primary mb-2 text-center md:text-start">Share Your Impact!</h2>
          <p className="text-lg text-black text-center md:text-start">
            Akhdar make it easy to share your impact with your customers in language they can understand.
          </p>
        </div>
      </div>
    </section>
  )
}

export default EmpowerUsers
