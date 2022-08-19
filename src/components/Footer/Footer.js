import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState, useEffect } from "react";
import assets from "../../assets/assets";
import TextField from '@mui/material/TextField';
import InputAdornment from "@mui/material/InputAdornment";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "572px",
    height: "maxContent",
    width: " 100%",
    backgroundColor: " #1a1815",
    color: "#a8762f",
    paddingLeft: "10%",
    paddingRight: "10%",
    [theme.breakpoints.down("md")]: {
      display:"flex",
      // height: "100%",
      // justify: "center",
    },
  },
  logo: {
    [theme.breakpoints.down("md")]: {
      display:"flex",
      justifyContent:"center",
    }
  },

  company: {
    marginTop: "11px !important",
    [theme.breakpoints.down("md")]: {
      display:"grid",
      justifyContent:"center",
      marginLeft:"16px"
    }
    
  },
  heading:{
    [theme.breakpoints.down("md")]: {
      marginLeft:"16px"
    }
  },
  headingone:{
    [theme.breakpoints.down("md")]: {
      marginLeft:"32px"
    }
  },
  list:{
    [theme.breakpoints.down("md")]: {
      display:"flex",
      alignItems:"center",
      flexDirection:"column"
      
    }
  },
  inputWrapper: {
    width: '110%',
    backgroundColor: "#FFFFFF",
    borderColor: "#FAC476",
    borderRadius: 6,
    borderWidth: 0.8,
    
    // height: 40,
    // font-family: 'Poppins';
    // font-weight: 400;
    // font-size: 0.7rem;
  },
  bell: {
    // color: colors.white,
    width: 20,
    height: 10,
    paddingRight: 10
  },
  textField: {
    [theme.breakpoints.down("md")]: {
      // marginLeft: "80px",
      // margin: "auto",
      marginTop:"30px"
    },
    [theme.breakpoints.up("sm")]: {
      // marginLeft: "80px",
      paddingTop: "10px",
      margin: "auto",
      // borderColor: "#FAC476",
      // backgroundColor: "#FFFFFF",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("")
  return (
    <>
      <Grid container className={classes.container}
  >
        <Grid xs={12} sm={12} md={3} lg={3} item  className={classes.logo}>
          <img
            className="w-auto h-12 md:mt-12 -ml-1 mt-12 sm:mb-0 mb-20"
            src={assets.logo}
            alt=""
          />
        </Grid>

        <Grid
          xs={12}
          sm={12}
          md={3}
          lg={2}
          direction="column"
          justifyContent="center"
          item
          className={` ${classes.company}`}
        >
          <h2 className={`font-cabin font-bold  md:mt-12  text-lightGold text-lg mb-6 `}>
            COMPANY
          </h2>
          <ul className={`${classes.list} font-semibold text-sm`}>
            <li style={{ fontSize: 12 }} className="pb-3">Product</li>
            <li style={{ fontSize: 12 }} className="pb-3">Blog</li>
            <li style={{ fontSize: 12 }} className="pb-3">Support</li>
          </ul>
        </Grid>
        <Grid  
        xs={12}
          sm={12}
          md={3}
          lg={2}
          direction="column"
          justifyContent="center"
          item
          className={` ${classes.company}`}>
          <h2 className={`font-cabin font-bold text-lightGold text-lg md:mt-12 mt-8  mb-6 ${classes.heading}`}>
            FEATURES
          </h2>
          <ul className={`${classes.list} font-semibold text-sm`}>
            <li style={{ fontSize: 12 }} className="pb-3">Reservations</li>
            <li style={{ fontSize: 12 }} className="pb-3">iOS & Android Apps </li>
            <li style={{ fontSize: 12 }} className="pb-3">QR reader </li>
            <li style={{ fontSize: 12 }} className="pb-3">User management </li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={2} className={classes.company} direction="column"
          justifyContent="center">
          <h2 className={`font-cabin font-bold text-lightGold text-lg md:mt-12 mt-8  mb-6 ${classes.heading}`}>
            CONTACT US
          </h2>
          <ul className={`${classes.list} font-semibold text-sm `}>
            <li style={{ fontSize: 12 }} className="pb-3">info@atomthgmail.com</li>
            <li style={{ fontSize: 12 }} className="pb-3"> 1-800-200-300</li>
            <li style={{ fontSize: 12 }} className="pb-3">
              2118 Thornidge Cir.
              <br /> Syracuse, Connecticut. <br /> 35624
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={2} className={classes.company} direction="column"
          justifyContent="center">
          <h2 className={`font-cabin font-bold text-lightGold text-lg md:mt-12 mt-8 mb-6 ${classes.headingone}`}>
            STAY UP TO DATE
          </h2>
          <ul className={`${classes.list} font-semibold text-sm `}>
            <li style={{ fontSize: 12 }}>Subscribe to our newsletter</li>
          </ul>
          <div className={`w-full mt-3 ${classes.textField} `}>
           
            <TextField
              className={classes.inputWrapper}
              placeholder="Email"
              type="search"
              margin="normal"
              // variant="outlined"
              // label="Email"
              id="outlined-start-adornment"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              inputProps={{
                style: {
                  height: 10,
                  fontFamily: 'Cabin',
                  fontWeight: 500,
                  fontSize: '0.85rem',
                  color: "#FF9901",
                }
              }}
              InputLabelProps={{
                style: {
                  fontFamily: 'Cabin',
                  fontWeight: 500,
                  fontSize: '0.85rem',
                  color: "#FF9901"
                }
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <img src={assets.arrow_forward} style={{
                      width: 30,
                      height: 10,
                      paddingRight: 7
                    }} />
                  </InputAdornment>
                )
              }}

            />
          </div>

          {/* <input
            type="text"
            placeholder="Email"
            className="mt-3 w-full h-11 xs:w-5 rounded outline-none p-1.5 text-textDarkGrey"
          /> */}
        </Grid>

        <Grid xs={12} item className={classes.company}>
          <p className="mt-10 text-cabin font-semibold py-4 text-sm text-lightGold">
            © Copyright Atom Techworks.
          </p>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
