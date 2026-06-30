import Sidebar from "../../components/dashboard/Sidebar";
import Topbar from "../../components/dashboard/Topbar";
import FeatureCard from "../../components/dashboard/FeatureCard";
import { FaHistory } from "react-icons/fa";
import {
  FaRobot,
  FaFileAlt,
  FaUserGraduate,
  FaChartLine,
} from "react-icons/fa";

function Dashboard() {
  return (
    <div className="flex bg-[#050816] min-h-screen">

      <Sidebar />

      <div className="flex-1">

        <Topbar />

        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">

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
            title="Mock Interview"
            description="Practice technical and HR interviews."
            icon={<FaUserGraduate />}
            color="bg-purple-600"
            link="/mock-interview"
          />

          <FeatureCard
            title="Placement Predictor"
            description="Predict your placement chances using ML."
            icon={<FaChartLine />}
            color="bg-orange-600"
            link="/placement-predictor"
          />
          <FeatureCard
  title="Resume History"
  description="View all your previous resume analyses."
  icon={<FaHistory />}
  color="bg-pink-600"
  link="/resume-history"
/>
<FeatureCard
  title="AI Mentor"
  description="Ask questions and get personalized AI guidance."
  icon={<FaRobot />}
  color="bg-blue-600"
  link="/ai-mentor"
/>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;