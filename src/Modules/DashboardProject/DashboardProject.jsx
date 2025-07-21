// import React, { useState } from 'react';
// import { ChevronDown, HelpCircle, Plus, Minus } from 'lucide-react';
// import bgCover from '../../assets/Dashboard-project/project-cover-01.png'
// const DashboardProject = () => {
//     const [activeTab, setActiveTab] = useState('Description');
//     const [purchaseType, setPurchaseType] = useState('oneOff');
//     const [vintage, setVintage] = useState('2020');
//     const [amount, setAmount] = useState(54);

//     const tabs = ['Description', 'UN SDGs', 'Project Info', 'Gallery', 'Certification'];

//     const basePrice = 0.85;
//     const transactionFee = 0.04;
//     const vatFee = 0.04;
//     const total = basePrice * amount + transactionFee + vatFee;

//     const updateAmount = (increment) => {
//         const newAmount = increment ? amount + 1 : Math.max(1, amount - 1);
//         setAmount(newAmount);
//     };

//     const handleSubmit = () => {
//         alert(`Purchase submitted! Total: SAR ${total.toFixed(2)}`);
//     };

//     return (
//         <div className="min-h-screen bg-gray-50">
//             {/* Hero Section */}
//             <section style={{backgroundImage: `url(${bgCover})` , backgroundSize: 'cover', backgroundPosition: 'center' }} className=" min-h-screen flex items-center ">
//                 <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12">
//                     <div className="text-white max-w-4xl">
//                         <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4">
//                             Catalytic N2O
//                         </h1>
//                         <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
//                             Destruction Project
//                         </h2>
//                         <p className="text-lg sm:text-xl font-semibold mb-4">Location: Egypt</p>
//                         <div className="flex items-center gap-3">
//                             <div className="  flex items-center font-medium">
//                                 <div className="w-3 h-3 bg-green-600 rounded-full mr-2"></div>
//                                 Carbon Offsetting
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Main Content */}
//             <div className="relative -mt-20 sm:-mt-32 md:-mt-40 z-20 py-4">
//                 <div className="container mx-auto px-1 sm:px-1 md:px-3 lg:px-6 xl:px-8">
//                     <div className="bg-gray-50 py-4 rounded-2xl shadow-2xl">
//                         <div className="relative grid grid-cols-1 sm:grid-cols-10 gap-2">
//                             {/* Left Content */}
//                             <div className="sm:col-span-6  md:col-span-7  px-2 sm:px-4 lg:px-8 py-4">
//                                 {/* Tabs */}
//                                 <div className="flex border-b border-gray-200 mb-6 overflow-x-auto gap-1 md:gap-2 scrollbar-hide">
//                                     {tabs.map((tab) => (
//                                         <button
//                                             key={tab}
//                                             onClick={() => setActiveTab(tab)}
//                                             className={`px-1 md:px-4 py-3 md:font-medium text-xs md:text-sm border-b-2 transition-colors whitespace-nowrap ${
//                                                 activeTab === tab
//                                                     ? 'text-teal-600 border-teal-600 font-bold'
//                                                     : 'text-gray-500 border-transparent hover:text-gray-700'
//                                             }`}
//                                         >
//                                             {tab}
//                                         </button>
//                                     ))}
//                                 </div>

//                                 {/* Description Grid */}
//                                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 xl:gap-8">
//                                     <div className="sm:col-span-2">
//                                         <h2 className="text-xl sm:text-2xl font-bold text-teal-800 mb-6">
//                                             Project Description
//                                         </h2>
//                                         <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed font-[500]">
//                                             <p>
//                                                 The CDM project activity for GHG emission reduction by catalytic N2O destruction was implemented in Abu Qir, Egypt in year 2006. The project activity includes development, design, engineering, procurement, finance, construction, operation and maintenance of a system for catalytic reduction of N2O.
//                                             </p>
//                                             <p>
//                                                 The EnviNOx® process used in the nitric acid (hereinafter called "N4") plant II of Abu Qir Fertilizer Co. (hereinafter called "AFC") is based on the catalytic reduction of NOx (NO and NO2) with ammonia (NH3) and of nitrous oxide (N2O) with a hydrocarbon. The hydrocarbon used is natural gas of which the main constituent is methane (CH4). The reactions take place over two iron zeolite catalyst beds.
//                                             </p>
//                                         </div>
//                                     </div>
//                                     <div className="sm:col-span-1 xl:order-last">
//                                         <div className="w-full h-48 sm:h-64 xl:h-auto bg-gray-200 rounded-lg overflow-hidden">
//                                             <div className="w-full h-full bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 flex items-center justify-center">
//                                                 <div className="text-center">
//                                                     <div className="w-16 h-16 mx-auto mb-2 bg-blue-600 rounded-lg flex items-center justify-center">
//                                                         <div className="w-8 h-8 bg-white rounded opacity-80"></div>
//                                                     </div>
//                                                     <p className="text-blue-800 font-medium">Industrial Plant</p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Purchase Card */}
//                             <div className=" sm:col-span-4 md:col-span-3 sm:relative sm:-end-2 xl:-end-10 bg-white border-t mt-8 xl:mt-0 xl:border-t-0 xl:border-l rounded-2xl border-gray-100 ">
//                                 <div className="p-2 md:p-6">
//                                     <h3 className="text-lg font-medium mb-6">Buy Credit</h3>

