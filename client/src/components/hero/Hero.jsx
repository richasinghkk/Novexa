import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6 pt-24 text-white">

      {/* Background Glow */}
      <div className="absolute -top-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-5xl text-center"
      >
        <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300">
          🚀 AI-Powered Career & Learning Ecosystem
        </span>

        <h1 className="mt-8 text-6xl font-extrabold leading-tight md:text-7xl">
          Build Skills.
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400 bg-clip-text text-transparent">
            Track Growth.
          </span>
          <br />
          Achieve More.
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
          Novexa combines Artificial Intelligence, Machine Learning, Resume
          Analysis, Mock Interviews, Personalized Learning and Placement
          Prediction into one powerful platform.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold transition hover:scale-105 hover:bg-cyan-600">
            Get Started
          </button>

          <button className="rounded-xl border border-slate-700 px-8 py-4 transition hover:border-cyan-400 hover:bg-slate-900">
            Watch Demo
          </button>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-slate-400">
          <div>
            <h3 className="text-3xl font-bold text-white">10K+</h3>
            <p>Students</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white">95%</h3>
            <p>Placement Ready</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white">24/7</h3>
            <p>AI Mentor</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;