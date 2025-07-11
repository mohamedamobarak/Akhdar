import React from "react";
import { useTranslation } from "react-i18next";
import img1 from '../../../assets/calc-company/1.png';
import img2 from '../../../assets/calc-company/2.png';
import img3 from '../../../assets/calc-company/3.png';

const CarbonFootprint = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#f5fbf7] min-h-screen max-w-4xl mx-auto  px-6 py-12 flex flex-col gap-24">
      {/* Section 1 */}
      <div className="flex flex-col md:flex-row items-start gap-6">
        {/* Text Content */}
        <div>
          <h2 className="text-xl font-semibold text-green-900">
            {t("carbonFootprint.section1.title")}
          </h2>
          <p className="text-sm mt-2 font-[400] text-gray-700 max-w-md">
            {t("carbonFootprint.section1.description")}
          </p>
        </div>
        {/* Image */}
        <div className="w-[200px] mx-auto">
          <img
            src={img1}
            alt="Growth Icon"
            className="rounded-md object-contain w-full h-full"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col md:flex-row items-start gap-6">
        <div className="w-[200px] mx-auto">
          <img
            src={img2}
            alt="CO2 Cloud Icon"
            className="rounded-md object-contain w-full h-full"
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold text-green-900">
            {t("carbonFootprint.section2.title")}
          </h2>
          <p className="text-sm mt-2 font-[400] text-gray-700 max-w-md">
            {t("carbonFootprint.section2.description")}
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col md:flex-row items-center sm:items-start justify-between gap-10">
        <h2 className="text-xl font-semibold text-green-900">
          {t("carbonFootprint.section3.title")}
        </h2>

        <div className="w-[300px] h-[300px] p-0 border-0 overflow-hidden rounded-tr-[200px] rounded-tl-[200px] rounded-br-[200px]">
          <img
            src={img3}
            alt="Wind Turbine Placeholder"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CarbonFootprint;
