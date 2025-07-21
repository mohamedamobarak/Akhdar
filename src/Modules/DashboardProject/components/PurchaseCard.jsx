import React from 'react';
import { ChevronDown, HelpCircle, Plus, Minus } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const PurchaseCard = ({
  purchaseType,
  setPurchaseType,
  vintage,
  setVintage,
  amount,
  setAmount,
  transactionFee,
  vatFee,
  total,
  handleSubmit
}) => {
  const { t } = useTranslation();

  const updateAmount = (increment) => {
    const newAmount = increment ? amount + 1 : Math.max(1, amount - 1);
    setAmount(newAmount);
  };

  return (
    <div className="absolute top-28 md:top-14 -end-4 sm:end-5 md:-end-6 lg:-end-16 max-w-[150px] sm:max-w-[200px] md:max-w-[280px] lg:max-w-[400px] bg-white border-t mt-2 xl:mt-0 xl:border-t-0 xl:border-l rounded-xl border-gray-100">
      <div className="p-1 sm:p-7 border rounded-xl shadow-2xl [box-shadow:2px_4px_4px_#00000040]">
        <h3 className="text-[11px] text-gray-200 sm:text-sm font-medium mb-2 sm:mb-4 md:mb-5">
          {t('projectdashboard.purchaseCard.title')}
        </h3>

        {/* Toggle */}
        <div className="flex bg-gray-100 rounded-md p-0.5 sm:p-1 md:p-1.5 mb-3 sm:mb-5 md:mb-6">
          <button
            onClick={() => setPurchaseType('oneOff')}
            className={`flex-1 rounded-sm text-[10px] sm:text-xs md:text-sm font-medium py-0.5 sm:py-1 px-1 md:px-3 lg:px-5 xl:px-7 transition-all ${
              purchaseType === 'oneOff'
                ? 'bg-green-400 text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            {t('projectdashboard.purchaseCard.oneOff')}
          </button>
          <button
            onClick={() => setPurchaseType('monthly')}
            className={`flex-1 rounded-sm text-[10px] sm:text-xs md:text-sm font-medium py-0.5 sm:py-1 px-1 md:px-3 lg:px-5 xl:px-7 transition-all ${
              purchaseType === 'monthly'
                ? 'bg-green-400 text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            {t('projectdashboard.purchaseCard.monthly')}
          </button>
        </div>

        {/* Price */}
        <div className="mb-3 sm:mb-4">
          <div className="text-xs sm:text-sm md:text-base font-medium text-gray-900">
            SAR 0.85
            <span className="text-[10px] sm:text-xs md:text-sm text-gray-400 font-normal ml-0.5">
              {t('projectdashboard.purchaseCard.perTon')}
            </span>
          </div>
        </div>

        {/* Form */}
        <div className="space-y-2.5">
          {/* Vintage */}
          <div className="flex gap-1.5 sm:gap-3 md:gap-4 items-center">
            <label className="text-[10px] sm:text-xs md:text-sm text-gray-600">
              {t('projectdashboard.purchaseCard.vintage')}
            </label>
            <div className="flex-1 relative">
              <select
                value={vintage}
                onChange={(e) => setVintage(e.target.value)}
                className="w-full bg-gray-50 border-0 rounded-sm px-2 py-0.5 sm:px-3 sm:py-1 md:py-2 text-[10px] sm:text-xs md:text-sm appearance-none cursor-pointer"
              >
                {[2020, 2021, 2022, 2023].map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Amount */}
          <div className="flex items-center gap-1 sm:gap-3 md:gap-4">
            <label className="text-[10px] sm:text-xs md:text-sm text-gray-600">
              {t('projectdashboard.purchaseCard.amount')}
            </label>
            <div>
              <div className="flex items-center bg-gray-50 rounded-sm">
                <button
                  onClick={() => updateAmount(false)}
                  className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 flex items-center justify-center hover:bg-gray-200 rounded-l-sm"
                >
                  <Minus className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4" />
                </button>
                <input
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(parseInt(e.target.value) || 1)}
                  className="flex-1 w-[50px] text-center border-0 bg-transparent focus:outline-none text-sm md:text-lg font-medium"
                />
                <button
                  onClick={() => updateAmount(true)}
                  className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 flex items-center justify-center hover:bg-gray-200 rounded-r-sm"
                >
                  <Plus className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4" />
                </button>
              </div>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[10px] sm:text-xs md:text-sm text-gray-400">{t('projectdashboard.purchaseCard.unit')}</span>
          </div>

          {/* Pricing Info */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-[10px] sm:text-xs md:text-sm">
              <span className="text-gray-500">{t('projectdashboard.purchaseCard.available')}</span>
              <span className="font-medium">SAR 599,785</span>
            </div>
            <div className="flex justify-between text-[10px] sm:text-xs md:text-sm">
              <span className="text-gray-500">{t('projectdashboard.purchaseCard.minimum')}</span>
              <span className="font-medium">SAR 50</span>
            </div>

            <div className="space-y-1.5 border-t border-gray-200 pt-2 md:pt-3">
              <div className="flex justify-between text-[10px] sm:text-xs md:text-sm">
                <div className="flex items-center gap-1">
                  <span className="text-gray-500">{t('projectdashboard.purchaseCard.transactionFee')}</span>
                  <HelpCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-gray-400" />
                </div>
                <span className="font-medium">SAR {transactionFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[10px] sm:text-xs md:text-sm">
                <div className="flex items-center gap-1">
                  <span className="text-gray-500">{t('projectdashboard.purchaseCard.vat')}</span>
                  <HelpCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-gray-400" />
                </div>
                <span className="font-medium">SAR {vatFee.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Total + Button */}
          <div className="border-t border-gray-200 pt-2.5 sm:pt-4 md:pt-5">
            <div className="flex justify-between items-center mb-2 sm:mb-4">
              <span className="text-xs sm:text-sm md:text-base font-medium">{t('projectdashboard.purchaseCard.total')}</span>
              <span className="text-sm sm:text-base md:text-lg font-bold">SAR {total.toFixed(2)}</span>
            </div>
            <button
              onClick={handleSubmit}
              className="w-full bg-green-400 hover:bg-green-500 text-white font-medium text-[11px] sm:text-sm md:text-base py-1.5 sm:py-2 md:py-3 rounded-md shadow-sm transition-colors"
            >
              {t('projectdashboard.purchaseCard.buyNow')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseCard;
