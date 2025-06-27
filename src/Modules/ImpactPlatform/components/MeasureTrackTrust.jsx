import React from 'react'
// import { useTranslation } from 'react-i18next';
import i18n from '../../../../public/locales.js';
import { Link } from 'react-router-dom';
import measure from '../../../assets/impact-platform/measure-icon.svg';
import trust from '../../../assets/impact-platform/trust-icon.svg';
import track from '../../../assets/impact-platform/track-icon.svg';
const features = [
  {
    header: "Measure",
    paragraph: "Measure your carbon, and learn how much greenhouse gas emissions your organization produces",
    image:measure,
  },
  {
    header: "Track",
    paragraph: "Track your progress, set goals, and access clear reports.",
    image: track,
  },
  {
    header: "Trust",
    paragraph: "Share visual proof and updates to highlight your impact and engage stakeholders confidently.",
    image: trust,
  },
];

const MeasureTrackTrust = () => {
     // const { t } = useTranslation();
     const lang = i18n.language || 'en';
     const isRTL = lang === 'ar';
     return (
       <section
       className={`flex relative justify-center items-center px-4 mx-auto w-full max-w-7xl text-center`}
       dir={isRTL ? 'rtl' : 'ltr'}
       style={{ direction: isRTL ? 'rtl' : 'ltr' }}
     >
       <div className='flex flex-col gap-10 justify-center items-center'>
       <h2 className='font-bold lg:text-[45px] text-[30px] text-primary text-center lg:w-[814px] w-[366px]'> Measure, Track, and trust Your Impact</h2>
      <div className='flex flex-col gap-28 justify-start items-start md:flex-row'>
        {
            features.map((feature,i)=>(
                <FeatureCard key={i} {...feature} />
            ))
        }
      </div>
       </div>
       </section>
     )
}  

export default MeasureTrackTrust

const FeatureCard = ({ image, header, paragraph }) => (
  <div className="flex flex-col items-center max-w-xs text-center">
    <img src={image} alt={header} className="lg:w-[224px] lg:h-[214px] w-[107px] h-[107px] md:w-[103px] md:h-[98px]" />
    <h3 className="mb-2 font-semibold text-primary text-[20px] lg:text-[45px]">{header}</h3>
    <p className="text-black font-medium   lg:text-[24px] text-[14px]">{paragraph}</p>
  </div>
);
