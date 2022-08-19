import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import OrderCard from "./OrderCard";

const useStyle = makeStyles((theme) => ({
  search: {
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.up("sm")]: {
      // display: (props) => (props.open ? "flex" : "none"),
      // width: "70%",
      paddingLeft: "20px",
    },
    // display: (props) => (props.open ? "flex" : "none"),
    [theme.breakpoints.down("sm")]: {
      paddingTop: "40px",
    },
  },
  container: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: "80px",
    },
    [theme.breakpoints.between("sm", "md")]: {
      paddingTop: "90px",
    },
  },
  icon: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  inputFeild: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: "40px",
    },
    [theme.breakpoints.between("sm", "md")]: {
      paddingTop: "40px",
    },
  },
  heading: {
    [theme.breakpoints.between("sm", "md")]: {
      paddingLeft: "8px",
    },
  },
  Feild: {
    [theme.breakpoints.only("lg")]: {
      width: "300px",
    },
    [theme.breakpoints.up("xl")]: {
      width: "380px",
    },
  },
  category: {
    [theme.breakpoints.up("lg")]: {
      width: "250px",
      minWidth: "max-content",
      marginLeft: "90px",
    },
    [theme.breakpoints.only("xl")]: {
      width: "380px",
    },
    // [theme.breakpoints.up("xl")]: {
    //   // paddingLeft: "8px",
    //   // width: "250px",
    //   width: "380px",
    //   // marginLeft: "50px",
    // },
  },
}));

const Order = () => {
  const classes = useStyle();
  return (
    <Grid
      container
      spacing={4}
      className={`mt-4  md:px-36 py-2  flex justify-center ${classes.card}`}
    >
      {[1, 2, 3, 4, 5, 6].map((val, index) => {
        return (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <OrderCard />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Order;
