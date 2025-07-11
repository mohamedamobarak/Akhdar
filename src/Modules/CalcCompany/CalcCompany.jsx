import React from 'react'
import CalcHome from './components/CalcHome'
import CarbonFootprintCalculator from './components/CarbonFootprintCalculator'
import CarbonFootprint from './components/CarbonFootprint'
import CarbonImpactDashboard from './components/CarbonImpactDashboard'
import CarbonFootprintCard from './components/CarbonFootprintCard'
import CarbonOffsetInterface from './components/CarbonOffsetInterface'
import SustainabilityCard from './components/SustainabilityCard'

const CalcCompany = () => {
  return (
    <>
    <CalcHome/>
    <CarbonFootprintCalculator/>
    <CarbonFootprint/>
    <CarbonImpactDashboard/>
    <CarbonFootprintCard/>
    <CarbonOffsetInterface/>
    <SustainabilityCard/>
    </>
  )
}

export default CalcCompany