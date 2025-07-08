import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const HeroSection = ({
  backgroundImage,
  heading,
  paragraph,
  firstButtonLink,
  firstButtonLabel,
  secondButtonLabel,
  firstLineEn,
  firstLineAr,
  secondLineEn,
  secondLineAr,
}) => {
  const {  i18n } = useTranslation();
  const lang = i18n.language || 'en';
  const isRTL = lang === 'ar';
  const dir =  (isRTL ? 'rtl' : 'ltr');

<<<<<<< Updated upstream
=======
  // Refs for animation targets
  const containerRef = useRef(null);
  const h1Ref = useRef(null);
  const paragraphRef = useRef(null);
  const buttonsRef = useRef(null);

  useGSAP(() => {
    if (!h1Ref.current || !paragraphRef.current || !buttonsRef.current) return;

    // Split H1 text into two lines and animate from opposite directions
    const h1Element = h1Ref.current;

    // Define the two lines manually for better control
    const firstLine = isRTL ? firstLineAr : firstLineEn;
    const secondLine =  isRTL ? secondLineAr : secondLineEn;

    // Clear original content and create two line spans
    h1Element.innerHTML = '';

    // Create first line span
    const firstLineSpan = document.createElement('div');
    firstLineSpan.textContent = firstLine;
    firstLineSpan.style.display = 'block';
    h1Element.appendChild(firstLineSpan);

    // Create second line span
    const secondLineSpan = document.createElement('div');
    secondLineSpan.textContent = secondLine;
    secondLineSpan.style.display = 'block';
    h1Element.appendChild(secondLineSpan);

    // First line from right
    gsapAnimation(firstLineSpan, {
      x: 1000,
      opacity: 0,
    }, {
      x: 0,
      opacity: 1,
      duration: 1.2,
      ease: 'power3.out',
    });

    // Second line from left
    gsapAnimation(secondLineSpan, {
      x: -1000,
      opacity: 0,
    }, {
      x: 0,
      opacity: 1,
      duration: 1.2,
      ease: 'power3.out',
      delay: 0.2,
    });

    // Paragraph from bottom using gsapAnimation utility
    gsapAnimation(paragraphRef.current, {
      y: 100,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: 'power2.out',
      delay: 0.8,
    });

    // Buttons from bottom with stagger using gsapAnimation utility
    gsapAnimation(buttonsRef.current.children, {
      y: 100,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: 'power2.out',
      delay: 0.8,
    }, {
      stagger: 0.35
    });

  }, { scope: containerRef })
>>>>>>> Stashed changes
  return (
    <section
      className="flex relative justify-center items-center px-4 w-full h-screen text-center"
      dir={dir}
      style={{ direction: dir }}
    >
      {/* Background image */}
      <img
        src={backgroundImage}
        alt="Background"
        className="object-contain absolute inset-0 w-full h-full pointer-events-none"
      />
      {/* Text content */}
      <div className="relative z-10 px-6 mx-auto max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
        <h1 className="text-[30px] md:text-[51px] lg:text-[75px] font-bold text-primary mb-4">
          {heading}
        </h1>
        <p className="text-black text-[16px] md:text-[20px] lg:text-[24px] font-medium py-2">
          {paragraph}
        </p>
       {/* buttons */}
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
      <div className="flex flex-row gap-7 justify-center mt-8">
        <a
          href={firstButtonLink}
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
       {firstButtonLink && firstButtonLabel && (
        <div
        ref={buttonsRef}
        className="flex flex-row gap-7 justify-center mt-8"
      >
        <Link
          to={firstButtonLink}
>>>>>>> Stashed changes
          className="px-8 md:px-12 py-3 md:py-4 text-primary text-base md:text-lg bg-main rounded-[19px] text-center font-medium hover:bg-primary hover:text-white transition-all duration-300 min-w-[150px]"
        >
          {firstButtonLabel}
        </a>
        <button
          className="px-6 md:px-8 py-3 md:py-4 bg-[#E6E6E6] text-primary text-base md:text-lg rounded-[19px] text-center font-medium cursor-pointer hover:bg-primary hover:text-white transition-all duration-300 min-w-[150px]"
        >
          {secondButtonLabel}
        </button>
      </div>
       )
}
      
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  heading: PropTypes.node.isRequired,
  paragraph: PropTypes.node.isRequired,
  firstButtonLink: PropTypes.string.isRequired,
  firstButtonLabel: PropTypes.node.isRequired,
  secondButtonLabel: PropTypes.node.isRequired,
};

export default HeroSection; 