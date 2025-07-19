import React from 'react'
import { useTranslation } from 'react-i18next';
import i18n from '../../../../public/locales.js';
import globe from "../../../assets/ESG/Earthh.png"; // Adjust path as needed
import fogg from "../../../assets/ESG/fogg.png"; // Adjust path as needed
import foggMiddle from "../../../assets/ESG/foggmiddle.png"; // Adjust path as needed
const years = [
  {
    year: "2025",
    top: { sm: "92%", md: "92%", lg: "92%" },
    left: { sm: "20%", md: "20%", lg: "20%" },
    active: true
  },
  {
    year: "2026",
    top: { sm: "62.5%", md: "62.5%", lg: "62.5%" },
    left: { sm: "1.5%", md: "1.5%", lg: "1.5%" }
  },
  {
    year: "2027",
    top: { sm: "23.75%", md: "23.75%", lg: "23.75%" },
    left: { sm: "9%", md: "9%", lg: "9%" }
  },
  {
    year: "2028",
    top: { sm: "1%", md: "1%", lg: "1%" },
    left: { sm: "50%", md: "50%", lg: "50%" }
  },
  {
    year: "2029",
    top: { sm: "23.75%", md: "23.75%", lg: "23.75%" },
    left: { sm: "91%", md: "91%", lg: "91%" }
  },
  {
    year: "2030",
    top: { sm: "62.5%", md: "62.5%", lg: "62.5%" },
    left: { sm: "98.5%", md: "98.5%", lg: "98.5%" }
  },
  {
    year: "2031 & Beyond",
    top: { sm: "92%", md: "92%", lg: "92%" },
    left: { sm: "80%", md: "80%", lg: "80%" }
  },
];
function NetZeroJourney() {
  const { t } = useTranslation();
  const lang = i18n.language || 'en';
  const isRTL = lang === 'ar';

    const getTextPosition = (year, screenSize = 'lg') => {
    const margins = {
      sm: { side: "-20px", top: "-8px" },
      md: { side: "-25px", top: "-10px" },
      lg: { side: "-30px", top: "-12px" }
    };

    const margin = margins[screenSize] || margins.lg;

    // Left side years (2025, 2026, 2027) - text to the left
    if (['2025', '2026', '2027'].includes(year)) {
      return {
        transform: "translate(-100%, 0%)",
        marginLeft: margin.side,
        textAlign: "right"
      };
    }
    // Right side years (2029, 2030, 2031 & Beyond) - text to the right
    else if (['2029', '2030', '2031 & Beyond'].includes(year)) {
      return {
        transform: "translate(15%, 0%)",
        marginLeft: margin.side.replace('-', ''),
        textAlign: "left"
      };
    }
    // Top year (2028) - text above
    else if (year === '2028') {
      return {
        transform: "translate(-20%, -100%)",
        marginTop: margin.top,
        textAlign: "center"
      };
    }

    return {
      transform: "translate(-50%, -50%)",
      textAlign: "center"
    };
  };
  return (
    <div className='max-w-full overflow-x-hidden px-4 md:max-w-4xl lg:max-w-[1166px] m-auto' dir={isRTL ? 'rtl' : 'ltr'} style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
    <h3 className='text-primary  font-bold lg:text-[45px] text-center mb-4'>{t('esg.netZeroJourney.title')}</h3>
    <h3 className='font-medium lg:text-2xl text-center mb-8'>{t('esg.netZeroJourney.subtitle1')}</h3>
    <h3 className='font-medium lg:text-2xl text-center mb-16'>{t('esg.netZeroJourney.subtitle2')}</h3>
    <div className="relative w-[200px] h-[200px] md:w-[280px] md:h-[280px] lg:w-[387.6px] lg:h-[387.6px] mx-auto text-center flex items-center justify-center px-3" dir="ltr" style={{ direction: 'ltr' }}>
      {/* Globe Image */}
     {Array.from({ length: 4 }).map((_, i) => (
  <img
    key={i}
    src={fogg}
    alt="Fog overlay"
    className="absolute w-[70%] h-[70%] md:w-[80%] md:h-[80%] lg:w-full lg:h-full object-cover pointer-events-none brightness-[80%]"
    style={{
      transform: `rotate(${-i * 60}deg) translateX(${window.innerWidth < 768 ? '30px' : window.innerWidth < 1024 ? '40px' : '50px'})`,
      transformOrigin: "50% 50%",
      opacity: 0.8
    }}
  />
))}
 {Array.from({ length: 3 }).map((_, i) => (
  <img
    key={i}
    src={fogg}
    alt="Fog overlay"
    className="absolute w-[70%] h-[70%] md:w-[80%] md:h-[80%] lg:w-full lg:h-full object-cover pointer-events-none brightness-[80%]"
    style={{
      transform: `rotate(${-i * 90}deg) translateX(${window.innerWidth < 768 ? '25px' : window.innerWidth < 1024 ? '32px' : '40px'})`,
      transformOrigin: "50% 50%",
      opacity: 0.8
    }}
  />
))}
<img
    src={foggMiddle}
    alt="Fog overlay"
    className="absolute w-[70%] h-[70%] md:w-[80%] md:h-[80%] lg:w-full lg:h-full object-cover top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 brightness-[30%]"
  />
      <img
        src={globe}
        alt="Earth"
        className="brightness-[60%] w-[141px] h-[141px] md:w-[196px] md:h-[196px] lg:w-[283.79px] lg:h-[283.79px] object-contain z-20 relative"
      />

      {/* Year Labels */}
      {years.map((item, index) => (
        <div
          key={index}
          className={`absolute z-50 text-xs md:text-sm lg:text-sm text-center`}
          style={{
            top: item.top.lg,
            left: item.left.lg,
            transform: "translate(-50%, -50%)",
            color: item.active ? "var(--color-main)" : "#013229",
            fontWeight: item.active ? "bold" : "normal",
          }}
        >
          <div
            className={`w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full mb-1 mx-auto border-2 md:border-3 lg:border-4 flex items-center justify-center bg-bg ${
              item.active ? "border-[var(--color-main)]" : "border-gray-300"
            }`}

          >
            <div
            className={`w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 rounded-full mx-auto ${
              item.active ? "bg-[var(--color-main)]" : "bg-gray-300"
            }`}
          >
                <div
            className="absolute text-xs md:text-sm lg:text-sm whitespace-nowrap"
            style={{
              color: item.active ? "var(--color-main)" : "#004D40",
              fontWeight: "bold" ,
              ...getTextPosition(item.year, 'lg')
            }}
          >
            {item.year}
          </div>
          </div>
          </div>
        </div>
      ))}

      {/* Circle (Border Line) */}
      
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="absolute inset-0 rounded-full border-2 border-gray-400"
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 89%, 0% 89%)" // Hide bottom 15% of the circle
          }}
        />
        <div 
          className="absolute inset-0 rounded-full border-2 border-main"
          style={{
    clipPath: "polygon(0% 80%, 0% 65%, 28% 100%)"
          }}
        />
      </div>
    </div>
    <div className="bg-primary px-4 py-2 lg:px-24 lg:my-8 md:px-8 md:py-5 flex justify-between items-center rounded-2xl">
          <div>
          <p className="text-main font-[600] text-[10px] lg:text-2xl md:text-[14.48px]  mb-4">
            {t('esg.netZeroJourney.offsetNow.title')}
          </p>
          <p className="text-[#FDFBF1] font-medium text-[8px] lg:text-xl md:text-[12.06px] ">
          {t('esg.netZeroJourney.offsetNow.description')}
          </p>
          </div>
          <button
  className="bg-main rounded-[13px] px-[10px] lg:px-[24px] py-[6px] lg:py-[12px] text-[8px] lg:text-[22px] md:text-[13.27] font-medium whitespace-nowrap"
>
  {t('esg.netZeroJourney.offsetNow.button')}
</button>
    </div>
        </div>
  )
}
export default NetZeroJourney





