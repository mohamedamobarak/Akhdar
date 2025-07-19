import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { carbonEmissionData, offsetData, dashboardConfig, carbonEmissionHistory } from '../data/mockData';
import { Dialog, DialogTrigger, DialogContent } from "../../../components/ui/dialog";
import { Button } from "../../../components/ui/button";
import { Link } from 'react-router-dom';

ChartJS.register(ArcElement, Tooltip);

const CalculationsAndOffsets = () => {
  const hasCalculationData = dashboardConfig.hasCalculationData;
  const hasOffsetData = dashboardConfig.hasOffsetData !== undefined ? dashboardConfig.hasOffsetData : true;

  // Chart configuration for Carbon Emission
  const carbonEmissionChartData = {
    labels: carbonEmissionData.breakdown.map(item => item.label),
    datasets: [
      {
        data: carbonEmissionData.breakdown.map(item => item.value),
        backgroundColor: carbonEmissionData.breakdown.map(item => item.color),
        borderWidth: 0,
        cutout: '75%',
      },
    ],
  };

  // Chart configuration for Offset
  const offsetChartData = {
    labels: ['Offsetted', 'Remaining'],
    datasets: [
      {
        data: [offsetData.percentage, 100 - offsetData.percentage],
        backgroundColor: ['#10B981', '#E5E7EB'],
        borderWidth: 0,
        cutout: '75%',
      },
    ],
  };

  const chartOptions = {
    cutout: '75%',
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    maintainAspectRatio: false,
  };

  if (!hasCalculationData && !hasOffsetData) {
    return (
      <section className="p-8 text-center">
        <h2 className="text-3xl mb-14 font-bold text-[#013229] ">Didn't Calculate?</h2>
        {!hasCalculationData && (
          <Link to="/calc-company#calc" className="bg-main text-white px-6 md:px-16 lg:px-22 py-3 rounded-xl font-medium hover:bg-primary transition-colors mr-4">
            Measure Your Carbon Emission
          </Link>
        )}
        {hasOffsetData && (
          <Link to="/calc-company#calc" className="bg-main text-white px-6 md:px-16 lg:px-22 py-3 rounded-xl font-medium hover:bg-primary transition-colors">
            Offset
          </Link>
        )}
      </section>
    );
  }

  return (
    <section className="p-8">
      <h2 className=" text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-8 text-center">Calculations and offsets</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Your Carbon Emission */}
        
        <div className="text-center  p-6 ">
          <h3 className="text-xl font-bold text-primary mb-6">Your Carbon Emission</h3>
          
          <div className="relative bg-white  rounded-full  w-48 h-48 mx-auto mb-6">
            <Doughnut
              data={carbonEmissionChartData}
              options={chartOptions}
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-3xl font-bold text-primary">{carbonEmissionData.value}</div>
              <div className="text-sm text-primary">tCO2e</div>
            </div>
          </div>

          {/* Legend */}
          <div className="flex justify-center gap-4 text-md text-semibold">
            {carbonEmissionData.breakdown.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-primary ">{item.label}</span>
              </div>
            ))}
          </div>
          {/* History Button with Modal */}
          <div className="mt-4 text-sm text-primary">
            <Dialog>
              <DialogTrigger asChild>
                <p variant="outline" className="px-4 text-md underline cursor-pointer py-2">History</p>
              </DialogTrigger>
              <DialogContent
                className="max-w-[600px] w-full mx-auto p-0 bg-transparent border-0 shadow-none sm:max-w-full"
                style={{ width: '100%', minWidth: '290px', maxWidth: '50vw' }}
              >
                <div className="bg-white rounded-2xl p-6 md:p-8 w-full max-w-full">
                  {/* Modal Legend */}
                  <div className="flex gap-8 mb-6 items-center ml-0 md:ml-22">
                    <div className="flex items-center font-bold gap-2"><span className="w-3 h-3 rounded-full" style={{background:'#004D40'}}></span><span className="font-semibold text-sm">Gas</span></div>
                    <div className="flex items-center font-bold gap-2"><span className="w-3 h-3 rounded-full" style={{background:'#81F18E'}}></span><span className="font-semibold text-sm">Travel</span></div>
                    <div className="flex items-center font-bold gap-2"><span className="w-3 h-3 rounded-full" style={{background:'#D6EFD7'}}></span><span className="font-semibold text-sm">Car</span></div>
                  </div>
                  {/* Modal Bars */}
                  <div className="space-y-6">
                    {carbonEmissionHistory.slice(0,3).map((entry) => {
                      const total = entry.breakdown.reduce((sum, b) => sum + b.value, 0);
                      return (
                        <div key={entry.id} className="flex items-center gap-4">
                          <span className="text-black font-bold text-sm min-w-[80px]">{new Date(entry.date).toLocaleDateString('en-GB')}</span>
                          <div className="flex-1 flex items-center h-10 rounded-xl overflow-hidden relative">
                            <div
                              className="flex h-10 rounded-xl overflow-hidden w-full"
                            >
                              {['Gas','Travel','Car'].map((cat) => {
                                const item = entry.breakdown.find(b => b.category === cat);
                                if (!item) return null;
                                return (
                                  <div
                                    key={cat}
                                    style={{
                                      width: `${(item.value / total) * 100}%`,
                                      background: item.color,
                                    }}
                                    className="h-full"
                                  />
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Your Offset */}
        <div className="text-center  p-6 ">
          <h3 className="text-xl font-bold text-primary mb-6">Your Offset</h3>
          
          <div className="relative w-48 h-48 mx-auto mb-6 bg-white rounded-full ">
            <Doughnut
              data={offsetChartData}
              options={chartOptions}
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-3xl font-bold text-primary">{offsetData.value}</div>
              <div className="text-sm text-primary">tCO2e</div>
            </div>
          </div>

          <div className="text-md font-semibold text-primary">{offsetData.offsetted}</div>
        </div>
      </div>
    </section>
  );
};

export default CalculationsAndOffsets;
