import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
import { FaAngleDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { cardDetailsShow, postOrder, OrderDetailAPI } from "../../services/API";
import Modal from "@mui/material/Modal";
import { FaUser } from "react-icons/fa";
import Notification from "../Notification";
import { useDispatch } from "react-redux";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import moment from 'moment';


const data = [
  { name: "Rice", quantity: 2, price: 10 },
  { name: "Beans", quantity: 2, price: 10 },
  { name: "Fries", quantity: 2, price: 10 },
  { name: "Ceasear Salad", quantity: 2, price: 10 },
  ,
]
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
]

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
}

const Order = ({ route }) => {
  const classes = useStyles();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const theme = useTheme();
  const isXS = useMediaQuery(theme.breakpoints.down("sm"));
  const [cardData, setCardData] = useState();
  const [cardSelected, setCardSelected] = useState("");
  const [orderResponse, setOrderResponse] = useState();
  const [open, setOpen] = useState(false);
  const [OrderDataFromAPI, setOrderDataFromAPI] = useState("");
  const [OrderDetailAPIState, setOrderDetailAPIState] = useState(null);

  let subTotal = 0

  // const handleOpen = () => setOpen(true);
  const handleOpen = async (orderFromAPI) => {
    setOrderDataFromAPI(orderFromAPI);
    setOpen(true);
    try {
      let response = await OrderDetailAPI(orderFromAPI?.id);
      console.log("response OrderDetailAPI", response?.data);
      setOrderDetailAPIState(response?.data);
    } catch (e) {
      console.log("e", e);
    }
  };

  const handleClose = () => setOpen(false);
  const [confirm, setConfirm] = useState(true);

  const cart = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();
  // console.log("statete1111", state)
  const ProductsOrderReducer = useSelector(
    (state) => state.ProductsOrderReducer?.ClickedProd
  );

  const ProductCartOrder = useSelector(
    (state) => state.ProductsOrderReducer?.ProductCart
  );

  const [ProductsOrderReducerRedux, setProductsOrderReducerRedux] = useState([
    ...ProductsOrderReducer,
  ]);

  console.log(ProductsOrderReducerRedux, "ProductsOrderReducer final Result", ProductCartOrder);

  const orderData = state;
  const token = localStorage.getItem("access");

  var orderDataForAPI = {
    cardId: cardSelected,
    products: ProductsOrderReducer,
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
    console.log("orderDataForAPI Inside", orderDataForAPI, EstablishmentedID);
    PostOrderOnClick(EstablishmentedID, orderDataForAPI);
  };

  const cardID = (item) => {
    setCardSelected(item)
    orderData["cardId"] = item
    console.log("aaaaaaaaitem", item)
  }

  const PostOrderOnClick = async (EstablishmentID, orderDataForAPI) => {
    dispatch({ type: "START_LOADER", payload: "Getting your Order Placed..." })

    try {
      const response = await postOrder(EstablishmentID, orderDataForAPI);
      console.log("postOrder API Response ", response?.data);
      setOrderResponse(response?.data);
      handleOpen(response?.data);
      Notification("success", "Order Placed");
      dispatch({ type: "STOP_LOADER" });
      dispatch({
        type: "EmptyClcikProd",
      });
    } catch (e) {
      console.log(e.response.data.message, "Error  PostOrderOnClick");
      Notification("error", e.response.data.message);
      dispatch({ type: "STOP_LOADER" });
    }
  };

  useEffect(() => {
    cardDetailsShowGetter();
  }, []);


  const showCartInner = (item, itemID) => {
    subTotal = subTotal + item?.price
    return (
      <div key={itemID} className="flex justify-between mt-2">
        <div className="flex">
          <div className={`${classes.name} sm:w-16 w-8`}>
            {item?.count}x
          </div>
          <div className={`${classes.name} `}>
            {item?.productName}
          </div>
        </div>

        <div className={`${classes.name} `}>
          ${item?.price}
        </div>
      </div>
    )
  }

  return (
    <div className="w-screen h-screen signup-outer-wrapper relative overflow-x-hidden mt-12 mb-12">
      {token !== null ? (
        <div
          className="absolute my-12 z-10 bg-white overflow-clip mx-auto signup-wrapper left-0 top-0 bottom-0 right-0"
          style={{ background: "white" }}
        >
          <div className="h-16  grid grid-cols signup-tabs">
            <div
              className={`${"active"} text-xl flex justify-center items-center`}
            >
              Checkout
            </div>
          </div>

          {
            ProductsOrderReducerRedux?.length > 0 ?
              <>
                <Grid
                  className={`${classes.card} bg-[#FF9901] sm:mx-16 mx-0 py-4 rounded-2xl mt-8`}
                >
                  {cardData && cardData.length == 0 && (
                    <div className="flex items-center justify-center ">
                      <div className={classes.noCard}>No Card Added</div>
                    </div>
                  )}
                  {cardData &&
                    cardData.map((item) => (
                      <div className="  sm:px-10 px-4">
                        <Accordion>
                          <AccordionSummary
                            expandIcon={
                              <FaAngleDown color="#000000" fontSize="1.8em" />
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
                          <AccordionDetails onClick={() => setCardSelected(item._id)}>
                            <div
                              className={
                                item._id == cardSelected
                                  ? "bg-[#ffff] w-full h-12 rounded-md flex justify-between items-center sm:px-4 px-2 mb-2 border-4 border-[#006400]"
                                  : "bg-[#ffff] w-full h-12 rounded-md flex justify-between items-center sm:px-4 px-2 mb-2 border-2 border-[#DADADA]"
                              }
                            >
                              <div className=" flex ">
                                {item.brand == "visa" && (
                                  <img src={assets.visaCard} />
                                )}
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
              </>
              : null
          }

          {
            ProductCartOrder?.length > 0 ?
              <>

                <Grid className="sm:px-24 mt-8 px-4">
                  {ProductCartOrder.map((item, itemID) => {
                    return (
                      showCartInner(item, itemID)
                    )
                  }
                  )}
                  <hr className={`${classes.hr} mt-8`} />
                  <div className="mt-4">
                    <div className={`${classes.name} flex justify-between`}>
                      <div>Subtotal</div>
                      <div>{`$${subTotal}`}</div>
                    </div>
                    <div className={`${classes.name} flex justify-between mt-2`}>
                      <div>ServiceFee</div>
                      <div>$6</div>
                    </div>
                    <div className={`${classes.total}  flex justify-between mt-6`}>
                      <div>Total</div>
                      <div>{`$${subTotal + 6}`}</div>
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
                      <span className="text-center m-auto">{"Place Order"}</span>
                    </button>
                  </Grid>
                </Grid>
              </>
              :
              <div className="flex items-center justify-center">
                <div className="text-[#FF9901] text-2xl font-bold">
                  Cart is Empty
                </div>
              </div>
          }

          <Modal
            open={open}
            onClose={() => {
              navigate("/");
            }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Grid>
                <Box>
                  <div className="flex  items-center justify-end ">
                    <div
                      className=""
                      onClick={() => {
                        navigate("/");
                      }}>
                      <img className="" src={assets.cancel} />
                    </div>
                  </div>
                  <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <div>
                      <div className="h-16">
                        <img src={assets.blackLogo1} alt="" />
                      </div>
                      <div className="font-nunito font-bold text-xl mb-8">
                        Order {OrderDetailAPIState?.order_status}
                      </div>

                      <div className="mb-6 flex flex-col items-center">
                        <div>
                          <img
                            className="rounded-full border-2 border-[#FF5F00] w-20 h-20 "
                            src={
                              OrderDetailAPIState?.products?.[0]?.product?.image
                            }
                          />
                        </div>
                        <div className="font-bold font-nunito text-lg text-[#FF5F00] mt-2">
                          {OrderDetailAPIState?.products?.[0]?.product?.name}
                        </div>
                      </div>
                    </div>
                  </Grid>

                  <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    className=" lg:px-14  px-4"
                  >
                    <div className="flex  justify-between items-center mb-2">
                      <div className="flex flex-col  items-center justify-center mb-4 ">
                        <div className="font-nunito  font-normal text-xs  text-[#2B2B43] mb-4 ">
                          {/* 150 NW 24 Street | Miami, FL 33127 */}
                        </div>
                        <div className="font-nunito font-bold  text-sm text-[#2B2B43]">
                          {moment(OrderDetailAPIState?.createdAt).format("MMMM Do YYYY")}
                        </div>
                        <div className="font-nunito font-bold  text-sm text-[#2B2B43]">
                          {/* 9:00 pm */}
                        </div>
                      </div>
                    </div>
                    <div className=" mb-8 flex flex-col justify-between items-center ">
                      <div className="flex flex-col items-center justify-center md:mb-0 mb-4">
                        <div className="font-medium font-nunito  text-xs text-[#FF5F00] mb-2 md:mb-0">
                          {`Order #: ${OrderDetailAPIState?.order_number}`}
                        </div>
                        <div className="font-nunito font-medium  text-xs text-[#2B2B43]">
                          {/* (786) 637-2987 */}
                        </div>
                      </div>
                    </div>
                  </Grid>
                </Box>
              </Grid>
            </Box>
          </Modal>
        </div>
      ) : (
        <>
          <div
            className="absolute my-12 z-10 bg-white overflow-clip mx-auto signup-wrapper left-0 top-0 bottom-0 right-0"
            style={{ background: "white" }}
          >
            <div className="h-16  grid grid-cols signup-tabs">
              <div
                className={`${"active"} text-xl flex justify-center items-center`}
              >
                Checkout
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-[#FF9901] text-2xl font-bold">
                Cart is Empty
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Order

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
    marginLeft: "8px",
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
    noCard: {
      fontFamily: "Nunito",
      fontSize: "16px",
      // color: "white",
      fontWeight: "400",
    },
    total: {
      fontFamily: "Nunito",
      fontSize: "16px",
      fontWeight: "700",
    },
  },
}));
