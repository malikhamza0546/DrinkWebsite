import React from "react";
import Slider from "react-slick";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import ProductCard from "../Product/ProductCard";
import assets from "../../assets/assets";
import { mobile } from "../../services/slider";

const Products = () => {
  const theme = useTheme();
  const isMD = useMediaQuery(theme.breakpoints.only("md"));
  const isSM = useMediaQuery(theme.breakpoints.only("sm"));
  const isXS = useMediaQuery(theme.breakpoints.down("sm"));

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // cssEase: 'ease-out',
  };
  return (
    <Grid item xs={12}>
      <Slider {...settings}>
        {mobile.map((item, key) => {
          return (
            <div key={key} >
              <div >
                <img src={item.pic} className="w-auto test "/>
              </div>
            </div>
          );
        })}
      </Slider>
    </Grid>
  );
};

export default Products;
