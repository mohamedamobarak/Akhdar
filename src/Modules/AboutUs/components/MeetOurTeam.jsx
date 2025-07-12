import React from 'react'
import CEO from '../../../assets/about-us/CEO.png';
import COO from '../../../assets/about-us/COO.png';
import Team1 from '../../../assets/about-us/team-img-1.png';
import Team2 from '../../../assets/about-us/team-img-2.png';
import Team3 from '../../../assets/about-us/team-img-3.png';
import Team4 from '../../../assets/about-us/team-img-4.png';
import Team5 from '../../../assets/about-us/team-img-5.png';
import { useTranslation } from 'react-i18next';
import i18n from '../../../../public/locales.js';

const LinkedInIcon = () => (
  <svg width="47" height="47" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="16" fill="#004D40"/>
    <path d="M12.667 13.333h2.666v1.333h.04c.372-.704 1.28-1.447 2.637-1.447 2.82 0 3.333 1.857 3.333 4.273v4.174h-2.667v-3.707c0-.885-.016-2.025-1.333-2.025-1.334 0-1.54.96-1.54 1.953v3.779h-2.666v-8.133zm-1.333 0h-2.667v8.133h2.667v-8.133zm-1.333-1.333a1.333 1.333 0 100-2.667 1.333 1.333 0 000 2.667z" fill="#81F18E"/>
  </svg>
);

const TeamCard = ({ nameKey, titleKey, bgImg, profileImg, linkedin, highlight }) => {
  const { t } = useTranslation();
  const lang = i18n.language || 'en';
  const isRTL = lang === 'ar';
  const showGreenBar = t(nameKey) || linkedin || t(titleKey) || highlight;
  return (
    <div className={`relative rounded-2xl bg-[#004D40] flex flex-col justify-end shadow-lg overflow-visible min-h-[400px] pb-0`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Card Content */}
      <div className="flex relative z-10 flex-col justify-between p-12 pb-0 h-full">
        <div>
          <span className="text-[#81F18E] font-bold text-xl md:text-2xl leading-tight">{highlight && highlight}</span>
          <span className={`text-white font-bold text-xl md:text-2xl leading-tight ${isRTL ? 'block text-right' : ''}`}>{t(nameKey)}</span>
          <div className={`text-white text-base md:text-lg mt-2 mb-8 font-normal ${isRTL ? 'text-right' : ''}`}>{t(titleKey)}</div>
        </div>
      </div>
      {/* Green bar with bordered LinkedIn icon (conditionally rendered) */}
      {showGreenBar && (
        <div className={`relative z-20 bg-[#81F18E] h-14 rounded-b-2xl flex items-center ${isRTL ? 'pr-6 flex-row-reverse' : 'pl-6'}`}>
          {/* Overlapping LinkedIn icon */}
          {linkedin && (
            <div className={`absolute -top-6 ${isRTL ? 'right-8' : 'left-8'}`}>
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                <span className="border-4 border-[#004D40] bg-[#81F18E] rounded-full flex items-center justify-center w-16 h-16 shadow-lg">
                  <LinkedInIcon />
                </span>
              </a>
            </div>
          )}
        </div>
      )}
      {/* Position/role background image */}
      <div className={`absolute top-1 ${isRTL ? 'left-0' : 'right-0'}`}>
        <img src={bgImg} alt="position" className="object-contain h-64" />
      </div>
      {/* Enlarged and styled profile image */}
      <div className={`absolute bottom-0 flex items-end ${isRTL ? 'left-0' : 'right-0'}`}>
        <img
          src={profileImg}
          alt={t(nameKey)}
          className="w-[359.3px]  h-[359.3px] object-contain "
          style={{ objectPosition: 'bottom' }}
        />
      </div>
    </div>
  );
};

const MeetOurTeam = () => {
  const { t } = useTranslation();
  const lang = i18n.language || 'en';
  const isRTL = lang === 'ar';
  return (
    <section className="bg-[#F0F5EF] py-10 flex flex-col items-center" dir={isRTL ? 'rtl' : 'ltr'} style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
      <h2 className="text-2xl md:text-3xl font-bold text-[#004D40] mb-8">{t('aboutus.team.title')}</h2>
      {/* First row: CEO & COO */}
      <div className="grid grid-cols-1 gap-8 mb-16 w-full max-w-6xl md:grid-cols-2">
        <TeamCard
          nameKey="aboutus.team.name1"
          titleKey="aboutus.team.title1"
          bgImg={CEO}
          profileImg={Team1}
          linkedin="#"
        />
        <TeamCard  
          nameKey="aboutus.team.name2"
          titleKey="aboutus.team.title2"
          bgImg={COO}
          profileImg={Team2}
        />
      </div>
      {/* Second row: 3 team members */}
      <div className="grid grid-cols-1 gap-8 w-full max-w-6xl md:grid-cols-3">
        <TeamCard
          nameKey="aboutus.team.name3"
          titleKey="aboutus.team.title3"
          bgImg={CEO}
          profileImg={Team3}
          linkedin="#"
        />
        <TeamCard
       
          bgImg={COO}
          profileImg={Team4}
        />
        <TeamCard
     
          bgImg={COO}
          profileImg={Team5}
        />
      </div>
      {/* Spacer for image overlap */}
      <div className="h-20 md:h-24"></div>
    </section>
  );
};

export default MeetOurTeam;
