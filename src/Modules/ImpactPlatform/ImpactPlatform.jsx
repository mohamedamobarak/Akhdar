import React from 'react'
import HeroSection from '@/components/HeroSection'
import Header from '../../shared/Header/Header'
import Footer from '../../shared/Footer/Footer'
import ConnectingBusinesses from './components/ConnectingBusinesses'
import MeasureTrackTrust from './components/MeasureTrackTrust'
import VisionSection from './components/VisionSection'
import GetStarted from './components/GetStarted'
import CarouselShowCase from './components/CarouselShowCase'
import CustomizePortfolio from './components/CustomizePortfolio'
import backgroundImage from '../../assets/impact-platform/bg-cover-img.png';
import { useTranslation } from 'react-i18next';

const ImpactPlatform = () => {
  const { t } = useTranslation();
  return (
    <>
    <Header />
    <main className='flex flex-col gap-32 justify-center px-2 min-h-screen bg-bg md:px-8'>
        <HeroSection
          backgroundImage={backgroundImage}
          heading={t('impactPlatform.HeroSection.title1')}
          paragraph={t('impactPlatform.HeroSection.title2')}
          firstButtonLink="/signup"
          firstButtonLabel={t('impactPlatform.HeroSection.createAccount')}
          secondButtonLabel={t('impactPlatform.HeroSection.bookDemo')}
          secondButtonLink="/about#contact-us"
          firstLineEn="Tailored Impact"
          firstLineAr="حلول تأثير مصممة"
          secondLineEn="Solutions for Your Business"
          secondLineAr="لاحتياجات أعمالك"
        />
        <ConnectingBusinesses />
        <CustomizePortfolio />
        <MeasureTrackTrust />
        <CarouselShowCase />
        <VisionSection />
        <GetStarted />
    </main>
    <Footer />
  </>
  )
}

export default ImpactPlatform
