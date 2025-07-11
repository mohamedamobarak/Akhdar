import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaLeaf, FaQuestionCircle } from 'react-icons/fa';
import faq from '../../../assets/project-owner/faq.png'
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
  const [openItems, setOpenItems] = useState({ 0: true });

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqData = [
    {
      question: "What types of projects can I list?",
      answer: "We accept a wide range of carbon-offsetting projects, including reforestation, renewable energy, and carbon capture."
    },
    {
      question: "How do I track my project's impact?",
      answer: "Our platform provides comprehensive tracking tools and regular reports to monitor your project's environmental impact and carbon offset metrics."
    },
    {
      question: "How do I sell carbon credits?",
      answer: "You can list your verified carbon credits on our marketplace, set competitive prices, and connect with buyers looking for quality offset projects."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
  <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">FAQs</h2>

          <div className="flex flex-wrap md:flex-row-reverse items-start justify-between mb-8">

            <div className=" w-full md:w-1/2 mb-4 md:mb-0">
              <img src={faq} alt="FAQ" className="w-48 h-auto mx-auto" />
            </div>

            <div className="flex-1  w-full md:w-1/">
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Get Started</h2>
          <p className="text-gray-700 mb-6 max-w-md mx-auto">
            Sign up today to list your project and make a positive impact on the environment.
          </p>
          
          <div className="flex  gap-4 justify-center items-center">
            <button className=" cursor-pointer  bg-green-500 hover:bg-green-600 text-white font-medium px-7 py-2 rounded-lg transition-colors">
              Get Started
            </button>
            <button className=" cursor-pointer  bg-white hover:bg-gray-50 text-gray-700 font-medium px-8 py-3 rounded-lg border border-gray-200 transition-colors">
              Fill form
            </button>
          </div>
        </div>

       
      </div>
    </div>
  );
}