import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import assets from "../../assets/assets";
import TextField from "../../components/Forms/Input/TextField";
import Button from "../../components/Forms/Button/AuthButton";
import "./order.css";
import Google from "../../components/Forms/Button/Google";
import Apple from "../../components/Forms/Button/Apple";
import Facebook from "../../components/Forms/Button/Facebook";
import colors from "../../assets/colors";
import { makeStyles } from "@mui/styles";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { borderRadius } from "@mui/system";
import { FaGreaterThan } from "react-icons/fa";
import { useSelector } from "react-redux";
import { cardDetailsShow } from "../../services/API";

const data = [
  { name: "Rice", quantity: 2, price: 10 },
  { name: "Beans", quantity: 2, price: 10 },
  { name: "Fries", quantity: 2, price: 10 },
  { name: "Ceasear Salad", quantity: 2, price: 10 },
  ,
];

const Order = ({ route }) => {
  const classes = useStyles();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const theme = useTheme();
  const isXS = useMediaQuery(theme.breakpoints.down("sm"));
  const [cardData, setCardData] = useState();

  const cart = useSelector((state) => state.Cart);

  const { state } = useLocation();
  console.log("statete1111", state);

  const cardDetailsShowGetter = async () => {
    try {
      const response = await cardDetailsShow();
      setCardData(response?.data);
      console.log("response in carrd detail Getter", response?.data);
    } catch (e) {
      console.log(" error in card detail ", e);
    }
  };

  useEffect(() => {
    cardDetailsShowGetter();
  }, []);

  return (
    <div className="w-screen h-screen signup-outer-wrapper relative overflow-x-hidden mt-12 mb-12">
      <div
        className="absolute my-12 z-10 bg-white overflow-clip mx-auto signup-wrapper left-0 top-0 bottom-0 right-0"
        style={{ background: "white" }}
      >
        <div className="h-16  grid grid-cols signup-tabs">
          <div
            className={`${"active"} text-xl flex justify-center items-center`}
          >
            Orders
          </div>
        </div>

        <Grid
          className={`${classes.card} bg-[#FF9901] sm:mx-16 mx-0 py-4 rounded-2xl mt-8`}
        >
          <div className="  sm:px-10 px-4">
            <div className="bg-[#ffff] w-full h-12 rounded-md flex justify-between items-center sm:px-8 px-2">
              <div className=" flex ">
                <img src={assets.walletCard} className="mr-4" />
                <div className={classes.cardNumber}>*****1234</div>
              </div>
              <div>
                <FaGreaterThan color="#000000" fontSize="1em" />
              </div>
            </div>
          </div>
        </Grid>

        <Grid className="sm:px-24 mt-8 px-4">
          {data.map((item) => (
            <div className="flex justify-between mt-2">
              <div className="flex">
                <div className={`${classes.name} sm:w-16 w-8`}>
                  {item.quantity}x
                </div>
                <div className={`${classes.name} `}>{item.name}</div>
              </div>

              <div className={`${classes.name} `}>${item.price}</div>
            </div>
          ))}
          <hr className={`${classes.hr} mt-8`} />
          <div className="mt-4">
            <div className={`${classes.name} flex justify-between`}>
              <div>Subtotal</div>
              <div>$10</div>
            </div>
            <div className={`${classes.name} flex justify-between mt-2`}>
              <div>ServiceFee</div>
              <div>$10</div>
            </div>
            <div className={`${classes.total}  flex justify-between mt-6`}>
              <div>Total</div>
              <div>$10</div>
            </div>
          </div>
        </Grid>

        <Grid container className="my-8">
          <Grid item xs={1} md={3}></Grid>
          <Grid item xs={10} md={6}>
            <Button label="Order" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Order;

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Nunito",
    fontSize: "22px",
    fontWeight: "700",
  },
  subtitle: {
    fontFamily: "Nunito",
    fontSize: "20px",
    fontWeight: "700",
  },
  name: {
    fontFamily: "Nunito",
    fontSize: "16px",
    fontWeight: "400",
  },
  cardNumber: {
    fontFamily: "Nunito",
    fontSize: "16px",
    fontWeight: "700",
    color: "#000000",
    marginTop: "4px",
  },
  total: {
    fontFamily: "Nunito",
    fontSize: "16px",
    fontWeight: "700",
  },

  detail: {
    fontFamily: "Nunito",
    fontSize: "16px",
    color: "#2B2B43",
  },
  removeCart: {
    border: "1px solid #000000",
    borderRadius: "6px 0px 0px 6px",
    width: "40px",
    height: "40px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  addCart: {
    border: "1px solid #000000",
    borderRadius: "0px 6px 6px 0px",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    border: "1px solid #000000",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "10px",
    marginRight: "10px",
  },
  signupWrapper: {
    width: "38rem",
    maxWidth: "80%",
    height: "maxContent",
    overflowY: "visible",
    /* box-shadow: 0px 4px 4px rgb(0 0 0 / 25%), */
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "16px",
    marginBottom: "48px",
    marginTop: "120px",

    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      borderRadius: "0px",
      marginTop: "0px",
      marginBottom: "0px",
    },

    outerWrapper: {
      marginBottom: "20px",
    },
    hr: {
      display: "block",
      height: "1px",
      border: 0,
      borderTop: "1px solid #000000",
    },
  },
}));
