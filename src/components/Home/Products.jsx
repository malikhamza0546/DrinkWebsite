import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import ProductCard from "../Product/ProductCard";
import { getEstablishment } from "../../services/API";

const Products = ({ getEstablishmentThunk }) => {
  const theme = useTheme();
  const isMD = useMediaQuery(theme.breakpoints.only("md"));
  const isSM = useMediaQuery(theme.breakpoints.only("sm"));
  const isXS = useMediaQuery(theme.breakpoints.down("sm"));
  const [cards, setCards] = useState([]);

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

  const EstablishmentGetter = async () => {
    const response = await getEstablishment();
    console.log("response", response);
    setCards(response?.data);
  };

  useEffect(() => {
    console.log("commercial componoent api");
    // getEstablishmentThunk();
    EstablishmentGetter();
  }, []);
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={12}
      lg={12}
      className="pt-10 md:pb-80 pb-24 "
    >
      <Slider {...settings}>
        {cards.map((obj, key) => {
          return (
            <div key={key} style={{ padding: 10 }}>
              <div style={{ padding: 10 }}>
                <ProductCard
                  name={obj?.name}
                  pic={obj?.image}
                  Location={obj?.address?.city}
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </Grid>
  );
};

export default Products;
