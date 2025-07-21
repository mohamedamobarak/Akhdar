import React from 'react';
import { useTranslation } from 'react-i18next';

const ProjectDescription = ({ projectDescriptionImg }) => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
      <div className="md:col-span-2">
        <h2 className="text-[16px] sm:text-lg md:text-xl font-bold text-teal-800 mb-3 sm:mb-6">
          {t('projectdashboard.projectDescription.title')}
        </h2>
        <div className="space-y-2 sm:space-y-4 max-w-[180px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px] text-[10px] sm:text-sm md:text-base text-gray-700 sm:leading-relaxed sm:font-[500]">
          <p>{t('projectdashboard.projectDescription.paragraph1')}</p>
          <p>{t('projectdashboard.projectDescription.paragraph2')}</p>
        </div>
      </div>
      <div className="md:col-span-1 xl:order-last">
        <div className="max-w-[180px] sm:max-w-[280px] md:w-full h-38 md:h-96 md:mt-9 bg-gray-200 rounded-e-xl md:rounded-s-xl md:rounded-e-none overflow-hidden">
          <img
            src={projectDescriptionImg}
            className="w-full h-full object-cover"
            alt={t('projectdashboard.projectDescription.imageAlt')}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;
