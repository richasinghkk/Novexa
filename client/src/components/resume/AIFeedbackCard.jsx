function AIFeedbackCard({ feedback }) {
  return (
    <div className="bg-[#111827] rounded-xl p-6 shadow-lg">

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">
        🤖 AI Feedback
      </h2>

      <pre className="text-white whitespace-pre-wrap">
        {feedback}
      </pre>

    </div>
  );
}

export default AIFeedbackCard;