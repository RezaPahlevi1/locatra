import { NavLink, Outlet } from "react-router-dom";

function Sidebar() {
  return (
    <div className="h-screen w-1/2 bg-red-300 flex flex-col pt-20 items-center">
      <h1 className="text-6xl max-w-3xl font-bold">Locatra.</h1>
      <div className="flex flex-row gap-2 pt-2">
        <NavLink to="cities">
          <div className="bg-gray-400 rounded-md border border-white/55 text-black hover:bg-gray-500 cursor-pointer p-2">
            Cities
          </div>
        </NavLink>
        <NavLink to="country">
          <div className="bg-gray-400 rounded-md border border-white/55 text-black hover:bg-gray-500 cursor-pointer p-2">
            Country
          </div>
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default Sidebar;
