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
import { Grid, useMediaQuery, useTheme, Box } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { borderRadius } from "@mui/system";
import { FaGreaterThan } from "react-icons/fa";
import { useSelector } from "react-redux";
import { cardDetailsShow, postOrder } from "../../services/API";
import Modal from "@mui/material/Modal";
import { FaUser } from "react-icons/fa";
import Notification from "../Notification";
import { useDispatch } from "react-redux";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const data = [
  { name: "Rice", quantity: 2, price: 10 },
  { name: "Beans", quantity: 2, price: 10 },
  { name: "Fries", quantity: 2, price: 10 },
  { name: "Ceasear Salad", quantity: 2, price: 10 },
  ,
];
const cardDataChexk = [
  {
    brand: "visa",
    card_number: "4242424242424221",
    exp_month: "8",
    exp_year: "2023",
    name_on_card: "alex",
    stripe_card_id: "card_1Lb6gTLFKwlHVomwnaOPaaxc",
    _id: "630908e6e66e7300210a3170",
  },
  {
    brand: "visa",
    card_number: "4242424242424245",
    exp_month: "8",
    exp_year: "2023",
    name_on_card: "alex",
    stripe_card_id: "card_1Lb6gTLFKwlHVomwnaOPaaxc",
    _id: "630908e6e66e7300210a3171",
  },
  {
    brand: "visa",
    card_number: "4242424242424246",
    exp_month: "8",
    exp_year: "2023",
    name_on_card: "alex",
    stripe_card_id: "card_1Lb6gTLFKwlHVomwnaOPaaxc",
    _id: "630908e6e66e7300210a3172",
  },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
};

