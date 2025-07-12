import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Modules/Home/HomePage';
import AboutUs from './Modules/AboutUs/AboutUs';
import ImpactPlatform from './Modules/ImpactPlatform/ImpactPlatform';
import SignUp from './Modules/Auth/Signup/SignUp';
import Integration from './Modules/Integration/Integration';
import CalcCompany from './Modules/CalcCompany/CalcCompany';
import ProjectOwner from './Modules/ProjectOwner/ProjectOwner';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/project" element={<ProjectOwner />} />
        <Route path="/impact-platform" element={<ImpactPlatform />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/api-integration" element={<Integration />} />
        <Route path="/calc-company" element={<CalcCompany />} />

      </Routes>
    </Router>
  )
}
export default App
