import React from 'react';
import Header from '../../shared/Header/Header';
import Footer from '../../shared/Footer/Footer';
import HeroSection from './components/HeroSection';
import StatementSection from './components/StatementSection';
import OurMissionVision from './components/OurMissionVision';
import MeetOurTeam from './components/MeetOurTeam';
import MakeImpactSection from './components/MakeImpactSection';
import ContactUs from './components/ContactUs';

const AboutUs = () => {
  return (
    <>
      <Header />
      <main className='flex flex-col justify-center px-2 min-h-screen bg-bg md:px-8'>
        <HeroSection />
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