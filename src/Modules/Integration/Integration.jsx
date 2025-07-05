import Header from '../../shared/Header/Header';
import Footer from '../../shared/Footer/Footer';
import HeroSection from './components/HeroSection';
import WhyIntegrate from './components/WhyIntegrate';
import TrackYourCarbon from './components/TrackYourCarbon';
import HowItWorks from './components/HowItWorks';
import EmpowerUsers from './components/EmpowerUsers';
import ProvideSolutions from './components/ProvideSolutions';

const Integration = () => {
  return (
    <>
    <Header />
    <main className='flex flex-col justify-center px-2 min-h-screen bg-bg md:px-8'>
      <HeroSection />
      <WhyIntegrate />
      <HowItWorks />
      <EmpowerUsers />
      <ProvideSolutions />
      <TrackYourCarbon />
    </main>
    <Footer />
  </>
  )
}

export default Integration
