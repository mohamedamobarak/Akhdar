import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import { gsapAnimation } from '@/lib/animations';

const ConnectingBusinesses = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || 'en';
  const isRTL = lang === 'ar';
  const dir = t('impactPlatform.direction') || (isRTL ? 'rtl' : 'ltr');

  // Animation refs
  const containerRef = useRef(null);
  const h2Ref = useRef(null);
  const pRef = useRef(null);

  useGSAP(() => {
    if (!containerRef.current || !h2Ref.current || !pRef.current) return;
    // Container from down
    gsapAnimation(containerRef.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' });
    // h2 from left
    gsapAnimation(h2Ref.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.2 });
    // p from right
    gsapAnimation(pRef.current, { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.4 });
  }, { scope: containerRef });

  return (
    <section
    ref={containerRef}
    className={`flex relative justify-center items-center px-4 mx-auto w-full max-w-6xl text-center`}
    dir={dir}
    style={{ direction: dir }}
  >
    <div className="bg-[#40D25126] rounded-[22px] w-full h-75  mx-auto justify-center py-10 px-4 flex flex-col items-center">
      <h2 ref={h2Ref} className="text-[20px] lg:text-[39px] md:text-[31px]  font-semibold  mb-2 text-primary">
        {t('impactPlatform.ConnectingBusinesses.title')}
      </h2>
      <p ref={pRef} className="mt-4 text-[13px] md:text-[20px] text-black font-medium max-w-2xl text-center">
        {t('impactPlatform.ConnectingBusinesses.desc')}
      </p>
    </div>
    </section>
  )
}

export default ConnectingBusinesses
