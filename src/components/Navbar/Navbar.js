import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import assets from "../../assets/assets";
import colors from "../../assets/colors";
import { makeStyles } from "@mui/styles";
import DrawerComp from "./Drawer";
import { useNavigate } from "react-router-dom";
import NavbarMenu from "./NavbarMenu";
import "./navbar.css";
import Icon from "../../assets/images/Icon.png";

const Navbar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const classes = useStyles();
  const token = localStorage.getItem("access");

  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const history = useNavigate();

  return (
    <>
      <AppBar style={{ background: "none", width: "100%", left: 0 }}>
        <Toolbar className={classes.appbar}>
          <img
            onClick={() => history("/")}
            className={classes.logo}
            src={assets.logo}
            alt="logo"
          />
          {isMatch ? (
            <div className={classes.mobileHeader}>
              <DrawerComp />
              <img
                className={classes.smLogo}
                onClick={() => history("/")}
                src={assets.logo}
                alt="logo"
              />

              <img src={Icon} className="imageClass" />
            </div>
          ) : (
            <>
              <div className={classes.listContainer}>
                <NavbarMenu />
                {/* <Tabs
                  sx={{
                    color: "#FFFFFF",
                    fontSize: "48px",
                  }}
                  // indicatorColor="secondary"
                  textColor="#FFFFFF"
                  value={value}
                  onChange={(e, value) => setValue(value)}
                >
                  <Tab
                    label="Explore"
                    onClick={() => history("/explore")}
                    sx={{
                      fontSize: "16px",
                      fontFamily: "Mulish",
                      fontWeight: 600,
                      color: "#FFFFFF",
                    }}
                  />
                  <Tab
                    label="Services >"
                    onClick={() => history("/services")}
                    sx={{
                      fontSize: "16px",
                      fontFamily: "Mulish",
                      fontWeight: 600,
                      color: "#FFFFFF",
                    }}
                  />
                  <Tab
                    label="FAQ"
                    onClick={() => history("/signup")}
                    sx={{
                      fontSize: "16px",
                      fontFamily: "Mulish",
                      fontWeight: 600,
                      color: "#FFFFFF",
                    }}
                  />
                </Tabs> */}
                {/* 
                <Button
                  sx={{
                    // marginLeft: "auto",
                    fontSize: "16px",
                    fontFamily: "Mulish",
                    fontWeight: 600,
                    marginRight: "50px",
                    marginLeft: "10px",
                  }}
                  onClick={() => history("/signin")}
                  variant="text"
                >
                  Login
                </Button> */}

                {token !== null ? (
                  <>
                    <div>
                      <img
                        className="rounded-full border-2 border-[#FF5F00] w-10 h-10"
                        src={assets.Reservation}
                      />
                    </div>

                    <Button
                      onClick={() => {
                        localStorage.clear();
                        history("/signin");
                      }}
                      sx={{
                        // marginLeft: "auto",
                        fontSize: "16px",
                        fontFamily: "Mulish",
                        fontWeight: 600,
                        marginRight: "50px",
                        marginLeft: "10px",
                      }}
                      // onClick={() => history("/signin")}
                      variant="text"
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <Button
                    sx={{
                      // marginLeft: "auto",
                      fontSize: "16px",
                      fontFamily: "Mulish",
                      fontWeight: 600,
                      marginRight: "50px",
                      marginLeft: "10px",
                    }}
                    onClick={() => history("/signin")}
                    variant="text"
                  >
                    Login
                  </Button>
                )}

                {token == null ? (
                  <Button
                    className={classes.signupBtn}
                    sx={{ color: colors.white }}
                    variant="contained"
                    onClick={() => history("/signup")}
                  >
                    SIGN UP
                  </Button>
                ) : (
                  ""
                )}
              </div>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: colors.dark,
    color: colors.white,
    display: "flex",
    paddingLeft: "10% !important",
    paddingRight: "10% !important",
    justifyContent: "space-between",
    fontFamily: "mulish",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "2% !important",
      paddingRight: "2% !important",
    },
  },
  logo: {
    display: "block",
    // width: "93px",
    marginLeft: "-9px",
    height: "64px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  smLogo: {
    display: "block",
    height: "64px",
    // margin: "auto",
    textAlign: "center",
  },
  listContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "32px",
    // [theme.breakpoints.up("xl")]: {
    //   marginRight: "142px",
    // },
  },
  listItem: {
    fontSize: "32px",
    fontFamily: "Mulish",
    fontWeight: 600,
    color: "#FFFFFF",
  },
  signupBtn: {
    width: "120px",
    text: "#FFFFFF",
    marginLeft: "10px",
    fontFamily: "Roboto",
    color: colors.white,
    fontWeight: 900,
    fontSize: "13px",
  },
  mobileHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
}));
