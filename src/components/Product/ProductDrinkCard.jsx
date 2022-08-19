import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import assets from "../../assets/assets";

const styles = makeStyles((theme) => ({
  cardContainer: {
    height: 290,

    [theme.breakpoints.down("sm")]: {
      width: "auto",
      marginLeft: "50px",
      marginRight: "50px",
      minHeight: "270px",
      height: "max-content",
    },
  },
  imgWrapper: {
    height: 170,
  },
  detail: {
    height: 50,
    width: "80%",
    margin: 'auto'
  },
  detail1: {
    height: 30,
    width: "80%",
    margin: 'auto'
  },
}));

const ProductDrinkCard = ({ name, pic }) => {
  const [heart, setHeart] = useState(false);
  const classes = styles();

  return (
    <Grid
      className={`rounded-xl overflow-hidden h-72 sm:h- ${classes.cardContainer}`}
      item
      xs={12}
      style={{ background: "white" }}
    >
      <Grid item xs={12} className={`overflow-hidden ${classes.imgWrapper}`}>
        <img alt="" src={pic} className="w-full h-44" />
      </Grid>
      <Grid
        className={`${classes.detail} flex pt-4 justify-between items-center px-2`}
        item
        xs={12}
      >
        <p style={{ fontSize: 16 }} className="w-11/12 font-nunito text-lg font-bold">{name}</p>
        {/* {!heart ? (
          <AiOutlineHeart className="text-xl" onClick={() => setHeart(true)} />
        ) : (
          <AiFillHeart
            className="text-primary text-xl"
            onClick={() => setHeart(false)}
          />
        )} */}
      </Grid>
      <Grid
        className={`${classes.detail1} flex justify-start gap-1 items-center px-2`}
        item
        xs={12}
      >
        <p style={{ color: "#5F6368",fontSize: 11 }} className="font-nunito text-xs">{"10 secret wireframe design tricks"}</p>
        {/* <span className="text-primary text-lg">.</span> */}
        {/* <span className="text-xs">$$$</span> */}
      </Grid>
    </Grid>
  );
};

export default ProductDrinkCard;
