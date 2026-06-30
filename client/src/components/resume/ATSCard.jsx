function ATSCard({ score }) {
  return (
    <div className="bg-green-600 rounded-xl p-6 text-center shadow-lg">
      <h2 className="text-white text-2xl font-bold">
        ATS Score
      </h2>

      <p className="text-6xl font-bold text-white mt-4">
        {score}/100
      </p>
    </div>
  );
}

export default ATSCard;