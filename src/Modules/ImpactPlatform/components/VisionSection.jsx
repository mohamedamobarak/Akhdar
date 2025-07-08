import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next';
import vision from '../../../assets/impact-platform/KSA-vision.png';
import { useGSAP } from '@gsap/react';
import { gsapAnimation } from '@/lib/animations';

const VisionSection = () => {
     const { t, i18n } = useTranslation();
     const lang = i18n.language || 'en';
     const isRTL = lang === 'ar';
     const dir = t('impactPlatform.direction') || (isRTL ? 'rtl' : 'ltr');

     // Animation refs
     const imgRef = useRef(null);
     const textRef = useRef(null);
     const sectionRef = useRef(null);

     useGSAP(() => {
       if (!imgRef.current || !textRef.current) return;
       // LTR: img from left, text from right; RTL: opposite
       const imgFromX = isRTL ? 100 : -100;
       const textFromX = isRTL ? -100 : 100;
       gsapAnimation(imgRef.current, { x: imgFromX, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: 'power2.out' });
       gsapAnimation(textRef.current, { x: textFromX, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: 'power2.out' });
     }, { scope: sectionRef });

     return (
       <section
       className={`flex relative justify-center items-center px-4 mx-auto w-full max-w-7xl text-center`}
       dir={dir}
       style={{ direction: dir }}
       ref={sectionRef}
     >
       <div className="flex flex-col-reverse md:flex-row gap-8  justify-center  w-full bg-[#F0F5EF] rounded-[22px] py-10 px-6">
         {/* Vision 2030 Logo */}
         <div className="flex flex-shrink-0 justify-center items-center mb-6 w-full md:w-auto md:mb-0">
           <img
             ref={imgRef}
             src={vision}
             alt="Vision 2030 Kingdom of Saudi Arabia"
             className="w-[167px] md:w-[243px] lg:w-[370px] h-auto"
           />
         </div>
         {/* Text Content */}
         <div ref={textRef} className="flex flex-col justify-between items-center max-w-xl h-auto text-center md:items-start md:text-left">
           <h2 className="text-primary text-[20px] md:text-[26px] lg:text-[30px] font-bold mb-2">
             {t('impactPlatform.VisionSection.title')}
           </h2>
           <p className="text-black text-[14px] md:text-[17px] lg:text-[20px] font-medium leading-relaxed">
             {t('impactPlatform.VisionSection.desc')}
           </p>
         </div>
       </div>
       </section>
     )
}  

export default VisionSection


