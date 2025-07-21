import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import ProjectTabs from './components/ProjectTabs';
import ProjectDescription from './components/ProjectDescription';
import PurchaseCard from './components/PurchaseCard';
import ProjectOwnersCard from './components/ProjectOwnersCard';
import bgCover from '../../assets/Dashboard-project/project-cover-01.png';
import projectDescriptionImg from '../../assets/Dashboard-project/project-description.png';
import { Outlet } from 'react-router-dom';

const DashboardProject = () => {
  const [activeTab, setActiveTab] = useState('Description');
  const [purchaseType, setPurchaseType] = useState('oneOff');
  const [vintage, setVintage] = useState('2020');
  const [amount, setAmount] = useState(54);

  // Pricing logic
  const basePrice = 0.85;
  const baseTotal = basePrice * amount;
  const transactionFee = baseTotal * 0.04; // 4%
  const vatFee = (baseTotal + transactionFee) * 0.15; // 15% VAT
  const total = baseTotal + transactionFee + vatFee;
  const isValidPurchase = total >= 50;

  const handleSubmit = () => {
    if (!isValidPurchase) {
      alert('Minimum purchase is SAR 50');
      return;
    }
    alert(`Purchase submitted! Total: SAR ${total.toFixed(2)}`);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <HeroSection bgCover={bgCover} />

        {/* Main Content */}
        <div className="relative -mt-20 sm:-mt-32 md:-mt-40 z-20 py-4 text-xs">
          <div className="container mx-auto px-5 xs:px-10 sm:px-7 md:px-6 lg:px-8 xl:px-14">
            <div className="relative bg-gray-50 pt-4 pb-20 rounded-xl sm:rounded-4xl md:rounded-[50px] lg:rounded-[80px]">
              <div className="relative grid grid-cols-1 sm:grid-cols-10 gap-2">
                {/* Left Content */}
                <div className="sm:col-span-7 md:col-span-7 ps-2 sm:ps-4 lg:ps-15 py-4">
                  <ProjectTabs
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                  {/* <ProjectDescription projectDescriptionImg={projectDescriptionImg} /> */}
                  <Outlet/>
                </div>
              </div>

              {/* Purchase Card */}
              <PurchaseCard
                purchaseType={purchaseType}
                setPurchaseType={setPurchaseType}
                vintage={vintage}
                setVintage={setVintage}
                amount={amount}
                setAmount={(val) => {
                  if (!isNaN(val) && val >= 1) {
                    setAmount(val);
                  }
                }}
                transactionFee={transactionFee}
                vatFee={vatFee}
                total={total}
                handleSubmit={handleSubmit}
                isValidPurchase={isValidPurchase}
              />
            </div>
          </div>
        </div>
      </div>
      <ProjectOwnersCard />
    </>
  );
};

export default DashboardProject;
