import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import faq from '../../../assets/project-owner/faq.png';

const FAQItem = ({ question, answer, isOpen, onToggle }) => (
  <div className="border-b border-gray-200 last:border-b-0">
    <button
      onClick={onToggle}
      className="w-full cursor-pointer py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
    >
      <span className="font-medium text-gray-900 pr-4">{question}</span>
      {isOpen ? (
        <FaChevronUp className="h-5 w-5 text-green-600 flex-shrink-0" />
      ) : (
        <FaChevronDown className="h-5 w-5 text-green-600 flex-shrink-0" />
      )}
    </button>
    {isOpen && (
      <div className="pb-4 text-gray-600 leading-relaxed">
        {answer}
      </div>
    )}
  </div>
);

export default function CarbonOffsetFAQ() {
  const { t } = useTranslation();
  const [openItems, setOpenItems] = useState({ 0: true });

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqData = [
    {
      question: t('faq.q1'),
      answer: t('faq.a1')
    },
    {
      question: t('faq.q2'),
      answer: t('faq.a2')
    },
    {
      question: t('faq.q3'),
      answer: t('faq.a3')
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">{t('faq.title')}</h2>

          <div className="flex flex-wrap md:flex-row-reverse items-start justify-between mb-8">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <img src={faq} alt="FAQ" className="w-48 h-auto mx-auto" />
            </div>

            <div className="flex-1 w-full md:w-1/">
              <div className="space-y-0">
                {faqData.map((item, index) => (
                  <FAQItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openItems[index]}
                    onToggle={() => toggleItem(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Get Started Section */}
        <div className="bg-gradient-to-r from-green-100 to-green-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('faq.getStartedTitle')}</h2>
          <p className="text-gray-700 mb-6 max-w-md mx-auto">
            {t('faq.getStartedDesc')}
          </p>

          <div className="flex gap-4 justify-center items-center">
            <button className="cursor-pointer bg-green-500 hover:bg-green-600 text-white font-medium px-7 py-2 rounded-lg transition-colors">
              {t('faq.getStartedButton')}
            </button>
            <button className="cursor-pointer bg-white hover:bg-gray-50 text-gray-700 font-medium px-8 py-3 rounded-lg border border-gray-200 transition-colors">
              {t('faq.fillFormButton')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
