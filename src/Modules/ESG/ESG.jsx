import React from 'react'
import Hero from './components/Hero'
import Header from '@/shared/Header/Header'
import NetZeroJourney from './components/NetZeroJourney'
import Measure from './components/Measure'

function ESG() {
  return (
    <>
    <div className="bg-bg">
      {/* <Header/> */}
    <div className="container m-auto">
    <Hero/>
    <NetZeroJourney/>
    <Measure/>
    </div>
    </div>
    </>
  )
}

export default ESG
