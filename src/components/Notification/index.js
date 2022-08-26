import React from "react";
// import CheckCircleIcon from "@material-ui/icons/CheckCircle";
// import ErrorIcon from "@material-ui/icons/Error";
import { toast } from "react-toastify";
import { FaTimesCircle, FaCheckCircle } from "react-icons/fa";
import "./notification.css";
import assets from "../../assets/assets";

function Notification(type, notify) {
  console.log("typeeee", type);
  const icons = {
    // error: ErrorIcon,
    // success: CheckCircleIcon,
  };
  const message = (
    <div className="notification">
      {type == "error" && (
        // <FaTimesCircle fontSize="large" style={{ fill: "#f54242" }} />
        <img src={assets.error} className="icon" />
      )}
      {type == "success" && (
        // <FaCheckCircle fontSize="large" style={{ fill: "#00FF00" }} />
        <img src={assets.success} className="icon" />
      )}
      <p className="message">{notify}</p>
    </div>
  );

  switch (type) {
    case "error":
      return toast(message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    case "success":
      return toast(message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    default:
      return;
  }
}

export default Notification;
