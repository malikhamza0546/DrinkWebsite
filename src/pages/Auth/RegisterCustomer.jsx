import { Grid } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Forms/Button/AuthButton";
import "./signup.css";
import Input from "../../components/FormInput/Input";
import { connect } from "react-redux";
import { registerThunk } from "../../Redux/Thunk/Auth";
import { useForm } from "react-hook-form";

const ForgetPassword = ({ registerThunk }) => {
  let navigate = useNavigate();
  const [admin, setAdmin] = useState(true);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    registerThunk(data, navigate);
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
            Register Customer
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container className="mt-4">
            <Grid item xs={1} md={3}></Grid>
            <Grid item xs={10} md={6}>
              <Input
                // label={"email"}
                type="text"
                placeholder={"First Name"}
                name="firstName"
                validation={{ required: true }}
                error={errors.firstName}
                register={register}
                errorMessage={"First Name is required"}
              />
            </Grid>
          </Grid>

          <Grid container className="mt-4">
            <Grid item xs={1} md={3}></Grid>
            <Grid item xs={10} md={6}>
              <Input
                // label={"email"}
                type="text"
                placeholder={"Sur Name"}
                name="surName"
                validation={{ required: true }}
                error={errors.surName}
                register={register}
                errorMessage={"Sur Name is required"}
              />
            </Grid>
          </Grid>

          <Grid container className="mt-4">
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

          <Grid container className="mt-8">
            <Grid item xs={1} md={3}></Grid>
            <Grid item xs={10} md={6}>
              <Button
                label="Register"
                //   icon={<img src={assets.emailIcon} alt="" />}
              />
            </Grid>
          </Grid>
        </form>

        <div className="flex justify-center mt-6 signup-link">
          <Link to="/sigin">
            <span>
              Already have an account{" "}
              <span className="text-primary">Login</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  let { forgotPassword } = state.Auth;
  return {
    forgotPassword,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    registerThunk: (data, navigate) => dispatch(registerThunk(data, navigate)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ForgetPassword);
