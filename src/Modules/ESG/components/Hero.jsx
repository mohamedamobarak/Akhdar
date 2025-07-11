
import React from 'react';
import { useTranslation } from 'react-i18next';
import gearImg from '../../../assets/ESG/Layer_1.png';
import smallGear from '../../../assets/ESG/small_gear.png';

function Hero() {
  const { t } = useTranslation();
  return (
    <section className="relative ">
      <div className="absolute top-0 z-0 left-1/5 flex items-center justify-center gap-1.5">
      <img
        src={gearImg}
        className="sm:mt-8 md:mt-12 lg:mt-16 w-[174.35px] sm:w-[250px] md:w-[400.88px] lg:w-[550px]"
        alt="gear icon layer"
      />
      <img
        src={smallGear}
        className="sm:translate-y-[-40px] md:translate-y-[-60px] lg:translate-y-[-86px] w-[102.07px] sm:w-[180px] md:w-[234.7px] lg:w-[322px]"
        alt="gear icon layer"
      />
      </div>
      <div className="relative z-10 pt-10 lg:pt-20 md:pt-18">
      <h1 className="text-primary font-bold font-inter text text-center lg:text-[80px] md:text-[50px] sm:text-[32px] text-3xl">
        {t('esg.hero.title', 'Empower your Business with Sustainable Strategies.')}
      </h1>
      <h3 className="text-heading font-bold lg:text-[40px] md:text-[32px] sm:text-[24px] text-center mb-9">
        {t('esg.hero.subtitle', '(Measure - Act - Comply)')}
      </h3>
      <p className="text-primary font-medium lg:text-2xl md:text-xl sm:text-lg text-center m-auto max-w-[1170px] mb-[293px] ">
        {t('esg.hero.desc', 'At AKHDAR, we help your business thrive through sustainability. Our ESG & Climate Strategy Consulting services guide you in measuring, acting, and complying with environmental, social, and governance (ESG) standards to unlock growth opportunities and achieve long-term success.')}
      </p>
      </div>
    </section>
  );
}

export default Hero
