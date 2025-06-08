import React from 'react'
import './App.css'
import Header from './Modules/Shared/Header/Header'
import HeroSection from './Modules/Home/Hero/HeroSection'
import Benefits from './Modules/Home/Benefits/Benefits'
import HowItWorks from './Modules/Home/HowItWorks/HowItWorks'
import Features from './Modules/Home/Features/Features'
import Partners from './Modules/Home/Partners/Partners'
import Footer from './shared/Footer/Footer'
import { useTranslation } from 'react-i18next';

function App() {
    const { t } = useTranslation();

  return (
    <>
      <Header/>
      <HeroSection/>
      <Benefits/>
      <HowItWorks/>
      <Features/>
      <Partners/>
      <Footer/>
    </>
  )
}
export default App
