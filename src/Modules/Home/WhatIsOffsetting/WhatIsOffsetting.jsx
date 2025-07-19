import React, { useState } from 'react';
import LeafMask from '../../../assets/green_leaf.svg';
import LeafBg from '../../../assets/home/how it works/leafBackkground.png';

const faqs = [
  {
    question: 'Why should I calculate my carbon footprint?',
    answer: (
      <>
        Understanding your emissions is crucial to sustainability. It allows you to:
        <ul className="list-disc list-inside mt-2 text-left">
          <li>Identify areas for reduction</li>
          <li>Align with Saudi Vision 2030 and the Saudi Green Initiative</li>
          <li>Contribute to verified local projects that restore nature and promote clean energy</li>
        </ul>
      </>
    ),
  },
  {
    question: 'How do I know my offset is making a difference?',
    answer: null,
  },
  {
    question: 'What is the Methodology to calculate carbon footprint?',
    answer: null,
  },
];

const WhatIsOffsetting = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-[#F6F7F6] py-10 px-3 sm:py-16 md:py-20 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
      {/* Centered FAQ/Text */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="max-w-md w-full mx-auto text-center">
          <h2 className="text-[#003B2D] font-bold mb-6" style={{ fontSize: '45px', lineHeight: '1.1' }}>
            What is Carbon Offsetting?
          </h2>
          <p className="text-gray-800 text-base md:text-lg mb-8">
            AKHDAR helps businesses and individuals offset their carbon footprint by supporting verified projects that reduce or remove greenhouse gas emissions. Each ton of carbon removed is converted into a certified carbon credit, ensuring real environmental impact through globally recognized standards.
          </p>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={faq.question}>
                <button
                  className={`flex items-center justify-between w-full text-left font-bold text-green-700 text-lg md:text-xl border-b-2 border-green-300 pb-1 transition-colors ${openIndex === idx ? 'text-green-800' : ''}`}
                  onClick={() => setOpenIndex(idx === openIndex ? -1 : idx)}
                >
                  <span>{faq.question}</span>
                  <span className="ml-2">
                    {openIndex === idx ? (
                      <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M5 15l7-7 7 7" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    ) : (
                      <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    )}
                  </span>
                </button>
                {openIndex === idx && faq.answer && (
                  <div className="pl-2 pr-4 py-2 text-gray-700 text-base md:text-lg animate-fade-in text-left">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Right Side: Masked Leaf Image */}
      <div className="flex-1 flex justify-center items-center w-full md:w-auto mt-8 md:mt-0">
        <div className="relative w-60 sm:w-80 md:w-[28rem] h-auto aspect-[1.2/1] flex items-center justify-center">
          <svg viewBox="0 0 400 320" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <mask id="leaf-mask">
                <image href={LeafMask} width="400" height="320" />
              </mask>
            </defs>
            <image
              href={LeafBg}
              width="400"
              height="320"
              mask="url(#leaf-mask)"
              preserveAspectRatio="xMidYMid slice"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default WhatIsOffsetting; 