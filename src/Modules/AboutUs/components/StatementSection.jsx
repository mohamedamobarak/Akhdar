import React from 'react'
import megaphoneIcon from '../../../assets/about-us/statement-img.png'
const StatementSection = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-14 lg:gap-24 py-8 md:py-16 lg:py-24 px-2 md:px-8">
      {/* Text Content */}
      <div className="sm:max-w-lg lg:max-w-4xl ">
        <h2 className=" text-[25px] md:text-[30px] lg:text-[45px] font-[700] text-primary mb-10 md:mb-14 text-center md:text-left">
         Akhdar Sustainability Statement
        </h2>
        <p className="text-black text-[16px] md:text-[20px] lg:text-[22px] font-medium text-center md:text-left ">
        At AKHDAR, we recognize that protecting and restoring nature is essential for mitigating climate change. Saudi Arabia’s Vision 2030 and 2060 set ambitious targets for reducing emissions and enhancing sustainability, and we are committed to driving this transformation. By enabling businesses to reduce, offset, and track their carbon footprint, AKHDAR supports a science-based carbon reduction pathway aligned with the Paris Agreement and the unsustainable Development Goals (SDGs) for a positive environmental and social impact.
        </p>
      </div>
     {/* Image */}
     <div className="flex-shrink-0">
        <img
          src={megaphoneIcon}
          alt="Sustainability Icon"
          className="w-[190px] h-[144px] md:w-[289.5px] md:h-[219.9px] lg:w-[500px] lg:h-[380px] object-contain"
        />
      </div>
    </section>
  )
}

export default StatementSection
