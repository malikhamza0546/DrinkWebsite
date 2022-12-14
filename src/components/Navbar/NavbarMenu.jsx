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

  const cart = useSelector((state) => state?.ProductsOrderReducer?.ClickedProd);

  let Quantity = cart?.length > 0 ? cart?.length : 0;
  // const myFunction = (item) => {
  //   Quantity += item?.Count;
  // };
  // let count = cart.forEach(myFunction);

  console.log("Cart NavebarMenu", Quantity);

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
          {token !== null && (
            <span
              onClick={() => navigate("/reservation")}
              className={`${getActiveClass(
                "reservation"
              )} font-mulish cursor-pointer font-semibold text-base`}
            >
              Reservation
            </span>
          )}
          <span
            onClick={() => navigate("/drink-guide")}
            className={`${getActiveClass(
              "drink-guide"
            )} font-mulish cursor-pointer font-semibold text-base`}
          >
            Drink Guide
          </span>
          {token !== null && (
            <span
              onClick={() => navigate("/order-history")}
              className={`${getActiveClass(
                "drink-guide"
              )} font-mulish cursor-pointer font-semibold text-base`}
            >
              Orders
            </span>
          )}
          {token !== null && (
            <span
              onClick={() => navigate("/wallet")}
              className={`${getActiveClass(
                "drink-guide"
              )} font-mulish cursor-pointer font-semibold text-base`}
            >
              Wallet
            </span>
          )}
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
          <p className=" text-sm font-bold">{Quantity}</p>
        </sup>
      </span>
    </div>
  );
};

export default NavbarMenu;
