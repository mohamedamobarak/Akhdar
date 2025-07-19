import React from 'react';
import { projectsData, projectCategories, dashboardConfig } from '../data/mockData';
import colorCircle from '../../../assets/Dashboard-home-page-14/colorCircle.svg'

const ProjectOffsettedCarbonRemoved = () => {
  const hasData = dashboardConfig.hasProjectData;

  if (!hasData) {
    // Empty state - show categories only
    return (
      <section className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-primary">Project Offsetted &Carbon Removed</h2>
          <button className="text-primary border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
            Export PDF
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {projectCategories.map((category, index) => (
            <div key={index} className={`${category.color} p-6 rounded-lg text-center border-2 border-dashed border-gray-300`}>
              <h3 className="font-semibold text-primary mb-2">{category.name}</h3>
              <button className="text-[#10B981] text-sm hover:underline">
                {category.count}
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="p-8">
      <div className="flex justify-between items-center mb-8 h-22">
        <h2 className="text-2xl font-bold text-primary">Project Offsetted &Carbon Removed</h2>
        <button className="text-primary bg-[#E6E6E6] cursor-pointer mr-0 lg:mr-16  px-6 py-2 rounded-lg hover:border-b-4 hover:border-b-black transition-colors">
        Export PDF
        </button>
      </div>
      
      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
        {projectsData.map((project) => (
          <div key={project.id} className="rounded-2xl overflow-hidden shadow-sm h-48 relative">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${project.image})`
              }}
            ></div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/100  to-transparent"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-end h-full p-4">
              {/* Bottom section - All content */}
              <div className="flex justify-between items-end">
                {/* Left side - Project type, title, and price */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    {/* White circular background */}
                    <div className="w-4 h-4 rounded-full border-2 border-white bg-transparent flex items-center justify-center">
                      <div className="w-full h-full rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-sm font-medium text-white">{project.type}</span>
                  </div>
                  
                  <h3 className="font-bold text-sm text-white mb-2">{project.title}</h3>
                  <p className="text-sm font-semibold text-white">{project.year}</p>
                </div>

                {/* Right side - Flag and ColorCircle Icon */}
                <div className="flex flex-col items-end gap-2">
                  {/* Flag */}
                  <div className="w-6 h-6  overflow-hidden mx-auto">
                    <img 
                      src={project.flag} 
                      alt={`${project.location} flag`} 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* ColorCircle Icon */}
                  <div className="flex items-center justify-around px-2 py-1 rounded-xl bg-[#D6EFD7]">
                    <img 
                      src={colorCircle} 
                      alt="Color circle indicator" 
                      className="w-5 h-5 object-contain"
                    />
                    <p className="text-sm font-semibold text-primary ml-1">{project.sdgIcon}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-green-100 p-4 rounded-lg text-center border-2 border-dashed">
          <h3 className="font-semibold text-primary mb-2">Social Justice</h3>
          <button className="text-[#10B981] text-sm hover:underline">
            See Projects
          </button>
        </div>
        <div className="bg-green-100 p-4 rounded-lg text-center border-2 border-dashed ">
          <h3 className="font-semibold text-primary mb-2">Education</h3>
          <button className="text-[#10B981] text-sm hover:underline">
            See Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectOffsettedCarbonRemoved;
