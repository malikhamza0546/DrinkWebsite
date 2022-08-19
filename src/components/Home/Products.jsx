import React from "react";
import Slider from "react-slick";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import ProductCard from "../Product/ProductCard";
import assets from "../../assets/assets";
import { CARDS } from "../../services/slider";

const Products = () => {
  const theme = useTheme();
  const isMD = useMediaQuery(theme.breakpoints.only("md"));
  const isSM = useMediaQuery(theme.breakpoints.only("sm"));
  const isXS = useMediaQuery(theme.breakpoints.down("sm"));

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: isXS ? 2 : isSM ? 2 : isMD ? 3 : 4,
    slidesToScroll: isXS ? 2 : isSM ? 2 : isMD ? 3 : 4,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <Grid item xs={12} sm={12} md={12} lg={12} className="pt-10 md:pb-80 pb-24 ">
      <Slider {...settings}>
        {CARDS.map(({ name, pic }, key) => {
          return (
            <div key={key} style={{ padding: 10 }}>
              <div style={{ padding: 10 }}>
                <ProductCard name={name} pic={pic} />
              </div>
            </div>
          );
        })}
      </Slider>
    </Grid>
  );
};

export default Products;