//                                     {/* Toggle */}
//                                     <div className="flex bg-gray-100 rounded-xl p-1 mb-6">
//                                         <button
//                                             onClick={() => setPurchaseType('oneOff')}
//                                             className={`flex-1 rounded-lg text-sm font-medium py-2 px-4 transition-all ${
//                                                 purchaseType === 'oneOff'
//                                                     ? 'bg-green-400 text-white shadow-sm'
//                                                     : 'text-gray-600 hover:text-gray-800'
//                                             }`}
//                                         >
//                                             One-off
//                                         </button>
//                                         <button
//                                             onClick={() => setPurchaseType('monthly')}
//                                             className={`flex-1 rounded-lg text-sm font-medium py-2 px-4 transition-all ${
//                                                 purchaseType === 'monthly'
//                                                     ? 'bg-green-400 text-white shadow-sm'
//                                                     : 'text-gray-600 hover:text-gray-800'
//                                             }`}
//                                         >
//                                             Monthly
//                                         </button>
//                                     </div>

//                                     {/* Price */}
//                                     <div className="mb-6">
//                                         <div className="text-xl font-medium text-gray-900">
//                                             SAR 0.85 
//                                             <span className="text-base text-gray-400 font-normal ml-1">
//                                                 / 1 CO2 ton
//                                             </span>
//                                         </div>
//                                     </div>

//                                     {/* Form */}
//                                     <div className="space-y-4">
//                                         {/* Vintage */}
//                                         <div className="grid grid-cols-3 gap-3 items-center">
//                                             <label className="text-sm text-gray-600">Vintage</label>
//                                             <div className="col-span-2 relative">
//                                                 <select
//                                                     value={vintage}
//                                                     onChange={(e) => setVintage(e.target.value)}
//                                                     className="w-full bg-gray-50 border-0 rounded-lg px-3 py-2 text-sm appearance-none cursor-pointer"
//                                                 >
//                                                     <option value="2020">2020</option>
//                                                     <option value="2021">2021</option>
//                                                     <option value="2022">2022</option>
//                                                     <option value="2023">2023</option>
//                                                 </select>
//                                                 <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
//                                             </div>
//                                         </div>

//                                         {/* Amount */}
//                                         <div className="grid grid-cols-3 gap-3 items-center">
//                                             <label className="text-sm text-gray-600">Amount</label>
//                                             <div className="col-span-2">
//                                                 <div className="flex items-center bg-gray-50 rounded-lg">
//                                                     <button
//                                                         onClick={() => updateAmount(false)}
//                                                         className="h-10 w-10 flex items-center justify-center hover:bg-gray-200 rounded-l-lg"
//                                                     >
//                                                         <Minus className="h-4 w-4" />
//                                                     </button>
//                                                     <input
//                                                         type="number"
//                                                         value={amount}
//                                                         onChange={(e) => setAmount(parseInt(e.target.value) || 1)}
//                                                         className="flex-1 text-center border-0 bg-transparent focus:outline-none text-lg font-medium py-2"
//                                                         min="1"
//                                                         max="1000"
//                                                     />
//                                                     <button
//                                                         onClick={() => updateAmount(true)}
//                                                         className="h-10 w-10 flex items-center justify-center hover:bg-gray-200 rounded-r-lg"
//                                                     >
//                                                         <Plus className="h-4 w-4" />
//                                                     </button>
//                                                 </div>
//                                                 <div className="text-right mt-1">
//                                                     <span className="text-xs text-gray-400">CO2 ton</span>
//                                                 </div>
//                                             </div>
//                                         </div>

