import React from 'react'
import bgImage from '../../assets/ESGbackground/ESGbackground.png';

const EGSInteractiveForm = () => {
  return (
    <div
      className="relative min-h-screen w-full flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />
      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row w-full h-full min-h-screen">
        {/* Left Section */}
        <div className="flex-1 flex flex-col items-start pl-8 pr-8 md:pl-20 md:pr-8 pt-12 pb-4 text-left text-white max-w-xl">
          {/* Back Arrow */}
          <div className="mb-8">
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-green-300 leading-tight">
            Take the First Step Towards Sustainability
          </h1>
          <p className="text-lg text-white/80 max-w-md">
            Start your EGS journey with our interactive form. Fill out your company information and discover your sustainability impact.
          </p>
        </div>
        {/* Right Section (Form Card) */}
        <div className="flex-1 flex items-center justify-center py-12 px-4 md:px-0">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 w-full max-w-lg">
            <form className="space-y-6">
              {/* 1. Company Information */}
              <div>
                <h2 className="text-lg font-semibold mb-4 text-gray-800">1- Company information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input type="text" placeholder="Company Name" className="input input-bordered w-full" />
                  <input type="text" placeholder="First Name" className="input input-bordered w-full" />
                  <input type="text" placeholder="Last Name" className="input input-bordered w-full" />
                  <input type="text" placeholder="Phone" className="input input-bordered w-full" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input type="text" placeholder="Industry" className="input input-bordered w-full" />
                  <input type="text" placeholder="Company Size" className="input input-bordered w-full" />
                </div>
                <div className="mb-4">
                  <input type="text" placeholder="Country" className="input input-bordered w-full" />
                </div>
              </div>
              {/* Emission Reporting */}
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Emission Reporting</h3>
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="emission" className="accent-green-500" /> Yes
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="emission" className="accent-green-500" /> No
                  </label>
                </div>
              </div>
              {/* Life Cycle Analysis (LCA) */}
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Life Cycle Analysis (LCA)</h3>
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="lca" className="accent-green-500" /> Yes
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="lca" className="accent-green-500" /> No
                  </label>
                </div>
              </div>
              {/* Sustainable Procurement */}
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Sustainable Procurement</h3>
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="procurement" className="accent-green-500" /> Yes
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="procurement" className="accent-green-500" /> No
                  </label>
                </div>
              </div>
              {/* Decarbonization Strategy */}
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Decarbonization Strategy</h3>
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="decarbonization" className="accent-green-500" /> Yes
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="decarbonization" className="accent-green-500" /> No
                  </label>
                </div>
              </div>
              {/* Consent */}
              <div className="flex items-center gap-2">
                <input type="checkbox" className="accent-green-500" />
                <span className="text-xs text-gray-500">I agree to the privacy policy.</span>
              </div>
              {/* Submit Button */}
              <button type="submit" className="w-full bg-green-400 hover:bg-green-500 text-white font-semibold py-3 rounded-full transition">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EGSInteractiveForm