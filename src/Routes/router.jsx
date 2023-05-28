import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Menu from "../Pages/Menu/Menu";
import Shop from "../Pages/Shop/Shop";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/Signup";
import DashboardLayout from "../Layout/DashboardLayout";
import MyCart from "../Pages/Dashboard/MyCart";
import UserHome from "../Pages/Dashboard/UserHome";
import Reservation from "../Pages/Dashboard/Reservation";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "dashboardLayout",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "userhome",
        element: <UserHome></UserHome>,
      },
      {
        path: "reservation",
        element: <Reservation></Reservation>,
      },
      {
        path: "paymenthistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "mycart",
        element: <MyCart></MyCart>,
      },
    ],
  },
]);

export default router;
