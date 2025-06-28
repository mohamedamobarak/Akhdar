import React from 'react'
// import { useTranslation } from 'react-i18next';
import i18n from '../../../../public/locales.js';
import cursor from '../../../assets/impact-platform/cursor-icon.svg';
import BuyCreditCard from './BuyCreditCard.jsx';

const LeafIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 20C6 10 20 6 20 6C20 6 16 20 6 20Z" stroke="#1CBF7A" strokeWidth="2"/></svg>
);

const CustomizePortfolio = () => {
  
    // const { t } = useTranslation();
      const lang = i18n.language || 'en';
      const isRTL = lang === 'ar';
      return (
        <section
        className="flex flex-col items-center px-2 sm:px-4 mx-auto w-full max-w-7xl min-h-[80vh] bg-transparent"
        dir={isRTL ? 'rtl' : 'ltr'}
        style={{ direction: isRTL ? 'rtl' : 'ltr' }}
      >
        <h2 className="mt-12 mb-4 text-2xl font-bold text-center sm:text-3xl md:text-4xl text-primary">Customize your own portfolio</h2>
        <p className="text-center max-w-2xl mx-auto text-base sm:text-lg text-[#013229] mb-12">
          Choose from a diverse range of carbon offset initiatives that align with your organization's sustainability goals and UN Sustainable Development Goals.
        </p>
        <div className="relative flex flex-col items-center w-full min-h-[500px] ">
          {/* Blurred BuyCreditCard in the background */}
          <div className="flex absolute inset-0 z-0 justify-center items-center pointer-events-none">
            <div className="opacity-60 blur-[1px] scale-105  translate-y-4">
              <BuyCreditCard />
            </div>
          </div>
          {/* Foreground cards */}
          <div className="flex relative z-10 flex-col gap-8 justify-center items-start w-full md:flex-row md:gap-0">
            {/* Project Type */}
            <div className="flex flex-col flex-1 items-center px-2">
              <div className="flex gap-2 items-center mb-4">
                <LeafIcon />
                <span className="text-xl font-bold text-primary">Project Type</span>
              </div>
              <div className="flex relative flex-col items-center w-full max-w-xs">
                <div className="flex relative z-10 flex-col p-4 w-full bg-white rounded-2xl border-2 border-gray-300 shadow-none" style={{boxShadow: '8px 8px 24px 0px rgba(30,30,30,0.32)'}}>
                  {/* Removals (active) */}
                  <div className="flex relative gap-2 items-center pb-2 mb-0 text-base font-bold text-black border-b border-gray-200">
                    <LeafIcon />
                    Removals
                    <img src={cursor} alt="Cursor" className="absolute right-0 top-1/2 w-6 h-6 -translate-y-1/2" />
                  </div>
                  {/* Biodiversity (inactive) */}
                  <div className="flex gap-2 items-center py-2 text-base font-semibold text-gray-300 border-b border-gray-200">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 20C6 10 20 6 20 6C20 6 16 20 6 20Z" stroke="#D1D5DB" strokeWidth="2"/></svg>
                    Biodiversity
                  </div>
                  {/* Carbon Offsetting (inactive) */}
                  <div className="flex gap-2 items-center pt-2 text-base font-semibold text-gray-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 20C6 10 20 6 20 6C20 6 16 20 6 20Z" stroke="#D1D5DB" strokeWidth="2"/></svg>
                    Carbon Offsetting
                  </div>
                </div>
              </div>
            </div>
            {/* Divider */}
            <div className="hidden md:flex h-64 w-px bg-[#1CBF7A] mx-8 opacity-50" />
            {/* Contribution frequency */}
            <div className="flex flex-col flex-1 items-center px-2">
              <div className="flex gap-2 items-center mb-4">
                <LeafIcon />
                <span className="text-xl font-bold text-primary">Contribution frequency</span>
              </div>
              <div className="flex relative flex-col items-center w-full max-w-xs">
                {/* Blurred card behind */}
                <div className="absolute top-3 left-3 z-0 w-full h-full bg-white rounded-2xl border border-gray-200 shadow-md opacity-60 blur-sm" />
                <div className="flex relative z-10 flex-col gap-4 p-6 w-full bg-white rounded-2xl border-2 border-gray-300 shadow-none" style={{boxShadow: '8px 8px 24px 0px rgba(30,30,30,0.32)'}}>
                  {/* Buy Credit label */}
                  <span className="mb-1 text-sm text-gray-400">Buy Credit</span>
                  {/* Toggle buttons */}
                  <div className="flex relative p-1 mb-2 w-full bg-gray-100 rounded-full">
                    <button className="flex-1 py-2 font-bold rounded-full transition-colors duration-200 text-primary">One-off</button>
                    <button className="relative flex-1 py-2 font-bold rounded-full transition-colors duration-200 bg-main text-primary">Monthly
                      <img src={cursor} alt="Cursor" className="absolute -right-7 top-1/2 w-6 h-6 -translate-y-1/2" />
                    </button>
                  </div>
                  {/* Price row */}
                  <div className="flex gap-2 items-end">
                    <span className="text-2xl font-bold text-primary">SAR 0.85</span>
                    <span className="text-base font-normal text-gray-400">/ 1 CO2 ton</span>
                  </div>
                  {/* Vintage row */}
                  <div className="flex gap-2 items-center mt-2 w-full">
                    <span className="text-sm text-gray-400 whitespace-nowrap">Vintage</span>
                    <div className="flex relative flex-1 items-center">
                      <span className="block px-4 py-2 w-full text-base font-semibold text-left bg-gray-100 rounded border border-gray-200 text-primary">2020</span>
                      <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M6 8l4 4 4-4" stroke="#1CBF7A" strokeWidth="2" strokeLinecap="round"/></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Divider */}
            <div className="hidden md:flex h-64 w-px bg-[#1CBF7A] mx-8 opacity-50" />
            {/* Offset volume */}
            <div className="flex flex-col flex-1 items-center px-2">
              <div className="flex gap-2 items-center mb-4">
                <LeafIcon />
                <span className="text-xl font-bold text-primary">Offset volume</span>
              </div>
              <div className="flex relative flex-col items-center w-full max-w-xs">
                {/* Blurred card behind */}
                <div className="absolute top-2 left-2 z-0 w-full h-full bg-white rounded-2xl border border-gray-200 shadow-md opacity-60 blur-sm" />
                <div className="flex relative z-10 flex-col gap-2 p-4 w-full bg-white rounded-2xl border-2 border-gray-300 shadow-none" style={{boxShadow: '8px 8px 24px 0px rgba(30,30,30,0.32)'}}>
                  <span className="text-base font-bold text-primary">SAR 0.85 <span className="text-xs font-normal text-gray-400">/ 1 CO2 ton</span></span>
                  {/* Vintage row */}
                  <div className="flex gap-2 items-center mt-2 w-full">
                    <span className="text-xs text-gray-400 whitespace-nowrap">Vintage</span>
                    <div className="flex relative flex-1 items-center">
                      <span className="block px-4 py-2 w-full text-base font-semibold text-left bg-gray-100 rounded border border-gray-200 text-primary">2020</span>
                      <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M6 8l4 4 4-4" stroke="#1CBF7A" strokeWidth="2" strokeLinecap="round"/></svg>
                    </div>
                  </div>
                  {/* Amount row (full width pill, ton under and right-aligned) */}
                  <div className="mt-2 w-full">
                    <div className="flex items-center w-full">
                      <span className="mr-2 text-xs text-gray-400 whitespace-nowrap">Amount</span>
                      <div className="flex-1">
                        <div className="relative flex items-center w-full bg-[#D6EFD7] rounded-xl px-8 py-2">
                          <span className="text-2xl font-bold text-primary">-</span>
                          <span className="flex-1 text-2xl font-bold text-center text-primary">54</span>
                          <span className="relative text-2xl font-bold text-primary">+
                            <img src={cursor} alt="Cursor" className="absolute left-4 top-1/2 w-7 h-7 -translate-y-1/2 pointer-events-none" />
                          </span>
                        </div>
                        <div className="flex justify-end w-full">
                          <span className="mt-1 text-xs text-gray-400">ton</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )
}

export default CustomizePortfolio
