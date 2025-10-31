import { NavLink, Outlet } from "react-router-dom";

function Sidebar() {
  return (
    <div className="h-screen w-1/3 bg-[#0C2B4E] text-white flex flex-col items-center pt-16 border-r border-white/10 shadow-2xl">
      {/* Logo / Judul */}
      <h1 className="text-5xl font-extrabold tracking-wide text-yellow-300 mb-10">
        Locatra<span className="text-white">.</span>
      </h1>

      {/* Navigation */}
      <div className="flex items-center bg-white/10 rounded-lg overflow-hidden border border-white/20">
        <NavLink
          to="cities"
          className={({ isActive }) =>
            `px-6 py-2 font-semibold transition-all duration-200 ${
              isActive
                ? "bg-yellow-300 text-slate-900"
                : "text-white hover:bg-white/20"
            }`
          }
        >
          Cities
        </NavLink>

        <NavLink
          to="country"
          className={({ isActive }) =>
            `px-6 py-2 font-semibold transition-all duration-200 ${
              isActive
                ? "bg-yellow-300 text-slate-900"
                : "text-white hover:bg-white/20"
            }`
          }
        >
          Country
        </NavLink>
      </div>

      {/* Outlet */}
      <div className="mt-10 w-full flex justify-center">
        <Outlet />
      </div>
    </div>
  );
}

export default Sidebar;
