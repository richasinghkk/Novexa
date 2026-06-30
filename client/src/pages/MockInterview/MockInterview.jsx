import { useState } from "react";
import API from "../../services/api";
import toast from "react-hot-toast";

import BackButton from "../../components/common/BackButton";

function MockInterview() {
  const [interviewType, setInterviewType] = useState("HR");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [loadingQuestion, setLoadingQuestion] = useState(false);
  const [loadingFeedback, setLoadingFeedback] = useState(false);

  // ================= Generate Question =================
  const generateQuestion = async () => {
    try {
      setLoadingQuestion(true);

      const { data } = await API.post("/interview/question", {
        interviewType,
      });

      setQuestion(data.question);
      setAnswer("");
      setFeedback("");

      toast.success("Interview Question Generated 🎉");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to generate question."
      );
    } finally {
      setLoadingQuestion(false);
    }
  };

  // ================= Submit Answer =================
  const submitAnswer = async () => {
    if (!answer.trim()) {
      toast.error("Please enter your answer.");
      return;
    }

    try {
      setLoadingFeedback(true);

      const { data } = await API.post("/interview/evaluate", {
        interviewType,
        question,
        answer,
      });

      setFeedback(data.feedback);

      toast.success("Answer Evaluated Successfully 🚀");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to evaluate answer."
      );
    } finally {
      setLoadingFeedback(false);
    }
  };

  // ================= Reset =================
  const resetInterview = () => {
    setQuestion("");
    setAnswer("");
    setFeedback("");
  };

  return (
    <div className="min-h-screen bg-[#050816] p-10">

      <BackButton />

      <h1 className="text-5xl font-bold text-cyan-400 mb-10">
        🎤 AI Mock Interview
      </h1>

      {/* Interview Type */}
      <div className="bg-[#111827] rounded-2xl shadow-xl p-8">

        <label className="text-white text-lg font-semibold">
          Select Interview Type
        </label>

        <select
          value={interviewType}
          onChange={(e) => setInterviewType(e.target.value)}
          className="w-full mt-4 bg-[#1F2937] text-white p-4 rounded-xl outline-none"
        >
          <option>HR</option>
          <option>MERN Stack</option>
          <option>Machine Learning</option>
          <option>Data Structures & Algorithms</option>
          <option>Java</option>
          <option>Python</option>
        </select>

        <div className="flex gap-4 mt-6">

          <button
            onClick={generateQuestion}
            disabled={loadingQuestion}
            className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl text-white transition disabled:opacity-50"
          >
            {loadingQuestion
              ? "Generating..."
              : "Generate Question"}
          </button>

          <button
            onClick={resetInterview}
            className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl text-white transition"
          >
            Reset
          </button>

        </div>

      </div>

      {/* Question */}
      {question && (
        <div className="bg-[#111827] rounded-2xl shadow-xl p-8 mt-8">

          <h2 className="text-2xl font-bold text-cyan-400 mb-5">
            Interview Question
          </h2>

          <p className="text-white text-lg leading-8">
            {question}
          </p>

        </div>
      )}

      {/* Answer */}
      {question && (
        <div className="bg-[#111827] rounded-2xl shadow-xl p-8 mt-8">

          <h2 className="text-2xl font-bold text-cyan-400 mb-5">
            Your Answer
          </h2>

          <textarea
            rows={8}
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Write your answer here..."
            className="w-full bg-[#1F2937] text-white rounded-xl p-4 outline-none resize-none"
          />

          <button
            onClick={submitAnswer}
            disabled={loadingFeedback}
            className="mt-6 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl text-white transition disabled:opacity-50"
          >
            {loadingFeedback
              ? "Evaluating..."
              : "Submit Answer"}
          </button>

        </div>
      )}

      {/* Feedback */}
      {feedback && (
        <div className="bg-[#111827] rounded-2xl shadow-xl p-8 mt-8">

          <h2 className="text-2xl font-bold text-green-400 mb-5">
            AI Feedback
          </h2>

          <div className="text-white whitespace-pre-wrap leading-8">
            {feedback}
          </div>

          <button
            onClick={generateQuestion}
            className="mt-8 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl text-white transition"
          >
            Generate New Question
          </button>

        </div>
      )}

    </div>
  );
}

export default MockInterview;