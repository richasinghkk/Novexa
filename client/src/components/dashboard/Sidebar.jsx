import { Link } from "react-router-dom";
import {
  FaHome,
  FaUserGraduate,
  FaRobot,
  FaFileAlt,
  FaChartLine,
  FaCog,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="w-72 h-screen bg-[#111827] text-white flex flex-col">

      {/* Logo */}
      <div className="p-6 border-b border-gray-700">
        <h1 className="text-3xl font-bold text-cyan-400">
          Novexa
        </h1>

        <p className="text-gray-400 text-sm mt-2">
          AI Learning Platform
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-6">

        <ul className="space-y-5">

          <Link to="/dashboard">
            <li className="flex items-center gap-4 hover:text-cyan-400 cursor-pointer transition">
              <FaHome />
              Dashboard
            </li>
          </Link>

          <Link to="/resume-analyzer">
            <li className="flex items-center gap-4 hover:text-cyan-400 cursor-pointer transition">
              <FaFileAlt />
              Resume Analyzer
            </li>
          </Link>

          <Link to="/ai-mentor">
            <li className="flex items-center gap-4 hover:text-cyan-400 cursor-pointer transition">
              <FaRobot />
              AI Mentor
            </li>
          </Link>

          <Link to="/mock-interview">
            <li className="flex items-center gap-4 hover:text-cyan-400 cursor-pointer transition">
              <FaUserGraduate />
              Mock Interview
            </li>
          </Link>

          <Link to="/placement-predictor">
            <li className="flex items-center gap-4 hover:text-cyan-400 cursor-pointer transition">
              <FaChartLine />
              Placement Predictor
            </li>
          </Link>

          <Link to="/settings">
            <li className="flex items-center gap-4 hover:text-cyan-400 cursor-pointer transition">
              <FaCog />
              Settings
            </li>
          </Link>

        </ul>

      </nav>
    </div>
  );
}

export default Sidebar;