//                                         {/* Pricing */}
//                                         <div className="space-y-3">
//                                             <div className="flex justify-between text-sm">
//                                                 <span className="text-gray-500">Available stock</span>
//                                                 <span className="font-medium">SAR 599,785</span>
//                                             </div>
//                                             <div className="flex justify-between text-sm">
//                                                 <span className="text-gray-500">Minimum purchases</span>
//                                                 <span className="font-medium">SAR 50</span>
//                                             </div>

//                                             <div className="border-t border-gray-200 pt-3">
//                                                 <div className="flex justify-between text-sm">
//                                                     <div className="flex items-center gap-1">
//                                                         <span className="text-gray-500">Transaction fee:</span>
//                                                         <HelpCircle className="w-3 h-3 text-gray-400" />
//                                                     </div>
//                                                     <span className="font-medium">SAR {transactionFee.toFixed(2)}</span>
//                                                 </div>
//                                                 <div className="flex justify-between text-sm">
//                                                     <div className="flex items-center gap-1">
//                                                         <span className="text-gray-500">VAT:</span>
//                                                         <HelpCircle className="w-3 h-3 text-gray-400" />
//                                                     </div>
//                                                     <span className="font-medium">SAR {vatFee.toFixed(2)}</span>
//                                                 </div>
//                                             </div>
//                                         </div>

