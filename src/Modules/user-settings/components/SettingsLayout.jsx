import React, { useRef } from 'react';
import BackButton from './BackButton';
import bgImage from '../../../assets/dashboard-settings/pexels-elias-tigiser-411757-2757549 1.png';
import { useTranslation } from 'react-i18next';
import { useGSAP } from '@gsap/react';
import { gsapAnimation } from '@/lib/animations';

const SettingsLayout = ({
  title,
  children,
  backTo = '/dashboard'
}) => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  // Animation refs
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const formRef = useRef(null);

  // Animation setup similar to SignUp component
  const textInitX = isRTL ? 300 : -300;
  const formInitX = isRTL ? -300 : 300;

  // Initial mount animation
  useGSAP(() => {
    if (!textRef.current || !formRef.current) return;
    gsapAnimation(textRef.current, { x: textInitX, opacity: 0 }, { x: 0, opacity: 1, duration: 0.9, ease: 'back.out(1.7)' }, { disableScrollTrigger: true });
    gsapAnimation(formRef.current, { x: formInitX, opacity: 0 }, { x: 0, opacity: 1, duration: 0.9, ease: 'back.out(1.7)' }, { disableScrollTrigger: true });
  }, { scope: sectionRef });

  return (
    <div
      ref={sectionRef}
      dir={isRTL ? 'rtl' : 'ltr'}
      className="relative min-h-screen w-full flex items-center justify-center font-inter overflow-hidden "
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />
      
      <div className="relative z-10 flex flex-col md:flex-row w-full h-full min-h-screen">
        {/* Left Section - Title and Back Button */}
        <div ref={textRef} className={`flex-1 flex flex-col text-center ${isRTL ? 'items-start md:text-right' : 'items-start md:text-left'} px-8 md:pl-20 md:py-8 pt-12 pb-4 max-w-xl`}>
          <div className="mb-8">
            <BackButton to={backTo} />
          </div>
          <h1 className="text-3xl  md:text-4xl font-bold mb-4 text-main">
            {title}
          </h1>
        </div>
        
        {/* Right Section - Content Card */}
        <div ref={formRef} className="flex-1 flex items-center justify-center py-12 px-4 md:px-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 w-full max-w-lg">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsLayout;
