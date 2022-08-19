import { Grid, InputBase } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@mui/styles";
import TextField from "../Forms/Input/TextField";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const useStyle = makeStyles((theme) => ({
  search: {
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "20px",
    },

    [theme.breakpoints.down("sm")]: {
      paddingTop: "40px",
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "10%",
    paddingRight: "10%",
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
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "0px",
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
    maxWidth: 200,
  },
}));

const DrinkGuide = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyle({ open });
  const [sort, setSort] = React.useState("");

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <Grid container className={` pt-40 flex ${classes.container} `}>
      <Grid xs={12} md={4} lg={4} className="flex justify-between" item>
        <p className="text-5xl font-bold font-cabin text-center items-center  color-dark pr-8">
        Drink Guide
        </p>
        <div>
        </div>
      </Grid>

      <Grid xs={12} md={4} lg={3} item className={classes.inputFeild}>
      </Grid>
      <Grid item xs={12} md={4} lg={5} className="flex justify-end">
      </Grid>
      <p style={{ fontSize: 18, marginTop: '2rem', marginBottom: '5rem' }}
        className={`my-6 text-lg font-cabin font-semibold text-[#94A3B1] ${classes.heading}`}>
       {"Our latest web design tips, tricks, insights, and resources, hot off the press"}
      </p>
    </Grid>
  );
};

export default DrinkGuide;
