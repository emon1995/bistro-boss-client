import { Outlet } from "react-router-dom";
import {
  FaHome,
  FaCalendarAlt,
  FaWallet,
  FaShoppingCart,
} from "react-icons/fa";
import ActiveRoute from "../components/ActiveRoute/ActiveRoute";

const DashboardLayout = () => {
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
            <ActiveRoute to={`/dashboardLayout/paymenthistory`} color={false}>
              <FaWallet /> Payment History{" "}
            </ActiveRoute>
          </li>
          <li>
            <ActiveRoute color={false} to={`/dashboardLayout/mycart`}>
              <FaShoppingCart /> My Cart{" "}
            </ActiveRoute>
          </li>
          <div className="divider"></div>
          <li>
            <ActiveRoute color={false} to={`/`}>
              <FaHome /> Home
            </ActiveRoute>
          </li>
          <li>
            <ActiveRoute color={false} to={`/menu`}>
              <FaShoppingCart /> Menu
            </ActiveRoute>
          </li>
          <li>
            <ActiveRoute color={false} to={`/order/salad`}>
              <FaShoppingCart /> Order Food
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
