import React, { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next';
import i18n from '../../../../public/locales.js';
import { gsapAnimation } from '@/lib/animations';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const StatementSection = () => {
  const { t } = useTranslation();
  const lang = i18n.language || 'en';
  const isRTL = lang === 'ar';

  // Animation refs
  const sectionRef = useRef(null);
  const imgRef = useRef(null);

  useGSAP(() => {
    if (!imgRef.current) return;
    gsapAnimation(
      imgRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.3, ease: 'back.out(1.7)' },
      {
        scrollTrigger: {
          trigger: imgRef.current,
          start: 'top 85%',
          once: true,
        }
      }
    );
  }, { scope: sectionRef });

  // GSAP animation for SVG paths
  const animatedPaths = useRef([]);
  useEffect(() => {
    if (animatedPaths.current[0] && animatedPaths.current[1]) {
      gsap.set(animatedPaths.current, { x: isRTL ? -60 : 60, opacity: 0 });
      gsap.to(animatedPaths.current, {
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.3,
        ease: 'power2.out',
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col-reverse gap-8 justify-center items-center px-2 py-8 md:flex-row md:gap-14 lg:gap-24 md:py-16 lg:py-24 md:px-8"
      dir={isRTL ? 'rtl' : 'ltr'}
      style={{ direction: isRTL ? 'rtl' : 'ltr' }}
    >
      {/* Text Content */}
      <div className="sm:max-w-lg lg:max-w-4xl">
        <h2 className={`text-[25px] md:text-[30px] lg:text-[45px] font-[700] text-primary mb-10 md:mb-14 ${isRTL ? 'text-right' : 'text-center md:text-left'}`}> 
          {t('aboutus.statement.title')}
        </h2>
        <p className={`text-black text-[16px] md:text-[20px] lg:text-[22px] font-medium ${isRTL ? 'text-right' : 'text-center md:text-left'}`}> 
          {t('aboutus.statement.desc')}
        </p>
      </div>
      {/* Image */}
      <div className="flex flex-shrink-0 justify-center items-center w-full md:w-auto">
        <div
          className="w-[140px] h-[100px] sm:w-[180px] sm:h-[130px] md:w-[260px] md:h-[200px] lg:w-[400px] lg:h-[300px] xl:w-[500px] xl:h-[380px] mx-auto"
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 536 409"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="object-contain w-full h-full"
          >
            <circle cx="392.688" cy="221" r="143" fill="#D6EFD7" />
            <path d="M305.631 266.627L361.272 144.653M305.631 266.627L350.839 282.31M305.631 266.627L289.403 265.864M361.272 144.653L220.529 18.7672C210.268 9.58989 194.02 13.2806 188.73 25.99L107.944 220.114C102.818 232.431 110.959 246.219 124.22 247.678L289.403 265.864M361.272 144.653L431.649 171.779C442.478 175.953 447.493 188.437 442.56 198.942L403.699 281.698C399.349 290.961 388.709 295.446 379.041 292.092L350.839 282.31M350.839 282.31L304.626 388.15C300.118 398.474 287.977 403.04 277.784 398.245L257.174 388.551C247.384 383.945 243.031 372.39 247.349 362.47L289.403 265.864" stroke="#004D40" strokeWidth="16" />
            <path ref={el => animatedPaths.current[0] = el} d="M82.9188 129.352C78.5708 124.016 76.3976 117.618 76.2897 111.232C76.1422 102.499 79.8566 93.787 87.1529 87.8413C92.8242 83.2199 99.6954 81.0554 106.477 81.2164" stroke="#004D40" strokeWidth="13" strokeLinecap="round" />
            <path ref={el => animatedPaths.current[1] = el} d="M39.6191 141.765C30.3762 130.423 25.7564 116.822 25.527 103.246C25.2134 84.6809 33.1094 66.1613 48.62 53.522C60.676 43.6978 75.2827 39.0966 89.6999 39.4387" stroke="#004D40" strokeWidth="13" strokeLinecap="round" />
            <path d="M239.688 39L149.688 255" stroke="#004D40" strokeWidth="15" />
            <path d="M307.688 267.273L361.278 147H366.861L433.849 171.5L446.688 191.545L407.612 277.852L383.049 294L307.688 267.273Z" fill="#004D40" />
            <path d="M245.259 266C242.124 277.773 242.883 302.655 270.999 308" stroke="#004D40" strokeWidth="16" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default StatementSection
