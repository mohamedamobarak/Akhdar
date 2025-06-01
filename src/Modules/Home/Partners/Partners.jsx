import React from 'react';
import globeHand from '../../../assets/shareimpactimg/shareimg.png';

const Partners = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-20">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-[#003B2D] text-4xl font-bold">
            We Provide Solutions for
            <br />
            Different Industries
          </h2>
        </div>

        {/* Solutions Grid with Leaf */}
        <div className="relative min-h-[600px]">
          {/* Central Leaf Design */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px]">
            <svg width="1019" height="569" viewBox="0 0 1019 569" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M404.315 512.219C401.161 532.844 403.392 550.149 405.26 559.495C406.11 563.753 403.496 567.794 399.257 568.776C394.798 569.799 390.198 567.054 388.968 562.641C380.258 531.43 364.027 470.833 415.669 381.439C477.901 273.717 574.052 302.765 614.955 197.429C614.955 197.429 589.389 245.225 469.671 291.12C374.906 327.441 362.984 432.352 362.521 434.106C361.913 432.793 323.567 348.237 376.962 265.693C436.366 173.857 585.329 213.512 639.137 98.1333C639.137 98.1333 721.169 246.211 645.69 362.897C595.866 439.92 512.363 447.91 450.355 462.663C426.067 468.438 408.047 487.875 404.315 512.219Z" fill="#81F18E"/>
              <circle cx="28" cy="28" r="25.5" stroke="#81F18E" stroke-width="5"/>
              <circle cx="28" cy="28.0002" r="16.8" fill="#81F18E"/>
              <circle cx="28" cy="339" r="25.5" stroke="#81F18E" stroke-width="5"/>
              <circle cx="28" cy="339" r="16.8" fill="#81F18E"/>
              <circle cx="991" cy="28" r="25.5" stroke="#81F18E" stroke-width="5"/>
              <circle cx="991" cy="28.0002" r="16.8" fill="#81F18E"/>
              <circle cx="991" cy="339" r="25.5" stroke="#81F18E" stroke-width="5"/>
              <circle cx="991" cy="339" r="16.8" fill="#81F18E"/>
              <path d="M440.5 248V190C440.5 101.082 368.418 29 279.5 29H31.5" stroke="#81F18E" stroke-width="6"/>
              <path d="M561 207V190C561 101.082 633.082 29 722 29H992" stroke="#81F18E" stroke-width="6"/>
              <path d="M578 392.5V392.5C578 362.953 601.953 339 631.5 339H992" stroke="#81F18E" stroke-width="6"/>
              <path d="M361 392.5V339H28" stroke="#81F18E" stroke-width="6"/>
            </svg>
          </div>

          {/* Text Sections Container */}
          <div className="relative z-10">
            {/* Top Row */}
            <div className="flex justify-between mb-64">
              {/* E-Commerce */}
              <div className="w-72 text-center -mt-4">
                <h3 className="text-[#003B2D] text-xl font-bold mb-2">E-Commerce</h3>
                <p className="text-gray-600 text-sm">
                  Offer carbon-neutral products, enhancing customer satisfaction and brand loyalty by supporting sustainable shopping choice.
                </p>
              </div>

              {/* Fintech */}
              <div className="w-72 text-center -mt-4">
                <h3 className="text-[#003B2D] text-xl font-bold mb-2">Fintech</h3>
                <p className="text-gray-600 text-sm">
                  Seamlessly offer carbon offsetting services to meet growing consumer demand for climate-conscious financial products
                </p>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex justify-between">
              {/* Logistics */}
              <div className="w-72 text-center">
                <h3 className="text-[#003B2D] text-xl font-bold mb-2">Logistics</h3>
                <p className="text-gray-600 text-sm">
                  Offset their carbon emissions in real-time, providing transparency and accountability in their supply chains while enhancing your sustainability commitments
                </p>
              </div>

              {/* Mobile Apps */}
              <div className="w-72 text-center">
                <h3 className="text-[#003B2D] text-xl font-bold mb-2">Mobile Apps</h3>
                <p className="text-gray-600 text-sm">
                  Enable real-time carbon emission offsets directly from your app, ensuring transparency and accountability across your supply chain while strengthening your sustainability goals.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <h3 className="text-2xl font-bold mb-6">
            Track your carbon, support climate action,
            <br />
            and sell sustainably.
          </h3>
          <button className="bg-[#7CE495] text-black px-8 py-3 rounded-full text-sm font-medium hover:bg-[#6bd384] transition-colors">
            Talk to Us
          </button>
        </div>
      </div>
    </>
  );
};

export default Partners; 