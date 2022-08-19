import { Grid } from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import ProductDrinkCard from "../Product/ProductDrinkCard";
import { DRINK_CARDS } from "../../services/slider";

const styles = makeStyles((theme) => ({
  card: {},
  cardsWrapper: {
    paddingLeft: "10%",
    paddingRight: "10%",
  },
  btn: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "50px",
      margin: "30px 0",
    },
  },
}));

const DrinkCards = ({ value }) => {
  const classes = styles();
  return (
    <Grid container spacing={5} className={`${classes.cardsWrapper}`}>
      {DRINK_CARDS.map(({ name, pic }, index) => {
        return (
          <Grid
            className="md:p-0 sm:p-2 pb-6 md:pb-0"
            item
            xs={12}
            sm={6}
            md={4}
            xl={3}
            key={index}
          >
            <ProductDrinkCard name={name} pic={pic} />
          </Grid>
        );
      })}

      <Grid
        item
        xs={12}
        className="text-center mb-4"
        style={{ marginBottom: 20, marginTop: 20 }}
      >
        <button className="bg-black text-whiteColor font-bold py-2 px-4 rounded">
          Load more
        </button>
      </Grid>
    </Grid>
  );
};

export default DrinkCards;
