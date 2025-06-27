import React from 'react'
// import { useTranslation } from 'react-i18next';
import i18n from '../../../../public/locales.js';
import vision from '../../../assets/impact-platform/KSA-vision.png';

const VisionSection = () => {
     // const { t } = useTranslation();
     const lang = i18n.language || 'en';
     const isRTL = lang === 'ar';
     return (
       <section
       className={`flex relative justify-center items-center px-4 mx-auto w-full max-w-7xl text-center`}
       dir={isRTL ? 'rtl' : 'ltr'}
       style={{ direction: isRTL ? 'rtl' : 'ltr' }}
     >
       <div className="flex flex-col md:flex-row gap-8 justify-center items-center w-full bg-[#F0F5EF] rounded-[22px] py-10 px-6">
         {/* Vision 2030 Logo */}
         <div className="flex flex-shrink-0 justify-center items-center mb-6 w-full md:w-auto md:mb-0">
           <img
             src={vision}
             alt="Vision 2030 Kingdom of Saudi Arabia"
             className="w-[167px] md:w-[243px] lg:w-[523px] h-auto"
        
           />
         </div>
         {/* Text Content */}
         <div className="flex flex-col items-start max-w-xl h-full text-left">
           <h2 className="text-primary text-[20px] md:text-[26px] lg:text-[30px] font-bold mb-2">
             What Impact Will Your Company Create?
           </h2>
           <p className="text-black text-[14px] md:text-[17px] lg:text-[20px] font-medium leading-relaxed">
             Explore a range of carefully selected sustainability <span className="text-[#004D408A] font-medium">projects aligned with global environmental goals and Saudi Vision 2030</span>. AKHDAR's platform ensures full transparency, delivering measurable impact and the highest value for every contribution your business makes toward a sustainable future.
           </p>
         </div>
       </div>
       </section>
     )
}  

export default VisionSection


