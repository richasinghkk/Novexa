function MissingSkillsCard({ skills }) {
  return (
    <div className="bg-[#111827] rounded-xl p-6 shadow-lg">

      <h2 className="text-2xl font-bold text-red-400 mb-4">
        Missing Skills
      </h2>

      <div className="flex flex-wrap gap-3">
        {skills.slice(0, 10).map((skill, index) => (
          <span
            key={index}
            className="bg-red-500 text-white px-4 py-2 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>

    </div>
  );
}

export default MissingSkillsCard;