import { Grid , useMediaQuery , useTheme } from "@mui/material";
import React, { useState } from "react";

import Explore from "../../components/Home/Explore";
import Intro from "../../components/Home/Intro";
import Reservation from "../../components/Home/Reservation";
import Slider from "../../components/Home/Slider";
import Wallet from "../../components/Home/Wallet";
import { makeStyles } from "@mui/styles";
import assets from "../../assets/assets";



const Homepage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [active, setActive] = useState(1);
  const isXS = useMediaQuery(theme.breakpoints.down("sm"));


  console.log("active, setActiv", active)
  console.log("www", isXS)

  return (
    <Grid container>
      <Grid 
      style={{
        backgroundImage: isXS ? null : active === 1 ? `url(${assets.headerImage})` : `url(${assets.headerImage1})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "block",
        height: "auto",
        width: "100%",
      }}
      className={classes.containers}
      >
        <Intro active={active}
          setActive={setActive} />
      </Grid>

    
      {active === 1 && <Slider />}
      {active === 1 && <Wallet />}
      {active === 2 && <Wallet />}
      {active === 2 && <Slider />}

      {/* <Reservation /> */}
      {!isXS && active === 2 && <Reservation /> }
        <Explore />
    </Grid>
  );
};

export default Homepage;

const useStyles = makeStyles((theme) => ({
  containers: {
    [theme.breakpoints.down("sm")]: {
      // height: "0vh",
    },
  },
  smallScreen: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  smallContainer: {
    // display: "none",
    backgroundImage: `url(${assets.headerImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      height: "60vh",
      // display: "block",
    },
  },
  back:{},
  top:{
    marginTop:"10px"
  }
}));
