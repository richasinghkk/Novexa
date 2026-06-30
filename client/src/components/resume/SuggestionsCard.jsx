function SuggestionsCard({ suggestions }) {
  return (
    <div className="bg-[#111827] rounded-xl p-6 shadow-lg">

      <h2 className="text-2xl font-bold text-yellow-400 mb-4">
        Suggestions
      </h2>

      <ul className="space-y-3">
        {suggestions.map((item, index) => (
          <li
            key={index}
            className="text-white"
          >
            ✅ {item}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default SuggestionsCard;