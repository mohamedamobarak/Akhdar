import { useTranslation } from "react-i18next";
import { FaLeaf, FaBolt, FaTruck, FaGasPump } from "react-icons/fa";

export default function CarbonFootprint() {
  const { t } = useTranslation();

  return (
    <div className="bg-[#F6F9F6] py-12 px-6 flex flex-col items-center text-[#004225]">
      {/* Header */}
      <h2 className="text-2xl font-semibold text-center mb-8">
        {t("carbonFootprint.title")}
      </h2>

      {/* Layout Container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10  max-w-4xl ">
        {/* Venn Circles */}
        <div className="relative w-52 h-52">
          {/* Scope 1 */}
          <div className="z-0 absolute top-0 left-10 w-24 h-24 bg-[#004225] rounded-full flex flex-col items-center justify-center text-white">
            <FaGasPump size={22} />
            <span className="text-sm mt-1 font-bold">1</span>
          </div>

          {/* Scope 2 */}
          <div className="z-9 absolute top-16 left-20 w-24 h-24 bg-[#B6E2B2]/80 rounded-full flex flex-col items-center justify-center text-[#004225]">
            <FaBolt size={22} />
            <span className="text-sm mt-1 font-bold">2</span>
          </div>

          {/* Scope 3 */}
          <div className="z-10 absolute top-16 left-0 w-24 h-24 bg-[#EAEAEA]/80 rounded-full flex flex-col items-center justify-center text-[#004225]">
            <FaTruck size={20} />
            <span className="text-sm mt-1 font-bold">3</span>
          </div>
        </div>

        {/* Scope Descriptions */}
        <div className="space-y-6 text-left max-w-md">
          {/* Scope 1 */}
          <div className="flex items-start gap-3 max-w-[290px]">
            <FaLeaf className="mt-1 text-[#004225]" size={'24px'} />
            <div>
              <p className="font-semibold text-[#004225]">
                {t("carbonFootprint.scope1.title")}
              </p>
              <p className="text-sm text-[#333]">
                {t("carbonFootprint.scope1.description")}
              </p>
            </div>
          </div>

          {/* Scope 2 */}
          <div className="flex items-start gap-3 max-w-[290px]">
            <FaLeaf className="mt-1 text-[#7AC142]/40" size={'24px'} />
            <div>
              <p className="font-semibold text-[#004225]">
                {t("carbonFootprint.scope2.title")}
              </p>
              <p className="text-sm text-[#333]">
                {t("carbonFootprint.scope2.description")}
              </p>
            </div>
          </div>

          {/* Scope 3 */}
          <div className="flex items-start gap-3 max-w-[290px]">
            <FaLeaf className="mt-1 text-[#A8A8A8]/40" size={'24px'} />
            <div>
              <p className="font-semibold text-[#333]">
                {t("carbonFootprint.scope3.title")}
              </p>
              <p className="text-sm text-[#333]">
                {t("carbonFootprint.scope3.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
