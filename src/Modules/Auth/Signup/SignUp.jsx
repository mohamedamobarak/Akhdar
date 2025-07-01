import React, { useState } from 'react';
import bgImg from '../../../assets/auth/bg-signup.png';
import Footer from './../../../shared/Footer/Footer';
import Header from './../../../shared/Header/Header';
import IndividualSignUpForm from './IndividualSignUpForm';
import CompanySignUpForm from './CompanySignUpForm';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';

const SignUp = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || 'en';
  const isRTL = lang === 'ar';
  const dir = t('signup.direction') || (isRTL ? 'rtl' : 'ltr');
  const align = dir === 'rtl' ? 'text-right' : 'text-left';
  const [tab, setTab] = useState('individual');

  return (
    <>
      <Header />
      <main dir={dir} className="relative min-h-screen flex flex-col md:flex-row items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="flex-1 flex flex-col items-center justify-center px-4 md:px-12 lg:px-16 py-8">
          <h1 className={`text-main font-bold text-4xl lg:text-5xl mb-4 ${align} w-full max-w-lg`}>{t('signup.title')}</h1>
          <p className={`hidden md:block text-white text-sm md:text-base mb-2 w-full max-w-lg ${align}`}>
            {t('signup.alreadyHaveAccount')}
            <Link to="/login" className="text-main hover:text-primary underline">{t('signup.loginNow')}</Link>
          </p>
        </div>
        <div className="flex-1 flex items-center justify-center px-4 py-12">
          <Card className="bg-white rounded-3xl shadow-lg p-10 md:p-10 w-full max-w-xl">
            <CardHeader className="flex mb-6 w-1/2 items-center justify-center mx-auto p-0 gap-0">
              <button
                className={`flex-1 cursor-pointer py-2 px-4 ${isRTL ? 'rounded-r-2xl' : 'rounded-l-2xl'} text-base font-semibold ${tab === 'individual' ? 'bg-main text-black' : 'bg-gray-200 text-gray-500'}`}
                onClick={() => setTab('individual')}
                // style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
              >
                {t('signup.individuals')}
              </button>
              <button
                className={`flex-1 py-2 px-4 cursor-pointer ${isRTL ? 'rounded-l-2xl' : 'rounded-r-2xl'} text-base font-semibold ${tab === 'company' ? 'bg-main text-black' : 'bg-gray-200 text-gray-500'}`}
                onClick={() => setTab('company')}
                // style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
              >
                {t('signup.companies')}
              </button>
            </CardHeader>
            <CardContent className="p-0">
              <h2 className="text-lg font-semibold mb-4 text-primary  ">{t('signup.signUp')}</h2>
              {tab === 'individual' ? <IndividualSignUpForm  /> : <CompanySignUpForm />}
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

export default SignUp;
