import { FaBell, FaSearch, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Topbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    toast.success("Logged out successfully");

    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center p-6 border-b border-gray-700 bg-[#111827]">

      {/* Left Section */}
      <div>
        <h1 className="text-3xl font-bold text-white">
          Welcome, {user?.fullName || "Student"} 👋
        </h1>

        <p className="text-gray-400 mt-2">
          Ready to continue your AI learning journey today?
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">

        {/* Search */}
        <div className="flex items-center bg-[#1F2937] rounded-lg px-3 py-2">

          <FaSearch className="text-gray-400 mr-2" />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-white"
          />

        </div>

        {/* Notification */}
        <button className="text-white hover:text-cyan-400 transition">
          <FaBell size={20} />
        </button>

        {/* Avatar */}
        <img
          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
            user?.fullName || "User"
          )}&background=06b6d4&color=fff`}
          alt="profile"
          className="w-12 h-12 rounded-full border-2 border-cyan-400"
        />

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-white transition"
        >
          <FaSignOutAlt />
          Logout
        </button>

      </div>

    </div>
  );
}

export default Topbar;