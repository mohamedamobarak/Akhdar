import React from 'react';
import cursor from '../../../assets/impact-platform/cursor-icon.svg';

const InfoIcon = () => (
  <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="#E0E0E0"/><text x="8" y="12" textAnchor="middle" fontSize="10" fill="#888">i</text></svg>
);

const BuyCreditCard = () => (
  <div className="w-[240px] bg-white rounded-2xl p-4 shadow-none border border-gray-200" style={{boxShadow: '4px 4px 16px 0px rgba(30,30,30,0.12)'}}>
    {/* Toggle */}
    <div className="mb-4 w-full">
      <div className="relative flex w-full bg-[#F5F6F8] rounded-full p-1 shadow-sm">
        <button className="flex-1 py-2 rounded-full font-bold text-[#004D40] text-base transition-colors duration-200 focus:outline-none">One-off</button>
        <button className="flex-1 py-2 rounded-full font-bold text-[#004D40] text-base bg-[#81F18E] transition-colors duration-200 focus:outline-none">Monthly</button>
      </div>
    </div>
    {/* Price row */}
    <div className="mb-2">
      <span className="text-lg font-bold text-primary">SAR 0.85</span>
      <span className="ml-1 text-xs text-gray-400">/ 1 CO2 ton</span>
    </div>
    {/* Vintage */}
    <div className="mb-2">
      <span className="text-xs text-gray-400">Vintage</span>
      <div className="mt-1 w-full">
        <div className="flex items-center px-3 py-2 w-full text-base font-bold bg-gray-100 rounded border border-gray-200 text-primary">
          2020
          <svg className="ml-auto" width="18" height="18" fill="none" viewBox="0 0 20 20"><path d="M6 8l4 4 4-4" stroke="#1CBF7A" strokeWidth="2" strokeLinecap="round"/></svg>
        </div>
      </div>
    </div>
    {/* Amount */}
    <div className="mb-2">
      <span className="text-xs text-gray-400">Amount</span>
      <div className="mt-1 w-full">
        <div className="flex items-center w-full bg-[#D6EFD7] rounded-xl px-6 py-2">
          <span className="text-2xl font-bold text-primary">-</span>
          <span className="flex-1 text-2xl font-bold text-center text-primary">54</span>
          <span className="relative text-2xl font-bold text-primary">+
            <img src={cursor} alt="Cursor" className="absolute left-4 top-1/2 w-5 h-5 -translate-y-1/2 pointer-events-none" />
          </span>
        </div>
        <div className="flex justify-end w-full">
          <span className="mt-1 text-xs text-gray-400">CO2 ton</span>
        </div>
      </div>
    </div>
    {/* Stock and min purchase */}
    <div className="flex justify-between mb-1 text-xs text-gray-400">
      <span>Available stock</span>
      <span className="font-bold text-primary">SAR 599,785</span>
    </div>
    <div className="flex justify-between mb-2 text-xs text-gray-400">
      <span>Minimum purchases</span>
      <span className="font-bold text-primary">SAR 50</span>
    </div>
    {/* Transaction fee and VAT */}
    <div className="flex justify-between mb-1 text-xs text-gray-400">
      <span className="flex items-center">Transaction fee <span className="ml-1"><InfoIcon /></span></span>
      <span className="font-bold text-primary">SAR 0.04</span>
    </div>
    <div className="flex justify-between mb-2 text-xs text-gray-400">
      <span className="flex items-center">VAT <span className="ml-1"><InfoIcon /></span></span>
      <span className="font-bold text-primary">SAR 0.04</span>
    </div>
    {/* Total */}
    <div className="flex justify-between items-center mt-2 mb-3 text-base font-bold">
      <span className="text-gray-400">Total:</span>
      <span className="text-primary">SAR 0.89</span>
    </div>
    {/* Buy now button */}
    <button className="py-3 w-full text-lg font-bold text-gray-500 bg-gray-200 rounded-xl cursor-not-allowed" disabled>Buy now</button>
  </div>
);

export default BuyCreditCard; 