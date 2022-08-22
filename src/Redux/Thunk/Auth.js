import axios from "axios";
import { login, forgotPassword, updatePassword } from "../Actions/Auth";
import Notification from "../../components/Notification";

export const loginUser = (data) => {
  return (dispatch) => {
    console.log("login data", data);
    dispatch({ type: "START_LOADER", payload: "Logging Up User..." });
    axios
      .post(
        `https://pacific-brushlands-27461.herokuapp.com/v1/auth/login/customer`,
        data
      )
      .then((res) => {
        console.log(" login response", res);
        dispatch(
          login(res.data),
          localStorage.setItem("token", res.data.token)
        );
        dispatch({ type: "STOP_LOADER" });
        Notification("success", "Login Successfull");
      })
      .catch((error) => {
        console.log(" errorr response", error.message);
        dispatch(login("error"));
        dispatch({ type: "STOP_LOADER" });
        Notification("error", "Login Failed");
      });
  };
};

export const passwordForgetThunk = (data) => {
  return (dispatch) => {
    dispatch({ type: "START_LOADER", payload: "Logging Up User..." });
    axios
      .post(
        `https://pacific-brushlands-27461.herokuapp.com/v1/auth/forget/customer`,
        data
      )
      .then((res) => {
        console.log(" forgot password response", res);
        dispatch(forgotPassword(res.data));
        dispatch({ type: "STOP_LOADER" });
        Notification("success", "Email Sent Successfully");
      })
      .catch((error) => {
        console.log(" errorr response", error.message);
        dispatch(forgotPassword("error"));
        dispatch({ type: "STOP_LOADER" });
        Notification("error", "Unable to send mail");
      });
  };
};

export const updatePasswordThunk = (data) => {
  return (dispatch) => {
    dispatch({ type: "START_LOADER", payload: "Logging Up User..." });
    axios
      .post(
        `https://pacific-brushlands-27461.herokuapp.com/v1/auth/reset/customer`,
        data
      )
      .then((res) => {
        console.log(" update password response", res);
        dispatch(updatePassword(res.data));
        dispatch({ type: "STOP_LOADER" });
        Notification("success", "Password Updated Successfully");
      })
      .catch((error) => {
        console.log(" errorr response", error.message);
        dispatch(updatePassword("error"));
        dispatch({ type: "STOP_LOADER" });
        Notification("error", "Unable to Update Password");
      });
  };
};
