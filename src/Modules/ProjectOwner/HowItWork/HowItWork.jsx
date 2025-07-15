import React from 'react';
import { useTranslation } from 'react-i18next';

import ProjectOwner1 from '../../../assets/project-owner/projectOwner1.png';
import ProjectOwner2 from '../../../assets/project-owner/projectOwner2.png';
import ProjectOwner3 from '../../../assets/project-owner/projectOwner3.png';
import ProjectOwner4 from '../../../assets/project-owner/projectOwner4.png';

const HowItWorks = () => {
  const { t } = useTranslation();

  const images = [ProjectOwner1, ProjectOwner2, ProjectOwner3, ProjectOwner4];

  const steps = [
    {
      number: 1,
      title: t('howItWorks.steps.1.title'),
      description: t('howItWorks.steps.1.description'),
      side: 'right',
    },
    {
      number: 2,
      title: t('howItWorks.steps.2.title'),
      description: t('howItWorks.steps.2.description'),
      side: 'left',
    },
    {
      number: 3,
      title: t('howItWorks.steps.3.title'),
      description: t('howItWorks.steps.3.description'),
      side: 'right',
    },
    {
      number: 4,
      title: t('howItWorks.steps.4.title'),
      description: t('howItWorks.steps.4.description'),
      side: 'left',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-700 mb-4">
            {t('howItWorks.title')}
          </h1>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-green-300 h-full block"></div>

          {/* Steps */}
          <div className="space-y-20">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-1/2 top-1/2 transform -translate-1/2 border-green-400 rounded-full border-2 shadow-md z-10 block">
                  <div className="w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                </div>

                {/* Step Content */}
                <div
                  className={`flex flex-nowrap items-center ${
                    step.side === 'left'
                      ? 'flex-row-reverse sm:ml-10 justify-evenly lg:justify-center'
                      : ''
                  }`}
                >
                  {/* Content Card */}
                  <div
                    className={`relative w-5/12 ${
                      step.side === 'left' ? '-me-0 me-auto ms-1' : 'md:ms-14 ms-5'
                    }`}
                  >
                    <div
                      className={`absolute bg-white ${
                        step.side === 'left' ? '' : '-right-8'
                      } top-1/2 transform -translate-1/2 w-8 h-12 hidden md:block`}
                    >
                      <div
                        className={`absolute ${
                          step.side === 'left'
                            ? 'rounded-br-4xl border-l-0'
                            : 'right-0 rounded-bl-4xl border-r-0'
                        } top-0 border border-t-0 w-4 h-4 bg-gray-100`}
                      ></div>
                      <div
                        className={`absolute ${
                          step.side === 'left'
                            ? 'rounded-tr-4xl border-l-0'
                            : 'right-0 rounded-tl-4xl border-r-0'
                        } bottom-0 border border-b-0 w-4 h-4 bg-gray-100`}
                      ></div>
                    </div>
                    <div className="bg-white rounded-xl md:p-6 p-1 shadow-lg border border-gray-200">
                      <div className="flex items-start space-x-1 sm:space-x-2 md:space-x-3">
                        <div className="flex-shrink-0">
                          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-600">
                            {step.number}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm sm:text-lg md:text-xl font-bold text-gray-800 mb-2">
                            {step.title}
                          </h3>
                          <p className="text-xs sm:text-base text-gray-600 leading-relaxed text-center">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div
                    className={`${
                      step.side === 'left' ? 'md:w-auto md:me-56 me-2' : 'md:me-20 ms-auto'
                    }`}
                  >
                    <img
                      src={images[step.number - 1]}
                      alt={`Step ${step.number}`}
                      className="max-w-[100px] md:max-w-[200px] h-auto rounded-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <button className="bg-green-400 hover:bg-green-500 text-white font-semibold py-3 px-8 rounded-lg text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
            {t('howItWorks.cta')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
