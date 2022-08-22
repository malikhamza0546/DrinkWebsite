import { Grid } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import assets from "../../assets/assets";
import TextField from "../../components/Forms/Input/TextField";
import Button from "../../components/Forms/Button/AuthButton";
import "./signup.css";
import Google from "../../components/Forms/Button/Google";
import Apple from "../../components/Forms/Button/Apple";
import Facebook from "../../components/Forms/Button/Facebook";
import colors from "../../assets/colors";
import Input from "../../components/FormInput/Input";
import { connect } from "react-redux";

import {
  passwordForgetThunk,
  updatePasswordThunk,
} from "../../Redux/Thunk/Auth";

import { useForm } from "react-hook-form";

const ForgetPassword = ({
  passwordForgetThunk,
  forgotPassword,
  updatePasswordThunk,
}) => {
  let navigate = useNavigate();
  const [admin, setAdmin] = useState(true);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("data of forgot password", data);

    passwordForgetThunk(data, navigate);
    console.log("dataa final", data);
  };

  const onSubmitChange = (dataChange) => {
    console.log("data of forgot password", dataChange);

    updatePasswordThunk(dataChange, navigate);
  };

  return (
    <div className="w-screen h-screen signup-outer-wrapper relative overflow-x-hidden mt-12">
      <div
        className="absolute my-12 z-10 bg-white overflow-clip mx-auto signup-wrapper left-0 top-0 bottom-0 right-0"
        style={{ background: "white" }}
      >
        <div className="h-16 grid grid-cols-1 signup-tabs">
          <div
            className={`${"active"} flex justify-center items-center`}
            onClick={() => setAdmin(true)}
          >
            Change Password
          </div>
        </div>

        <div className="h-16 mt-8 flex flex-col justify-center items-center">
          <img src={assets.blackLogo1} alt="" />
          <img src={assets.tabManagerLogo} alt="" />
        </div>

        {!forgotPassword && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container className="mt-8">
              <Grid item xs={1} md={3}></Grid>
              <Grid item xs={10} md={6}>
                <Input
                  // label={"email"}
                  type="text"
                  placeholder={"Email"}
                  name="email"
                  validation={{ required: true }}
                  error={errors.email}
                  register={register}
                  errorMessage={"Email is required"}
                  {...register("email", {
                    required: true,
                    pattern:
                      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />
              </Grid>
            </Grid>

            <Grid container className="mt-4">
              <Grid item xs={1} md={3}></Grid>
              <Grid item xs={10} md={6}>
                <Button
                  label="SEND EMAIL"
                  icon={<img src={assets.emailIcon} alt="" />}
                />
              </Grid>
            </Grid>
          </form>
        )}

        {forgotPassword == "Please check your email" && (
          <form onSubmit={handleSubmit(onSubmitChange)}>
            <Grid container className="mt-4">
              <Grid item xs={1} md={3}></Grid>
              <Grid item xs={10} md={6}>
                <Input
                  // label={"email"}
                  type="text"
                  placeholder={"OTP"}
                  name="otp"
                  validation={{ required: true }}
                  error={errors.otp}
                  register={register}
                  errorMessage={"OTP is required"}
                />
              </Grid>
            </Grid>

            <Grid container className="mt-4">
              <Grid item xs={1} md={3}></Grid>
              <Grid item xs={10} md={6}>
                <Input
                  // label={"email"}
                  type="text"
                  placeholder={"Password"}
                  name="password"
                  validation={{ required: true }}
                  error={errors.password}
                  register={register}
                  errorMessage={"Password is required"}
                />
              </Grid>
            </Grid>

            <Grid container className="mt-4">
              <Grid item xs={1} md={3}></Grid>
              <Grid item xs={10} md={6}>
                <Input
                  label={"password"}
                  type="text"
                  placeholder={"Confirm Password"}
                  name="confirmPassword"
                  validation={{ required: true }}
                  error={errors.confirmPassword}
                  register={register}
                  errorMessage={"Confirm Password Field is Empty"}
                />
              </Grid>
            </Grid>

            <Grid container className="mt-4">
              <Grid item xs={1} md={3}></Grid>
              <Grid item xs={10} md={6}>
                <Button
                  label="CHANGE PASSWORD"
                  //   icon={<img src={assets.emailIcon} alt="" />}
                />
              </Grid>
            </Grid>
          </form>
        )}
        <div className="flex justify-center mt-6 signup-link">
          <Link to="/signup">
            <span>
              Need to create an account{" "}
              <span className="text-primary">Sign Up</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  let { forgotPassword } = state.Auth;
  console.log("state from comp", forgotPassword);
  return {
    forgotPassword,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    passwordForgetThunk: (data, navigate) =>
      dispatch(passwordForgetThunk(data, navigate)),
    updatePasswordThunk: (dataChange, navigate) =>
      dispatch(updatePasswordThunk(dataChange, navigate)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ForgetPassword);
