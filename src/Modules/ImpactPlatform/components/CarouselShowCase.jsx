import React, { useEffect, useState } from "react";
import slider1 from '../../../assets/impact-platform/slider-main-img.png'
import slider2 from '../../../assets/impact-platform/slider-img-2.png'
import slider3 from '../../../assets/impact-platform/slider-img-3.png'
import slider4 from '../../../assets/impact-platform/slider-img-4.png'
import slider5 from '../../../assets/impact-platform/slider-img-5.png'
import { useTranslation } from 'react-i18next';

const images = [
  slider1,
  slider2,
  slider3,
  slider4,
  slider5
];

const CarouselShowCase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const { t, i18n } = useTranslation();
  const lang = i18n.language || 'en';
  const isRTL = lang === 'ar';
  const dir = t('impactPlatform.direction') || (isRTL ? 'rtl' : 'ltr');

  const updateCarousel = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((index + images.length) % images.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const getCardClass = (index) => {
    const diff = (index - currentIndex + images.length) % images.length;

    if (diff === 0) return "z-10 scale-105";
    if (diff === 1) return "z-5 translate-x-20 sm:translate-x-28 md:translate-x-32 lg:translate-x-56 scale-95 opacity-90";
    if (diff === 2) return "z-1 translate-x-30 sm:translate-x-56 md:translate-x-60 lg:translate-x-96 scale-90 opacity-70";
    if (diff === images.length - 1) return "z-5 -translate-x-20 sm:-translate-x-28 md:-translate-x-32 lg:-translate-x-56 scale-95 opacity-90";
    if (diff === images.length - 2) return "z-1 -translate-x-30 sm:-translate-x-56 md:-translate-x-60 lg:-translate-x-96 scale-90 opacity-70";


    return "opacity-0 pointer-events-none";
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") updateCarousel(currentIndex - 1);
    if (e.key === "ArrowRight") updateCarousel(currentIndex + 1);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <div className="w-full max-w-[1100px] mx-auto mt-10 px-4" dir={dir} style={{ direction: dir }}>
      <div className="mb-8 text-center">
        <h2 className="mb-2 text-2xl font-bold sm:text-3xl md:text-4xl text-primary">{t('impactPlatform.CarouselShowCase.title')}</h2>
        <p className="mx-auto max-w-2xl text-base text-black sm:text-lg md:text-xl">
          {t('impactPlatform.CarouselShowCase.desc')}
        </p>
      </div>
      <div className="h-[240px] sm:h-[340px] md:h-[450px] relative overflow-visible flex items-center justify-center">
        <button
          onClick={() => updateCarousel(currentIndex - 1)}
          className="hidden absolute -left-6 top-1/2 z-20 justify-center items-center w-8 h-8 rounded-full transform -translate-y-1/2 cursor-pointer md:flex sm:-left-10 md:-left-8 sm:w-10 sm:h-10 bg-main hover:bg-primary"
          aria-label="Previous"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 6L9 12L15 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="w-full h-full flex justify-center items-center relative transition-transform duration-800 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] perspective-[1000px]">
          {images.map((src, index) => {
            const diff = (index - currentIndex + images.length) % images.length;
            const isCenter = diff === 0;
            return (
              <div
                key={index}
                className={`absolute w-[135px] h-[170px] sm:w-[220px] sm:h-[260px] md:w-[250px] md:h-[350px] lg:w-[300px] lg:h-[400px]  rounded-2xl shadow-xl overflow-hidden transition-all duration-800 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] cursor-pointer transform ${getCardClass(index)}`}
                onClick={() => updateCarousel(index)}
              >
                <img
                  src={src}
                  alt={`Slide ${index}`}
                  className={`object-cover w-full h-full transition-all duration-700 ${isCenter ? '':'opacity-60'}`}
                />
              </div>
            );
          })}
        </div>

        <button
          onClick={() => updateCarousel(currentIndex + 1)}
          className="hidden absolute -right-6 top-1/2 z-20 justify-center items-center w-8 h-8 rounded-full transform -translate-y-1/2 cursor-pointer md:flex sm:-right-10 md:-right-8 sm:w-10 sm:h-10 bg-main hover:bg-primary"
          aria-label="Next"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6L15 12L9 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      {/* Dots below carousel */}
      <div className="hidden gap-2 justify-center mt-8 md:flex">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => updateCarousel(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
              i === currentIndex ? "bg-primary scale-110" : "bg-main"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CarouselShowCase;
