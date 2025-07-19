import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Modules/Home/HomePage';
import AboutUs from './Modules/AboutUs/AboutUs';
import ImpactPlatform from './Modules/ImpactPlatform/ImpactPlatform';
import SignUp from './Modules/Auth/Signup/SignUp';
import EGSInteractiveForm from './Modules/EGSInteractiveForm/EGSInteractiveForm';
import Integration from './Modules/Integration/Integration';
import ESG from './Modules/ESG/ESG';
import CalcCompany from './Modules/CalcCompany/CalcCompany';
import ProjectOwner from './Modules/ProjectOwner/ProjectOwner';
import Login from './Modules/Auth/Login/Login';
import DashboardLayout from './Modules/DashboardLayout/DashboardLayout';
import CarbonImpactDashboard from './Modules/CalcCompany/components/CarbonImpactDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/project" element={<ProjectOwner />} />
        <Route path="/impact-platform" element={<ImpactPlatform />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/egs-interactive-form" element={<EGSInteractiveForm />} />
        <Route path="/api-integration" element={<Integration />} />
        <Route path="/calc-company" element={<CalcCompany />} />
        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout><CarbonImpactDashboard /></DashboardLayout>} />
        <Route path="/dashboard/impact" element={<DashboardLayout><CarbonImpactDashboard /></DashboardLayout>} />
      </Routes>
    </Router>
  )
}
export default App
