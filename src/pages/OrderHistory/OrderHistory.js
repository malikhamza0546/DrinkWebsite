import React, { useEffect, useState } from "react";
import { Grid, Button, useMediaQuery, useTheme, Box } from "@mui/material";
import img from "../../assets/images/img.png";
import headerImage1 from "../../assets/images/headerImage1.png";
import { makeStyles } from "@mui/styles";
import colors from "../../assets/colors";
import { RACKET } from "../../services/slider";
import assets from "../../assets/assets";
import appetizer from "../../assets/images/appetizer.png";
import { useNavigate } from "react-router-dom";
import { OrderHistoryApi } from "../../services/API";

// import Events from "../../components/CalanderEvents/Events";

const item = [
  {
    image: assets.QrCode,
    name: "umer",
    price: 10,
    description: "adf kdf a asfja asdfja sdcasj adfjas adfjas djadf ",
  },
  {
    image: assets.QrCode,
    name: "umer",
    price: 10,
    description: "adf kdf a asfja asdfja sdcasj adfjas adfjas djadf ",
  },
  {
    image: assets.QrCode,
    name: "umer",
    price: 10,
    description: "adf kdf a asfja asdfja sdcasj adfjas adfjas djadf ",
  },
  {
    image: assets.QrCode,
    name: "umer",
    price: 10,
    description: "adf kdf a asfja asdfja sdcasj adfjas adfjas djadf ",
  },
  {
    image: assets.QrCode,
    name: "umer",
    price: 10,
    description: "adf kdf a asfja asdfja sdcasj adfjas adfjas djadf ",
  },
  {
    image: assets.QrCode,
    name: "umer",
    price: 10,
    description: "adf kdf a asfja asdfja sdcasj adfjas adfjas djadf ",
  },
  {
    image: assets.QrCode,
    name: "umer",
    price: 10,
    description: "adf kdf a asfja asdfja sdcasj adfjas adfjas djadf ",
  },
  {
    image: assets.QrCode,
    name: "umer",
    price: 10,
    description: "adf kdf a asfja asdfja sdcasj adfjas adfjas djadf ",
  },
  {
    image: assets.QrCode,
    name: "umer",
    price: 10,
    description: "adf kdf a asfja asdfja sdcasj adfjas adfjas djadf ",
  },
  {
    image: assets.QrCode,
    name: "umer",
    price: 10,
    description: "adf kdf a asfja asdfja sdcasj adfjas adfjas djadf ",
  },
];

const OrderHistory = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [OrderHistory, setOrderHistory] = useState();

  console.log("order hook hisrtity", OrderHistory);

  const OrderHistoryGetter = async () => {
    try {
      const response = await OrderHistoryApi();
      setOrderHistory(response?.data);
      console.log("response in ProductGetter", response?.data);
    } catch (e) {
      console.log(e, " else Body Error");
    }
  };

  useEffect(() => {
    OrderHistoryGetter();
  }, []);

  return (
    <div className="w-screen h-screen signup-outer-wrapper relative overflow-x-hidden mt-12 pb-12 bg-[#FFFF]">
      <div className="absolute my-12  bg-white overflow-clip mx-auto signup-wrapper left-0 top-0 bottom-0 right-0">
        <Grid className="px-8 py-4">
          <div className="flex justify-center items-center">
            <div
              className={`font-bold mb-4 self-center items-center text-lg  flex ${classes.info}`}
            >
              Order History
            </div>
          </div>

          {item.map((obj) => (
            <div className={`mb-6  ${classes.appetizerOuter}`}>
              <div className="flex sm:p-4 sm:ml-2 ml-0 sm:pl-0 p-4">
                <img src={obj?.image} className={classes.InnerImage} />

                <div className="w-full">
                  <div className="flex flex-row justify-between w-full ">
                    <p
                      className={`text-base font-bold text-black ml-3 mr-16 ${classes.font}`}
                    >
                      {obj?.name}
                    </p>
                    <p
                      className={`text-base font-bold text-black ${classes.font}`}
                    >
                      {obj?.price}
                    </p>
                  </div>
                  <p
                    className={`text-xs mt-3 font-normal text-black ml-3 ${classes.font}`}
                  >
                    {obj?.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default OrderHistory;

const useStyles = makeStyles((theme) => ({
  image: {
    height: "400px",
    width: "767",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  title: {
    fontFamily: "Nunito",
    fontSize: "24px",
    fontWeight: "700",
  },
  detail: {
    fontFamily: "Nunito",
    fontSize: "16px",
    color: "#2B2B43",
  },
  address: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "22%",
    paddingRight: "22%",
    background: "#ffff",
    paddingBottom: "60px",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "0px",
      paddingLeft: "0px",
      paddingRight: "0px",
    },
    [theme.breakpoints.between("sm", "md")]: {
      paddingTop: "90px",
    },
  },
  top: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
  buttonActive: {
    width: "100%",
    height: "40px",
    fontFamily: "Nunito",
    fontWeight: 900,
    fontSize: "13px",
    [theme.breakpoints.down("sm")]: {
      borderRadius: "0px",
    },
  },
  buttonDisabled: {
    width: "100%",
    fontFamily: "Nunito",
    fontWeight: 900,
    fontSize: "13px",
    backgroundColor: "#EDEEF2",
  },
  disable: {
    backgroundColor: "red",
  },
  info: {
    fontFamily: "Nunito",
    color: "#2B2B43",
    marginTop: "4px",
  },
  appetizer: {
    fontFamily: "Nunito",
    fontSize: "24px",
    fontWeight: "700",
    color: "#2B2B43",
    marginBottom: "16px",
  },
  appetizerOuter: {
    border: "1px solid #FF9901",
    borderRadius: "8px",
    width: "100%%",
    [theme.breakpoints.down("lg")]: {
      width: "100%",
    },
  },
  font: {
    fontFamily: "Nunito",
  },
  item: {
    minWidth: "100px",
    [theme.breakpoints.down("sm")]: {
      minWidth: "20px",
    },
  },
  removeCart: {
    border: "1px solid #000000",
    borderRadius: "6px 0px 0px 6px",
    width: "40px",
    height: "40px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  addCart: {
    border: "1px solid #000000",
    borderRadius: "0px 6px 6px 0px",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
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
  InnerImage: {
    height: 60,
    width: 60,
  },
}));
