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
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AuthButton from "../../components/Forms/Button/AuthButton";
import { postTip } from "../../services/API";
import ReactStars from "react-rating-stars-component";
import { OrderDetailAPI } from "../../services/API";
import Notification from "../../components/Notification";
import { useSelector } from "react-redux";
import moment from "moment";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  borderRadius: 4,
  boxShadow: 24,
  p: 2,
};

const OrderHistory = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [OrderHistory, setOrderHistory] = useState([]);
  const [OrderDataFromAPI, setOrderDataFromAPI] = useState("");
  const [TipAPIResponse, setTipAPIResponse] = useState("");
  const [TipToBeSent, setTipToBeSent] = useState("");
  const [starRating, setstarRating] = useState("");
  const [OrderDetailAPIState, setOrderDetailAPIState] = useState("");

  const User = useSelector((state) => state?.Auth?.user?.user);
  console.log("user from history", User);

  //mui modal
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const [tip, setTip] = useState([
    { key: 1, tip: "10", status: false },
    { key: 2, tip: "15", status: false },
    { key: 3, tip: "20", status: false },
    { key: 4, tip: "0", status: false },
  ]);
  console.log("order historyy data", OrderDetailAPIState);

  const OrderHistoryGetter = async () => {
    try {
      const response = await OrderHistoryApi();
      setOrderHistory(response?.data);
      console.log("response in OrderHistoryGetter", response?.data);
      // Notification("success", response?.data)
    } catch (e) {
      console.log(e, " else Body Error");
      // Notification("error", e)
    }
  };

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
  useEffect(() => {
    OrderHistoryGetter();
  }, []);

  const TipHandler = (item) => {
    let UpdatedArray = tip.map((object) => {
      console.log(object, "object.key", item, "item.key");
      if (object.key === item.key) {
        return {
          ...object,
          status: true,
        };
      } else {
        return {
          ...object,
          status: false,
        };
      }
    });
    console.log("UpdatedArray", UpdatedArray);
    setTip(UpdatedArray);
    setTipToBeSent(item?.tip);
  };

  const TipAPIHandler = async () => {
    console.log("TipAPIHandler");
    try {
      const response = await postTip(OrderDataFromAPI?.id, TipToBeSent, {
        rating: starRating,
      });
      console.log("postOrder API Response ", response?.data);
      setTipAPIResponse(response?.data);
      // Notification("success", response?.data)
    } catch (e) {
      console.log(e?.response?.data?.message, "Error  PostOrderOnClick");
      Notification("error", e?.response?.data?.message);
    }
  };

  const ratingChanged = (newRating) => {
    console.log(newRating);
    setstarRating(newRating);
  };

  return (
    <>
      <div className="w-screen h-screen signup-outer-wrapper relative overflow-x-hidden mt-12 pb-12 bg-[#FFFF]">
        <div className="absolute my-12  bg-white overflow-clip mx-auto signup-wrapper left-0 top-0 bottom-0 right-0">
          <Grid className="sm:px-8 py-4 px-0">
            <div className="flex justify-center items-center">
              <div
                className={`font-bold mb-4 self-center items-center text-lg  flex ${classes.info}`}
              >
                Order History
              </div>
            </div>

            {OrderHistory?.map((obj) => (
              <div
                className={`mb-6  ${classes.appetizerOuter}`}
                onClick={() => handleOpen(obj)}
              >
                <div className="flex sm:p-4 sm:ml-2 ml-0 sm:pl-0 p-4">
                  <img
                    src={obj?.products[0]?.product?.image}
                    className={classes.InnerImage}
                  />

                  <div className="w-full">
                    <div className="flex flex-row justify-between w-full ">
                      <p
                        className={`sm:text-base text-xs font-bold text-black ml-3 mr-16 font-nunito`}
                      >
                        {obj?.products[0]?.product?.name}
                      </p>
                      <p
                        className={`sm:text-base text-xs font-bold text-black font-nunito`}
                      >
                        ${obj?.total}
                      </p>
                    </div>
                    <div className="flex flex-row justify-between w-full ">
                      <p
                        className={`text-xs mt-3 font-bold text-black ml-3 font-nunito`}
                      >
                        {moment(obj?.createdAt).format("dddd, MMMM Do YYYY")}
                      </p>
                      <p
                        className={`text-xs mt-3 font-bold text-black ml-3 font-nunito`}
                      >
                        {obj?.order_status}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Grid>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid>
            {OrderDetailAPIState?.order_status == "complete" ? (
              <Box>
                <div className="flex  items-center justify-end ">
                  <div className="" onClick={handleClose}>
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
                      {/* Order {OrderDetailAPIState?.order_status} */}
                      Order Completed
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
                        {moment(OrderDetailAPIState?.createdAt).format(
                          "MMMM Do YYYY"
                        )}
                        {/* Saturday, March 12, 2022 */}
                      </div>
                      <div className="font-nunito font-bold  text-sm text-[#2B2B43]">
                        {/* 9:00 pm */}
                      </div>
                    </div>
                  </div>
                  <div className=" mb-8 flex flex-col justify-between items-center ">
                    <div className="flex flex-col items-center justify-center md:mb-0 mb-4">
                      <div className="font-medium font-nunito  text-xs text-[#FF5F00] mb-2 md:mb-0">
                        Order #: {OrderDetailAPIState?.order_number}
                      </div>
                      <div className="font-nunito font-medium  text-xs text-[#2B2B43]">
                        {/* (786) 637-2987 */}
                      </div>
                    </div>
                  </div>
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <div className=" flex w-60 flex-row overflow-x-auto">
                      <div className={classes.tip}>Tip</div>
                      {tip.map((item) => (
                        <div
                          // className="w-28 p-2 mr-4 flex items-center justify-center h-9 rounded-lg border-slate-600 bg-[#FF9901] mb-4 "
                          className={
                            item.status === true
                              ? "w-28 p-2 mr-2 flex items-center justify-center h-7 rounded-lg border-slate-600 bg-[#FF9901] text-[#FFFF] mb-4 cursor-pointer "
                              : "w-28 p-2 mr-2 flex items-center justify-center h-7 rounded-lg border-slate-600 bg-[#DADADA] mb-4 cursor-pointer"
                          }
                          onClick={() => {
                            TipHandler(item);
                          }}
                        >
                          {item.tip === "0" ? (
                            <p className="font-nunito text-xs font-normal flex">
                              {"None"}
                            </p>
                          ) : (
                            <p className="font-nunito text-xs font-normal flex">
                              {item.tip}%
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </Grid>
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    className="sm:px-0 px-12"
                  >
                    <hr className={`${classes.hr}  w-full mt-6  `} />
                    <div
                      className={`${classes.total} w-full px-20 flex justify-between items-center mt-4`}
                    >
                      <div>Total</div>
                      <div>{OrderDetailAPIState?.total}</div>
                    </div>

                    <div className="flex items-center justify-around w-full mt-4 px-20">
                      <ReactStars
                        count={5}
                        value={OrderDetailAPIState?.rating?.rating || 0}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                      />
                    </div>
                  </Grid>

                  <div className="mt-8 w-48">
                    {OrderDetailAPIState?.isRatingSaved === false &&
                      OrderDetailAPIState?.isTipSaved === false && (
                        //   <AuthButton label="Review" onClick={TipAPIHandler} />
                        <button
                          onClick={TipAPIHandler}
                          style={{ fontSize: 13, height: 45 }}
                          className="flex bg-black w-full text-whiteColor w-48 font-bold py-2 px-4 rounded items-center"
                        >
                          <span className="text-center m-auto">Review</span>
                        </button>
                      )}
                  </div>
                </Grid>
              </Box>
            ) : (
              <Box className="sm:px-0  px-16">
                <div className="flex  items-center justify-end ">
                  <div className="" onClick={handleClose}>
                    <img className="" src={assets.cancel} />
                  </div>
                </div>
                <Grid
                //   container
                //   direction="column"
                //   justifyContent="center"
                //   alignItems="center"
                >
                  <div className="flex mb-4 items-center justify-center ">
                    {/* Order {OrderDetailAPIState?.order_status} */}
                    <div className="font-nunito font-bold text-xl ">
                      {OrderDetailAPIState?.order_status == "preparing"
                        ? "Order Preparing"
                        : "Order Received"}
                    </div>
                  </div>
                  <div className="bg-[#EDEEF2] m-2 p-2 px-4 rounded-lg ">
                    <div>
                      <div className={classes.total}>
                        {User?.firstName} {User?.surName}
                      </div>
                      <div className={classes.name}>
                        Order Number # {OrderDetailAPIState?.order_number}
                      </div>
                    </div>

                    <div className="flex mt-4 items-center ">
                      <div className={classes.four}>
                        {OrderDetailAPIState &&
                          OrderDetailAPIState?.products[0]?.count}
                      </div>
                      <div className="flex justify-between items-center w-full ">
                        <div className="font-semibold font-nunito">
                          {OrderDetailAPIState &&
                            OrderDetailAPIState?.products[0]?.product?.name}
                        </div>
                        <div className="font-semibold font-nunito">
                          ${OrderDetailAPIState?.subTotal}
                        </div>
                      </div>
                    </div>
                    <hr className={`${classes.hr}  w-full mt-6  `} />
                    <div className="flex mt-4 items-center ">
                      <div className={classes.four}></div>
                      <div className="flex justify-between items-center w-full ">
                        <div className="font-semibold font-nunito">
                          Service Fee
                        </div>
                        <div className="font-semibold font-nunito">$6</div>
                      </div>
                    </div>

                    <div className="flex mt-4 items-center ">
                      <div className={classes.four}></div>
                      <div className="flex justify-between items-center w-full ">
                        <div className="font-semibold font-nunito">Total</div>
                        <div className="font-semibold font-nunito">
                          ${OrderDetailAPIState?.total}
                        </div>
                      </div>
                    </div>
                    <div className="flex mt-4 items-center justify-center">
                      <img src={assets.QrCode} className="w-24 h-24 mb-8" />
                    </div>
                  </div>
                </Grid>
              </Box>
            )}
          </Grid>
        </Box>
      </Modal>
    </>
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
  tip: {
    fontFamily: "Nunito",
    fontSize: "18px",
    fontWeight: "400",
    marginRight: 4,
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
  four: {
    minWidth: "30%",
  },
}));
