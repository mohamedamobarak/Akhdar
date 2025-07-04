import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const HeroSection = ({
  backgroundImage,
  heading,
  paragraph,
  firstButtonLink,
  firstButtonLabel,
  secondButtonLabel,
}) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || 'en';
  const isRTL = lang === 'ar';
  const dir = t('impactPlatform.direction') || (isRTL ? 'rtl' : 'ltr');

  return (
    <section
      className="flex relative justify-center items-center px-4 w-full h-screen text-center"
      dir={dir}
      style={{ direction: dir }}
    >
      {/* Background image */}
      <img
        src={backgroundImage}
        alt="Background"
        className="object-contain absolute inset-0 w-full h-full pointer-events-none"
      />
      {/* Text content */}
      <div className="relative z-10 px-6 mx-auto max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
        <h1 className="text-[30px] md:text-[51px] lg:text-[75px] font-bold text-primary mb-4">
          {heading}
        </h1>
        <p className="text-black text-[16px] md:text-[20px] lg:text-[24px] font-medium py-2">
          {paragraph}
        </p>
       {/* buttons */}
      <div className="flex flex-row gap-7 justify-center mt-8">
        <a
          href={firstButtonLink}
          className="px-8 md:px-12 py-3 md:py-4 text-primary text-base md:text-lg bg-main rounded-[19px] text-center font-medium hover:bg-primary hover:text-white transition-all duration-300 min-w-[150px]"
        >
          {firstButtonLabel}
        </a>
        <button
          className="px-6 md:px-8 py-3 md:py-4 bg-[#E6E6E6] text-primary text-base md:text-lg rounded-[19px] text-center font-medium cursor-pointer hover:bg-primary hover:text-white transition-all duration-300 min-w-[150px]"
        >
          {secondButtonLabel}
        </button>
      </div>
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  heading: PropTypes.node.isRequired,
  paragraph: PropTypes.node.isRequired,
  firstButtonLink: PropTypes.string.isRequired,
  firstButtonLabel: PropTypes.node.isRequired,
  secondButtonLabel: PropTypes.node.isRequired,
};

export default HeroSection; 