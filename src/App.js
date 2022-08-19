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

import Explore from "./pages/ExplorePage/ExplorePage";
import Services from "./pages/Services/Services";
import DrinkGuidePage from "./pages/Services/DrinkGuidePage";

function App() {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/reservation" element={<Services />} />
        <Route path="/drink-guide" element={<DrinkGuidePage />} />
        <Route path="/racket" element={<Racket />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wallet" element={<WalletPage />} />
      </Routes>
      <Footer />
    </Grid>
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
