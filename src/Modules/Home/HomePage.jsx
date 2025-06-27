import React from 'react';
import Header from '../../shared/Header/Header';
import HeroSection from './Hero/HeroSection';
import Benefits from './Benefits/Benefits';
import HowItWorks from './HowItWorks/HowItWorks';
import Features from './Features/Features';
import Partners from './Partners/Partners';
import Footer from '../../shared/Footer/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Benefits />
      <HowItWorks />
      <Features />
      <Partners />
      <Footer />
    </>
  );
};

export default HomePage; 