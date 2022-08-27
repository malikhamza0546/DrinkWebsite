import { Grid, InputBase } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@mui/styles";
import TextField from "../Forms/Input/TextField";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { flexbox } from "@mui/system";

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
  mobile: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  list: {
    display: "flex",
    overflowX: "scroll",
    overflowY: "hidden",
    whiteSpace: "nowrap",
    width: "100%",
    active: {
      backgroundColor: "red",
    },
  },
}));

const Explore = ({ setcatagory }) => {
  const [open, setOpen] = useState(false);
  const classes = useStyle({ open });
  const [sort, setSort] = useState("");

  const handleChange = (event) => {
    setSort(event.target.value);
    setcatagory(event.target.value);
  };

  return (
    <Grid container className={` pt-40 flex ${classes.container} `}>
      <Grid xs={12} md={4} lg={4} className="flex justify-between" item>
        <p className="sm:text-5xl text-2xl font-bold font-cabin text-center items-center  color-dark pr-8">
          Explore
        </p>
        <div
          className={` w-10 h-10 rounded-full text-center items-center relative sm:mt-2 mt-0 bg-[#000000] `}
        >
          <SearchIcon
            className={`absolute left-2 flex top-2 ${classes.icon}`}
            style={{ color: "white" }}
            onClick={() => setOpen(!open)}
          />
        </div>
      </Grid>

      <Grid xs={12} md={4} lg={3} item className={classes.inputFeild}>
        {open && (
          <TextField
            type="text"
            placeholder="search"
            className={` h-14 p-2 rounded-md font-cabin font-semibold  ${classes.Feild}`}
          />
        )}
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        lg={5}
        className={`flex justify-end ${classes.mobile}`}
      >
        <FormControl
          sx={{
            m: 1,
            minWidth: "250px",
            backgroundColor: "#EDEEF2",
            borderColor: "#EDEEF2",
          }}
          size="small"
        >
          <InputLabel id="demo-select-smal">{`Category`}</InputLabel>
          <Select
            labelId="emo-select-small"
            id="demo-select-small"
            value={sort}
            onChange={handleChange}
            // autoWidth
            label="Category"
          >
            {/* <MenuItem value="">
                  <em>None</em>
                </MenuItem> */}
            <MenuItem value={"Restaurant"}>Restaurant</MenuItem>
            <MenuItem value={"Lounge"}>Lounge</MenuItem>
            <MenuItem value={"Nightclub"}>Nightclub</MenuItem>
            <MenuItem value={"Bar/ Tavern"}>Bar/ Tavern</MenuItem>
            <MenuItem value={"Coffee Shop"}>Coffee Shop</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <p
        style={{ fontSize: 18, marginTop: "2rem", marginBottom: "5rem" }}
        className={`my-6 text-lg font-cabin font-semibold text-[#94A3B1] ${classes.heading} ${classes.mobile}`}
      >
        Explore our exclusive list of establishment, curated for any distinct
        occasion
      </p>

      <Grid
        xs={12}
        md={4}
        lg={4}
        className="flex justify-between block sm:hidden w-full overflow-x-hidden"
        item
      >
        <ul className={`flex ${classes.list}`}>
          <li className="font-bold text-xs mr-6 mb-8">Resturant</li>
          <li className="font-bold text-xs mr-6 mb-8">Lounge</li>
          <li className="font-bold text-xs mr-6 mb-8">Nightclub</li>
          <li className="font-bold text-xs mr-6 mb-8">Bar/Tavern</li>
          <li className="font-bold text-xs mr-6 mb-8">CoffeeShop</li>
        </ul>
      </Grid>
    </Grid>
  );
};

export default Explore;
