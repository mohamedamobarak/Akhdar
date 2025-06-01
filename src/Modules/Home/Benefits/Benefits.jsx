import React from 'react';

const Benefits = () => {
  return (
    <section className="bg-[#F6F7F6] py-20">
      <div className="container mx-auto px-4">
        <div className="bg-[#DFFAE7] rounded-[40px] py-16 px-8">
          {/* Heading and Description */}
          <div className="text-center mb-20">
            <h2 className="text-[#003B2D] text-4xl font-bold mb-6">
              Why Integrate With AKHDAR?
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              According to the latest research, integrating climate action into the checkout experience enhances sales, customer acquisition, and brand loyalty.
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto text-center">
            {/* Stat 1 */}
            <div className="flex flex-col items-center">
              <h3 className="text-[#003B2D] text-5xl font-bold mb-4">+10%</h3>
              <p className="text-gray-700">
                Increase in sales conversion with sustainability initiatives at checkout
              </p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center">
              <h3 className="text-[#003B2D] text-5xl font-bold mb-4">+29%</h3>
              <p className="text-gray-700">
                Increase in customer acquisition using climate action incentives
              </p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center">
              <h3 className="text-[#003B2D] text-5xl font-bold mb-4">+23%</h3>
              <p className="text-gray-700">
                Increase in average order experienced by climate positive brands
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits; 