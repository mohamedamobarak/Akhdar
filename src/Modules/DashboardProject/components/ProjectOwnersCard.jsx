import React from 'react';
import { useTranslation } from 'react-i18next';

export default function ProjectOwnersCard() {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-50 flex items-center justify-center p-4">
      <div className="relative mb-5 bg-green-50 rounded-3xl py-10 px-8 sm:px-16 md:px-24 max-w-3xl w-full text-center shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {t('projectdashboard.projectOwnersCard.title')}
        </h2>
        <p className="text-base font-500">
          {t('projectdashboard.projectOwnersCard.description')}
        </p>
        <button className="absolute bottom-0 end-1/2 transform translate-x-1/2 translate-y-1/2 text-xs sm:text-sm bg-[#81F18E] hover:bg-green-500 text-gray-800 font-medium py-2 px-5 sm:px-6 md:px-8 rounded-md transition-colors duration-200">
          {t('projectdashboard.projectOwnersCard.button')}
        </button>
      </div>
    </div>
  );
}
