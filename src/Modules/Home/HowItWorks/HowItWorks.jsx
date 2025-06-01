import React from 'react';

const HowItWorks = () => {
  // Placeholder images - in real implementation, these would be your actual image imports
  const laptopImg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23666'%3ELaptop Image%3C/text%3E%3C/svg%3E";
  const cardImg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23666'%3ECard Image%3C/text%3E%3C/svg%3E";
  const impactImg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23666'%3EImpact Image%3C/text%3E%3C/svg%3E";

  const handleTalkToUs = () => {
    // Add your contact logic here
    console.log('Talk to Us clicked');
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-[#003B2D] text-3xl font-bold text-center mb-16">
          How It Works?
        </h2>

        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Line - Hidden on mobile */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-[85%] w-0.5 bg-[#7CE495] top-10 hidden md:block" />

          {/* Steps */}
          <div className="space-y-24">
            {/* Step 1 */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="flex-1 md:pr-12 order-2 md:order-1">
                <div className="border border-[#7CE495] rounded-2xl p-6 bg-white shadow-sm max-w-lg md:ml-auto mx-auto">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl font-bold text-[#7CE495] bg-[#DFFAE7] w-10 h-10 flex items-center justify-center rounded-lg flex-shrink-0">
                      1
                    </span>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-[#003B2D]">Integrate</h3>
                      <p className="text-gray-600 text-sm">
                        Seamlessly embed AKHDAR's API into your e-commerce checkout workflow in under 10 minutes and start enabling carbon offsetting for your customers instantly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#7CE495] rounded-full border-2 border-white z-10 hidden md:block" />
              
              <div className="flex-1 md:pl-12 order-1 md:order-2 mb-6 md:mb-0">
                <div className="w-full max-w-sm mx-auto md:mx-0">
                  <img 
                    src={laptopImg} 
                    alt="Laptop showing AKHDAR API integration" 
                    className="w-full h-auto rounded-lg"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="flex-1 md:pr-12 order-1 mb-6 md:mb-0">
                <div className="w-full max-w-sm mx-auto md:ml-auto">
                  <img 
                    src={cardImg} 
                    alt="Payment card with carbon offset contribution" 
                    className="w-full h-auto rounded-lg"
                    loading="lazy"
                  />
                </div>
              </div>
              
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#7CE495] rounded-full border-2 border-white z-10 hidden md:block" />
              
              <div className="flex-1 md:pl-12 order-2">
                <div className="border border-[#7CE495] rounded-2xl p-6 bg-white shadow-sm max-w-lg mx-auto">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl font-bold text-[#7CE495] bg-[#DFFAE7] w-10 h-10 flex items-center justify-center rounded-lg flex-shrink-0">
                      2
                    </span>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-[#003B2D]">Contribute</h3>
                      <p className="text-gray-600 text-sm">
                        With every transaction, a small contribution is sent to verified carbon offset projects. Track and display your climate impact in real time, reinforcing your commitment to sustainability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="flex-1 md:pr-12 order-2 md:order-1">
                <div className="border border-[#7CE495] rounded-2xl p-6 bg-white shadow-sm max-w-lg md:ml-auto mx-auto">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl font-bold text-[#7CE495] bg-[#DFFAE7] w-10 h-10 flex items-center justify-center rounded-lg flex-shrink-0">
                      3
                    </span>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-[#003B2D]">Showcase Your Impact</h3>
                      <p className="text-gray-600 text-sm">
                        Embed our live carbon reduction tracker directly onto your website and watch it update in real-time. Our customizable impact dashboard allows you to share detailed sustainability insights with your customers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#7CE495] rounded-full border-2 border-white z-10 hidden md:block" />
              
              <div className="flex-1 md:pl-12 order-1 md:order-2 mb-6 md:mb-0">
                <div className="w-full max-w-sm mx-auto md:mx-0">
                  <img 
                    src={impactImg} 
                    alt="Carbon impact dashboard showing real-time metrics" 
                    className="w-full h-auto rounded-lg"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Talk to Us Button */}
          <div className="text-center mt-16">
            <button 
              onClick={handleTalkToUs}
              className="bg-[#7CE495] text-black px-8 py-3 rounded-full text-sm font-medium hover:bg-green-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#7CE495] focus:ring-offset-2"
              aria-label="Contact us to learn more about AKHDAR"
            >
              Talk to Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;