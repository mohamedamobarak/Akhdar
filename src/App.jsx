import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Modules/Home/HomePage';
import AboutUs from './Modules/AboutUs/AboutUs';
import ImpactPlatform from './Modules/ImpactPlatform/ImpactPlatform';
import SignUp from './Modules/Auth/Signup/SignUp';
import Integration from './Modules/Integration/Integration';
import ESG from './Modules/ESG/ESG';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/esg" element={<ESG />} />
        <Route path="/impact-platform" element={<ImpactPlatform />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/api-integration" element={<Integration />} />

      </Routes>
    </Router>
  )
}
export default App
