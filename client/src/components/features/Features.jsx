function Features() {
  const features = [
    {
      title: "AI Mentor",
      description:
        "Get personalized guidance powered by AI to improve your learning journey.",
    },
    {
      title: "Resume Analyzer",
      description:
        "Analyze your resume and receive ATS-friendly suggestions instantly.",
    },
    {
      title: "Mock Interviews",
      description:
        "Practice interviews with AI and improve your confidence.",
    },
    {
      title: "Placement Prediction",
      description:
        "Predict placement readiness based on your skills and performance.",
    },
    {
      title: "Personalized Learning",
      description:
        "Receive AI-powered recommendations based on your strengths and weaknesses.",
    },
    {
      title: "Skill Analytics",
      description:
        "Track your growth with detailed analytics and progress reports.",
    },
  ];

  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-cyan-400 font-semibold">FEATURES</p>

          <h2 className="mt-4 text-5xl font-bold">
            Everything You Need
          </h2>

          <p className="mt-6 text-slate-400 text-lg">
            Novexa combines Artificial Intelligence with career development to
            help students become placement-ready.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition hover:border-cyan-500 hover:-translate-y-2"
            >
              <h3 className="text-2xl font-semibold text-cyan-400">
                {feature.title}
              </h3>

              <p className="mt-4 text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;