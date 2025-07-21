import React from 'react';
import { useTranslation } from 'react-i18next';

const HeroSection = ({ bgCover }) => {
  const { t } = useTranslation();

  return (
    <section
      style={{
        backgroundImage: `url(${bgCover})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="min-h-screen flex items-center"
    >
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-white max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4">
            {t('projectdashboard.hero.title')}
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            {t('projectdashboard.hero.subtitle')}
          </h2>
          <p className="text-lg sm:text-xl font-semibold mb-4">
            {t('projectdashboard.hero.location')}
          </p>
          <div className="flex items-center gap-3">
            <div className="flex items-center font-medium">
              <div className="w-3 h-3 bg-green-600 rounded-full mr-2"></div>
              {t('projectdashboard.hero.carbonOffsetting')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
