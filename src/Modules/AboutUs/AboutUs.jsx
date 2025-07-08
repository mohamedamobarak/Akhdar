import React from 'react';
import Header from '../../shared/Header/Header';
import Footer from '../../shared/Footer/Footer';
import StatementSection from './components/StatementSection';
import OurMissionVision from './components/OurMissionVision';
import MeetOurTeam from './components/MeetOurTeam';
import MakeImpactSection from './components/MakeImpactSection';
import ContactUs from './components/ContactUs';
import backgroundImage from '../../assets/about-us/bg-cover.png';
import { useTranslation } from 'react-i18next';
import HeroSection from '@/components/HeroSection';

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <main className='flex flex-col justify-center px-2 min-h-screen bg-bg md:px-8'>
      <HeroSection
          backgroundImage={backgroundImage}
          heading={t('aboutus.hero.title')}
          paragraph={t('aboutus.hero.subtitle')}
          firstLineEn="EasySmart"
          firstLineAr= " حلول ذكية لتعويض"
          secondLineEn=" Carbon Offsetting"
          secondLineAr=" الكربون بسهولة"
        />
        <StatementSection />
        <OurMissionVision />
        <MeetOurTeam />
        <MakeImpactSection />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
};

export default AboutUs; 