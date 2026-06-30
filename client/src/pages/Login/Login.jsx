import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import API from "../../services/api";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
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
      const { data } = await API.post("/auth/login", formData);

      if (data.success) {
        toast.success(data.message);

        // Store JWT Token
        localStorage.setItem("token", data.token);

        // Store User
        localStorage.setItem("user", JSON.stringify(data.user));

        navigate("/dashboard");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Login Failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#050816] flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-[#111827] rounded-2xl shadow-2xl p-8">

        <h1 className="text-4xl font-bold text-cyan-400 text-center">
          Welcome Back 👋
        </h1>

        <p className="text-gray-400 text-center mt-2">
          Login to continue your Novexa journey
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">

          <div>
            <label className="text-white">Email</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full mt-2 p-3 rounded-lg bg-[#1F2937] border border-gray-600 text-white outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="text-white">Password</label>

            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
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
            Login
          </button>

        </form>

        <p className="text-gray-400 text-center mt-6">
          Don't have an account?

          <Link
            to="/register"
            className="text-cyan-400 ml-2 hover:underline"
          >
            Register
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;