import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { useNavigate, useLocation } from "react-router-dom";
import assets from "../../assets/assets";
import { Grid, Button, useMediaQuery, useTheme } from "@mui/material";

const styles = makeStyles((theme) => ({
  cardContainer: {
    height: 290,

    [theme.breakpoints.down("sm")]: {
      width: "auto",
      marginLeft: "50px",
      marginRight: "50px",
      minHeight: 200,
      maxHeight: 240,
      height: 220,
    },
  },
  imgWrapper: {
    height: 170,
    [theme.breakpoints.down("sm")]: {
      height: 120,
    },
  },
  mobileCard: {
    [theme.breakpoints.down("sm")]: {
      borderRadius: "16px",
      border: "1px solid #EDEEF2",
    },
  },
  detail: {
    height: 60,
    [theme.breakpoints.down("sm")]: {
      height: 40,
    },
  },
}));

const ProductCard = ({ name, pic }) => {
  const [heart, setHeart] = useState(false);
  const classes = styles();
  const navigate = useNavigate();
  const theme = useTheme();
  const location = useLocation();

  const isXS = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      className={`${classes.mobileCard} rounded-3xl overflow-hidden h-44 sm:h- ${classes.cardContainer}`}
      item
      xs={12}
      sm={12}
      md={12}
      lg={12}
      style={{ background: "white" }}
    >
      <div className="relative">
        {isXS && location.pathname !== "/explore" && (
          <div className="flex flex-row-reverse">
            <AiFillHeart
              className="absolute top-2 right-2 text-primary text-3xl"
              onClick={() => setHeart(false)}
            />
          </div>
        )}

        <Grid
          item
          xs={12}
          className={` overflow-hidden  sm:h- ${classes.imgWrapper}`}
        >
          <img
            alt=""
            src={pic}
            className="w-full h-full "
            onClick={() => navigate("/racket")}
          />
        </Grid>
      </div>
      <Grid
        className={`${classes.detail} flex pt-4 justify-between items-center px-2`}
        item
        xs={12}
      >
        <p
          className="w-11/12 font-nunito sm:text-lg text-sm font-bold"
          onClick={() => navigate("/racket")}
        >
          {name}
        </p>
        {isXS && location.pathname !== "/explore" ? (
          ""
        ) : !heart ? (
          <AiOutlineHeart className="text-xl" onClick={() => setHeart(true)} />
        ) : (
          <AiFillHeart
            className="text-primary text-xl"
            onClick={() => setHeart(false)}
          />
        )}
      </Grid>
      <Grid
        className={`${classes.detail} flex justify-start gap-1 items-center px-2`}
        item
        xs={12}
        onClick={() => navigate("/racket")}
      >
        <GrLocation />
        <p className="font-nunito text-xs">2 miles</p>
        <span className="text-primary text-lg">.</span>
        <span className="text-xs">
          <img src={assets.Star} className="h-4 w-4" />
        </span>
        <span>
          <p className="font-nunito text-xs">(5 Stars)</p>
        </span>
      </Grid>
    </Grid>
  );
};

export default ProductCard;
