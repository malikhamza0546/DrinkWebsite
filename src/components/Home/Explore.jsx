import { Grid } from "@mui/material";
import React from "react";
import Products from "./Products";

const Explore = () => {
  return (
    <Grid container>
      <Grid item xs={12} className="text-center">
        <p className="text-2xl font-bold font-cabin md:mt-0 sm:mt-16 mt-4">Explore</p>
      </Grid>
      <Grid item xs={12}>
        <Products />
      </Grid>
    </Grid>
  );
};

export default Explore;
