import React from 'react'
import globe from "../../../assets/ESG/Earthh.png"; // Adjust path as needed
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
    <>
    <h3 className='text-primary  font-bold text-[45px] text-ceter mb-8'>The Way to Become a Net-Zero Company</h3>
    <h3 className='text-primary  font-bold text-[45px] text-ceter mb-8'>The Way to Become a Net-Zero Company</h3>
    <div className="relative w-[387.6px] h-[387.6px] mx-auto text-center flex items-center justify-center ">
      {/* Globe Image */}
      <img
        src={globe}
        alt="Earth"
        className="  w-[283.79px] h-[283.79] object-contain z-10 relative"
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
            //   top: item.top,
            //   left: item.left,
              color: item.active ? "var(--color-main)" : "#004D40",
              fontWeight: "bold" ,
              ...getTextPosition(item.year, index)
            }}
          >
            {item.year}
          </div>
          </div>
          </div>
          {/* {item.year} */}
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
        </>

  )
}
export default NetZeroJourney





