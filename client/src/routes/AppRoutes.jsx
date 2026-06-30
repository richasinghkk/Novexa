import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import ResumeAnalyzer from "../pages/ResumeAnalyzer/ResumeAnalyzer";
import ResumeHistory from "../pages/ResumeHistory/ResumeHistory";
import AIMentor from "../pages/AIMentor/AIMentor";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/resume-analyzer" element={<ResumeAnalyzer />} />
      <Route path="/resume-history" element={<ResumeHistory />} />
      <Route path="/ai-mentor" element={<AIMentor />} />
    </Routes>
  );
}

export default AppRoutes;