//                                         {/* Total and Button */}
//                                         <div className="border-t border-gray-200 pt-4">
//                                             <div className="flex justify-between items-center mb-4">
//                                                 <span className="text-lg font-medium">Total:</span>
//                                                 <span className="text-xl font-bold">SAR {total.toFixed(2)}</span>
//                                             </div>
//                                             <button
//                                                 onClick={handleSubmit}
//                                                 className="w-full bg-green-400 hover:bg-green-500 text-white font-medium text-base py-3 rounded-xl shadow-sm transition-colors"
//                                             >
//                                                 Buy now
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default DashboardProject;
import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Plus, Minus } from 'lucide-react';
import bgCover from '../../assets/Dashboard-project/project-cover-01.png'
import projectDescriptionImg from '../../assets/Dashboard-project/project-description.png'
import ProjectOwnersCard from './components/ProjectOwnersCard';
const DashboardProject = () => {
    const [activeTab, setActiveTab] = useState('Description');
    const [purchaseType, setPurchaseType] = useState('oneOff');
    const [vintage, setVintage] = useState('2020');
    const [amount, setAmount] = useState(54);

    const tabs = ['Description', 'UN SDGs', 'Project Info', 'Gallery', 'Certification'];

    const basePrice = 0.85;
    const transactionFee = 0.04;
    const vatFee = 0.04;
    const total = basePrice * amount + transactionFee + vatFee;

    const updateAmount = (increment) => {
        const newAmount = increment ? amount + 1 : Math.max(1, amount - 1);
        setAmount(newAmount);
    };

    const handleSubmit = () => {
        alert(`Purchase submitted! Total: SAR ${total.toFixed(2)}`);
    };

    return (
        <>
        <div className="min-h-screen bg-gray-50 ">
            {/* Hero Section */}
            <section style={{ backgroundImage: `url(${bgCover})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className=" min-h-screen flex items-center ">
                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="text-white max-w-4xl">
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4">
                            Catalytic N2O
                        </h1>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                            Destruction Project
                        </h2>
                        <p className="text-lg sm:text-xl font-semibold mb-4">Location: Egypt</p>
                        <div className="flex items-center gap-3">
                            <div className="  flex items-center font-medium">
                                <div className="w-3 h-3 bg-green-600 rounded-full mr-2"></div>
                                Carbon Offsetting
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="relative -mt-20 sm:-mt-32 md:-mt-40 z-20 py-4 text-xs">
                <div className="container mx-auto px-5 xs:px-10 sm:px-7 md:px-6 lg:px-8 xl:px-14">
                    <div className="relative bg-gray-50 pt-4 pb-20 rounded-xl sm:rounded-4xl md:rounded-[50px]  lg:rounded-[80px] ">
                        <div className="relative grid grid-cols-1 sm:grid-cols-10 gap-2">
                            {/* Left Content */}
                            <div className="sm:col-span-7  md:col-span-7  ps-2 sm:ps-4 lg:ps-15 py-4">
                                {/* Tabs */}
                                <div className="flex border-b max-w-[370px]  sm:max-w-full  border-gray-200 mb-6 overflow-x-auto gap-1 sm:gap-2  lg:gap-6 xl:gap-8 scrollbar-hide">
                                    {tabs.map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={`px-1 md:px-2 py-3 md:font-medium text-[10px] sm:text-xs md:text-sm  border-b-2 transition-colors whitespace-nowrap ${activeTab === tab
                                                ? 'text-teal-600 border-teal-600 font-bold'
                                                : 'text-gray-500 border-transparent hover:text-gray-700'
                                                }`}
                                        >
                                            {tab}
                                        </button>
                                    ))}
                                </div>

                                {/* Description Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
                                    <div className="md:col-span-2">
                                        <h2 className="text-[16px] sm:text-lg md:text-xl  font-bold text-teal-800 mb-3 sm:mb-6">
                                            Project Description
                                        </h2>
                                        <div className="space-y-2 sm:space-y-4   max-w-[180px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px] text-[10px] sm:text-sm md:text-base text-gray-700 sm:leading-relaxed sm:font-[500]">
                                            <p>
                                                The CDM project activity for GHG emission reduction by catalytic N2O destruction was implemented in Abu Qir, Egypt in year 2006. The project activity includes development, design, engineering, procurement, finance, construction, operation and maintenance of a system for catalytic reduction of N2O.
                                            </p>
                                            <p>
                                                The EnviNOx® process used in the nitric acid (hereinafter called "N4") plant II of Abu Qir Fertilizer Co. (hereinafter called "AFC") is based on the catalytic reduction of NOx (NO and NO2) with ammonia (NH3) and of nitrous oxide (N2O) with a hydrocarbon. The hydrocarbon used is natural gas of which the main constituent is methane (CH4). The reactions take place over two iron zeolite catalyst beds.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="md:col-span-1 xl:order-last">
                                        <div className=" max-w-[180px] sm:max-w-[280px] md:w-full h-38  md:h-96 md:mt-9  bg-gray-200 rounded-e-xl md:rounded-s-xl md:rounded-e-none  overflow-hidden">
                                            <img src={projectDescriptionImg} className='w-full h-full object-cover' alt="background cover" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* Purchase Card */}
                        <div className="absolute top-28 md:top-14 -end-4 sm:end-5 md:-end-6 lg:-end-16 max-w-[150px] sm:max-w-[200px] md:max-w-[280px] lg:max-w-[400px] bg-white border-t mt-2 xl:mt-0 xl:border-t-0 xl:border-l rounded-xl border-gray-100">
                            <div className="p-1 sm:p-7 border rounded-xl shadow-2xl [box-shadow:2px_4px_4px_#00000040]">

                                <h3 className="text-[11px] text-gray-200 sm:text-sm m font-medium mb-2 sm:mb-4 md:mb-5">Buy Credit</h3>

                                {/* Toggle */}
                                <div className="flex bg-gray-100 rounded-md p-0.5 sm:p-1 md:p-1.5 mb-3 sm:mb-5 md:mb-6">
                                    <button
                                        onClick={() => setPurchaseType('oneOff')}
                                        className={`flex-1 rounded-sm text-[10px] sm:text-xs md:text-sm font-medium py-0.5 sm:py-1  px-1 md:px-3 lg:px-5 xl:px-7  transition-all ${purchaseType === 'oneOff'
                                            ? 'bg-green-400 text-white shadow-sm'
                                            : 'text-gray-600 hover:text-gray-800'
                                            }`}
                                    >
                                        One-off
                                    </button>
                                    <button
                                        onClick={() => setPurchaseType('monthly')}
                                        className={`flex-1 rounded-sm text-[10px] sm:text-xs md:text-sm font-medium py-0.5 sm:py-1  px-1 md:px-3 lg:px-5 xl:px-7 transition-all ${purchaseType === 'monthly'
                                            ? 'bg-green-400 text-white shadow-sm'
                                            : 'text-gray-600 hover:text-gray-800'
                                            }`}
                                    >
                                        Monthly
                                    </button>
                                </div>

                                {/* Price */}
                                <div className="mb-3 sm:mb-4 ">
                                    <div className="text-xs sm:text-sm md:text-base font-medium text-gray-900">
                                        SAR 0.85
                                        <span className="text-[10px] sm:text-xs md:text-sm text-gray-400 font-normal ml-0.5">/ 1 CO2 ton</span>
                                    </div>
                                </div>

                                {/* Form */}
                                <div className="space-y-2.5">
                                    {/* Vintage */}
                                    <div className="flex gap-1.5 sm:gap-3 md:gap-4 items-center">
                                        <label className="text-[10px] sm:text-xs md:text-sm text-gray-600">Vintage</label>
                                        <div className=" flex-1 relative">
                                            <select
                                                value={vintage}
                                                onChange={(e) => setVintage(e.target.value)}
                                                className="w-full bg-gray-50 border-0 rounded-sm px-2 py-0.5 sm:px-3 sm:py-1 md:py-2 text-[10px] sm:text-xs md:text-sm appearance-none cursor-pointer"
                                            >
                                                <option value="2020">2020</option>
                                                <option value="2021">2021</option>
                                                <option value="2022">2022</option>
                                                <option value="2023">2023</option>
                                            </select>
                                            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-gray-400 pointer-events-none" />
                                        </div>
                                    </div>

                                    {/* Amount */}
                                    <div className="flex items-center gap-1 sm:gap-3 md:gap-4">
                                        <label className="text-[10px] sm:text-xs md:text-sm text-gray-600">Amount</label>
                                        <div className="">
                                            <div className="flex items-center bg-gray-50 rounded-sm">
                                                <button
                                                    onClick={() => updateAmount(false)}
                                                    className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 flex items-center justify-center hover:bg-gray-200 rounded-l-sm"
                                                >
                                                    <Minus className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4" />
                                                </button>
                                                <input
                                                    type="text"
                                                    value={amount}
                                                    onChange={(e) => setAmount(parseInt(e.target.value) || 1)}
                                                    className="flex-1 w-[50px] text-center border-0 bg-transparent focus:outline-none text-sm  md:text-lg font-medium"

                                                />
                                                <button
                                                    onClick={() => updateAmount(true)}
                                                    className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 flex items-center justify-center hover:bg-gray-200 rounded-r-sm"
                                                >
                                                    <Plus className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-[10px] sm:text-xs md:text-sm text-gray-400">CO2 ton</span>
                                    </div>

                                    {/* Pricing Info */}
                                    <div className="space-y-1.5  ">
                                        <div className="flex justify-between text-[10px] sm:text-xs md:text-sm">
                                            <span className="text-gray-500">Available stock</span>
                                            <span className="font-medium">SAR 599,785</span>
                                        </div>
                                        <div className="flex justify-between text-[10px] sm:text-xs md:text-sm">
                                            <span className="text-gray-500">Minimum purchases</span>
                                            <span className="font-medium">SAR 50</span>
                                        </div>

                                        <div className="space-y-1.5  border-t border-gray-200 pt-2 md:pt-3">
                                            <div className="flex justify-between text-[10px] sm:text-xs md:text-sm">
                                                <div className="flex items-center gap-1">
                                                    <span className="text-gray-500">Transaction fee:</span>
                                                    <HelpCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-gray-400" />
                                                </div>
                                                <span className="font-medium">SAR {transactionFee.toFixed(2)}</span>
                                            </div>
                                            <div className="flex justify-between text-[10px] sm:text-xs md:text-sm">
                                                <div className="flex items-center gap-1">
                                                    <span className="text-gray-500">VAT:</span>
                                                    <HelpCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-gray-400" />
                                                </div>
                                                <span className="font-medium">SAR {vatFee.toFixed(2)}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Total + Button */}
                                    <div className="border-t border-gray-200 pt-2.5 sm:pt-4 md:pt-5">
                                        <div className="flex justify-between items-center mb-2 sm:mb-4">
                                            <span className="text-xs sm:text-sm md:text-base font-medium">Total:</span>
                                            <span className="text-sm sm:text-base md:text-lg font-bold">SAR {total.toFixed(2)}</span>
                                        </div>
                                        <button
                                            onClick={handleSubmit}
                                            className="w-full bg-green-400 hover:bg-green-500 text-white font-medium text-[11px] sm:text-sm md:text-base py-1.5 sm:py-2 md:py-3 rounded-md shadow-sm transition-colors"
                                        >
                                            Buy now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>

        </div>
            <ProjectOwnersCard/>
        
        </>
    );
};

export default DashboardProject;
