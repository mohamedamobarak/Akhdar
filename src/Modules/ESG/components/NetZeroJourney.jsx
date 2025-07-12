import React from 'react'
import globe from "../../../assets/ESG/Earthh.png"; // Adjust path as needed
import fogg from "../../../assets/ESG/fogg.png"; // Adjust path as needed
import foggMiddle from "../../../assets/ESG/foggmiddle.png"; // Adjust path as needed
const years = [
  { year: "2025", top: "92%", left: "20%", active: true },
  { year: "2026", top: "62.5%", left: "1.5%" },
  { year: "2027", top: "23.75%", left: "9%" },
  { year: "2028", top: "1%", left: "50%" },
  { year: "2029", top: "23.75%", left: "91%" },
{ year: "2030", top: "62.5%", left: "98.5%" },
{ year: "2031 & Beyond", top: "92%", left: "80%" },
];
function NetZeroJourney() {
    const getTextPosition = (year) => {
    // Left side years (2025, 2026, 2027) - text to the left
    if (['2025', '2026', '2027'].includes(year)) {
      return {
        transform: "translate(-100%, 0%)",
        marginLeft: "-30px", // Gap between circle and text
        textAlign: "right"
      };
    }
    // Right side years (2029, 2030, 2031 & Beyond) - text to the right
    else if (['2029', '2030', '2031 & Beyond'].includes(year)) {
      return {
        transform: "translate(15%, 0%)",
        marginLeft: "30px", // Gap between circle and text
        textAlign: "left"
      };
    }
    // Top year (2028) - text above
    else if (year === '2028') {
      return {
        transform: "translate(-20%, -100%)",
        marginTop: "-12px", // Gap between circle and text
        textAlign: "center"
      };
    }
    
    return {
      transform: "translate(-50%, -50%)",
      textAlign: "center"
    };
  };
  return (
    <div className='max-w-[1166px] m-auto'>
    <h3 className='text-primary  font-bold lg:text-[45px] text-center mb-4'>The Way to Become a Net-Zero Company</h3>
    <h3 className='font-medium lg:text-2xl text-center mb-8'>Join forward-thinking businesses and individuals investing in a greener future. Adjust your timeline and discover the best carbon credit options for your journey to net zero.</h3>
    <h3 className='font-medium lg:text-2xl text-center mb-16'>Select your offset strategy and see the impact unfold!</h3>
    <div className="relative w-[387.6px] h-[387.6px] mx-auto text-center flex items-center justify-center px-3">
      {/* Globe Image */}
     {Array.from({ length: 4 }).map((_, i) => (
  <img
    key={i}
    src={fogg}
    alt="Fog overlay"
    className="absolute w-full h-full object-cover pointer-events-none brightness-[80%]"
    style={{
      transform: `rotate(${-i * 60}deg) translateX(50px)`,   // push it out
      transformOrigin: "50% 50%",                            // pivot at centre
      opacity: 0.8                                           // optional: soften
    }}
  />
))}
 {Array.from({ length: 3 }).map((_, i) => (
  <img
    key={i}
    src={fogg}
    alt="Fog overlay"
    className="absolute w-full h-full object-cover pointer-events-none brightness-[80%]"
    style={{
      transform: `rotate(${-i * 90}deg) translateX(40px)`,   // push it out
      transformOrigin: "50% 50%",                            // pivot at centre
      opacity: 0.8                                           // optional: soften
    }}
  />
))}
<img
    src={foggMiddle}
    alt="Fog overlay"
    className="absolute w-full h-full object-cover top-0 left-0 z-30 brightness-[30%]"
  />
      <img
        src={globe}
        alt="Earth"
        className=" brightness-[60%]  w-[283.79px] h-[283.79] object-contain z-20 relative"
      />

      {/* Year Labels */}
      {years.map((item, index) => (
        <div
          key={index}
          className={`absolute z-50 text-sm text-center`}
          style={{
            top: item.top,
            left: item.left,
            transform: "translate(-50%, -50%)",
            color: item.active ? "var(--color-main)" : "#013229",
            fontWeight: item.active ? "bold" : "normal",
          }}
        >
          <div
            className={`w-8 h-8 rounded-full mb-1 mx-auto  border-4 flex items-center justify-center bg-bg ${
              item.active ? "border-[var(--color-main)]" : "border-gray-300"
            }`}

          >
            <div
            className={`w-4 h-4  rounded-full  mx-auto ${
              item.active ? "bg-[var(--color-main)]" : "bg-gray-300"
            }`}
          >
                <div
            className="absolute text-sm whitespace-nowrap"
            style={{
              color: item.active ? "var(--color-main)" : "#004D40",
              fontWeight: "bold" ,
              ...getTextPosition(item.year, index)
            }}
          >
            {item.year}
          </div>
          </div>
          </div>
        </div>
      ))}

      {/* Circle (Border Line) */}
      
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="absolute inset-0 rounded-full border-2 border-gray-400"
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 89%, 0% 89%)" // Hide bottom 15% of the circle
          }}
        />
        <div 
          className="absolute inset-0 rounded-full border-2 border-main"
          style={{
    clipPath: "polygon(0% 80%, 0% 65%, 28% 100%)"
          }}
        />
      </div>
    </div>
    <div className="bg-primary lg:px-24 lg:my-8 md:px-8 md:py-5 flex justify-between items-center rounded-2xl">
          <div>
          <p className="text-main font-[600] lg:text-2xl md:text-[14.48px]  mb-4">
            Offset Now (2025)
          </p>
          <p className="text-[#FDFBF1] font-medium lg:text-xl md:text-[12.06px] mb-4 ]">
          Take immediate action by purchasing verified carbon credits to balance your current emissions.
          </p>
          </div>
          <button
  className="bg-main rounded-[13px] px-[24px] py-[12px] text-[22px] font-medium"
>
  Book a Meeting
</button>
    </div>
        </div>

  )
}
export default NetZeroJourney





