import React from 'react';
import { useTranslation } from 'react-i18next';

const OwnerMain = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#F6F7F6] min-h-[600px] flex items-center">
      <div className="hero-layer"></div>
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-[#003B2D] text-4xl md:text-5xl font-bold max-w-2xl mx-auto leading-tight mb-4">
          {t('ownerMain.heading')}
        </h1>

        <p className="text-[#004D40] font-semibold max-w-xl mx-auto mb-10 text-lg">
          {t('ownerMain.description')}
        </p>

        <div className="flex justify-center space-x-4">
          <button className="cursor-pointer bg-[#81F18E] text-[#004D40] px-6 py-3 rounded-full text-sm font-medium hover:bg-green-400 transition-colors">
            {t('ownerMain.startButton')}
          </button>
          <button className="cursor-pointer bg-[#E6E6E6] text-[#004D40] px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
            {t('ownerMain.fillFormButton')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default OwnerMain;
