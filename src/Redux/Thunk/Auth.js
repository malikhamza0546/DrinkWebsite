import axios from "axios";
import {
  login,
  forgotPassword,
  updatePassword,
  register,
} from "../Actions/Auth";
import Notification from "../../components/Notification";

export const loginUser = (data, navigate) => {
  return (dispatch) => {
    dispatch({ type: "START_LOADER", payload: "Logging Up User..." });
    axios
      .post(
        `https://pacific-brushlands-27461.herokuapp.com/v1/auth/login/customer`,
        data
      )
      .then((res) => {
        dispatch(
          login(res.data)
          // localStorage.setItem("refresh", res?.data?.tokens?.refresh?.token)
        );
        localStorage.setItem("access", res?.data?.tokens?.access?.token);

        navigate("/");
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

export const registerThunk = (data, navigate) => {
  return (dispatch) => {
    dispatch({ type: "START_LOADER", payload: "Registering User..." });
    axios
      .post(
        `https://pacific-brushlands-27461.herokuapp.com/v1/auth/register/customer`,
        data
      )
      .then((res) => {
        console.log(" register user response", res);
        dispatch(register(res.data));
        navigate("/signin");
        dispatch({ type: "STOP_LOADER" });
        Notification("success", "User Registered Successfully");
      })
      .catch((error) => {
        console.log(" errorr response", error.message);
        dispatch(register("error"));
        dispatch({ type: "STOP_LOADER" });
        Notification("error", "Unable to Register User");
      });
  };
};
