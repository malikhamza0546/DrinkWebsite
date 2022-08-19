import { Grid } from "@mui/material";
import React from "react";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Slider from "react-slick";
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";
import {mobile} from "../../services/slider";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wallet = () => {
  const classes = useStyles();

  const settings = {
          dots: false,
          arrows: false,
          infinite: true,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 700,
  };
  return (
    <Grid item xs={12} mb={10}>
      <Slider {...settings}>
        {mobile.map((row, index) => (
          <div key={index} style={styles.container} className="flex h-90 ">
            <Grid container className={`${classes.slideItmeInner}`} >
            <Grid
                item
                xs={12}
                md={6}
                className="flex items-center justify-end min-h-96 pt-10 md:pt-24"
              >
                <img
                  alt=""
                  src={row.pic}
                  className={`w-full ${classes.image}  `}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className={`flex  justify-center items-center md:pr-44  md:pt-16  ${classes.hide}`}

              >
                <p className={`font-bold sm:text-5xl  text-2xl mb-7 sm:mb-0 font-cabin ${classes.slide}`}>
                  {row.title}
                </p>
              </Grid>
             
            </Grid>
          </div>
        ))}
      </Slider>
      <Grid
        item
        xs={12}
        md={6}
        className="flex items-start justify-center visible sm:invisible"
      >
      <p
          className={`font-bold text-base font-cabin `}
        >
          Browse Map
        </p>
      </Grid>
    </Grid>
  );
};

export default Wallet;

const styles = {
  container: {
    height: "500px !important",
    
  },
};
const useStyles = makeStyles((theme) => ({
  slide: {
    [theme.breakpoints.down("sm")]: {
    // marginTop:"120px"
    },
  },
  slideItmeInner: {
    minHeight: 400,
    paddingLeft: "10% !important",
    paddingRight: "10% !important",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "5% !important",
      paddingRight: "5% !important",
    },
    [theme.breakpoints.down("sm")]: {
      

    },
  },
  image: {},
  dots: {
    bottom: -80,
    "& li.slick-active button::before": {
      color: "#000000",
    },
    "& li": {
      "& button::before": {
        fontSize: theme.typography.pxToRem(12),
        color: "#8A8A8E",
        opacity: 0.5,
      },
    },
  },
  hide:{
        [theme.breakpoints.down("md")]: {
          display:"none"
        },
      }
}));
