import React from 'react';
import { projectsData, dashboardConfig } from '../data/mockData';
import colorCircle from '../../../assets/Dashboard-home-page-14/colorCircle.svg'
import { Link } from 'react-router-dom';

const ProjectsLocations = () => {
  const hasData = dashboardConfig.hasLocationData;



  return (
    <section className=" p-8">
      <h2 className="text-3xl font-bold text-primary mb-8 text-center">Projects Locations</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center  gap-12">
        {/* World Map */}
        <div className="rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d127748.83149344707!2d-0.1276!3d51.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1234567890"
            width="100%"
            height="320"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>
        </div>

        {/* Your Projects List */}

        <div>
          {Array.isArray(projectsData) && projectsData.length > 0 ? (
            <>
              <h3 className="text-2xl font-bold text-black mb-6">Your Projects</h3>
              <div className="space-y-4 max-h-80 overflow-y-auto">
                {projectsData.map((project) => (
                  <div 
                    key={project.id} 
                    className="text-white rounded-2xl p-4 relative overflow-hidden h-24 bg-black"
                  >
                    {/* Background image with fallback */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
                      style={{
                        backgroundImage: `url(${project.image})`
                      }}
                    ></div>

                    <div className="relative z-10 flex justify-between items-start h-full">
                      {/* Left side - Project info */}
                      <div className="flex flex-col justify-between h-full">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            {/* White-bordered circular background */}
                            <div className="w-4 h-4 rounded-full border-2 border-white bg-transparent flex items-center justify-center">
                              <div className="w-full h-full rounded-full bg-green-500"></div>
                            </div>
                            <span className="text-sm font-medium">{project.type}</span>
                          </div>
                          <h4 className="font-bold text-lg">{project.title}</h4>
                        </div>
                      </div>

                      {/* Right side - Flag and price */}
                      <div className="flex flex-col items-center justify-between h-full">
                        {/* Flag */}
                        <div className="w-8 h-8  rounded-sm mb-0.5">
                          <img 
                            src={project.flag} 
                            alt={`${project.location} flag`} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {/* Price */}
                        <div className="text-right ">
                          <div className="text-xs font-semibold mb-2">{project.year}</div>
                          {/* ColorCircle Icon */}
                          <div className='flex items-center justify-around px-1 rounded-xl bg-[#D6EFD7]'>
                            <img 
                              src={colorCircle} 
                              alt="Color circle indicator" 
                              className="w-6 h-6 object-contain"
                            />
                            <p className="text-sm font-semibold text-primary">{project.sdgIcon}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center ">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Hey! You have no projects yet.
              </h3>
              <p className="text-gray-600 mb-6">
                Click below to add projects
              </p>
              <Link to='/marketplace' className="text-primary bg-[#E6E6E6] cursor-pointer  px-6 py-2 rounded-lg hover:border-b-4 hover:border-b-black transition-colors">
                Marketplace
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsLocations;