const Order = ({ route }) => {
  const classes = useStyles();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const theme = useTheme();
  const isXS = useMediaQuery(theme.breakpoints.down("sm"));
  const [cardData, setCardData] = useState();
  const [cardSelected, setCardSelected] = useState("");
  const [orderResponse, setOrderResponse] = useState();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [confirm, setConfirm] = useState(true);
  const cart = useSelector((state) => state.Cart);
  const dispatch = useDispatch();
  const { state } = useLocation();
  // console.log("statete1111", state)

  const orderData = state;

  var orderDataForAPI = {
    cardId: cardSelected,
    products: state?.products?.products,
  };
  console.log("orderDataForAPI outside", orderDataForAPI);
  const EstablishmentedID = state?.establishmentID;

  const cardDetailsShowGetter = async () => {
    try {
      const response = await cardDetailsShow();
      setCardData(response?.data);
      console.log("response in carrd detail Getter", response?.data);
    } catch (e) {
      console.log(" error in card detail ", e);
    }
  };

  const handleClick = (EstablishmentedID, orderDataForAPI) => {
    console.log("orderDataForAPI Inside", orderDataForAPI);
    PostOrderOnClick(EstablishmentedID, orderDataForAPI);
  };

  const cardID = (item) => {
    setCardSelected(item);
    orderData["cardId"] = item;
    console.log("aaaaaaaaitem", item);
  };

  const PostOrderOnClick = async (EstablishmentID, orderDataForAPI) => {
    dispatch({ type: "START_LOADER", payload: "Getting your Order Placed..." });

    try {
      const response = await postOrder(EstablishmentID, orderDataForAPI);
      console.log("postOrder API Response ", response?.data);
      setOrderResponse(response?.data);
      handleOpen();
      //   handleOpen();
      Notification("success", "Order Placed");
      dispatch({ type: "STOP_LOADER" });
    } catch (e) {
      console.log(e.response.data.message, "Error  PostOrderOnClick");
      Notification("error", e.response.data.message);
      dispatch({ type: "STOP_LOADER" });
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
          {" "}
          {cardData &&
            cardData.map((item) => (
              <div
                className="  sm:px-10 px-4"
                // onClick={() => setCardSelected(item._id)}
                onClick={() => cardID(item._id)}
              >
                <Accordion>
                  <AccordionSummary
                    expandIcon={
                      <FaGreaterThan color="#000000" fontSize="1em" />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div
                      className={`${"active"} text-xl flex justify-center items-center text-white`}
                    >
                      Select Card
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div
                      className={
                        item._id == cardSelected
                          ? "bg-[#ffff] w-full h-12 rounded-md flex justify-between items-center sm:px-8 px-2 mb-2 border-4 border-[#006400]"
                          : "bg-[#ffff] w-full h-12 rounded-md flex justify-between items-center sm:px-8 px-2 mb-2"
                      }
                    >
                      <div className=" flex ">
                        {item.brand == "visa" && <img src={assets.visaCard} />}
                        {item.brand == "master" && (
                          <img src={assets.masterCard} />
                        )}

                        {/* <img
                          src={
                            item.brand == "visa"
                              ? assets.visaCard
                              : assets.masterCard
                          }
                          className="mr-4"
                        /> */}
                        <div className={classes.cardNumber}>
                          *****
                          {item?.card_number.substr(
                            item?.card_number.length - 5
                          )}
                        </div>
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
            ))}
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
            <button
              style={{ fontSize: 13, height: 45 }}
              className="flex bg-black w-full text-whiteColor font-bold py-2 px-4 rounded items-center"
              onClick={() => handleClick(EstablishmentedID, orderDataForAPI)}
            >
              <span className="text-center m-auto">{"Order"}</span>
            </button>
          </Grid>
        </Grid>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {confirm && (
              <Grid>
                <Box>
                  <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <div>
                      <div className="font-nunito font-bold text-lg mb-8">
                        Order {orderResponse?.order_status}
                      </div>

                      <div className="mb-8 flex flex-col items-center">
                        <div className="font-bold font-nunito text-lg text-[#FF5F00]">
                          Racket
                        </div>
                      </div>
                    </div>
                  </Grid>

                  <Grid className=" lg:px-14 md:px-4 px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                      <div className="flex flex-col md:items-start md:justify-start items-center justify-center mb-4 md:mb-0">
                        <div className="font-nunito font-bold md:text-lg text-sm text-[#2B2B43]">
                          {/* {moment(orderResponse?.date).format("MMMM Do YYYY")} */}
                          <p>Date Here </p>
                        </div>
                      </div>

                      <div className="flex flex-row md:flex-col">
                        <div className="flex ">
                          <div className="md:pt-1 pt-0 mr-2">
                            <FaUser />
                          </div>
                          <div className="font-nunito font-bold md:text-lg text-sm text-[#2B2B43] mr-4 md:mr-0">
                            {"5"} people
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className=" mb-8 flex flex-col md:flex-row justify-between items-center ">
                      <div className="flex flex-col items-center justify-center md:items-start md:justify-start  md:mb-0 mb-4">
                        <div className="font-medium font-nunito md:text-lg text-sm text-[#FF5F00] mb-2 md:mb-0">
                          Confirmation #: {orderResponse?.order_number}
                        </div>
                        {/* <div className="font-nunito font-medium md:text-lg text-sm text-[#2B2B43]">
													{"reservationAPI?.establishment?.phoneNumber"}
												</div> */}
                      </div>

                      {/* <div>
												<img src={assets.QrCode} className="w-16 h-16" />
											</div> */}
                    </div>

                    <div className="flex  items-center justify-center mt-4">
                      <div className="flex ml-4" onClick={handleClose}>
                        <img
                          className="mr-2 w-4 mt-1 h-4 w-4"
                          src={assets.cancel}
                        />
                        <div className="font-nunito font-bold text-lg text-[#000000]">
                          Cancel
                        </div>
                      </div>
                    </div>
                  </Grid>
                </Box>
              </Grid>
            )}
          </Box>
        </Modal>
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

  cardNumber: {
    fontFamily: "Nunito",
    fontSize: "16px",
    fontWeight: "700",
    color: "#000000",
    marginTop: "4px",
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
    name: {
      fontFamily: "Nunito",
      fontSize: "16px",
      fontWeight: "400",
    },
    total: {
      fontFamily: "Nunito",
      fontSize: "16px",
      fontWeight: "700",
    },
  },
}));
