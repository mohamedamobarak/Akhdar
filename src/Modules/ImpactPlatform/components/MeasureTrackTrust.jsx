import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import measure from '../../../assets/impact-platform/measure-icon.svg';
import trust from '../../../assets/impact-platform/trust-icon.svg';
import track from '../../../assets/impact-platform/track-icon.svg';
import { useGSAP } from '@gsap/react';
import { gsapAnimation } from '@/lib/animations';

const MeasureTrackTrust = () => {
     const { t, i18n } = useTranslation();
     const lang = i18n.language || 'en';
     const isRTL = lang === 'ar';
     const dir = t('impactPlatform.direction') || (isRTL ? 'rtl' : 'ltr');
     const features = [
       {
         header: t('impactPlatform.MeasureTrackTrust.measure'),
         paragraph: t('impactPlatform.MeasureTrackTrust.measureDesc'),
         image: measure,
       },
       {
         header: t('impactPlatform.MeasureTrackTrust.track'),
         paragraph: t('impactPlatform.MeasureTrackTrust.trackDesc'),
         image: track,
       },
       {
         header: t('impactPlatform.MeasureTrackTrust.trust'),
         paragraph: t('impactPlatform.MeasureTrackTrust.trustDesc'),
         image: trust,
       },
     ];

     // Animation refs for images only
     const cardsContainerRef = useRef(null);
     const imgRefs = useRef([]);

     useGSAP(() => {
       if (!imgRefs.current) return;
       gsapAnimation(imgRefs.current, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.9, ease: 'back.out(1.7)' }, { stagger: 0.4 });
     }, { scope: cardsContainerRef });

     return (
       <section
         className={`flex relative justify-center items-center px-4 mx-auto w-full max-w-7xl text-center mt-44 lg:mt-0`}
         dir={dir}
         style={{ direction: dir }}
       >
         <div className='flex flex-col gap-10 justify-center items-center'>
           <h2 className='font-bold lg:text-[45px] text-[30px] text-primary text-center lg:w-[814px] w-[366px]'>
             {t('impactPlatform.MeasureTrackTrust.title')}
           </h2>
           <div className='flex flex-col gap-28 justify-start items-start md:flex-row' ref={cardsContainerRef}>
             {
               features.map((feature,i)=>(
                 <FeatureCard key={i} {...feature} imgRef={el => imgRefs.current[i] = el} />
               ))
             }
           </div>
         </div>
       </section>
     )
}  

export default MeasureTrackTrust

const FeatureCard = ({ image, header, paragraph, imgRef }) => (
  <div className="flex flex-col items-center max-w-xs text-center">
    <img ref={imgRef} src={image} alt={header} className="lg:w-[224px] lg:h-[214px] w-[107px] h-[107px] md:w-[103px] md:h-[98px]" />
    <h3 className="mb-2 font-semibold text-primary text-[20px] lg:text-[37px]">{header}</h3>
    <p className="text-black font-medium   lg:text-[21px] text-[14px]">{paragraph}</p>
  </div>
);
