import React from 'react';
import landImg from '../../../assets/home/How to Offset Carbon Emission/land.svg';

const steps = [
  {
    number: 1,
    title: 'Measure Your Carbon',
    desc: 'Learn how much greenhouse gas emissions your organization produces',
    card: 'left-[-40px] top-[40px] md:left-[-80px] md:top-[100px]',
    align: 'items-start text-left',
  },
  {
    number: 2,
    title: 'Reduce Your Carbon',
    desc: 'Change to more sustainable business practices to reduce emissions.',
    card: 'right-[-40px] top-[40px] md:right-[-80px] md:top-[100px]',
    align: 'items-end text-right',
  },
  {
    number: 3,
    title: 'Offset Your Carbon',
    desc: 'Fund emission reduction projects elsewhere through the purchase of credits you can\'t reduce yourself.',
    card: 'left-1/2 bottom-[-40px] md:left-1/2 md:bottom-[-10px] md:-translate-x-1/2',
    align: 'items-center text-center',
  },
];

const HowToStart = () => (
  <section className="py-20 bg-[#f7fcf8] flex flex-col items-center">
    <h3 className="text-4xl md:text-5xl font-bold text-[#12644f] mb-12 text-center">How to Offset Carbon Emission</h3>
    <div className="relative flex justify-center items-center min-h-[900px] md:min-h-[1100px] w-full max-w-[1100px] mx-auto">
      {/* Center Illustration */}
      <img src={landImg} alt="How to Offset Carbon Emission" className="w-[500px] md:w-[700px] z-10 mx-auto" />
      {/* Cards only, no lines */}
      {steps.map((step) => (
        <div
          key={step.number}
          className={`absolute bg-white rounded-2xl shadow-lg px-12 py-8 max-w-2xl w-[420px] md:w-[520px] ${step.card} ${step.align} z-30 flex flex-col`}
          style={{ boxShadow: '0 8px 32px 0 rgba(0,0,0,0.12)' }}
        >
          <div className="flex items-center mb-3">
            <span className="text-6xl font-bold text-green-400 mr-6">{step.number}</span>
            <span className="font-semibold text-2xl text-[#12644f]">{step.title}</span>
          </div>
          <div className="text-black text-lg font-normal leading-snug">{step.desc}</div>
        </div>
      ))}
    </div>
    <button className="bg-[#7CE495] text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-green-400 transition-colors mt-12">
      Get Started
    </button>
  </section>
);

export default HowToStart; 