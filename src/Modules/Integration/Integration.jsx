import Header from '../../shared/Header/Header';
import Footer from '../../shared/Footer/Footer';
import HeroSection from '@/components/HeroSection';
import WhyIntegrate from './components/WhyIntegrate';
import TrackYourCarbon from './components/TrackYourCarbon';
import HowItWorks from './components/HowItWorks';
import EmpowerUsers from './components/EmpowerUsers';
import ProvideSolutions from './components/ProvideSolutions';
import backgroundImage from '../../assets/api-integration/bg-img.png';
import { useTranslation } from 'react-i18next';

const Integration = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <main className='flex flex-col justify-center px-2 min-h-screen bg-bg md:px-8'>
        <HeroSection
          backgroundImage={backgroundImage}
          heading={t('integration.hero.title')}
          paragraph={t('integration.hero.subtitle')}
          firstButtonLink="#whyIntegrate" 
          firstButtonLabel={t('integration.hero.getStarted')}
          secondButtonLabel={t('integration.hero.learnMore')}
          secondButtonLink="/about#contact-us" 
          firstLineEn="Embed Carbon offsetting into Every"
          firstLineAr="تضمين تعويض الكربون في كل معاملة"
          secondLineEn="Transaction with AKHDAR API"
          secondLineAr="معاملة مع AKHDAR API"
        /> 
        <WhyIntegrate />
        <HowItWorks />
        <EmpowerUsers />
        <ProvideSolutions />
        <TrackYourCarbon />
      </main>
      <Footer />
    </>
  );
}

export default Integration
