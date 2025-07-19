import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import calc1 from '../../../assets/calc-company/clac1.png';
import anthony from '../../../assets/calc-company/anthony.png';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaInfoCircle, FaSpinner } from "react-icons/fa";
import * as styles from '../CalcCompany.modules.css';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { puplicAxiosInstance } from '@/services/api/apiInstance';
import { CALCULATOR_ULRS } from '@/services/api/apiConfig';
import { Toaster, toast } from 'sonner'
import { useLocation } from 'react-router-dom';

// Schemas per step
const stepSchemas = [
  z.object({ employeeCount: z.coerce.number().min(1, "Must be at least 1") }),
  z.object({ powerConsumption: z.coerce.number().min(1, "Minimum 1 kWh") }),
  z.object({
    annualCount: z.coerce.number().min(0),
    accumulatedHours: z.coerce.number().min(0)
  }),
  z.object({
    count: z.coerce.number().min(1),
    distanceTraveled: z.coerce.number().min(100),
    fuelType: z.enum(['DIESEL', 'PETROL', 'ELECTRIC'])
  })
];

// Default values for each step to avoid undefined
const defaultStepValues = [
  { employeeCount: '' },
  { powerConsumption: '' },
  { annualCount: '', accumulatedHours: '' },
  { count: '', distanceTraveled: '', fuelType: 'DIESEL' }
];

