import React, { useState } from 'react';
import settingsIcon from '../../../assets/dashboard-sidebar-icons/settings-icon.svg';

const automations = [
  {
    title: 'Carbon Footprint Calculator',
    content: 'Easily measure and track your carbon emissions with our intuitive calculator. Get insights to reduce your footprint and take climate action.',
    button: 'Start Calculating',
  },
  {
    title: 'AKHDAR API',
    content: 'Integrate Akhdar’s powerful API to automate your sustainability data and reporting seamlessly into your business workflow.',
    button: 'Explore API',
  },
  {
    title: 'ESG Consultations',
    content: 'Get expert ESG advice and tailored solutions to accelerate your sustainability journey and meet compliance requirements.',
    button: 'Book Consultation',
  },
];

const Automations = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 bg-[#f7fcf8]">
      <div className="container mx-auto max-w-2xl px-4">
        <h3 className="text-3xl md:text-4xl font-bold text-[#12644f] mb-8 text-left">Akhdar’s Solutions Advantages</h3>
        <div className="space-y-4">
          {automations.map((item, idx) => (
            <div key={idx} className="border-b border-green-200 pb-2">
              <button
                className="flex items-center w-full text-left focus:outline-none group"
                onClick={() => setOpenIndex(idx === openIndex ? -1 : idx)}
              >
                <img src={settingsIcon} alt="automation" className="w-6 h-6 mr-3" />
                <span className={`text-lg font-semibold ${openIndex === idx ? 'text-[#12644f]' : 'text-[#12644f]'} transition-colors`}>{item.title}</span>
                <svg
                  className={`ml-auto w-6 h-6 text-green-400 transform transition-transform duration-200 ${openIndex === idx ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out overflow-hidden ${openIndex === idx ? 'grid-rows-[1fr] opacity-100 py-2' : 'grid-rows-[0fr] opacity-0 py-0'}`}
                style={{ gridTemplateRows: openIndex === idx ? '1fr' : '0fr' }}
              >
                <div className="text-gray-800 text-base mt-2 mb-4">
                  {item.content}
                </div>
                <button className="bg-green-300 hover:bg-green-400 text-[#12644f] font-semibold px-6 py-3 rounded-lg shadow mb-2 transition-colors">
                  {item.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Automations; 