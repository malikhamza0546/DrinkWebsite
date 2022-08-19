import { Grid } from "@mui/material";
import React from "react";
import DrinkCards from "../../components/DrinkGuide/DrinkCards";
import DrinkGuide from "../../components/DrinkGuide/DrinkGuide";
// import Events from "../../components/CalanderEvents/Events";
const DrinkGuidePage = () => {
  return (
    <Grid container>
      <DrinkGuide />
      <DrinkCards />
    </Grid>
  );
};

export default DrinkGuidePage;
