import { NavLink } from "react-router-dom";

const ActiveRoute = ({ to, children, color: colorText }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? `active ${colorText ? "text-[#EEFF25]" : "text-white"}`
          : "default"
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveRoute;
