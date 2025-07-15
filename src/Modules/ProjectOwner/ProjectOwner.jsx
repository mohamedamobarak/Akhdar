import React from 'react'
import HowItWorks from './HowItWork/HowItWork'
import ProjectListing from './ProjectListing/ProjectListing'
import OwnerMain from './OwnerMain/OwnerMain'
import MazimizeImpact from './MazimizeImpact/MazimizeImpact'
import CarbonOffsetFAQ from './CarbonOffsetFAQ/CarbonOffsetFAQ'
import ContactSalesForm from './ContactSalesForm/ContactSalesForm'
import Header from '@/shared/Header/Header'

const ProjectOwner = () => {
  return (


<>
<Header/>
   <OwnerMain/>
    <MazimizeImpact/>
    <HowItWorks/>
    <ProjectListing/>
    <CarbonOffsetFAQ/>
    <ContactSalesForm/>
</>
  )
}

export default ProjectOwner