import { Grid } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import assets from "../../assets/assets";
import TextField from "../../components/Forms/Input/TextField";
import Button from "../../components/Forms/Button/AuthButton";
import "./signup.css";
import Google from "../../components/Forms/Button/Google";
import Apple from "../../components/Forms/Button/Apple";
import Facebook from "../../components/Forms/Button/Facebook";
import colors from "../../assets/colors";

const Signup = () => {
  const [admin, setAdmin] = useState(true);

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

        <Grid container className="mt-8">
          <Grid item xs={1} md={3}></Grid>
          <Grid item xs={10} md={6}>
            <TextField name={"username"} type="text" placeholder="Email" />
          </Grid>
        </Grid>

        <Grid container className="mt-4">
          <Grid item xs={1} md={3}></Grid>
          <Grid item xs={10} md={6}>
            <TextField name={"pass"} type="text" placeholder="Password" />
          </Grid>
        </Grid>

        <Grid container className="mt-4">
          <Grid item xs={1} md={3}></Grid>
          <Grid item xs={10} md={6}>
            <Button
              label="SIGN UP WITH EMAIL"
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

        <div className="flex justify-center mt-6 signup-link">
          <Link to="/signin">
            <span>
              Already have an account?{" "}
              <span className="text-primary">Sign In</span>
            </span>
          </Link>
        </div>
        <div className="flex justify-center signup-link pt-10 text-center">
          <Link to="/forget-password" className="w-3/4">
            By signing up, you agree to our{" "}
            <span className="text-primary">Terms of Service</span> and
            acknowledge that our{" "}
            <span className="text-primary">Privacy Policy</span> applies to you
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

export default Signup;
