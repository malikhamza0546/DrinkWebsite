import { Grid } from "@mui/material";
import React from "react";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Slider from "react-slick";
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";
import SLIDER_DATA from "../../services/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderCarousel = () => {
  const classes = useStyles();

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dotsClass: `slick-dots ${classes.dots}`,
  };
  return (
    <Grid item xs={12} mb={10}>
      <Slider {...settings}>
        {SLIDER_DATA.map((row, index) => (
          <div key={index} style={styles.container} className="flex h-90 ">
            <Grid container className={`${classes.slideItmeInner}`} >
              <Grid
                item
                xs={12}
                md={6}
                className={`justify-end sm:pt-24 pt-16 md:pr-28 `}
              >
                <p className={`font-bold sm:text-5xl  text-2xl mb-7 sm:mb-0 font-cabin ${classes.slide}`}>
                  {row.title}
                </p>
                <p
                  className={`text-lg font-cabin sm:mt-5 mt-0 text-textDarkGrey md:pr-3 sm:text-justify ${classes.slide}`}
                >
                  {row.description}
                </p>
                <p
          style={{ justifySelf: "center", width: "82%" }}
          className={`text-primary font-bold underline font-cabin ${classes.walletText}`}
        >
          Learn More
        </p>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="flex items-center justify-end min-h-96 pt-10 md:pt-24"
              >
                <img
                  alt=""
                  src={row.image}
                  className={`w-full ${classes.image}  `}
                />
              </Grid>
            </Grid>
          </div>
        ))}
      </Slider>
    </Grid>
  );
};

export default SliderCarousel;

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
}));
