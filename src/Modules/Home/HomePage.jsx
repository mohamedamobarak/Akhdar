import React from 'react';
import Header from '../../shared/Header/Header';
import HeroSection from './Hero/HeroSection';
import Partners from './Partners/Partners';
import NetZeroSteps from './NetZeroSteps/NetZeroSteps';
import WhatIsOffsetting from './WhatIsOffsetting/WhatIsOffsetting';
import BuildPortfolio from './BuildPortfolio/BuildPortfolio';
import ShareYourImpact from './ShowImpact/ShowImpact';
import Automations from './Automations/Automations';
import HowToStart from './HowToStart/HowToStart';
import CallToAction from './CallToAction/CallToAction';
import Footer from '../../shared/Footer/Footer';

const HomePage = () => (
  <div className="bg-[#F6F7F6]">
    <Header/>
    <HeroSection />
    <Partners />
    <WhatIsOffsetting />
    <BuildPortfolio />
    <ShareYourImpact />
    <Automations />
    <HowToStart />
    <NetZeroSteps />
    <CallToAction />
    <Footer />
  </div>
);

export default HomePage; 