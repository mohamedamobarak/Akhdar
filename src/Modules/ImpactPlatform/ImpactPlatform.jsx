import React from 'react'
import HeroSection from './components/HeroSection'
import Header from '../../shared/Header/Header'
import Footer from '../../shared/Footer/Footer'
import ConnectingBusinesses from './components/ConnectingBusinesses'
import MeasureTrackTrust from './components/MeasureTrackTrust'
import VisionSection from './components/VisionSection'
import GetStarted from './components/GetStarted'
import CarouselShowCase from './components/CarouselShowCase'
import CustomizePortfolio from './components/CustomizePortfolio'

const ImpactPlatform = () => {
  return (
    <>
    <Header />
    <main className='flex flex-col gap-32 justify-center px-2 min-h-screen bg-bg md:px-8'>
        <HeroSection />
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
