import { useState } from "react";
import API from "../../services/api";
import toast from "react-hot-toast";

import BackButton from "../../components/common/BackButton";

function PlacementPredictor() {
  const [formData, setFormData] = useState({
    cgpa: "",
    dsa: "",
    projects: "",
    internships: "",
    ats: "",
    communication: "",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const predictPlacement = async () => {
    try {
      setLoading(true);

      const { data } = await API.post(
        "/placement/predict",
        formData
      );

      setResult(data);

      toast.success("Prediction Generated Successfully 🚀");

    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Prediction Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050816] p-10">

      <BackButton />

      <h1 className="text-5xl font-bold text-cyan-400 mb-10">
        📈 Placement Predictor
      </h1>

      <div className="bg-[#111827] rounded-2xl p-8 shadow-xl">

        <div className="grid md:grid-cols-2 gap-6">

          <input
            type="number"
            name="cgpa"
            placeholder="CGPA"
            value={formData.cgpa}
            onChange={handleChange}
            className="p-4 rounded-xl bg-[#1F2937] text-white outline-none"
          />

          <input
            type="number"
            name="dsa"
            placeholder="DSA Rating (0-100)"
            value={formData.dsa}
            onChange={handleChange}
            className="p-4 rounded-xl bg-[#1F2937] text-white outline-none"
          />

          <input
            type="number"
            name="projects"
            placeholder="Number of Projects"
            value={formData.projects}
            onChange={handleChange}
            className="p-4 rounded-xl bg-[#1F2937] text-white outline-none"
          />

          <input
            type="number"
            name="internships"
            placeholder="Internships"
            value={formData.internships}
            onChange={handleChange}
            className="p-4 rounded-xl bg-[#1F2937] text-white outline-none"
          />

          <input
            type="number"
            name="ats"
            placeholder="ATS Score"
            value={formData.ats}
            onChange={handleChange}
            className="p-4 rounded-xl bg-[#1F2937] text-white outline-none"
          />

          <input
            type="number"
            name="communication"
            placeholder="Communication (0-10)"
            value={formData.communication}
            onChange={handleChange}
            className="p-4 rounded-xl bg-[#1F2937] text-white outline-none"
          />

        </div>

        <button
          onClick={predictPlacement}
          disabled={loading}
          className="mt-8 bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-xl text-white font-semibold transition disabled:opacity-50"
        >
          {loading ? "Predicting..." : "Predict Placement"}
        </button>

      </div>

      {result && (
        <div className="bg-[#111827] rounded-2xl p-8 shadow-xl mt-10">

          <h2 className="text-3xl font-bold text-green-400 mb-6">
            Prediction Result
          </h2>

          <p className="text-white text-xl mb-3">
            Placement Chance:
            <span className="text-cyan-400 font-bold ml-2">
              {result.probability}%
            </span>
          </p>

          <p className="text-white text-xl font-semibold">
            Recommendation:
          </p>

          <p className="text-gray-300 mt-3 leading-8">
            {result.recommendation}
          </p>

        </div>
      )}

    </div>
  );
}

export default PlacementPredictor;