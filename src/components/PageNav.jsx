import { NavLink, Outlet } from "react-router-dom";

function PageNav() {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/20">
        <ul className="flex flex-row justify-center gap-10 p-4 text-lg font-medium text-white">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 border-b-2 border-yellow-300 pb-1 transition-all"
                  : "hover:text-yellow-200 transition-all"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="pricing"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 border-b-2 border-yellow-300 pb-1 transition-all"
                  : "hover:text-yellow-200 transition-all"
              }
            >
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="product"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 border-b-2 border-yellow-300 pb-1 transition-all"
                  : "hover:text-yellow-200 transition-all"
              }
            >
              Product
            </NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default PageNav;
