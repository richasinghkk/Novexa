import { useState } from "react";
import API from "../../services/api";
import toast from "react-hot-toast";

import BackButton from "../../components/common/BackButton";

function AIMentor() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!question.trim()) {
      toast.error("Please enter your question.");
      return;
    }

    try {
      setLoading(true);

      const { data } = await API.post("/ai/chat", {
        question,
      });

      setAnswer(data.answer);

    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to get AI response."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050816] p-10">

      <BackButton />

      <h1 className="text-5xl font-bold text-cyan-400 mb-8">
        🤖 AI Mentor
      </h1>

      <div className="bg-[#111827] rounded-xl p-8 shadow-lg">

        <textarea
          rows={6}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask me anything about Coding, Placements, DSA, Resume, Career, MERN Stack or AI..."
          className="w-full bg-[#1F2937] text-white rounded-xl p-4 outline-none resize-none"
        />

        <button
          onClick={askAI}
          disabled={loading}
          className="mt-5 bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-xl text-white font-semibold transition disabled:opacity-50"
        >
          {loading ? "Thinking..." : "Ask AI"}
        </button>

      </div>

      {answer && (
        <div className="mt-8 bg-[#111827] rounded-xl p-8 shadow-lg">

          <h2 className="text-2xl font-bold text-cyan-400 mb-5">
            AI Response
          </h2>

          <div className="text-white whitespace-pre-wrap leading-8">
            {answer}
          </div>

        </div>
      )}

    </div>
  );
}

export default AIMentor;