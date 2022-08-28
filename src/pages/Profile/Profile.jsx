import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import Profile from "../../components/Profile";
import Input from "../../components/FormInput/Input";
import { useForm } from "react-hook-form";
import assets from "../../assets/assets";
import Button from "../../components/Forms/Button/AuthButton";
import SaveButton from "../../components/Forms/Button/SaveButton";
import { getProfile } from "../../services/API";
import moment from "moment";
import { Grid, useMediaQuery, useTheme, Box } from "@mui/material";
import { UpdateProfile } from "../../services/API";
// import Events from "../../components/CalanderEvents/Events";
const ProfilePage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [profile, setProfile] = useState();
  const [Updateprofile, setUpdateprofile] = useState();
  const GetProfileGetter = async () => {
    try {
      const response = await getProfile();
      setProfile(response?.data);
      console.log("response in GetProfileGetter", response?.data);
    } catch (e) {
      console.log(e, " else Body Error");
    }
  };

  useEffect(() => {
    GetProfileGetter();
  }, []);

  const onSubmit = (data) => {
    console.log("data", data);
    UpdateProfile(data);
  };

  // const onSubmit = async (data) => {
  //   console.log("Profile Data", data);
  //   UpdateProfile(data);
  //   try {
  //     const response = await UpdateProfile(data);
  //     setUpdateprofile(response?.data);
  //     console.log("response in ProductGetter", response?.data);
  //   } catch (e) {
  //     console.log(e, " else Body Error");
  //   }
  // };

  return (
    <Grid className={classes.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          // spacing={8}
        >
          <Grid item>
            <Grid>
              <Input
                type="text"
                placeholder={"First Name"}
                name="firstName"
                value={profile?.firstName}
                validation={{ required: true, maxLength: 16 }}
                error={errors.exp_year}
                register={register}
                errorMessage={"Enter First Name"}
                className={`mb-4  ${classes.inputField}`}
              />
              <Input
                type="text"
                placeholder={"Sure Name"}
                value={profile?.surName}
                name="surName"
                validation={{ required: true, maxLength: 16 }}
                error={errors.exp_year}
                register={register}
                errorMessage={"Enter Sure Name"}
                className="mb-4"
              />
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Input
                type="text"
                placeholder={"Date of Birth"}
                name="dob"
                value={moment(profile?.dob).format("YYYY-MM-DD")}
                validation={{ required: true, maxLength: 16 }}
                error={errors.exp_year}
                register={register}
                errorMessage={"Enter Date of Birth"}
                className="mb-4"
              />
              <Input
                type="text"
                placeholder={"Phone Number"}
                name="phoneNumber"
                value={profile?.phoneNumber}
                validation={{ required: true, maxLength: 16 }}
                error={errors.exp_year}
                register={register}
                errorMessage={"Enter Phone Number"}
                className="mb-4"
              />
            </Grid>
          </Grid>
          <Grid item>
            {/* <Grid className={classes.editOuter}>
              <img className={classes.image} src={assets.guide1} />

              <div className={classes.edit}>
                <div>Edit</div>
              </div>
            </Grid> */}
          </Grid>
        </Grid>
        {/* <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid>
            
            
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            ></Grid>
          </Grid>

          

          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={4}
          >
            <Grid item xs={6} md={6} lg={3}>
              <Box>
                <SaveButton label="Edit" />
              </Box>
            </Grid>
            <Grid item xs={6} md={6} lg={3}>
              <Box>
                <Button label="Save Changes" />
              </Box>
            </Grid>
          </Grid>
        </Grid> */}
      </form>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  editOuter: {
    position: "relative",
    borderRadius: 12,
  },

  edit: {
    width: "100%",
    backgroundColor: "rgba(248, 173, 63, 0.5)",
    height: 40,
    position: "absolute",
    marginTop: -40,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    color: "#FFFF",
    fontFamily: "Nunito",
    fontSize: "18px",
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: "140px",
    width: "140",
    borderRadius: 12,
  },
  title: {
    fontFamily: "Nunito",
    fontSize: "24px",
    fontWeight: "700",
  },
  inputField: {
    width: 400,
    marginBottom: 20,
  },
  detail: {
    fontFamily: "Nunito",
    fontSize: "16px",
    color: "#2B2B43",
  },
  address: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "22%",
    paddingRight: "22%",
    background: "#ffff",
    paddingBottom: "60px",
    paddingTop: "10%",

    [theme.breakpoints.down("sm")]: {
      // paddingTop: "0px",
      paddingLeft: "12%",
      paddingRight: "12%",
    },
    // [theme.breakpoints.between("sm", "md")]: {
    //   paddingTop: "90px",
    // },
  },

  buttonActive: {
    width: "100%",
    height: "40px",
    fontFamily: "Nunito",
    fontWeight: 900,
    fontSize: "13px",
    [theme.breakpoints.down("sm")]: {
      borderRadius: "0px",
    },
  },
  buttonDisabled: {
    width: "100%",
    fontFamily: "Nunito",
    fontWeight: 900,
    fontSize: "13px",
    backgroundColor: "#EDEEF2",
  },
  disable: {
    backgroundColor: "red",
  },

  font: {
    fontFamily: "Nunito",
  },
  item: {
    minWidth: "100px",
    [theme.breakpoints.down("sm")]: {
      minWidth: "20px",
    },
  },
}));

export default ProfilePage;
