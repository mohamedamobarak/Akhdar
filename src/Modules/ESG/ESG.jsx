import React from 'react'
import Hero from './components/Hero'
import Header from '@/shared/Header/Header'
import NetZeroJourney from './components/NetZeroJourney'

function ESG() {
  return (
    <>
    <div className="bg-bg">
      {/* <Header/> */}
    <div className="container m-auto">
    <Hero/>
    <NetZeroJourney/>
    </div>
    </div>
    </>
  )
}

export default ESG
