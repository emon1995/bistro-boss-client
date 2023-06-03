import { useContext } from "react";
import ActiveRoute from "../../components/ActiveRoute/ActiveRoute";
import { AuthContext } from "../../providers/AuthProviders";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  const handleLogout = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const navItems = (
    <>
      <li>
        <ActiveRoute to={`/`}>Home</ActiveRoute>
      </li>
      <li>
        <ActiveRoute to={`/contact`}>Contact Us</ActiveRoute>
      </li>
      <li>
        <ActiveRoute to={isAdmin ? "/dashboardLayout/adminhome" : "/dashboardLayout/userhome"}>Dashboard</ActiveRoute>
      </li>
      <li>
        <ActiveRoute to={`/menu`}>Our Menu</ActiveRoute>
      </li>
      <li>
        <ActiveRoute to={`/order/salad`}>Order</ActiveRoute>
      </li>
      <li>
        <ActiveRoute to={`/shop`}>Our Shop</ActiveRoute>
      </li>
      <li>
        <ActiveRoute to={`/dashboardLayout/mycart`}>
          <button className="btn gap-2">
            <FaShoppingCart />
            <div className="badge badge-secondary">+{cart?.length || 0}</div>
          </button>
        </ActiveRoute>
      </li>
      {user?.email ? (
        <li>
          <ActiveRoute color={true} to={`/`}>
            <button onClick={handleLogout} className="btn btn-secondary">
              Logout
            </button>
          </ActiveRoute>
        </li>
      ) : (
        <li>
          <ActiveRoute color={true} to={`/login`}>
            Login
          </ActiveRoute>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-opacity-30 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl uppercase">Bistro Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Get started</a>
      </div>
    </div>
  );
};

export default Header;
