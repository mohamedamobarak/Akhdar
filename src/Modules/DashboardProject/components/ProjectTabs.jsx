import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ProjectTabs = ({ activeTab, setActiveTab }) => {
  const { t } = useTranslation();

  const tabs = ['Description', 'UN SDGs', 'Project Info', 'Gallery', 'Certification'];

  const tabKeyMap = {
    'Description': 'description',
    'UN SDGs': 'unSdgs',
    'Project Info': 'projectInfo',
    'Gallery': 'gallery',
    'Certification': 'certification'
  };

  return (
    <div className="flex border-b max-w-[370px] sm:max-w-full border-gray-200 mb-6 overflow-x-auto gap-1 sm:gap-2 lg:gap-6 xl:gap-8 scrollbar-hide">
      {tabs.map((tab) => (
        <Link
          to={`${tabKeyMap[tab]}`}
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-1 md:px-2 py-3 md:font-medium text-[10px] sm:text-xs md:text-sm border-b-2 transition-colors whitespace-nowrap ${
            activeTab === tab
              ? 'text-teal-600 border-teal-600 font-bold'
              : 'text-gray-500 border-transparent hover:text-gray-700'
          }`}
        >
          {t(`projectdashboard.projectTabs.${tabKeyMap[tab]}`)}
        </Link>
      ))}
    </div>
  );
};

export default ProjectTabs;
