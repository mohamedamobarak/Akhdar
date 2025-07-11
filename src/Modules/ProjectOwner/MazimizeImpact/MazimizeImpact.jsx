import React from 'react';
import * as styles from '../ProjectOwner.module.css';
import { useTranslation } from 'react-i18next';

const MaximizeImpact = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-100 p-6 sm:p-8 relative flex flex-wrap justify-center items-center">
      {/* Left Panel */}
      <div className="w-full md:w-1/3 mb-8 md:mb-0 px-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 leading-tight">
          {t('maximizeImpact.title')}
        </h1>
        <p className="text-gray-700 text-sm leading-relaxed">
          {t('maximizeImpact.description')}
        </p>
      </div>

      {/* Center Area */}
      <div className="w-full md:w-2/3 flex justify-center relative px-4">
        <div className="relative">
          <div className={`${styles.bgImg} w-64 h-64 sm:w-80 sm:h-80 md:w-90 md:h-90 bg-cover bg-center rounded-full overflow-hidden shadow-lg`} />

          {/* Metrics */}
          <div className="absolute top-5 -left-[55px] sm:-left-20 max-w-[166px]">
            <div className="bg-white rounded-lg shadow-lg mb-3 text-center">
              <h3 className="text-xs md:text-sm font-semibold text-gray-800 mb-1">
                {t('maximizeImpact.metrics.trees.title')}
              </h3>
              <div className="text-lg md:text-xl font-bold text-gray-900 mb-1">1,500</div>
              <p className="text-xs text-gray-500">{t('maximizeImpact.lastUpdate', { date: '25 April 2025' })}</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-3 mb-3 text-center">
              <h3 className="text-xs md:text-sm font-semibold text-gray-800 mb-1">
                {t('maximizeImpact.metrics.plastic.title')}
              </h3>
              <div className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                3,000 <span className="text-sm font-normal text-gray-600">{t('maximizeImpact.metrics.plastic.unit')}</span>
              </div>
              <p className="text-xs text-gray-500">{t('maximizeImpact.lastUpdate', { date: '25 April 2025' })}</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-3 text-center">
              <h3 className="text-xs md:text-sm font-semibold text-gray-800 mb-1">
                {t('maximizeImpact.metrics.carbon.title')}
              </h3>
              <div className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                30,000 <span className="text-sm font-normal text-gray-600">{t('maximizeImpact.metrics.carbon.unit')}</span>
              </div>
              <p className="text-xs text-gray-500">{t('maximizeImpact.lastUpdate', { date: '25 April 2025' })}</p>
            </div>
          </div>

          {/* Sponsors Card */}
          <div className="absolute left-30 sm:left-60 top-30 sm:top-40 max-w-[200px] md:max-w-[300px] sm:w-72">
            <div className="bg-white rounded-lg shadow-lg p-2 md:p-3">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm md:text-lg font-semibold text-green-800">
                  {t('maximizeImpact.sponsors.title')}
                </h3>
                <p className="text-[9px] sm:text-xs text-gray-500">
                  {t('maximizeImpact.lastUpdate', { date: '25 4 2025' })}
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-medium text-gray-600 pb-2 border-b">
                  <span className="text-xs md:text-sm pe-1 text-green-700">{t('maximizeImpact.sponsors.columns.name')}</span>
                  <span className="text-xs md:text-sm pe-1 text-green-700">{t('maximizeImpact.sponsors.columns.currency')}</span>
                  <span className="text-xs md:text-sm pe-1 text-green-700">{t('maximizeImpact.sponsors.columns.amount')}</span>
                </div>

                {['Company 1', 'Company 2', 'Company 3'].map((company, index) => (
                  <div key={company} className="flex justify-between items-center text-sm border-b-1 pb-1 border-green-500">
                    <div className="flex items-center gap-2">
                      <div className="border-2 border-green-300 rounded-full">
                        <div className="w-2 h-2 bg-green-500 rounded-full border-1 border-white"></div>
                      </div>
                      <span className="text-xs md:text-sm">{company}</span>
                    </div>
                    <span className="text-xs md:text-sm">{index === 1 ? 'USD' : 'SAR'}</span>
                    <span className="font-semibold text-xs md:text-sm">
                      {index === 0 ? '1500' : index === 1 ? '2000' : '5000'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaximizeImpact;
