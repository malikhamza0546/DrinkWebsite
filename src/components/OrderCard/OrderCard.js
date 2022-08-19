import { Grid } from "@mui/material";
import React from "react";
import user from "../../assets/images/user.jpg";
import Product from "../../assets/images/product1.png";

const OrderCard = () => {
  return (
    <Grid
      className="pt-5 w-120  h-full bg-[#DAE3EA] my-2 p-10 rounded-xl"
      style={{
        background: "#DADADA",
        boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Grid className="flex justify-between my-3 align-center ">
        <Grid className=" font-cabin text-[#000000]">
          <h4 className="font-bold text-lg text-[#000000]">Order #1234</h4>
          <p className="font-normal text-sm">Thu, 5 May 2022</p>
        </Grid>
        <Grid className="">
          <img
            src={user}
            alt="user-picture"
            style={{ borderRadius: "50%" }}
            className="w-14 h-14"
          />
        </Grid>
      </Grid>

      <div
        style={{
          maxHeight: "300px",
          overflow: "auto",
        }}
      >
        <Grid className="flex items-center justify-between rounded bg-whiteColor mt-8 my-1 px-2 py-2">
          <Grid item className="flex items-center justify-center">
            <img src={Product} alt="pic" className="w-16 h-16" />
            <div className="ml-3">
              <p className="font-[Nunito] font-bold font-[9px]">Esotico</p>
              <p className="font-normal font-[6px] font-[Nunito] ">Add-On:</p>
            </div>
          </Grid>
          <Grid item>
            <p className="pr-10">qty: 5</p>
          </Grid>
        </Grid>
        <Grid className="flex items-center justify-between rounded bg-whiteColor my-1 px-2 py-2">
          <Grid item className="flex items-center justify-center">
            <img src={Product} alt="pic" className="w-16 h-16" />
            <div className="ml-3">
              <p className="font-[Nunito] font-bold font-[9px]">Esotico</p>
              <p className="font-normal font-[6px] font-[Nunito] ">Add-On:</p>
            </div>
          </Grid>
          <Grid item>
            <p className="pr-10">qty: 5</p>
          </Grid>
        </Grid>
        <Grid className="flex items-center justify-between rounded bg-whiteColor my-1 px-2 py-2">
          <Grid item className="flex items-center justify-center">
            <img src={Product} alt="pic" className="w-16 h-16" />
            <div className="ml-3">
              <p className="font-[Nunito] font-bold font-[9px]">Esotico</p>
              <p className="font-normal font-[6px] font-[Nunito] ">Add-On:</p>
            </div>
          </Grid>
          <Grid item>
            <p className="pr-10">qty: 5</p>
          </Grid>
        </Grid>
        <Grid className="flex items-center justify-between rounded bg-whiteColor my-1 px-2 py-2">
          <Grid item className="flex items-center justify-center">
            <img src={Product} alt="pic" className="w-16 h-16" />
            <div className="ml-3">
              <p className="font-[Nunito] font-bold font-[9px]">Esotico</p>
              <p className="font-normal font-[6px] font-[Nunito] ">Add-On:</p>
            </div>
          </Grid>
          <Grid item>
            <p className="pr-10">qty: 5</p>
          </Grid>
        </Grid>
      </div>
      <Grid className="flex justify-center mt-10">
        <div
          style={{
            width: "100px",
            height: "50px",
            background: "#000000",
            borderRadius: "14px",
            color: "#ffffff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "700",
            fontFamily: "Nunito",
            marginRight: "20px",
            cursor: "pointer",
          }}
        >
          <p>Accept</p>
        </div>

        <div
          style={{
            width: "100px",
            height: "50px",
            background: "#FF5F00",
            borderRadius: "14px",
            color: "#000000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "700",
            fontFamily: "Nunito",
            cursor: "pointer",
          }}
        >
          <p>Decline</p>
        </div>
      </Grid>
    </Grid>
  );
};

export default OrderCard;
