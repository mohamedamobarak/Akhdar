import React, { useRef, useEffect } from 'react';
import bgImg from '../../../assets/auth/bg-signup.png';
import Footer from './../../../shared/Footer/Footer';
import Header from './../../../shared/Header/Header';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';
import { gsapAnimation } from '@/lib/animations';
import { useGSAP } from '@gsap/react';
import CompanySignUpForm from '../Signup/CompanySignUpForm';
import IndividualSignUpForm from '../Signup/IndividualSignUpForm';
import LoginForm from './loginForm';

const Login = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || 'en';
  const isRTL = lang === 'ar';
  const dir = t('signup.direction') || (isRTL ? 'rtl' : 'ltr');
  const align = dir === 'rtl' ? 'text-right' : 'text-left';
//   const [tab, setTab] = useState('individual');

  // Animation refs
  const textRef = useRef(null);
  const formRef = useRef(null);
  const sectionRef = useRef(null);

  // Calculate initial transform for LTR/RTL
  const textInitX = isRTL ? 300 : -300;
  const formInitX = isRTL ? -300 : 300;

  // Initial mount animation
  useGSAP(() => {
    if (!textRef.current || !formRef.current) return;
    gsapAnimation(textRef.current, { x: textInitX, opacity: 0 }, { x: 0, opacity: 1, duration: 0.9, ease: 'back.out(1.7)' }, { disableScrollTrigger: true });
    gsapAnimation(formRef.current, { x: formInitX, opacity: 0 }, { x: 0, opacity: 1, duration: 0.9, ease: 'back.out(1.7)' }, { disableScrollTrigger: true });
  }, { scope: sectionRef });

  // Animate on tab switch
  useEffect(() => {
    if (!textRef.current || !formRef.current) return;
    const textFromX = isRTL ? 300 : -300;
    const formFromX = isRTL ? -300 : 300;
    // Fade out both
    gsapAnimation(textRef.current, { x: 0, opacity: 1 }, { x: textFromX, opacity: 0, duration: 0.3, ease: 'power2.in' }, { disableScrollTrigger: true });
    gsapAnimation(formRef.current, { x: 0, opacity: 1 }, { x: formFromX, opacity: 0, duration: 0.3, ease: 'power2.in' }, { disableScrollTrigger: true });
    // Fade in both after short delay
    setTimeout(() => {
      gsapAnimation(textRef.current, { x: textFromX, opacity: 0 }, { x: 0, opacity: 1, duration: 0.9, ease: 'back.out(1.7)' }, { disableScrollTrigger: true });
      gsapAnimation(formRef.current, { x: formFromX, opacity: 0 }, { x: 0, opacity: 1, duration: 0.9, ease: 'back.out(1.7)' }, { disableScrollTrigger: true });
    }, 300);
  }, [ isRTL]);

  return (
    <>
      <Header />
      <main ref={sectionRef} dir={dir} className="relative overflow-x-hidden min-h-[900px] flex flex-col md:flex-row items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${bgImg})`, backgroundAttachment: 'fixed' }}>
        <div
          ref={textRef}
          className="flex-1 flex flex-col items-center justify-center px-4 md:px-12 lg:px-16 py-8"
          style={{ opacity: 0, transform: `translateX(${textInitX}px)` }}
        >
          <h1 className={`text-main font-bold text-4xl lg:text-5xl mb-4 ${align} w-full max-w-lg`}>{t('signup.title')}</h1>
          <p className={`hidden md:block text-white text-sm md:text-base mb-2 w-full max-w-lg ${align}`}> 
            {t('Login.NoAccount')}
            <Link to="/signup" className="text-main hover:text-primary underline">{t('Login.createOne')}</Link>
          </p>
        </div>
        <div
          ref={formRef}
          className="flex-1 flex items-center justify-center px-4 py-12"
          style={{ opacity: 0, transform: `translateX(${formInitX}px)` }}
        >
          <Card className="bg-white rounded-3xl shadow-lg p-10 md:p-10 w-full max-w-xl">
            <CardHeader className="flex mb-6 w-1/2 items-center justify-center mx-auto p-0 gap-0">
          
            </CardHeader>
            <CardContent className="p-0">
              <h2 className="text-lg font-semibold mb-4 text-primary w-full max-w-md mx-auto  ">{t('Login.login')}</h2>
               <LoginForm  /> 
            </CardContent>
          </Card>
        </div>
        <p className={`md:hidden mb-6 black text-white text-lg w-full max-w-lg ${align}`}>
          {t('signup.alreadyHaveAccount')}
          <Link to="/login" className="text-main underline hover:text-primary">{t('signup.loginNow')}</Link>
        </p>
      </main>
      <Footer />
    </>
  );
};

export default Login;
