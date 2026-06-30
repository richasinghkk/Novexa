import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

import Dashboard from "../pages/Dashboard/Dashboard";

import ResumeAnalyzer from "../pages/ResumeAnalyzer/ResumeAnalyzer";
import ResumeHistory from "../pages/ResumeHistory/ResumeHistory";

import AIMentor from "../pages/AIMentor/AIMentor";
import MockInterview from "../pages/MockInterview/MockInterview";
import PlacementPredictor from "../pages/PlacementPredictor/PlacementPredictor";
import Profile from "../pages/Profile/Profile";

import ProtectedRoute from "../components/protected/ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>

      {/* ================= Public Routes ================= */}

      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* ================= Protected Routes ================= */}

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/resume-analyzer"
        element={
          <ProtectedRoute>
            <ResumeAnalyzer />
          </ProtectedRoute>
        }
      />

      <Route
        path="/resume-history"
        element={
          <ProtectedRoute>
            <ResumeHistory />
          </ProtectedRoute>
        }
      />

      <Route
        path="/ai-mentor"
        element={
          <ProtectedRoute>
            <AIMentor />
          </ProtectedRoute>
        }
      />

      <Route
        path="/mock-interview"
        element={
          <ProtectedRoute>
            <MockInterview />
          </ProtectedRoute>
        }
      />

      <Route
        path="/placement-predictor"
        element={
          <ProtectedRoute>
            <PlacementPredictor />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default AppRoutes;