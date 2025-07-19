import React, { useState, useEffect } from 'react'
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

const TeamCard = ({
  nameKey,
  titleKey,
  bgImg,
  profileImg,
  linkedin,
  highlight,
  expanded,
  onClick,
  inactiveLargeImg
}) => {
  const { t } = useTranslation();
  const lang = i18n.language || 'en';
  const isRTL = lang === 'ar';
  // Only show green bar if expanded
  const showGreenBar = expanded && (t(nameKey) || linkedin || t(titleKey) || highlight);
  return (
    <button
      className={`relative rounded-2xl bg-[#004D40] flex flex-col justify-end shadow-lg overflow-visible min-h-[320px] pb-0 transition-all duration-500 ease-in-out w-full mx-auto
        ${expanded ? 'z-20' : 'opacity-80 hover:opacity-100'}
      `}
      dir={isRTL ? 'rtl' : 'ltr'}
      aria-expanded={expanded}
      tabIndex={0}
      onClick={onClick}
      style={{ outline: expanded ? '2px solid #81F18E' : 'none' }}
    >
      {/* Card Content (only if expanded) */}
      <div className={`flex relative z-10 flex-col justify-between transition-all duration-500 ${expanded ? 'p-12 pb-0 h-full' : 'p-4 pb-0 h-[180px]'}`}>
        {expanded && (
          <div className="flex flex-col items-start text-left z-30 mb-4">
            <span className="text-[#81F18E] font-bold text-xl md:text-2xl leading-tight">{highlight && highlight}</span>
            <span className={`text-white font-bold text-xl md:text-2xl leading-tight ${isRTL ? 'block text-right' : ''}`}>{t(nameKey)}</span>
            <div className={`text-white text-base md:text-lg mt-2 mb-4 font-normal ${isRTL ? 'text-right' : ''}`}>{t(titleKey)}</div>
          </div>
        )}
      </div>
      {/* Green bar with bordered LinkedIn icon (conditionally rendered) */}
      {expanded && showGreenBar && (
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
      {/* Position/role background image (always visible) */}
      <div className={`absolute top-1 ${isRTL ? 'left-0' : 'right-0'} transition-all duration-500`}>
        <img src={bgImg} alt="position" className="object-contain h-64" />
      </div>
      {/* Profile image (always visible) */}
      <div className={`absolute bottom-0 flex items-end ${isRTL ? 'left-0' : 'right-0'} transition-all duration-500`}>
        <img
          src={profileImg}
          alt={t(nameKey)}
          className={`object-contain ${expanded ? 'w-[220px] h-[220px] md:w-[359.3px] md:h-[359.3px]' : inactiveLargeImg ? 'w-[180px] h-[180px] md:w-[250px] md:h-[250px]' : 'w-[80px] h-[80px] md:w-[120px] md:h-[120px]'} transition-all duration-500`}
          style={{ objectPosition: 'bottom' }}
        />
      </div>
    </button>
  );
};

// Add a hook to detect if screen is below md
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isMobile;
}

const MeetOurTeam = () => {
  const { t } = useTranslation();
  const lang = i18n.language || 'en';
  const isRTL = lang === 'ar';
  // Track which card is expanded (by index)
  const [expandedIdx, setExpandedIdx] = useState(0);
  const isMobile = useIsMobile();

  // Team data array for easier mapping
  const team = [
    {
      nameKey: 'aboutus.team.name1',
      titleKey: 'aboutus.team.title1',
      bgImg: CEO,
      profileImg: Team1,
      linkedin: '#',
    },
    {
      nameKey: 'aboutus.team.name2',
      titleKey: 'aboutus.team.title2',
      bgImg: COO,
      profileImg: Team2,
      linkedin: '#',
    },
    {
      nameKey: 'aboutus.team.name3',
      titleKey: 'aboutus.team.title3',
      bgImg: CEO,
      profileImg: Team3,
      linkedin: '#',
    },
    {
      nameKey: 'aboutus.team.name4',
      titleKey: 'aboutus.team.title4',
      bgImg: COO,
      profileImg: Team4,
      linkedin: '#',
    },

  ];

  // Split team into rows of 2
  const rows = [];
  for (let i = 0; i < team.length; i += 2) {
    rows.push(team.slice(i, i + 2));
  }

  return (
    <section className="bg-[#F0F5EF] py-10 flex flex-col items-center" dir={isRTL ? 'rtl' : 'ltr'} style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
      <h2 className="text-2xl md:text-3xl font-bold text-[#004D40] mb-8">{t('aboutus.team.title')}</h2>
      <div className="flex flex-col gap-8 w-full max-w-6xl items-center">
        {rows.map((row, rowIdx) => {
          // Find the expanded card in this row, default to first in row if none
          const baseIdx = rowIdx * 2;
          const activeInRow = expandedIdx >= baseIdx && expandedIdx < baseIdx + row.length ? expandedIdx : baseIdx;
          return (
            <div key={rowIdx} className="grid grid-cols-1 md:grid-cols-3 gap-6 w-2/3 items-center">
              {row.map((member, idx) => {
                const globalIdx = baseIdx + idx;
                const isActive = isMobile ? true : activeInRow === globalIdx;
                return (
                  <div
                    key={globalIdx}
                    className={isActive ? 'col-span-2' : 'col-span-1'}
                  >
                    <TeamCard
                      {...member}
                      expanded={isActive}
                      onClick={() => setExpandedIdx(globalIdx)}
                      inactiveLargeImg={!isActive}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="h-20 md:h-24"></div>
    </section>
  );
};

export default MeetOurTeam;
