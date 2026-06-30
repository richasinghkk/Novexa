import { useEffect, useState } from "react";
import API from "../../services/api";
import toast from "react-hot-toast";

function ResumeHistory() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const { data } = await API.get("/resume/history");

      if (data.success) {
        setHistory(data.resumes);
      } else {
        toast.error("Failed to load resume history");
      }
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  // Loading Screen
  if (loading) {
    return (
      <div className="min-h-screen bg-[#050816] flex items-center justify-center">
        <h1 className="text-3xl text-cyan-400 font-bold animate-pulse">
          Loading Resume History...
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050816] p-10">

      <h1 className="text-5xl font-bold text-cyan-400 mb-3">
        Resume History
      </h1>

      <p className="text-gray-400 mb-8">
        Total Resumes Analyzed:{" "}
        <span className="text-cyan-400 font-semibold">
          {history.length}
        </span>
      </p>

      {history.length === 0 ? (
        <div className="bg-[#111827] rounded-xl p-10 text-center">
          <h2 className="text-white text-2xl font-semibold">
            No Resume History Found
          </h2>

          <p className="text-gray-400 mt-3">
            Analyze your first resume to see it here.
          </p>
        </div>
      ) : (
        <div className="space-y-5">

          {history.map((resume) => (
            <div
              key={resume._id}
              className="bg-[#111827] rounded-xl p-6 shadow-lg border border-gray-700 hover:border-cyan-500 transition"
            >
              <div className="flex justify-between items-center">

                <div>

                  <h2 className="text-white text-xl font-semibold">
                    {resume.fileName}
                  </h2>

                  <p className="text-gray-400 mt-2">
                    Uploaded:
                    {" "}
                    {new Date(resume.createdAt).toLocaleString()}
                  </p>

                </div>

                <div className="text-right">

                  <div className="bg-cyan-500 px-4 py-2 rounded-lg text-white font-bold">
                    ATS Score
                  </div>

                  <p className="text-3xl font-bold text-cyan-400 mt-2">
                    {resume.atsScore}/100
                  </p>

                </div>

              </div>

              <div className="mt-5 flex flex-wrap gap-3">

                <span className="bg-green-600 px-4 py-2 rounded-full text-white">
                  Skills: {resume.skills.length}
                </span>

                <span className="bg-red-600 px-4 py-2 rounded-full text-white">
                  Missing: {resume.missingSkills.length}
                </span>

                <span className="bg-purple-600 px-4 py-2 rounded-full text-white">
                  AI Feedback Available
                </span>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default ResumeHistory;