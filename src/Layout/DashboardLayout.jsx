import { Outlet } from "react-router-dom";
import {
  FaHome,
  FaCalendarAlt,
  FaWallet,
  FaShoppingCart,
  FaUtensils,
  FaBook,
  FaUsers,
} from "react-icons/fa";
import { AiOutlineMenu, AiOutlineOrderedList } from "react-icons/ai";
import ActiveRoute from "../components/ActiveRoute/ActiveRoute";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const DashboardLayout = () => {
  const [cart] = useCart();
  // const isAdmin = true;
  const [isAdmin] = useAdmin();

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content">
          {isAdmin ? (
            <>
              <li>
                <ActiveRoute to={`/dashboardLayout/userhome`} color={false}>
                  <FaHome /> Adimin Home{" "}
                </ActiveRoute>
              </li>
              <li>
                <ActiveRoute to={`/dashboardLayout/addItem`} color={false}>
                  <FaUtensils /> Add an Items{" "}
                </ActiveRoute>
              </li>
              <li>
                <ActiveRoute
                  to={`/dashboardLayout/paymenthistory`}
                  color={false}
                >
                  <FaWallet /> Manage Items{" "}
                </ActiveRoute>
              </li>
              <li>
                <ActiveRoute color={false} to={`/dashboardLayout/mycart`}>
                  <FaBook /> Manage Bookings{" "}
                </ActiveRoute>
              </li>
              <li>
                <ActiveRoute color={false} to={`/dashboardLayout/allusers`}>
                  <FaUsers /> All Users{" "}
                </ActiveRoute>
              </li>
            </>
          ) : (
            <>
              <li>
                <ActiveRoute to={`/dashboardLayout/userhome`} color={false}>
                  <FaHome /> User Home{" "}
                </ActiveRoute>
              </li>
              <li>
                <ActiveRoute to={`/dashboardLayout/reservation`} color={false}>
                  <FaCalendarAlt /> Reservations{" "}
                </ActiveRoute>
              </li>
              <li>
                <ActiveRoute
                  to={`/dashboardLayout/paymenthistory`}
                  color={false}
                >
                  <FaWallet /> Payment History{" "}
                </ActiveRoute>
              </li>
              <li>
                <ActiveRoute color={false} to={`/dashboardLayout/mycart`}>
                  <FaShoppingCart /> My Cart{" "}
                  <span className="badge badge-secondary">
                    +{cart?.length || 0}
                  </span>
                </ActiveRoute>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <ActiveRoute color={false} to={`/`}>
              <FaHome /> Home
            </ActiveRoute>
          </li>
          <li>
            <ActiveRoute color={false} to={`/menu`}>
              <AiOutlineMenu /> Menu
            </ActiveRoute>
          </li>
          <li>
            <ActiveRoute color={false} to={`/order/salad`}>
              <AiOutlineOrderedList /> Order Food
            </ActiveRoute>
          </li>
          {/* <li>
            <ActiveRoute color={false} to={`/dashboardLayout/mycart`}>
              <FaShoppingCart /> My Cart{" "}
            </ActiveRoute>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
