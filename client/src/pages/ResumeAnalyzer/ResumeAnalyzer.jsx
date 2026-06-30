import { useState } from "react";
import toast from "react-hot-toast";
import API from "../../services/api";

import ResumeUpload from "../../components/resume/ResumeUpload";
import ATSCard from "../../components/resume/ATSCard";
import SkillsCard from "../../components/resume/SkillsCard";
import MissingSkillsCard from "../../components/resume/MissingSkillsCard";
import SuggestionsCard from "../../components/resume/SuggestionsCard";
import AIFeedbackCard from "../../components/resume/AIFeedbackCard";
import BackButton from "../../components/common/BackButton";

function ResumeAnalyzer() {
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(null);
  const [skills, setSkills] = useState([]);
  const [missingSkills, setMissingSkills] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [aiFeedback, setAiFeedback] = useState("");

  const handleFileSelect = async (file) => {
    const formData = new FormData();
    formData.append("resume", file);

    try {
      setLoading(true);

      const { data } = await API.post("/resume/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setScore(data.atsScore);
      setSkills(data.skills);
      setMissingSkills(data.missingSkills);
      setAiFeedback(data.aiFeedback);

      const tips = [];

      if (data.atsScore < 60) {
        tips.push("Add more technical skills.");
        tips.push("Include certifications.");
        tips.push("Improve project descriptions.");
      } else if (data.atsScore < 80) {
        tips.push("Add measurable achievements.");
        tips.push("Improve resume formatting.");
      } else {
        tips.push("Excellent Resume!");
        tips.push("Ready for placements 🚀");
      }

      setSuggestions(tips);

      toast.success("Resume Analyzed Successfully 🚀");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050816] p-10">

      <BackButton />

      <h1 className="text-5xl font-bold text-cyan-400 mb-10">
        📄 Resume Analyzer
      </h1>

      <ResumeUpload onFileSelect={handleFileSelect} />

      {loading && (
        <p className="text-white mt-8 text-xl">
          Analyzing Resume...
        </p>
      )}

      {score !== null && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 mt-10">

          <ATSCard score={score} />

          <SkillsCard skills={skills} />

          <MissingSkillsCard skills={missingSkills} />

          <SuggestionsCard suggestions={suggestions} />

          {aiFeedback && (
            <AIFeedbackCard feedback={aiFeedback} />
          )}

        </div>
      )}

    </div>
  );
}

export default ResumeAnalyzer;