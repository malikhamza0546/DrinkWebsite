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

import { loginUser } from "../../Redux/Thunk/Auth";

import { useForm } from "react-hook-form";

const Signup = ({ loginUser }) => {
  let navigate = useNavigate();
  const [admin, setAdmin] = useState(true);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data["isAdmin"] = "false";
    data["isWaiter"] = "false";
    loginUser(data, navigate);
  };

  return (
    <div className="w-screen h-screen signup-outer-wrapper relative overflow-x-hidden mt-12">
      <div
        className="absolute my-12 z-10 bg-white overflow-clip mx-auto signup-wrapper left-0 top-0 bottom-0 right-0"
        style={{ background: "white" }}
      >
        <div className="h-16 grid grid-cols-2 signup-tabs">
          <div
            className={`${admin && "active"} flex justify-center items-center`}
            onClick={() => setAdmin(true)}
          >
            Establishment
          </div>
          <div
            onClick={() => setAdmin(false)}
            className={`${!admin && "active"} flex justify-center items-center`}
          >
            User
          </div>
        </div>

        <div className="h-16 mt-8 flex flex-col justify-center items-center">
          <img src={assets.blackLogo1} alt="" />
          <img src={assets.tabManagerLogo} alt="" />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container className="mt-8">
            <Grid item xs={1} md={3}></Grid>
            <Grid item xs={10} md={6}>
              {/* <Input
                label={"Email"}
                type="text"
                placeholder={"Email"}
                name="Email"
                validation={{ required: true }}
                error={errors.Phase}
                register={register}
                errorMessage={"Email Field is Empty"}
              /> */}
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
              <Input
                label={"password"}
                type="password"
                placeholder={"Password"}
                name="password"
                validation={{ required: true }}
                error={errors.Phase}
                register={register}
                errorMessage={"Password Field is Empty"}
              />
            </Grid>
          </Grid>

          <Grid container className="mt-4">
            <Grid item xs={1} md={3}></Grid>
            <Grid item xs={10} md={6}>
              <Button
                label="SIGN IN WITH EMAIL"
                icon={<img src={assets.emailIcon} alt="" />}
              />
            </Grid>
          </Grid>

          <Grid container className="mt-4">
            <Grid item xs={1} md={3}></Grid>
            <Grid item xs={10} md={6} className="flex justify-center gap-4">
              <Apple />
              <Google />
              <Facebook />
            </Grid>
          </Grid>
        </form>
        <div className="flex justify-center mt-6 signup-link">
          <Link to="/signup">
            <span>
              Need to create an account{" "}
              <span className="text-primary">Sign Up</span>
            </span>
          </Link>
        </div>
        <div className="flex justify-center signup-link pt-10 text-center">
          <Link to="/forget-password" className="w-3/4">
            {/* By signing up, you agree to our{" "} */}
            <span className="text-primary">I forgot my password</span>{" "}
            {/* <span className="text-primary">Privacy Policy</span> applies to you */}
            {/* <span className="text-color-primary">I forgot my password</span> */}
          </Link>
        </div>
      </div>
      <img
        src={assets.largeEllipses}
        className="fixed ellipses-animate left-ellipses "
      />
      <img
        src={assets.largeEllipses}
        className="fixed ellipses-animate right-ellipses"
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  // let { user } = state.authReducer;
  return {
    // user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (data, navigate) => dispatch(loginUser(data, navigate)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
