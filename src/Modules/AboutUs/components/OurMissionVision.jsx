import React from 'react'

const OurMissionVision = () => {
  return (
    <section className="flex flex-col md:flex-row  items-center justify-center py-16 w-full relative md:gap-1 gap-32 " >
      {/* Left Side */}
      <div className="bg-primary text-white rounded-[40px] p-14 flex flex-col justify-center w-[480px] min-h-[380px] z-10 shadow-md">
        <h2 className="text-3xl font-bold mb-5 leading-tight">Our Mission & Vision</h2>
        <p className="mb-5 text-base">
          AKHDAR's mission is to become Saudi Arabia's leading carbon offset aggregator, helping businesses, organizations, and individuals take meaningful climate action.
        </p>
        <p className="text-main font-semibold text-base">We Plan to Provide:</p>
      </div>

      {/* Center Circle */}
      <div className="absolute left-[calc(50%_-_105px)] top-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-20">
        {/* Big Circle */}
        <div className="relative flex items-center text-white justify-center bg-[#FDFBF1] border-4 border-main rounded-full w-[210px] h-[210px] shadow-lg">
          {/* Small Green Circle on Top (inside border) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white border-4 border-main rounded-full flex items-center justify-center z-30">
            <div className="w-5 h-5 bg-main rounded-full"></div>
          </div>
          {/* Gray Dots */}
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-7 h-7 bg-gray-300 rounded-full z-30"></div>
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-7 h-7 bg-gray-300 rounded-full z-30"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-7 h-7 bg-gray-300 rounded-full z-30"></div>
          {/* Text */}
          <div className="flex flex-col items-center justify-center">
            <span className="text-primary text-4xl font-bold mb-1">By</span>
            <span className="text-primary text-4xl font-bold">2026</span>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex flex-col justify-center gap-6 w-[95%] max-w-[700px] font-medium min-h-[260px] z-10 md:ml-[-150px]">
        <div className="border-2 border-primary rounded-2xl p-6 text-black  flex justify-end md:border-l-0" >
          <p>500,000 tons of CO₂ offset through verified carbon credits</p>
        </div>
        <div className="border-2 border-primary rounded-2xl p-6 text-black  flex justify-end md:border-l-0" >
          <p>50+ certified carbon projects listed on our platform</p>
        </div>
        <div className="border-2 border-primary rounded-2xl p-6 text-black  flex justify-end md:border-l-0" >
          <p>250+ businesses onboarded, integrating carbon offsetting into their sustainability strategies</p>
        </div>
      </div>
    </section>
  )
}

export default OurMissionVision
