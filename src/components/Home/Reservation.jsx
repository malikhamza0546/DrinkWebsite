import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import assets from "../../assets/assets";

const Reservation = () => {
  const classes = useStyles();
  return (
    <Grid container className={`${classes.wrapper} mt-24  `}>
      <Grid
        item
        xs={12}
        md={6}
        className={`flex !flex-col justify-center pt-16 hidden md:block`}
      >
        {/* <p
          className={`font-bold m-0 text-5xl font-cabin ${classes.reservation}`}
        >
          Reservations made easy.
        </p>
        <p
          className={`text-lg font-cabin  text-justify mt-5 text-textDarkGrey ${classes.reservation}`}
        >
          The in-app reservation feature allows you to plan ahead, all you have
          to do is select the size of your party and the date of your visit.
          Upon arrival, scan your confirmation page and enjoy your time. Using
          Drink off course.
        </p>

        <p
          style={{ justifySelf: "flex-start" }}
          className={`text-primary font-bold block underline font-cabin ${classes.reservation}`}
        >
          Learn More
        </p> */}
      </Grid>
      <Grid item md={6} xs={12} className="flex justify-start items-center hidden md:block">
        {/* <img alt="" src={assets.mobile2} className="w-auto" /> */}
      </Grid>
    </Grid>
  );
};

export default Reservation;

const useStyles = makeStyles((theme) => ({
  reservation: {
    maxWidth: 495,
    [theme.breakpoints.down("md")]: {
      maxWidth: "100% !important",
    },
  },
  wrapper: {
    paddingLeft: "10%",
    paddingRight: "10%",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "5%",
      paddingRight: "5%",    },
  },
}));
