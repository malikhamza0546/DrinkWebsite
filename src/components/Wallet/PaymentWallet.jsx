import React, { useState } from "react";
import { Link } from "react-router-dom";
import assets from "../../assets/assets";
import TextField from "../Forms/Input/TextField";
import Button from "../Forms/Button/AuthButton";
import SaveButton from "../Forms/Button/SaveButton";

import colors from "../../assets/colors";
import { makeStyles } from "@mui/styles";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import "./PaymentWallet.css";
import Input from "../FormInput/Input";
import { useForm } from "react-hook-form";

export const PaymentWallet = () => {
  const classes = useStyles();
  const theme = useTheme();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [wallet, setWallet] = useState(false);
  return (
    <div className="w-screen h-screen signup-outer-wrapper relative overflow-x-hidden mt-12 mb-12">
      <div
        className={` ${classes.signupWrapper} absolute my-12 z-10 bg-white overflow-clip mx-auto  left-0 top-0 bottom-0 right-0`}
        style={{ background: "white" }}
      >
        <div className={` ${classes.signupTabs} h-16  grid grid-cols `}>
          <div className={` text-xl flex justify-center items-center`}>
            Wallet
          </div>
        </div>

        <Grid className={`${classes.card} bg-[#FF9901] sm:mx-16 mx-0 py-8 `}>
          <div className="flex items-center justify-between px-6">
            <div className="">
              <div className={classes.title}>Wallet</div>
              <div className={classes.subtitle}>Preffered Method</div>
            </div>
            <div>
              <img src={assets.QrCode} />
            </div>
          </div>

          <div className=" mt-8 sm:px-20 px-8">
            <div className="bg-[#243D8B] w-full h-40 rounded-xl">
              <img className="pt-24 pl-4" src={assets.Visa} />
            </div>

            <div>
              <div className="flex justify-between items-center mt-8">
                <div className={classes.payment}>Payment Method</div>
                <div
                  className="bg-[#9098A1] h-10 w-10 rounded-full flex items-center justify-center "
                  onClick={() => {
                    setWallet(!wallet);
                  }}
                >
                  +
                </div>
              </div>
            </div>
          </div>
        </Grid>

        {wallet && (
          <form>
            <div className="sm:mx-16 mx-0">
              <Input
                //   label={"First Name"}
                type="text"
                placeholder={"Name on Card"}
                name="firstName"
                validation={{ required: true, maxLength: 16 }}
                error={errors.firstName}
                register={register}
                errorMessage={"Enter First Name"}
                className="mb-4"
              />

              <Input
                //   label={"First Name"}
                type="text"
                placeholder={"Card Number"}
                name="firstName"
                validation={{ required: true, maxLength: 16 }}
                error={errors.firstName}
                register={register}
                errorMessage={"Enter First Name"}
                className="mb-4"
              />

              <Grid direction="row" className="mt-8 mb-4" spacing={4}>
                {/* <Grid item xs={6} md={6}>  */}
                <Input
                  //   label={"First Name"}
                  type="text"
                  placeholder={"Exp Date"}
                  name="firstName"
                  validation={{ required: true, maxLength: 16 }}
                  error={errors.firstName}
                  register={register}
                  errorMessage={"Enter First Name"}
                  className="mb-4"
                />
                {/* </Grid> */}
                {/* <Grid item xs={6} md={6}> */}
                <Input
                  //   label={"First Name"}
                  type="text"
                  placeholder={"Exp Date"}
                  name="firstName"
                  validation={{ required: true, maxLength: 16 }}
                  error={errors.firstName}
                  register={register}
                  errorMessage={"Enter First Name"}
                  className="mb-4"
                />
              </Grid>
              {/* </Grid> */}

              <Grid container className="mt-4 mb-4" spacing={4}>
                <Grid item xs={6} md={6}>
                  <SaveButton label="Save" />
                </Grid>
                <Grid item xs={6} md={6}>
                  <Button label="Cancel" />
                </Grid>
              </Grid>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Nunito",
    fontSize: "22px",
    fontWeight: "700",
  },
  subtitle: {
    fontFamily: "Nunito",
    fontSize: "14px",
    fontWeight: "400",
  },
  subtitle: {
    fontFamily: "Nunito",
    fontSize: "18px",
    fontWeight: "400",
  },
  signupTabs: {
    color: "white",
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: "14px",
    cursor: "pointer",
    marginBottom: "20px",
    background:
      "linear-gradient(0deg, var(--primary), var(--primary)), #FFFFFF",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0px",
    },
  },
  card: {
    borderRadius: "24px",
    marginBottom: "20px",
    [theme.breakpoints.down("sm")]: {
      borderRadius: "0px",
      marginBottom: "0px",
    },
  },
  signupWrapper: {
    width: "38rem",
    maxWidth: "80%",
    height: "max-content",
    overflowY: "visible",

    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "16px",
    marginBottom: "48px",
    marginTop: "60px",

    [theme.breakpoints.down("sm")]: {
      marginBottom: "48px",
    },
  },
}));
