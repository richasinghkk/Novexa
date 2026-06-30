import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import API from "../../services/api";

function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await API.post("/auth/register", formData);

      if (data.success) {
        toast.success(data.message);

        setFormData({
          fullName: "",
          email: "",
          password: "",
        });

        navigate("/login");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Something went wrong!"
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#050816] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#111827] rounded-2xl shadow-2xl p-8">

        <h1 className="text-4xl font-bold text-cyan-400 text-center">
          Create Account 🚀
        </h1>

        <p className="text-gray-400 text-center mt-2">
          Join Novexa and start your AI-powered learning journey.
        </p>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>

          <div>
            <label className="text-white">Full Name</label>

            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full mt-2 p-3 rounded-lg bg-[#1F2937] border border-gray-600 text-white outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="text-white">Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-2 p-3 rounded-lg bg-[#1F2937] border border-gray-600 text-white outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="text-white">Password</label>

            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="w-full mt-2 p-3 rounded-lg bg-[#1F2937] border border-gray-600 text-white outline-none focus:border-cyan-400"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-6 text-gray-400"
              >
                {showPassword ? "Hide" : "Show"}
              </button>

            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 transition p-3 rounded-lg text-white font-semibold"
          >
            Create Account
          </button>

        </form>

        <p className="text-gray-400 text-center mt-6">
          Already have an account?

          <Link
            to="/login"
            className="text-cyan-400 ml-2 hover:underline"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Register;