function Topbar() {

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="flex justify-between items-center p-6 border-b border-gray-700 bg-[#111827]">

      <div>

        <h1 className="text-3xl font-bold text-white">
          Welcome, {user?.fullName} 👋
        </h1>

        <p className="text-gray-400 mt-2">
          Ready to continue learning today?
        </p>

      </div>

      <img
        src="https://ui-avatars.com/api/?name=Novexa"
        alt="profile"
        className="rounded-full w-12 h-12"
      />

    </div>
  );
}

export default Topbar;