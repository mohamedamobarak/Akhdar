import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import carouselImg from '../../../assets/calc-company/carouselImg.png';

const CarbonOffsetInterface = () => {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(0);
  const [carouselApi, setCarouselApi] = useState(null);

  const steps = [
    {
      id: 1,
      title: t("offset.steps.measure.title"),
      description: t("offset.steps.measure.description"),
      buttonText: t("offset.steps.measure.button")
    },
    {
      id: 2,
      title: t("offset.steps.reduce.title"),
      description: t("offset.steps.reduce.description"),
      buttonText: t("offset.steps.reduce.button")
    },
    {
      id: 3,
      title: t("offset.steps.offset.title"),
      description: t("offset.steps.offset.description"),
      buttonText: t("offset.steps.offset.button")
    }
  ];

  useEffect(() => {
    if (!carouselApi) return;

    const onSelect = () => {
      setCurrentStep(carouselApi.selectedScrollSnap());
    };

    carouselApi.on('select', onSelect);
    onSelect();

    return () => {
      carouselApi.off('select', onSelect);
    };
  }, [carouselApi]);

  const handleDotClick = (index) => {
    if (carouselApi) {
      carouselApi.scrollTo(index);
    }
  };

  return (
    <div className="bg-[#f5fbf7] min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-xl font-semibold font-[500] text-green-800 mb-2">
            {t("offset.title")}
          </h1>
        </div>

        {/* Carousel */}
        <Carousel className="w-full relative" setApi={setCarouselApi}>
          <CarouselContent>
            {steps.map((step, index) => (
              <CarouselItem key={step.id}>
                <div className="flex flex-col items-center">
                  {/* Step Number */}
                  <div className="text-center mb-6">
                    <p className="text-sm text-gray-600 font-[500]">
                      {t("offset.step")} {step.id}
                    </p>
                  </div>

                  {/* Icon */}
                  <div className="relative mb-20">
                    <div className="w-48 h-48 rounded-full flex items-center justify-center border-4 border-green-300">
                      <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center">
                        <img src={carouselImg} alt="Leaf" className="w-30 h-30" />
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <button className="bg-teal-700 text-white px-5 py-1 rounded-md text-sm font-medium hover:bg-teal-800 transition-colors">
                        {step.buttonText}
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center mt-8">
                    <h2 className="text-lg font-semibold text-gray-800 mb-3">
                      {step.title}
                    </h2>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Dot Indicators */}
          <div className="absolute bottom-26 left-1/2 transform -translate-x-1/2 flex justify-center bg-[#D6EFD7] rounded-xl p-3 mt-6 space-x-3">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-4 h-4 rounded-full transition-all cursor-pointer hover:scale-110 ${
                  index === currentStep
                    ? 'bg-green-400'
                    : 'bg-white border border-gray-300 hover:bg-gray-50'
                }`}
              />
            ))}
          </div>

          {/* Nav Buttons */}
          <CarouselPrevious className="absolute left-4 top-1/3 -translate-y-1/2 bg-white hover:bg-gray-100 border border-gray-200 text-gray-500 hover:text-gray-700" />
          <CarouselNext className="absolute right-4 top-1/3 -translate-y-1/2 bg-white hover:bg-gray-100 border border-gray-200 text-gray-500 hover:text-gray-700" />
        </Carousel>
      </div>
    </div>
  );
};

export default CarbonOffsetInterface;
