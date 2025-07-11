import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import calc1 from '../../../assets/calc-company/clac1.png';
import anthony from '../../../assets/calc-company/anthony.png';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaInfoCircle } from "react-icons/fa";
import * as styles from '../CalcCompany.modules.css';

const CarbonFootprintCalculator = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('Companies');

  return (
    <div className="bg-[#f5fbf7]">

    <div className=" max-w-4xl mx-auto py-1 bg-gray-50 min-h-screen">
      {/* Toggle Buttons */}
      <div className="flex justify-center mb-12">
        <div className="bg-gray-300 rounded-full p-1 flex">
          <button
            onClick={() => setActiveTab('Individuals')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
              activeTab === 'Individuals'
                ? 'shadow-sm'
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-200'
            }`}
            style={{
              backgroundColor: activeTab === 'Individuals' ? '#81F18E' : '',
              color: activeTab === 'Individuals' ? '#013229' : ''
            }}
          >
            {t('carbonCalc.tabs.individuals')}
          </button>
          <button
            onClick={() => setActiveTab('Companies')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
              activeTab === 'Companies'
                ? 'shadow-sm'
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-200'
            }`}
            style={{
              backgroundColor: activeTab === 'Companies' ? '#81F18E' : '',
              color: activeTab === 'Companies' ? '#013229' : ''
            }}
          >
            {t('carbonCalc.tabs.companies')}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 max-w-md">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            {t('carbonCalc.methodology.title')}
          </h1>
          <p className="text-gray-600 leading-relaxed">
            {t('carbonCalc.methodology.description')}
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img src={calc1} alt="calc1" className="w-auto h-auto max-w-md" />
        </div>
      </div>

      {/* Calculator Section */}
      <div className="min-h-[500px] sm:min-h-auto rounded-[40px] flex flex-col justify-center bg-[#004D40] mt-20">
        {/* Progress Bar (Mobile) */}
        <div className="sm:hidden flex justify-center gap-1 mb-8 mt-4">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className={`h-1.5 w-6 rounded-full ${
                i === 0 ? "bg-[#6CFF9E]" : "bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Main Form Area */}
        <div
          className={`sm:min-h-screen rounded-[40px] ${styles.calcBgImg} bg-[#004334]/80 relative flex flex-col items-center justify-center p-6 text-white shadow-xl`}
          style={{
            backgroundImage: `url(${anthony})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        >
          {/* Progress Bar (Desktop) */}
          <div className="hidden sm:flex justify-center gap-1 mb-8 mt-4">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className={`h-1.5 w-6 rounded-full ${
                  i === 0 ? "bg-[#6CFF9E]" : "bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* Input Label */}
          <div className="flex items-center gap-2 text-sm font-medium mb-4">
            <span>{t('carbonCalc.input.label')}</span>
            <FaInfoCircle className="text-[#6CFF9E]" size={14} />
          </div>

          {/* Input Field */}
          <Input
            type="text"
            className="w-[50%] mx-auto rounded-xl bg-white text-black text-center placeholder:text-gray-400 mb-10"
            placeholder={t('carbonCalc.input.placeholder')}
          />

          {/* Action Buttons */}
          <div className="flex gap-4 mt-4">
            <Button
              variant="ghost"
              className="bg-white text-black px-6 hover:bg-gray-200"
            >
              {t('carbonCalc.buttons.back')}
            </Button>
            <Button className="bg-[#6CFF9E] text-black px-6 hover:bg-[#59eb8e]">
              {t('carbonCalc.buttons.next')}
            </Button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CarbonFootprintCalculator;
