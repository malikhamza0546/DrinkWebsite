import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import Signup from "../pages/Auth/Signup";
import Signin from "../pages/Auth/Signin";
import Racket from "../pages/RacketPage/RacketPage";
import Cart from "../pages/Cart/Cart";
import WalletPage from "../pages/WalletPage/WalletPage";
import ForgetPassword from "../pages/Auth/ForgetPassword";

import Explore from "../pages/ExplorePage/ExplorePage";
import Services from "../pages/Services/Services";
import DrinkGuidePage from "../pages/Services/DrinkGuidePage";

const Routing = () => {
  //   let token = localStorage.getItem("token");
  <BrowserRouter>
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
      <Route path="/forget-password" element={<ForgetPassword />} />
    </Routes>
  </BrowserRouter>;
};

export default Routing;
