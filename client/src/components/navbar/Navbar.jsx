function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-slate-950 border-b border-slate-800">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">

        <h1 className="text-3xl font-bold text-cyan-400">
          Novexa
        </h1>

        <ul className="flex items-center gap-8 text-white">
          <li className="cursor-pointer hover:text-cyan-400 transition">
            Home
          </li>

          <li className="cursor-pointer hover:text-cyan-400 transition">
            Features
          </li>

          <li className="cursor-pointer hover:text-cyan-400 transition">
            About
          </li>

          <li className="cursor-pointer hover:text-cyan-400 transition">
            Contact
          </li>
        </ul>

        <div className="flex gap-4">
          <button className="text-white hover:text-cyan-400 transition">
            Login
          </button>

          <button className="rounded-xl bg-cyan-500 px-5 py-2 text-white hover:bg-cyan-600 transition">
            Get Started
          </button>
        </div>

      </nav>
    </header>
  );
}

export default Navbar;