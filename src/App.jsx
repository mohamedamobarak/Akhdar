import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Modules/Home/HomePage';
import AboutUs from './Modules/AboutUs/AboutUs';
import ImpactPlatform from './Modules/ImpactPlatform/ImpactPlatform';
import SignUp from './Modules/Auth/Signup/SignUp';
// import EGSInteractiveForm from './Modules/EGSInteractiveForm/EGSInteractiveForm';
import Integration from './Modules/Integration/Integration';
// import ESG from './Modules/ESG/ESG';
import CalcCompany from './Modules/CalcCompany/CalcCompany';
import ProjectOwner from './Modules/ProjectOwner/ProjectOwner';
import Login from './Modules/Auth/Login/Login';
import DashboardHome from './Modules/DashboardHomePage/DashboardHome';
import EditProfile from './Modules/user-settings/EditProfile';
import ChangePassword from './Modules/user-settings/ChangePassword';
import DashboardLayout from './Modules/DashboardLayout/DashboardLayout';
import CarbonImpactDashboard from './Modules/CalcCompany/components/CarbonImpactDashboard';
import DashboardProject from './Modules/DashboardProject/DashboardProject';
import UNSDGs from './Modules/DashboardProject/components/TabsContent/UNSDGs';
import ProjectInfo from './Modules/DashboardProject/components/TabsContent/ProjectInfo';
import ProjectCertification from './Modules/DashboardProject/components/TabsContent/ProjectCertification';
import ProjectGallery from './Modules/DashboardProject/components/TabsContent/ProjectGallery';
import ProjectDescription from './Modules/DashboardProject/components/TabsContent/ProjectDescription';

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
        {/* <Route path="/egs-interactive-form" element={<EGSInteractiveForm />} /> */}
        <Route path="/api-integration" element={<Integration />} />
        <Route path="/calc-company" element={<CalcCompany />} />
        <Route path="/settings/edit-profile" element={<EditProfile />} />
        <Route path="/settings/change-password" element={<ChangePassword />} />
        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout><DashboardHome /></DashboardLayout>} />
        <Route path="/dashboard/impact" element={<DashboardLayout><CarbonImpactDashboard /></DashboardLayout>} />

  {/* Dashboard Project with nested children */}
        <Route
          path="/dashboard/project"
          element={<DashboardLayout><DashboardProject /></DashboardLayout>}
        >
          <Route index path='description' element={<ProjectDescription />} /> {/* default child */}
          <Route path="unSdgs" element={<UNSDGs />} />
          <Route path="projectInfo" element={<ProjectInfo />} />
          <Route path="gallery" element={<ProjectGallery />} />
          <Route path="certification" element={<ProjectCertification />} />
        </Route>
       </Routes>
    </Router>
   
  )
}
export default App
