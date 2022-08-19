import { Grid } from "@mui/material";
import React from "react";
import ExploreCards from "../../components/Explore/ExploreCards";
import Explore from "../../components/Explore/Explore";
// import Events from "../../components/CalanderEvents/Events";
const ExplorePage = () => {
  return (
    <Grid container>
      <Explore />
      <ExploreCards />
    </Grid>
  );
};

export default ExplorePage;
