import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Grid
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import colors from "../../assets/colors";
import logo_drawer from "../../assets/images/logo_drawer.png"

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const classes = useStyles();
  const history = useNavigate();
  return (
    <>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Grid container
          direction="column"
          justifyContent="center"
          alignItems="center"
        className={`pb-12 ${classes.drawerMain}`}

        >
          <img src={logo_drawer} style={{ width: '100px', height: '100px', borderRadius: "50%" }} className="mt-12" />
          <div className="text-base font-semibold mt-1">Drink Mobile</div>
          <div className="font-semibold text-xs mt-1 ">info@getdrinkapp.com</div>
        </Grid>
        <List className={`${classes.drawer}`} >

          <ListItemButton
            onClick={() => {
              history("/");
              setOpenDrawer(false);
            }}
          >
            <ListItemText className="ml-8">Home</ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              history("/explore");
              setOpenDrawer(false);
            }}
          >
            <ListItemText className="ml-8">Explore</ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              history("/services");
              setOpenDrawer(false);
            }}
          >
            <ListItemText className="ml-8">Services</ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              history("/signup");
              setOpenDrawer(false);
            }}
          >
            <ListItemText className="ml-8">FAQ</ListItemText>
          </ListItemButton>

          <ListItemButton
            onClick={() => {
              history("/signup");
              setOpenDrawer(false);
            }}
          >
            <ListItemText className="ml-8">Login</ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              history("/signup");
              setOpenDrawer(false);
            }}
          >
            <ListItemText className="ml-8">Sign Up</ListItemText>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <AiOutlineMenu color="white" />
      </IconButton>
    </>
  );
};

export default DrawerComp;

const useStyles = makeStyles(() => ({
  drawerMain:{
    width:"70vw",
    height: "100vh",

  },
  drawer: {
    width: "70vw",
    height: "100vh",
    // background: colors.lightWhite,
    color: colors.dark,
  },
}));
