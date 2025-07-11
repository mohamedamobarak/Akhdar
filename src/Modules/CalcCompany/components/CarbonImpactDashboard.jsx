import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaLeaf } from "react-icons/fa";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";

ChartJS.register(ArcElement, Tooltip);

export default function CarbonImpactDashboard() {
  const { t } = useTranslation();
  const carbonValue = 35.3;

  const data = {
    labels: ["Scope 1", "Scope 2", "Scope 3"],
    datasets: [
      {
        data: [20, 30, 10],
        backgroundColor: ["#A8E6A1", "#81F18E", "#6CDB7B"],
        borderWidth: 0,
        cutout: "75%",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#f3f8f3] flex flex-col items-center justify-center p-4 space-y-8">
      <h1 className="text-2xl font-semibold text-green-900">
        {t("dashboard.shareImpact")}
      </h1>

      <div className="max-w-4xl w-full columns-1 md:columns-2 gap-6 space-y-6">
        {/* Total CO2 */}
        <Card className="mb-6 break-inside-avoid shadow-md text-center">
          <CardHeader>
            <CardTitle className="text-sm text-gray-600">
              {t("dashboard.totalEmission")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold text-green-900">162 tco2e</p>
          </CardContent>
        </Card>

        {/* Per Employee */}
        <Card className="mb-6 break-inside-avoid shadow-md text-center">
          <CardHeader>
            <CardTitle className="text-sm text-gray-600">
              {t("dashboard.emissionPerEmployee")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold text-green-900">3 tco2e</p>
          </CardContent>
        </Card>

        {/* Carbon Breakdown */}
        <Card className="mb-6 break-inside-avoid shadow-md">
          <CardHeader>
            <CardTitle className="text-sm text-gray-600 ms-4">
              {t("dashboard.carbonBreakdown")}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center gap-6 justify-evenly">
            {/* Chart */}
            <div className="relative w-36 h-36">
              <Doughnut
                data={data}
                options={{
                  cutout: "75%",
                  plugins: {
                    legend: { display: false },
                    tooltip: { enabled: false },
                  },
                }}
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 rounded-full p-4 -translate-y-1/2 bg-[#81F18E] flex flex-col items-center justify-center text-green-800">
                <span className="text-2xl font-bold">{carbonValue}</span>
                <span className="text-xs font-medium">tCO2e</span>
              </div>
            </div>

            {/* Legend */}
            <div className="text-sm text-gray-700 space-y-3">
              {["scope1", "scope2", "scope3"].map((key, i) => (
                <div key={key} className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <div className="border border-[#81F18E] w-4 h-4 flex items-center justify-center rounded-full">
                      <div className="w-3 h-3 bg-green-500 border rounded-full" />
                    </div>
                    <span>{t(`dashboard.${key}`)}</span>
                  </div>
                  <span className="font-medium text-gray-600">
                    {data.datasets[0].data[i]}%
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Share Impact CTA */}
        <Card className="relative w-[95%] mb-6 flex items-center rounded-r-none flex-row justify-between ps-6 py-4 shadow-md">
          <p className="text-lg font-semibold text-green-800">
            {t("dashboard.shareImpact")}
          </p>
          <div className="absolute end-0 transform translate-x-1/2 flex items-center justify-center w-10 h-10 bg-[#004D40] p-2 shadow-md border-5 border-[#F0F5EF] rounded-full">
            <FaLeaf className="w-5 h-5 text-green-100" />
          </div>
        </Card>
      </div>
    </div>
  );
}
