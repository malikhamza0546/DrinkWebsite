import { ExpandMore } from "@mui/icons-material";
import React, { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Icon from "../../assets/images/Icon.png";
import { useSelector } from "react-redux";

import Badge from "@mui/material/Badge";

const NavbarMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const token = localStorage.getItem("access");

  const cart = useSelector((state) => state.Cart);
  console.log("cart", cart.quantity);

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
          <span
            onClick={() => navigate("/order-history")}
            className={`${getActiveClass(
              "drink-guide"
            )} font-mulish cursor-pointer font-semibold text-base`}
          >
            Order History
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

      {/* // onClick={() => navigate("/faq")} */}
      <span className="flex" onClick={() => navigate("/order")}>
        {/* <MailIcon color="action" /> */}
        <img src={Icon} className="imageClass" />
        <sup className="h-5 w-5 rounded-full bg-[#FF9901] flex items-center justify-center">
          <p className=" text-sm font-bold">{cart.quantity}</p>
        </sup>
      </span>
    </div>
  );
};

export default NavbarMenu;
