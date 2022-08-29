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
import { getStripeToken } from "../../services/API";
import { addVicaCardToCustm } from "../../services/API";
import { cardDetailsShow } from "../../services/API";
import { useEffect } from "react";
import Notification from "../Notification";

export const PaymentWallet = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [cardResponse, setCardResponse] = useState("");
  const [wallet, setWallet] = useState(false);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const pay = async (data) => {
    // e.preventDefault()
    console.log("pay finc dd", data);
    try {
      let response = await getStripeToken({
        exp_month: data?.exp_month,
        exp_year: data?.exp_year,
        card_number: data?.card_number,
        cvc: data?.cvc,
      });
      var tokenFromAPI = response?.data;
      console.log("tokenFromAPI", response?.data);
    } catch (e) {
      console.log(e);
    }
    try {
      let responsed = await addVicaCardToCustm({
        stripeToken: tokenFromAPI,
        name_on_card: "alex",
        exp_month: data?.exp_month,
        exp_year: data?.exp_year,
        card_number: data?.card_number,
        brand: data?.brand,
      });
      setCardResponse(responsed?.data);
      Notification("success", "asdfasdfa");
    } catch (e) {
      Notification("error", e?.response?.data?.message);

      console.log("error from card", e?.response?.data?.message);
      setCardResponse(e?.response?.data?.message);
    }
  };

  const onSubmit = (data) => {
    // console.log("data card", data);
    pay(data);
  };
  useEffect(() => {
    // pay()
  }, []);
  return (
    <div className="w-screen h-screen signup-outer-wrapper relative overflow-x-hidden mt-12 mb-12">
      <div
        className="absolute my-12 z-10 bg-white overflow-clip mx-auto signup-wrapper left-0 top-0 bottom-0 right-0"
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
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="sm:mx-16 mx-4 mt-4">
                <Input
                  //   label={"First Name"}
                  type="text"
                  placeholder={"Name on Card"}
                  name="name_on_card"
                  validation={{ required: true, maxLength: 16 }}
                  error={errors.name_on_card}
                  register={register}
                  errorMessage={"Enter Card Number"}
                  className="mb-4"
                />

                <Input
                  //   label={"First Name"}
                  type="text"
                  placeholder={"Card Number"}
                  name="card_number"
                  validation={{ required: true, maxLength: 16 }}
                  error={errors.card_number}
                  register={register}
                  errorMessage={"Enter Card Number"}
                  className="mb-4"
                />

                <div className=" flex  justify-between items-center">
                  <Input
                    //   label={"First Name"}
                    type="text"
                    placeholder={"Exp Date"}
                    name="exp_month"
                    validation={{ required: true, maxLength: 16 }}
                    error={errors.exp_month}
                    register={register}
                    errorMessage={"Enter Exp Month"}
                    // className="mb-4 sm:w-56  "
                    className="mb-4 sm:w-56  w-42"
                  />

                  <Input
                    //   label={"First Name"}
                    type="text"
                    placeholder={"Exp Year"}
                    name="exp_year"
                    validation={{ required: true, maxLength: 16 }}
                    error={errors.exp_year}
                    register={register}
                    errorMessage={"Enter Exp Year"}
                    className="mb-4 sm:w-56  w-42"
                  />
                </div>

                <div className="flex justify-between items-center">
                  <Input
                    //   label={"First Name"}
                    type="text"
                    placeholder={"Brand"}
                    name="brand"
                    validation={{ required: true, maxLength: 16 }}
                    error={errors.brand}
                    register={register}
                    errorMessage={"Enter Brand"}
                    className="mb-4 sm:w-56  w-42"
                  />

                  <Input
                    //   label={"First Name"}
                    type="text"
                    placeholder={"CVC"}
                    name="cvc"
                    validation={{ required: true, maxLength: 16 }}
                    error={errors.cvc}
                    register={register}
                    errorMessage={"Enter CVC"}
                    className="mb-4 sm:w-56  w-42"
                  />
                </div>

                <div className="mb-4 flex justify-between items-center">
                  <Grid item xs={6} md={5}>
                    <SaveButton
                      label="Save"
                      onClick={() => {
                        pay();
                      }}
                    />
                  </Grid>
                  <Grid item xs={6} md={5}>
                    <Button label="Cancel" />
                  </Grid>
                </div>
                {/* {cardResponse.length > 1 && <p>{cardResponse}</p>} */}
              </div>
            </form>
          </div>
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
