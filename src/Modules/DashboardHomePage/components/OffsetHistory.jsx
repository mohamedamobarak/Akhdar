import React from 'react';
import { offsetHistoryData, subscriptionsData, dashboardConfig } from '../data/mockData';

const OffsetHistory = () => {
  const hasData = dashboardConfig.hasHistoryData;



  return (
    <section className="space-y-8">
      {/* Your Offset History */}
      <div className="p-8">
        <div className="flex justify-between items-center my-12 min-h-11 ">
          <h2 className=" text-2xl lg:text-4xl font-bold text-primary">Your Offset History</h2>
          <button className="text-primary bg-[#E6E6E6] cursor-pointer mr-0 lg:mr-16  px-6 py-2 rounded-lg hover:border-b-4 hover:border-b-black transition-colors">
            Download
          </button>
        </div>

        <div className="overflow-x-auto ">
          <table className="w-full">
            <thead>
              <tr className="">
                <th className="text-left py-3 px-4 font-bold text-black text-md">Order ID</th>
                <th className="text-left py-3 px-4 font-bold text-black text-md  ">Type</th>
                <th className="text-left py-3 px-4 font-bold text-black text-md">Partners</th>
                <th className="text-left py-3 px-4 font-bold text-black text-md">Projects</th>
                <th className="text-left py-3 px-4 font-bold text-black text-md">From</th>
                <th className="text-left py-3 px-4 font-bold text-black text-md">Price</th>
                <th className="text-left py-3 px-4 font-bold text-black text-md">Impact</th>
                <th className="text-left py-3 px-4 font-bold text-black text-md">Created At</th>
              </tr>
            </thead>
            <tbody>
              {offsetHistoryData ? offsetHistoryData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-3 px-4">{item.orderId}</td>
                  <td className="py-3 px-4">{item.type}</td>
                  <td className="py-3 px-4">{item.partners}</td>
                  <td className="py-3 px-4">{item.projects}</td>
                  <td className="py-3 px-4">{item.from}</td>
                  <td className="py-3 px-4">{item.price}</td>
                  <td className="py-3 px-4">{item.impact}</td>
                  <td className="py-3 px-4">{item.createdAt}</td>
                </tr>
              ))
              : (
                <tr>
                  <td colSpan="8" className="text-center py-12 text-black">
                    No metrics during this period
                  </td>
                </tr>
              )
            }
            </tbody>
          </table>
        </div>
      </div>

      {/* Subscriptions */}
      <div className=" bg-white rounded-3xl mx-3  md:mx-24 shadow-lg   p-8">
        <h3 className="text-2xl font-bold text-primary mb-6 text-center">Subscriptions</h3>

        <div className="overflow-x-auto max-h-80 overflow-y-auto">
          <table className="w-full border-separate border-spacing-y-4">
            <thead>
              <tr className="">
                <th className=" py-3 px-4 font-medium text-lg text-primary">Project</th>
                <th className=" py-3 px-4 font-medium text-lg text-primary">Type</th>
                <th className=" py-3 px-4 font-medium text-lg text-primary">Price</th>
                {
                  !subscriptionsData && (
                    <th className=" py-3 px-4 font-medium text-lg text-primary">Edit</th>
                  ) 
                }
              </tr>
            </thead>
            <tbody>
              {subscriptionsData ? subscriptionsData.map((item, index) => (
                <tr key={index} className="">
                  <td className="py-3 text-center px-4 bg-gray-50 rounded-l-2xl text-primary font-medium">{item.project}</td>
                  <td className="py-3 text-center px-4 bg-gray-50 text-primary font-medium">{item.type}</td>
                  <td className="py-3  text-center px-4 bg-gray-50 rounded-r-2xl text-primary font-medium">{item.price}</td>
                  <td className="py-3 text-center px-4  ">
                    <button className="bg-gray-200 p-2 rounded-full cursor-pointer text-primary  hover:bg-gray-300 transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))
              : (
                <tr>
                  <td colSpan="4" className="py-3 text-center px-4 bg-gray-50 rounded-2xl text-primary font-medium">
                    No subscriptions yet
                  </td>
                </tr>
              )
            }
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default OffsetHistory;
