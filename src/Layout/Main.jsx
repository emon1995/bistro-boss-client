import { Outlet, useLocation } from "react-router-dom";
import Header from "../Pages/Shared/Header";
import Footer from "../Pages/Shared/Footer";

const Main = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");

  return (
    <div>
      {noHeaderFooter || <Header></Header>}
      <div className="min-h-[calc(100vh-332px)]">
        <Outlet />
      </div>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
