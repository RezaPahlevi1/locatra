import { NavLink, Outlet } from "react-router-dom";

function PageNav() {
  return (
    <>
      <nav className="bg-red-500 ">
        <ul className="flex flex-row justify-between p-3 px-10">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="pricing">Pricing</NavLink>
          </li>
          <li>
            <NavLink to="product">Product</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default PageNav;