const CarbonFootprintCalculator = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const [activeTab, setActiveTab] = useState('Companies');
  const [step, setStep] = useState(0);
  const [collectedData, setCollectedData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Create defaultValues from collectedData for current step
  const currentStepDefaultValues = Object.assign(
    {},
    defaultStepValues[step], // base default for the step
    // Override with collectedData if any values present for current step fields
    ...Object.keys(defaultStepValues[step]).map(key => ({
      [key]: collectedData[key] ?? defaultStepValues[step][key]
    }))
  );

  // Initialize useForm with resolver and defaultValues from saved data for current step
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(stepSchemas[step]),
    defaultValues: currentStepDefaultValues
  });

  // Reset form whenever step or collectedData changes to update inputs with saved values
  useEffect(() => {
    reset(currentStepDefaultValues);
  }, [step, collectedData, reset]);

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  const onNext = async (data) => {
    // Save current step data to collectedData
    const newData = { ...collectedData, ...data };
    setCollectedData(newData);

    if (step < stepSchemas.length - 1) {
      setStep(prev => prev + 1);
      // reset will be called by useEffect automatically for new step
    } else {
      setIsSubmitting(true);
      const payload = {
        employeeCount: Number(newData.employeeCount),
        powerConsumption: Number(newData.powerConsumption),
        flights: {
          annualCount: Number(newData.annualCount),
          accumulatedHours: Number(newData.accumulatedHours)
        },
        Vehicles: [{
          distanceTraveled: Number(newData.distanceTraveled),
          count: Number(newData.count),
          fuelType: newData.fuelType
        }]
      };

      try {
        console.log("Final payload to backend:", payload);
        await puplicAxiosInstance.post(CALCULATOR_ULRS.CALCULATE_COMPANY_EMISSION, payload);
        toast.success(t('carbonCalc.success'));
        setCollectedData({});  // Clear all after submit
        setStep(0);            // Reset to first step
        reset(defaultStepValues[0]);
      } catch (err) {
        console.error("Submission error:", err);
        toast.error(t('carbonCalc.error'));
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const onBack = () => {
    if (step > 0) {
      setStep(prev => prev - 1);
      // reset called by useEffect to show saved data
    }
  };

  const renderStepFields = () => {
    switch (step) {
      case 0:
        return (
          <Input
            {...register("employeeCount")}
            type="number"
            placeholder="Number of employees"
            className="w-[50%] mx-auto rounded-xl bg-white text-black text-center placeholder:text-gray-400 mb-2"
          />
        );
      case 1:
        return (
          <Input
            {...register("powerConsumption")}
            type="number"
            placeholder="Annual power consumption (kWh)"
            className="w-[50%] mx-auto rounded-xl bg-white text-black text-center placeholder:text-gray-400 mb-2"
          />
        );
      case 2:
        return (
          <>
            <Input
              {...register("annualCount")}
              type="number"
              placeholder="Annual flight count"
              className="w-[50%] mx-auto rounded-xl bg-white text-black text-center placeholder:text-gray-400 mb-2"
            />
            <Input
              {...register("accumulatedHours")}
              type="number"
              placeholder="Flight hours per year"
              className="w-[50%] mx-auto rounded-xl bg-white text-black text-center placeholder:text-gray-400 mb-2"
            />
          </>
        );
      case 3:
        return (
          <>
            <Input
              {...register("count")}
              type="number"
              placeholder="Number of vehicles"
              className="w-[50%] mx-auto rounded-xl bg-white text-black text-center placeholder:text-gray-400 mb-2"
            />
            <Input
              {...register("distanceTraveled")}
              type="number"
              placeholder="Distance traveled per year (km)"
              className="w-[50%] mx-auto rounded-xl bg-white text-black text-center placeholder:text-gray-400 mb-2"
            />
            <select
              {...register("fuelType")}
              className="w-[50%] mx-auto rounded-xl bg-white text-black text-center placeholder:text-gray-400 mt-2"
            >
              <option value="DIESEL">Diesel</option>
              <option value="PETROL">Petrol</option>
              <option value="ELECTRIC">Electric</option>
            </select>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <div className="bg-[#f5fbf7]">
        <div  className="max-w-4xl mx-auto py-1 bg-gray-50 ">
          {/* Tabs */}
          <div className="flex justify-center mb-10 mt-4">
            <div className="bg-gray-300 rounded-full p-1 flex">
              {['Individuals', 'Companies'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${activeTab === tab
                    ? 'shadow-sm'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-200'
                    }`}
                  style={{
                    backgroundColor: activeTab === tab ? '#81F18E' : '',
                    color: activeTab === tab ? '#013229' : ''
                  }}
                >
                  {t(`carbonCalc.tabs.${tab.toLowerCase()}`)}
                </button>
              ))}
            </div>
          </div>

          {/* Intro */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 max-w-md">
              <h1 className="text-2xl font-bold text-gray-800 mb-6">
                {t('carbonCalc.methodology.title')}
              </h1>
              <p className="text-gray-600 leading-relaxed">
                {t('carbonCalc.methodology.description')}
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <img src={calc1} alt="calc1" className="w-auto h-auto max-w-md" />
            </div>
          </div>

        </div>
          {/* Form */}
          <div id='calc' className="min-h-[500px] sm:min-h-auto rounded-[40px] flex flex-col justify-center bg-[#004D40] mt-20">
            <div className="sm:hidden flex justify-center gap-1 mb-8 mt-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className={`h-1.5 w-6 rounded-full ${i === step ? "bg-[#6CFF9E]" : "bg-gray-400"}`} />
              ))}
            </div>
            <form
              onSubmit={handleSubmit(onNext)}
              className={`sm:min-h-screen rounded-[40px] ${styles.calcBgImg} bg-[#004334]/80 relative flex flex-col items-center justify-center p-6 text-white shadow-xl`}
              style={{
                backgroundImage: `url(${anthony})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'overlay'
              }}
            >
              {/* Desktop Stepper */}
              <div className="hidden sm:flex justify-center gap-1 mb-8 mt-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className={`h-1.5 w-6 rounded-full ${i === step ? "bg-[#6CFF9E]" : "bg-gray-400"}`} />
                ))}
              </div>

              {/* Form Title */}
              <div className="flex items-center gap-2 text-sm font-medium mb-4">
                <span>{t('carbonCalc.input.label')}</span>
                <FaInfoCircle className="text-[#6CFF9E]" size={14} />
              </div>

              {/* Fields */}
              <div className="w-full flex flex-col gap-2">
                {renderStepFields()}
                {Object.values(errors).map((err, i) => (
                  <p key={i} className="text-red-400 text-xs text-center">{err?.message}</p>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-6">
                <Button
                  variant="ghost"
                  className="bg-white text-black px-6 hover:bg-gray-200"
                  onClick={onBack}
                  disabled={step === 0} // disable back button on first step
                >
                  {t('carbonCalc.buttons.back')}
                </Button>
                <Button
                  type="submit"
                  className="bg-[#6CFF9E] text-black px-6 hover:bg-[#59eb8e] flex items-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      {t('carbonCalc.buttons.submitting')}
                    </>
                  ) : (
                    step === stepSchemas.length - 1 ? t('carbonCalc.buttons.submit') : t('carbonCalc.buttons.next')
                  )}
                </Button>
              </div>
            </form>
          </div>
      </div>
    </>
  );
};

export default CarbonFootprintCalculator;
