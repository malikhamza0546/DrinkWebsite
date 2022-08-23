import { ExpandMore } from "@mui/icons-material";
import React, { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Icon from "../../assets/images/Icon.png";

const NavbarMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveClass = useCallback(
    (routeToMatch) => {
      return location?.pathname?.includes(routeToMatch) ? "active" : "";
    },
    [location]
  );

  return (
    <div className="navbar">
      <span
        onClick={() => navigate("/")}
        className={`${getActiveClass(
          "home"
        )} font-mulish cursor-pointer font-semibold text-base`}
      >
        Home
      </span>
      <span
        onClick={() => navigate("/explore")}
        className={`${getActiveClass(
          "explore"
        )} font-mulish cursor-pointer font-semibold text-base`}
      >
        Explore
      </span>
      <div className="dropdown">
        <button className="font-mulish cursor-pointer font-semibold text-base dropbtn flex justify-center items-center">
          Services
          <ExpandMore />
        </button>
        <div className="dropdown-content">
          <span
            onClick={() => navigate("/reservation")}
            className={`${getActiveClass(
              "reservation"
            )} font-mulish cursor-pointer font-semibold text-base`}
          >
            Reservation
          </span>
          <span
            onClick={() => navigate("/drink-guide")}
            className={`${getActiveClass(
              "drink-guide"
            )} font-mulish cursor-pointer font-semibold text-base`}
          >
            Drink Guide
          </span>
        </div>
      </div>
      <span
        onClick={() => navigate("/faq")}
        className={`${getActiveClass(
          "faq"
        )} font-mulish cursor-pointer font-semibold text-base`}
      >
        FAQ
      </span>
      <span
      // onClick={() => navigate("/faq")}
      >
        <img src={Icon} className="imageClass" />
      </span>
    </div>
  );
};

export default NavbarMenu;
