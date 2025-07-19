import React from 'react'
import Footer from '../../shared/Footer/Footer';
import CalculationsAndOffsets from './components/CalculationsAndOffsets';
import ProjectOffsettedCarbonRemoved from './components/ProjectOffsettedCarbonRemoved';
import ProjectsLocations from './components/ProjectsLocations';
import OffsetHistory from './components/OffsetHistory';
import logo from '../../assets/Dashboard-home-page-14/Akhdar-01.png'
const DashboardHome = () => {
  return (
    <>
    <main className='flex flex-col gap-8 px-4 min-h-screen bg-[#f5fbf7] md:px-8 py-8'>
      {/* Dashboard Header */}
      <div className="text-center ">
        <img src={logo} alt="Akhdar Logo" className="mx-auto w-32 h-auto my-4" />
      </div>

      {/* Dashboard Sections */}
      <div className="max-w-7xl mx-auto w-full space-y-8">
        {/* Calculations and Offsets Section */}
        <CalculationsAndOffsets />

        {/* Project Offsetted & Carbon Removed Section */}
        <ProjectOffsettedCarbonRemoved />

        {/* Projects Locations Section */}
        <ProjectsLocations />

        {/* Your Offset History Section */}
        <OffsetHistory />
      </div>
    </main>
    <Footer />
  </>  )
}

export default DashboardHome