import { Button } from "@/components/ui/button";
import React from "react";
import { useTranslation } from "react-i18next";

const SustainabilityCard = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#f5fbf7] min-h-[400px] flex items-center justify-center p-4">
      <div className="relative bg-green-100 rounded-xl p-6 max-w-md mx-auto text-center">
        <h2 className="text-xl font-bold text-green-900 mb-2">
          {t("sustainabilityCard.title", "Empower Your Customers with Sustainability")}
        </h2>
        <p className="text-sm text-green-800 mb-4">
          {t(
            "sustainabilityCard.description",
            "AKHDAR takes a holistic approach to sustainability, offering innovative business solutions for voluntary carbon offsetting and climate donations across B2B and B2B2C models."
          )}
        </p>
        <Button className="px-8 absolute left-1/2 transform -translate-x-1/2 bg-[#81F18E] hover:bg-green-500 text-[#004D40]">
          {t("sustainabilityCard.button", "Book a Meeting")}
        </Button>
      </div>
    </div>
  );
};

export default SustainabilityCard;
