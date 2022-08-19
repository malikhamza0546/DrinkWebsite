import React from "react";
import { makeStyles } from "@mui/styles";
import assets from "../../assets/assets";
import { Grid } from "@mui/material";

const useStyle = makeStyles(() => ({
  imgWrapper: {
    backgroundImage: `url(${assets.services})`,
    // height: "500px",
  },
  wrapper: {
    height: "100vh",
  },
}));

const Services = () => {
  const classes = useStyle();

  return (
    <Grid container className={`${classes.wrapper}`}>
      {/* <img src={assets.services} /> */}
      <Grid item xs={12} md={6} className={classes.imgWrapper}>
        asdfasdf
      </Grid>
      <Grid item xs={12} md={6}></Grid>
    </Grid>
  );
};

export default Services;
