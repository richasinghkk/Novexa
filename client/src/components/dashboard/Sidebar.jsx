import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaUser,
  FaFileAlt,
  FaHistory,
  FaRobot,
  FaUserGraduate,
  FaChartLine,
  FaCog,
} from "react-icons/fa";

function Sidebar() {
  const menuItems = [
    {
      name: "Dashboard",
      icon: <FaHome />,
      path: "/dashboard",
    },
    {
      name: "My Profile",
      icon: <FaUser />,
      path: "/profile",
    },
    {
      name: "Resume Analyzer",
      icon: <FaFileAlt />,
      path: "/resume-analyzer",
    },
    {
      name: "Resume History",
      icon: <FaHistory />,
      path: "/resume-history",
    },
    {
      name: "AI Mentor",
      icon: <FaRobot />,
      path: "/ai-mentor",
    },
    {
      name: "Mock Interview",
      icon: <FaUserGraduate />,
      path: "/mock-interview",
    },
    {
      name: "Placement Predictor",
      icon: <FaChartLine />,
      path: "/placement-predictor",
    },
    {
      name: "Settings",
      icon: <FaCog />,
      path: "/settings",
    },
  ];

  return (
    <div className="w-72 min-h-screen bg-[#111827] text-white flex flex-col shadow-2xl">

      {/* Logo */}
      <div className="p-6 border-b border-gray-700">

        <h1 className="text-3xl font-bold text-cyan-400">
          Novexa
        </h1>

        <p className="text-gray-400 text-sm mt-2">
          AI Powered Career Platform
        </p>

      </div>

      {/* Navigation */}
      <nav className="flex-1 p-5">

        <ul className="space-y-3">

          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-4 p-3 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-cyan-500 text-white shadow-lg"
                      : "hover:bg-cyan-500 hover:text-white"
                  }`
                }
              >
                <span className="text-lg">
                  {item.icon}
                </span>

                <span className="font-medium">
                  {item.name}
                </span>
              </NavLink>
            </li>
          ))}

        </ul>

      </nav>

      {/* Footer */}
      <div className="p-5 border-t border-gray-700">

        <p className="text-center text-gray-400 text-sm">
          Novexa v1.0
        </p>

      </div>

    </div>
  );
}

export default Sidebar;