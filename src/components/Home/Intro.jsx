import { ImportantDevices } from "@mui/icons-material";
import { Button, Grid , useMediaQuery , useTheme} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import colors from "../../assets/colors";
import assets from "../../assets/assets";


const Intro = (props) => {
  const classes = useStyles();
  // const [active, setActive] = useState(1);
  const { active, setActive } = props
  const theme = useTheme();
  const isXS = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      item
      xs={12}
      className={`pt-40 md:pl-36 p-10 md:px-0  ${classes.container}`}
    >
      <div className={` rounded-3xl overflow-hidden ${classes.cardWrapper}`}>
        <Grid container>
          <Grid
            item
            xs={6}
            className={`flex cursor-pointer justify-center items-center h-10  ${active === 1 ? classes.activeTab : classes.introTabs}`}
            onClick={() => setActive(1)}
          >
            <p className="text-md jsutify-center">Business</p>
          </Grid>
          <Grid
            item
            xs={6}
            className={`flex cursor-pointer justify-center items-center h-10  ${active === 2 ? classes.activeTab : classes.introTabs}`}
            onClick={() => setActive(2)}
          >
            <p className={`text-md`}>Users</p>
          </Grid>
        </Grid>
        <Grid item xs={12} className={`px-10 pt-5 ${classes.introContent}`}>
          {active === 1 ? (
            <>
              <p className={`text-3xl text-primary font-cabin`}>
                {"Increase your efficiency"}
              </p>
              <p className="text-md mt-2 font-cabin">
                {"Use our platform to receive and process dine-in orders and reservations frictionlessly"}
              </p>
              <Button variant="contained" className={`${classes.signup}`}>
                Signup
              </Button>

              <p className="text-md mt-8 font-cabin hover:underline cursor-pointer">
                Learn more about our platform
              </p>
            </>
          ) : (
            <>
             

              <p className={`text-3xl text-primary font-cabin`}>
                {"Place your next orders contactlessly"}
              </p>
              <p className="text-md mt-2 font-cabin">
                {"Use our platform to place orders and make reservations at the click of a button"}
              </p>
              <Button variant="contained" className={`${classes.signup}`}>
                Sign Up
              </Button>

              <p className="text-md mt-8 font-cabin hover:underline cursor-pointer">
                Learn more about our platform
              </p>
            </>
          )}
        </Grid>
      </div>
      <Grid xs={12} >
        {isXS && <img src={assets.headerImage}/>}
        </Grid>
    </Grid>
  );
};

export default Intro;

const useStyles = makeStyles((theme) => ({
  cardWrapper: {
    height: 340,
    maxWidth: 420,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    background: colors.white,
    [theme.breakpoints.down("sm")]: {
      borderRadius: "0px",
      maxWidth: "100%",
    },
  },
  container: {
    paddingLeft: "10%",
    [theme.breakpoints.between("sm", "md")]: {
      // paddingTop: "80px",
      // paddingLeft: "10%",
      // minHeight: "320px",
      // height: "max-content",
    },
    [theme.breakpoints.down("sm")]: {
      // maxWidth: "auto",
      width: "auto",
      padding: "0px",
      paddingTop: "57px",
      // paddingRight: "0px",
    },
  },

  activeTab: {
    background: colors.white,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "20px",
      paddingRight: "20px",
      display: "flex",
      justifyContent: "center",
    },
  },
  signup: {
    background: `${colors.black} !important`,
    color: `${colors.white} !important`,
    textTransform: "uppercase !important",
    marginTop: "20px !important",
    height: 40,
    width: '130px',
  },

  introContent: {
    background: colors.white,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "20px",
      paddingRight: "20px",
    },
  },
  introTabs: {
    background: colors.darkGrey,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "20px",
      paddingRight: "20px",
      display: "flex",
      justifyContent: "center",
    },
  },
}));
