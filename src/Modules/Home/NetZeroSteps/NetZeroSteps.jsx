import React from 'react';

const steps = [
  {
    label: 'Measure Emission',
    icon: (
      <svg width="56" height="56" fill="none" viewBox="0 0 56 56"><rect x="8" y="8" width="40" height="40" rx="8" stroke="#12644f" strokeWidth="3" fill="none"/><text x="28" y="34" textAnchor="middle" fontSize="22" fill="#12644f" fontWeight="bold">&#x2714;</text></svg>
    ),
  },
  {
    label: 'Reduce Emission',
    icon: (
      <svg width="56" height="56" fill="none" viewBox="0 0 56 56"><circle cx="28" cy="28" r="24" stroke="#BDBDBD" strokeWidth="3" fill="none"/><text x="28" y="34" textAnchor="middle" fontSize="18" fill="#BDBDBD">CO2</text></svg>
    ),
  },
  {
    label: 'Offset The Rest',
    icon: (
      <svg width="56" height="56" fill="none" viewBox="0 0 56 56"><circle cx="28" cy="28" r="24" stroke="#BDBDBD" strokeWidth="3" fill="none"/><text x="28" y="34" textAnchor="middle" fontSize="18" fill="#BDBDBD">CO2</text></svg>
    ),
  },
  {
    label: 'Receive a Credit',
    icon: (
      <svg width="56" height="56" fill="none" viewBox="0 0 56 56"><circle cx="28" cy="28" r="24" stroke="#BDBDBD" strokeWidth="3" fill="none"/><text x="28" y="34" textAnchor="middle" fontSize="18" fill="#BDBDBD">🏅</text></svg>
    ),
  },
];

const NetZeroSteps = () => (
  <section className="py-12 flex flex-col items-center w-full bg-[#f7fcf8]">
    {/* Stepper */}
    <div className="w-full max-w-4xl flex flex-col items-center">
      <div className="flex justify-between w-full mb-2">
        {steps.map((step, idx) => (
          <div key={step.label} className="flex flex-col items-center w-1/4">
            <div className={
              idx === 0
                ? 'bg-white rounded-full p-2 border-4 border-[#7CE495] shadow-lg mb-2'
                : 'bg-white rounded-full p-2 border-2 border-gray-200 mb-2 opacity-50'
            }>
              {step.icon}
            </div>
            <span className={`mt-1 text-base font-semibold ${idx === 0 ? 'text-black' : 'text-gray-400'}`}>{step.label}</span>
          </div>
        ))}
      </div>
      {/* Progress line */}
      <div className="relative w-full h-2 flex items-center mb-8">
        <div className="absolute left-0 right-0 h-1 bg-gray-200 rounded-full" />
        <div className="absolute left-0 h-1 bg-[#7CE495] rounded-full" style={{ width: '25%' }} />
        {/* Circles */}
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-gray-200 rounded-full" />
        <div className="absolute left-2/4 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-gray-200 rounded-full" />
        <div className="absolute left-3/4 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-gray-200 rounded-full" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#7CE495] border-4 border-white shadow" />
      </div>
    </div>
    {/* Step Card */}
    <div className="w-full max-w-3xl bg-[#7CE495] rounded-2xl shadow-lg px-8 py-8 flex flex-col md:flex-row items-center justify-between mt-2">
      <div>
        <h4 className="text-2xl font-bold text-[#12644f] mb-2">Measure Your Carbon</h4>
        <p className="text-lg text-black mb-2">Learn how much greenhouse gas emissions your organization produces</p>
      </div>
      <button className="bg-[#004D40] text-white px-10 py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-[#12644f] transition-colors mt-4 md:mt-0">
        Measure
      </button>
    </div>
  </section>
);

export default NetZeroSteps; 