function SkillsCard({ skills }) {
  return (
    <div className="bg-[#111827] rounded-xl p-6 shadow-lg">

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">
        Skills Found
      </h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-cyan-500 text-white px-4 py-2 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>

    </div>
  );
}

export default SkillsCard;