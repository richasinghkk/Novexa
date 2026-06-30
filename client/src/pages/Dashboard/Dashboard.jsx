import Sidebar from "../../components/dashboard/Sidebar";
import Topbar from "../../components/dashboard/Topbar";
import FeatureCard from "../../components/dashboard/FeatureCard";

import {
  FaRobot,
  FaFileAlt,
  FaUserGraduate,
  FaChartLine,
  FaHistory,
} from "react-icons/fa";

function Dashboard() {
  return (
    <div className="flex bg-[#050816] min-h-screen">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">

        {/* Topbar */}
        <Topbar />

        {/* Dashboard Content */}
        <div className="p-8">

          <h1 className="text-4xl font-bold text-white">
            Dashboard
          </h1>

          <p className="text-gray-400 mt-2 mb-8">
            Welcome to Novexa 🚀 Choose any AI-powered feature below to continue your learning journey.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <FeatureCard
              title="AI Mentor"
              description="Ask questions and get personalized AI guidance."
              icon={<FaRobot />}
              color="bg-blue-600"
              link="/ai-mentor"
            />

            <FeatureCard
              title="Resume Analyzer"
              description="Analyze your resume and improve ATS score."
              icon={<FaFileAlt />}
              color="bg-green-600"
              link="/resume-analyzer"
            />

            <FeatureCard
              title="Resume History"
              description="View all your previous resume analyses."
              icon={<FaHistory />}
              color="bg-pink-600"
              link="/resume-history"
            />

            <FeatureCard
              title="Mock Interview"
              description="Practice HR and technical interviews with AI."
              icon={<FaUserGraduate />}
              color="bg-purple-600"
              link="/mock-interview"
            />

            <FeatureCard
              title="Placement Predictor"
              description="Predict your placement chances using Machine Learning."
              icon={<FaChartLine />}
              color="bg-orange-600"
              link="/placement-predictor"
            />

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;