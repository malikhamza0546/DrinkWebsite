import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import { makeStyles } from "@mui/styles";
import Homepage from "./pages/Homepage/Homepage";
import { Grid } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Signup from "./pages/Auth/Signup";
import Signin from "./pages/Auth/Signin";
import Racket from "./pages/RacketPage/RacketPage";
import Cart from "./pages/Cart/Cart";
import WalletPage from "./pages/WalletPage/WalletPage";
import ForgetPassword from "./pages/Auth/ForgetPassword";
import RegisterCustomer from "./pages/Auth/RegisterCustomer";

import Explore from "./pages/ExplorePage/ExplorePage";
import Services from "./pages/Services/Services";
import OrderHistory from "./pages/OrderHistory/OrderHistory";
import ProfilePage from "./pages/Profile/Profile";
import DrinkGuidePage from "./pages/Services/DrinkGuidePage";

import Loader from "./components/Loader";
import Notification from "./components/Notification";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

import Order from "./components/Order/Order";

import { Provider } from "react-redux";
import { store } from "./Redux/store";

function App() {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <Grid container className={classes.container}>
        <Navbar />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          toastClassName="toastCls"
          draggable
          pauseOnHover
        />
        <Loader />

        <Routes>
          {/* <Route path="/signup" element={<Signup />} /> */}
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/reservation" element={<Services />} />
          <Route path="/drink-guide" element={<DrinkGuidePage />} />
          <Route path="/racket" element={<Racket />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/signup" element={<RegisterCustomer />} />
          <Route path="/order" element={<Order />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/profile-page" element={<ProfilePage />} />
        </Routes>
        <Footer />
      </Grid>
      <Notification />
    </Provider>
  );
}

export default App;

const useStyles = makeStyles({
  container: {
    width: "100vw",
    minHeight: "100vh",
    maxHeight: "100vh",
    overflowY: "auto",
    background:
      "linear-gradient(180deg, #FFFFFF 1.04%, #FFFFFF 21.88%, #FFFFFF 41.45%, #FF9901 99.84%, #FAC476 99.99%)",
  },
});
