import React from 'react';
import globeHand from '../../../assets/shareimpactimg/shareimg.png';

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* First Feature - Empower Users */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-32">
          {/* Left Column - Empowerment Message */}
          <div className="space-y-6">
            <h2 className="text-[#003B2D] text-4xl font-bold">
              Empower Your Users!
            </h2>
            <p className="text-gray-700 text-lg">
              Akhdar's API lets you give your users the ability to take climate action that's important to them.
            </p>
          </div>

          {/* Right Column - Shipping Method Demo */}
          <div className="bg-white rounded-2xl shadow-[0_0_50px_0_rgba(0,0,0,0.3)] p-6 max-w-md mx-auto w-full">
            <div className="space-y-6">
              {/* Shipping Method Title */}
              <h3 className="text-[#003B2D] font-medium mb-4">
                Shipping Method
              </h3>

              {/* Shipping Options */}
              <div className="space-y-3">
                {/* Standard Shipping Option */}
                <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:border-[#7CE495] transition-colors">
                  <input
                    type="radio"
                    name="shipping"
                    defaultChecked
                    className="w-5 h-5 text-[#7CE495] border-gray-300 focus:ring-[#7CE495]"
                  />
                  <span className="ml-3 text-sm text-gray-700">
                    Standard Shipping (4-5 business days)
                  </span>
                </label>

                {/* Expedited Shipping Option */}
                <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:border-[#7CE495] transition-colors">
                  <input
                    type="radio"
                    name="shipping"
                    className="w-5 h-5 text-[#7CE495] border-gray-300 focus:ring-[#7CE495]"
                  />
                  <span className="ml-3 text-sm text-gray-700">
                    Expedited Shipping (FedEx)
                  </span>
                </label>
              </div>

              {/* Carbon Neutral Order Section */}
              <div className="bg-[#DFFAE7] rounded-lg p-4">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#7CE495]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div className="flex-1">
                    <p className="text-sm text-gray-700">Carbon Neutral Order for $2.00</p>
                    <p className="text-xs text-gray-600">Powered by akhdar</p>
                  </div>
                </div>
              </div>

              {/* Continue Button */}
              <button className="w-full bg-[#7CE495] text-black py-3 rounded-lg font-medium hover:bg-[#6bd384] transition-colors">
                Continue to Payment Method
              </button>
            </div>
          </div>
        </div>

        {/* Second Feature - Share Impact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto m-auto">
          {/* Left Column - Globe Illustration */}
          <div className="relative">
            <div className="w-48 h-48 mx-auto">
              <div className="relative w-96 h-full ">
                {/* Globe and Hand Image */}
                <img
          src={globeHand}
                  alt="Hand holding globe"
                  className="w-full h-full object-contain"
                />
        
              </div>
            </div>
          </div>

          {/* Right Column - Share Impact Message */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-[#003B2D] text-4xl font-bold">
              Share Your Impact!
            </h2>
            <p className="text-gray-700 text-lg">
              Akhdar make it easy to share your impact with your customers in language they can understand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 