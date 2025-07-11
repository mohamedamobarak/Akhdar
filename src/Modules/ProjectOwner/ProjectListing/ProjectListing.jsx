import React from 'react';
import leaf from '../../../assets/project-owner/leaf.png';

const ProjectListing = () => {
  const benefits = [
    {
      id: 1,
      title: "Boost Your Visibility",
      description: "Gain access to a network of buyers and companies interested in sustainability.",
      position: "top-12 left-12"
    },
    {
      id: 2,
      title: "Seamless Transactions",
      description: "With a robust platform designed for efficient trading of carbon credits, we simplify the process for both buyers and sellers.",
      position: "top-12 right-12"
    },
    {
      id: 3,
      title: "Track and Verify",
      description: "Through trusted partners, we provide full MRV services to ensure your project's transparency and credibility.",
      position: "bottom-12 left-12"
    },
    {
      id: 4,
      title: "Aligned with Saudi Vision 2030",
      description: "Your projects will contribute directly to the Kingdom's ambitious climate and sustainability goals, further increasing their value.",
      position: "bottom-12 right-12"
    }
  ];

  return (
    <div className="  flex items-center justify-center bg-gray-100 ">
      <div className=" w-full rounded-3xl  md:pt-10 relative overflow-hidden">
   
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-12 md:mb-20">
            <h1 className="max-w-[340px] mx-auto text-3xl md:text-5xl font-bold text-green-800 mb-3 drop-shadow-sm">
              Why List your Project on AKHDAR?
            </h1>
          
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:block relative w-full h-[500px]">
            {/* Center Circle with Logo */}
            <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-30 h-30 lg:w-64 lg:h-64 lg:border-4 border-green-400 rounded-full flex items-center justify-center bg-green-50 z-20">
              {/* Replace this div with your image */}
              <img
                src={leaf}
                alt="AKHDAR Logo"
                className="w-full h-auto object-contain"
              />
              {/* Connection Dots */}
              <div className="absolute top-10 left-5 border-2 rounded-full border-green-300 ransform -translate-y-1/2  shadow-lg ">
                <div className='w-4 h-4 bg-green-400 rounded-full border-2 border-white'></div>
              </div>
              <div className="absolute top-10 right-5 transform -translate-y-1/2 -green-400 rounded-full border-2 border-green-300 shadow-lg z-15">
                <div className='w-4 h-4 bg-green-400 rounded-full border-2 border-white'></div>
              </div>
              <div className="absolute bottom-10 left-5  transform translate-y-1/2 border-green-300 rounded-full border-2 shadow-lg z-15">
                <div className='w-4 h-4 bg-green-400 rounded-full border-2 border-white'></div>
              </div>
              <div className="absolute bottom-10 right-5 transform translate-y-1/2  border-green-300 rounded-full border-2  shadow-lg z-15">
                <div className='w-4 h-4 bg-green-400 rounded-full border-2 border-white'></div>
              </div>

            </div>



            {/* Benefit Cards */}
            {benefits.map((benefit, index) => (
              <div
                key={benefit.id}
                className={`absolute ${benefit.position} w-64  p-6  rounded-xl `}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-green-800 text-xl font-bold mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden">
            <div className="relative space-y-30">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-400 rounded-full"></div>

              {/* First Card - Boost Your Visibility */}
              <div className="relative">
                <div className="w-full p-6 bg-gray-100  rounded-xl">
                  <h3 className="text-green-800 text-lg font-bold mb-3 text-center">
                    Boost Your Visibility
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed text-center max-w-[270px] mx-auto">
                    Gain access to a network of buyers and companies interested in sustainability.
                  </p>
                </div>
              </div>

              {/* Second Card - Seamless Transactions */}
              <div className="relative ">
                <div className="absolute  left-1/2 -top-1/2 transform translate-y-1/1 -translate-x-1/2 border-2 border-green-300 rounded-full  shadow-lg z-10">
                  <div className='w-4 h-4 bg-green-400 rounded-full border-2 border-white'></div>
                </div>
                <div className="w-full p-6   rounded-xl bg-gray-100 ">
                  <h3 className="text-green-800 text-lg font-bold mb-3 text-center">
                    Seamless Transactions
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed text-center max-w-[270px] mx-auto">
                    With a robust platform designed for efficient trading of carbon credits, we simplify the process for both buyers and sellers.
                  </p>
                </div>
              </div>

              {/* Mobile Logo */}
              <div className="text-center my-8 relative bottom-10">
                <div className="inline-flex  border-green-400 rounded-full items-center justify-center  ">
                  <img
                    src={leaf}
                    alt="AKHDAR Logo"
                    className="w-70 h-auto object-contain"
                  />
                </div>
              </div>

              {/* Third Card - Track and Verify */}
              <div className="relative">
                <div className="w-full p-6 bg-gray-100  rounded-xl ">
                  <h3 className="text-green-800 text-lg font-bold mb-3 text-center">
                    Track and Verify
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed text-center max-w-[270px] mx-auto">
                    Through trusted partners, we provide full MRV services to ensure your project's transparency and credibility.
                  </p>
                </div>
              </div>

              {/* Fourth Card - Aligned with Saudi Vision 2030 */}
              <div className="relative bottom-10">
                <div className="absolute left-1/2 -top-1/4 transform -translate-y-1/2 -translate-x-1/2 border-2 border-green-300 rounded-full shadow-lg z-10">
                  <div className=' w-4 h-4 bg-green-400 rounded-full border-2 border-white'></div>
                </div>
                <div className="w-full bg-gray-100 p-6 rounded-xl ">
                  <h3 className="text-green-800 text-lg font-bold mb-3 text-center">
                    Aligned with Saudi Vision 2030
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed text-center max-w-[270px] mx-auto">
                    Your projects will contribute directly to the Kingdom's ambitious climate and sustainability goals, further increasing their value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default ProjectListing;