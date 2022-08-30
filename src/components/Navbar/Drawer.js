import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Grid,
  useTheme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import colors from "../../assets/colors";
import logo_drawer from "../../assets/images/logo_drawer.png";
import assets from "../../assets/assets";

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const classes = useStyles();
  const history = useNavigate();
  const theme = useTheme();
  const token = localStorage.getItem("access");

  return (
    <>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          className={`pb-12 ${classes.drawerMain}`}
        >
          <img
            src={logo_drawer}
            style={{ width: "100px", height: "100px", borderRadius: "50%" }}
            className="mt-12"
          />
          <div className="text-base font-semibold mt-1">Drink Mobile</div>
          <div className="font-semibold text-xs mt-1 ">
            info@getdrinkapp.com
          </div>
        </Grid>

        <List className={`${classes.drawer} `}>
          <ListItemButton
            onClick={() => {
              history("/");
              setOpenDrawer(false);
            }}
          >
            {" "}
            <ListItemIcon>
              <img src={assets.homeIcon} className="ml-4" />
            </ListItemIcon>
            <ListItemText className="font-nunito font-semibold text-base text-black">
              Home
            </ListItemText>
          </ListItemButton>

          <ListItemButton
            onClick={() => {
              history("/explore");
              setOpenDrawer(false);
            }}
          >
            {" "}
            <ListItemIcon>
              <img src={assets.explore} className="ml-4" />
            </ListItemIcon>
            <ListItemText className="font-nunito font-semibold text-base text-black">
              Explore
            </ListItemText>
          </ListItemButton>

          {token !== null && (
            <>
              <ListItemButton
                onClick={() => {
                  history("/order-history");
                  setOpenDrawer(false);
                }}
              >
                <ListItemIcon>
                  <img src={assets.orderIcon} className="ml-4" />
                </ListItemIcon>
                <ListItemText className="font-nunito font-semibold text-base ">
                  Orders
                </ListItemText>
              </ListItemButton>

              <ListItemButton
                onClick={() => {
                  history("/services");
                  setOpenDrawer(false);
                }}
              >
                <ListItemIcon>
                  <img src={assets.reservationIcon} className="ml-4" />
                </ListItemIcon>
                <ListItemText className="font-nunito font-semibold text-base ">
                  Reservation
                </ListItemText>
              </ListItemButton>

              <ListItemButton
                onClick={() => {
                  history("/wallet");
                  setOpenDrawer(false);
                }}
              >
                <ListItemIcon>
                  <img src={assets.walletIcon} className="ml-4" />
                </ListItemIcon>
                <ListItemText className="font-nunito font-semibold text-base ">
                  Wallet
                </ListItemText>
              </ListItemButton>
            </>
          )}

          <ListItemButton
          // onClick={() => {
          //   history("/signup");
          //   setOpenDrawer(false);
          // }}
          >
            <ListItemIcon>
              <img src={assets.settingIcon} className="ml-4" />
            </ListItemIcon>
            <ListItemText className="font-nunito font-semibold text-base ">
              Settings
            </ListItemText>
          </ListItemButton>

          {token !== null ? (
            <ListItemButton
              onClick={() => {
                history("/");
                setOpenDrawer(false);
                localStorage.clear();
              }}
            >
              <ListItemIcon>
                <div className="ml-4 pt-32" />
              </ListItemIcon>
              <ListItemText className="font-nunito font-semibold text-base ">
                Sign Out
              </ListItemText>
            </ListItemButton>
          ) : (
            <>
              {/* <ListItemButton
                onClick={() => {
                  history("/signin");
                  setOpenDrawer(false);
                }}>
                {" "}
                <ListItemIcon>
                  <div className=" pt-32" />
                </ListItemIcon>
                <ListItemText className="font-nunito font-semibold text-base text-[#FF5F00]">
                  Sign In
                </ListItemText>
              </ListItemButton> */}
              <ListItemButton
                onClick={() => {
                  history("/signin");
                  setOpenDrawer(false);
                }}
              >
                {" "}
                <ListItemIcon>
                  <img src={assets.userAdd} className="ml-4" />
                </ListItemIcon>
                <ListItemText className="font-nunito font-semibold text-base text-[#FF5F00]">
                  Sign In
                </ListItemText>
              </ListItemButton>

              <ListItemButton
                onClick={() => {
                  history("/signup");
                  setOpenDrawer(false);
                }}
              >
                {" "}
                <ListItemIcon>
                  <img src={assets.userAdd} className="ml-4" />
                </ListItemIcon>
                <ListItemText className="font-nunito font-semibold text-base text-[#FF5F00]">
                  Sign Up
                </ListItemText>
              </ListItemButton>
              {/* <ListItemButton style={{ marginTop: 5 }}
                onClick={() => {
                  history("/signin");
                  setOpenDrawer(false);
                }}>
                <ListItemIcon>
                  <div className=" pt-32" />
                </ListItemIcon>
                <ListItemText className="font-nunito font-semibold text-base text-[#FF5F00]">
                  Sign Up
                </ListItemText>
              </ListItemButton> */}
              {/* <ListItemButton
                onClick={() => {
                  history("/signup");
                  setOpenDrawer(false);
                }}
              >
                <ListItemText className="font-nunito font-semibold text-base text-[#FF5F00]">
                  Sign Up
                </ListItemText>
              </ListItemButton> */}
            </>
          )}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <AiOutlineMenu color="white" />
      </IconButton>
    </>
  );
};

export default DrawerComp;

const useStyles = makeStyles((theme) => ({
  drawerMain: {
    width: "70vw",
    height: "60vh",
  },
  drawer: {
    width: "70vw",
    height: "100vh",
    // background: colors.lightWhite,
    color: colors.dark,
    [theme.breakpoints.up("sm")]: {
      width: "40vw",
    },
  },
}));
