import React, { useState } from 'react';
import bgImg from '../../../assets/auth/bg-signup.png';
import Footer from './../../../shared/Footer/Footer';
import Header from './../../../shared/Header/Header';
import IndividualSignUpForm from './IndividualSignUpForm';
import CompanySignUpForm from './CompanySignUpForm';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [tab, setTab] = useState('individual');

  return (
    <>
      <Header />
      <main className="relative min-h-screen flex flex-col md:flex-row items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="flex-1 flex flex-col items-center justify-center px-4 md:px-12 lg:px-16 py-8">
          <h1 className="text-[var(--color-main)] font-bold text-4xl lg:text-5xl mb-4 md:text-left  text-center w-full max-w-lg">Take the First Step Towards Sustainability</h1>
          <p className="hidden md:block text-white text-sm md:text-base mb-2 w-full max-w-lg md:text-left  text-center">Already have an account with us?. <Link to="/login" className="text-main hover:text-primary underline">Login now</Link></p>
        </div>
        <div className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="bg-white rounded-3xl shadow-lg p-10 md:p-10 w-full max-w-xl">
            <div className="flex mb-6 w-1/2 items-center justify-center mx-auto">
              <button
                className={`flex-1 cursor-pointer py-2 px-4 rounded-l-2xl text-base font-semibold ${tab === 'individual' ? 'bg-main text-black' : 'bg-gray-200 text-gray-500'}`}
                onClick={() => setTab('individual')}
              >
                Individuals
              </button>
              <button
                className={`flex-1 py-2 px-4 cursor-pointer rounded-r-2xl text-base font-semibold ${tab === 'company' ? 'bg-main text-black' : 'bg-gray-200 text-gray-500'}`}
                onClick={() => setTab('company')}
              >
                Companies
              </button>
            </div>
            <h2 className="text-lg font-semibold mb-4 text-[var(--color-heading)]  ">Sign up</h2>
            {tab === 'individual' ? <IndividualSignUpForm /> : <CompanySignUpForm />}
          </div>

        </div>
          <p className="md:hidden mb-6 black text-white text-lg w-full max-w-lg md:text-left  text-center">Already have an account with us?. <Link to="/login" className="text-main underline hover:text-primary">Login now</Link></p>
      </main>
      <Footer />
    </>
  );
};

export default SignUp;
