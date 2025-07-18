import React from 'react'

function Measure() {
  return (
    <div className='mt-8 md:mt-12 lg:mt-20 px-40 '>
      <h5 className='text-2xl md:text-3xl lg:text-[45px] text-primary font-semibold text-center mb-4 md:mb-6 lg:mb-8'>Measure</h5>
      <p className='text-lg md:text-xl lg:text-3xl font-semibold text-center mb-8 md:mb-12 lg:mb-16'>Turning Carbon Insights into Meaningful Change</p>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
<div className="bg-white rounded-2xl w-full md:w-[400px] lg:w-[473px] pt-6 md:pt-8 lg:pt-10">
    <div className="bg-secondary rounded-2xl lg:rounded-4xl p-4 md:p-6  lg:pt-[84px] lg:pb-[85px] w-full md:w-[500px] lg:w-[790px] md:translate-x-[-10%] lg:translate-x-[-15%]">
        <p className='text-xl md:text-2xl lg:text-3xl text-primary font-semibold mb-2 md:mb-3 lg:mb-4'>GHG Assessment</p>
        <p className='text-sm md:text-lg lg:text-2xl font-medium'>Fully-compliant GHG reports on Scope 1, 2, and 3 emissions, driven by robust analyses and automated analytics for precise carbon footprint calculation.</p>
    </div>
    <div className="mt-6 md:mt-8 lg:mt-0 md:ms-[30px] lg:ms-[53px]">
    <p className='text-xl md:text-2xl lg:text-3xl text-primary font-semibold mt-8 mb-8 md:mt-12 md:mb-12 lg:mt-16 lg:mb-16'>Life Cycle Analysis</p>
    <p className='text-xl md:text-2xl lg:text-3xl text-primary font-semibold mt-8 mb-8 md:mt-12 md:mb-12 lg:mt-16 lg:mb-16'>Sustainable Procurement</p>
    </div>
</div>
      </div>
    </div>
  )
}

export default Measure
