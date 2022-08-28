import { Grid } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
// import Events from "../../components/CalanderEvents/Events";
const ProfilePage = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <div className="w-screen h-screen signup-outer-wrapper relative overflow-x-hidden mt-14 mb-12">
        <h1 className={`${classes.card}`}>Busniess Setting</h1>
      </div>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Nunito",
    fontSize: "22px",
    fontWeight: "700",
  },
  subtitle: {
    fontFamily: "Nunito",
    fontSize: "14px",
    fontWeight: "400",
  },
  subtitle: {
    fontFamily: "Nunito",
    fontSize: "18px",
    fontWeight: "400",
  },
  signupTabs: {
    color: "white",
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: "14px",
    cursor: "pointer",
    marginBottom: "20px",
    background:
      "linear-gradient(0deg, var(--primary), var(--primary)), #FFFFFF",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0px",
    },
  },
  card: {
    borderRadius: "24px",
    marginBottom: "20px",
    [theme.breakpoints.down("sm")]: {
      borderRadius: "0px",
      marginBottom: "0px",
    },
  },
  signupWrapper: {
    width: "38rem",
    maxWidth: "80%",
    height: "max-content",
    overflowY: "visible",

    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "16px",
    marginBottom: "48px",
    marginTop: "60px",

    [theme.breakpoints.down("sm")]: {
      marginBottom: "48px",
    },
  },
}));
export default ProfilePage;
