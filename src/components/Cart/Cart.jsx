import React, { useState } from "react";
import { Link } from "react-router-dom";
import assets from "../../assets/assets";
import TextField from "../../components/Forms/Input/TextField";
import Button from "../../components/Forms/Button/AuthButton";
// import "./signup.css";
import Google from "../../components/Forms/Button/Google";
import Apple from "../../components/Forms/Button/Apple";
import Facebook from "../../components/Forms/Button/Facebook";
import colors from "../../assets/colors";
import { makeStyles } from "@mui/styles";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import { borderRadius } from "@mui/system";

const data = [
  { name: "Rice" },
  { name: "Beans" },
  { name: "Fries" },
  { name: "Ceasear Salad" },
  { name: "Bread" },
  { name: "Mashed Potatoes" },
  { name: "Ice Cubes" },
  { name: "No Ice" },



]


const Cart = () => {
  const classes = useStyles();
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const theme = useTheme();
  const isXS = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={` ${classes.outerWrapper} w-screen h-screen   overflow-x-hidden `}>
      <div
        className={` ${classes.signupWrapper} h-full    bg-white overflow-scroll mx-auto left-0 top-0 bottom-0 right-0 `}
        style={{ background: "white"}}
      >
        {isXS ?
          <Grid xs={12} >
        {<img src={assets.headerImage1}/>}
        </Grid> :
        <div className="h-16  grid grid-cols signup-tabs">
          <div
            className={`${"active"} text-xl flex justify-center items-center`}          >
            Appetizers Copens
          </div>
        </div>}

        <Grid className="p-6">
          <div className={`${classes.title} mb-2`}>Australian Wagyu Beef Sliders</div>
          <div>Sesame brioche bun, au wagyu patties, cheddar cheese, slaw & sriracha aioli</div>
        </Grid>

        <Grid className="px-6">
          <div className={`${classes.subtitle} mb-2`}>Sides</div>
          {data.map((item) => (
            <div className="flex justify-between px-4">

              <div className={`${classes.name} `}>{item.name}</div>
              {/* <input className="mb-2 "type="checkbox"/>     */}
              <Checkbox
                {...label}

                sx={{ '& .MuiSvgIcon-root': { margin: 0, padding: 0 } }}
              />
            </div>
          ))}

        </Grid>
        <div className="flex align-center justify-center py-3">
          <div className={classes.removeCart}>-</div>
          <div className={classes.number}>0</div>
          <div className={classes.addCart}>+</div>

        </div>
        <Grid container className="my-8">
          <Grid item xs={1} md={3}></Grid>
          <Grid item xs={10} md={6}>
            <Button
              label="Add To Cart"

            />
          </Grid>
        </Grid>



      </div>

    </div>
  )
}

export default Cart

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
    justifyContent: "center"

  },
  addCart: {
    border: "1px solid #000000",
    borderRadius: "0px 6px 6px 0px",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"


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
  signupWrapper : {
    width: "38rem",
    maxWidth: "80%",
    height: "maxContent",
    overflowY: "visible",
    /* box-shadow: 0px 4px 4px rgb(0 0 0 / 25%), */
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "16px",
    marginBottom: "48px",
    marginTop:"120px",
    
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    borderRadius: "0px",
    marginTop:"0px",
    marginBottom:"0px",

    },

    outerWrapper:{
     
      marginBottom:"20px",
      

     
    }

}
}))
