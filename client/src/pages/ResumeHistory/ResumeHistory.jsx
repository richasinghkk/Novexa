import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import BackButton from "../../components/common/BackButton";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {
      setUser(storedUser);
    } else {
      toast.error("User not found");
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#050816] p-10">

      <BackButton />

      <h1 className="text-5xl font-bold text-cyan-400 mb-10">
        👤 My Profile
      </h1>

      <div className="bg-[#111827] rounded-2xl shadow-xl p-8">

        <div className="flex items-center gap-8">

          <img
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
              user?.fullName || "User"
            )}&background=06b6d4&color=fff&size=150`}
            alt="Profile"
            className="w-36 h-36 rounded-full border-4 border-cyan-400"
          />

          <div>

            <h2 className="text-3xl font-bold text-white">
              {user?.fullName}
            </h2>

            <p className="text-gray-400 mt-2">
              {user?.email}
            </p>

            <span className="inline-block mt-4 px-4 py-2 bg-cyan-500 rounded-lg text-white">
              {user?.role || "Student"}
            </span>

          </div>

        </div>

      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

        <div className="bg-[#111827] p-6 rounded-xl text-center">
          <h3 className="text-cyan-400 text-3xl font-bold">0</h3>
          <p className="text-gray-400 mt-2">
            Resumes Analyzed
          </p>
        </div>

        <div className="bg-[#111827] p-6 rounded-xl text-center">
          <h3 className="text-green-400 text-3xl font-bold">0</h3>
          <p className="text-gray-400 mt-2">
            Mock Interviews
          </p>
        </div>

        <div className="bg-[#111827] p-6 rounded-xl text-center">
          <h3 className="text-purple-400 text-3xl font-bold">0</h3>
          <p className="text-gray-400 mt-2">
            AI Mentor Chats
          </p>
        </div>

        <div className="bg-[#111827] p-6 rounded-xl text-center">
          <h3 className="text-orange-400 text-3xl font-bold">0%</h3>
          <p className="text-gray-400 mt-2">
            Average ATS Score
          </p>
        </div>

      </div>

    </div>
  );
}

export default Profile;