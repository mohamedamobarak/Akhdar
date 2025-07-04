import React from 'react'

const WhyIntegrate = () => {
  return (
    <section className="bg-secondary rounded-[40px] p-8 md:p-14 lg:p-28 flex flex-col items-center max-w-4xl md:max-w-5xl  lg:max-w-6xl mx-auto my-12">
      <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">Why Integrate With AKHDAR?</h2>
      <p className="text-black text-center max-w-2xl mb-24 text-base md:text-lg font-medium">
        Akhdar has facilitated thousands of transactions, contributing to global biodiversity and advancing climate action.
      </p>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center px-4">
          {/* Placeholder for icon/image */}
          <div className="w-12 h-12 mb-4 bg-white/60 rounded-full flex items-center justify-center">
            <span className="text-2xl text-primary">🌱</span>
          </div>
          <div className="text-primary font-bold text-3xl md:text-4xl mb-2">+10%</div>
          <div className="text-black text-base md:text-lg font-medium">
            Increase in sales conversion<br />with sustainability initiatives<br />at checkout
          </div>
        </div>
        {/* Card 2 */}
        <div className="flex flex-col items-center text-center px-4 border-t md:border-t-0 md:border-l border-primary/10">
          <div className="w-12 h-12 mb-4 bg-white/60 rounded-full flex items-center justify-center">
            <span className="text-2xl text-primary">🌍</span>
          </div>
          <div className="text-primary font-bold text-3xl md:text-4xl mb-2">+29%</div>
          <div className=" text-base md:text-lg font-medium text-black">
            Increase in customer<br />acquisition using climate<br />action incentives
          </div>
        </div>
        {/* Card 3 */}
        <div className="flex flex-col items-center text-center px-4 border-t md:border-t-0 md:border-l border-primary/10">
          <div className="w-12 h-12 mb-4 bg-white/60 rounded-full flex items-center justify-center">
            <span className="text-2xl text-primary">🏆</span>
          </div>
          <div className="text-primary font-bold text-3xl md:text-4xl mb-2">+23%</div>
          <div className="text-black text-base md:text-lg font-medium">
            Increase in average order<br />experienced by climate<br />positive brands
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyIntegrate
