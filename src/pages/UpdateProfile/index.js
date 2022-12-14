import React, { useState, useEffect, useRef } from "react";
import "./update.css";

import { makeStyles } from "@mui/styles";

import Input from "../../components/FormInput/Input";
import { useForm } from "react-hook-form";
import assets from "../../assets/assets";
import Button from "../../components/Forms/Button/AuthButton";
import SaveButton from "../../components/Forms/Button/SaveButton";
import moment from "moment";
import { Grid, useMediaQuery, useTheme, Box } from "@mui/material";
import { UpdateProfile, UpdateProfilePicture, getProfile } from "../../services/API";
import ProductCard from "../../components/Product/ProductCard";

const UpdateProfilePage = () => {
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
  const [imageState, setImageState] = useState();
  const [dob, setDob] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [name, setName] = useState(
    profile?.firstName && profile?.firstName ? profile?.firstName : ""
  );

  const [sirName, setSirName] = useState(
    profile?.surName && profile?.surName ? profile?.surName : ""
  );

  function onChangeName(event) {
    setName(event.target.value); //update your value here
  }
  function onChangeSirName(event) {
    setSirName(event.target.value); //update your value here
  }
  function onChangePhone(event) {
    setPhoneNumber(event.target.value); //update your value here
  }
  function onChangeDob(event) {
    setDob(event.target.value); //update your value here
  }

  console.log("value infield", sirName);
  const GetProfileGetter = async () => {
    try {
      const response = await getProfile();
      setProfile(response?.data);
      setName(response?.data?.firstName);
      setSirName(response?.data?.surName);

      console.log("response in GetProfileGetter", response);
    } catch (e) {
      console.log(e, " else Body Error");
    }
  };

  const handleImage = async (e) => {
    let formData = new FormData();
    console.log("formData", formData);
    console.log("this is e", e.target.files[0]);
    if (e.target && e.target.files[0]) {
      // setImageState(e.target.files[0])
      setImageState(URL.createObjectURL(e.target.files[0]));
      formData.append("profilePic", e.target.files[0]);
    }
    console.log("this is formData", formData);
    try {
      const response = await UpdateProfilePicture(formData);
      console.log(response, "Response in handle Change");
      GetProfileGetter();
    } catch (e) {
      console.log(e, "Error");
    }
  };

  const hiddenFileInput = useRef(null);

  const handleClick = (e) => {
    hiddenFileInput.current.click();
  };

  console.log("hidden file input", hiddenFileInput);

  useEffect(() => {
    GetProfileGetter();
  }, []);

  const onSubmit = (data) => {
    console.log("data", data);
    UpdateProfile(data);
  };
  const [admin, setAdmin] = useState(true);

  return (
    <div className="w-screen h-screen signup-outer-wrapper relative overflow-x-hidden mt-12">
      <div
        className={`${classes.signupWrapper} absolute my-12 z-10 bg-white overflow-clip mx-auto  left-0 top-0 bottom-0 right-0`}
        style={{ background: "white" }}
      >
        <div className="h-16 grid grid-cols-1 signup-tabs">
          <div
            className={`${admin && "active"} flex justify-center items-center`}
            onClick={() => setAdmin(true)}
          >
            Profile
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center justify-around flex-col md:flex-row px-4">
            <div className="sm:px-8 px-2">
              <div>
                <Input
                  type="text"
                  placeholder={"First Name"}
                  name="firstName"
                  value={name}
                  onChange={onChangeName}
                  validation={{ required: true, maxLength: 16 }}
                  error={errors.exp_year}
                  register={register}
                  errorMessage={"Enter First Name"}
                  className={`mb-4  ${classes.inputField}`}
                />
                <Input
                  type="text"
                  placeholder={"Sure Name"}
                  value={sirName}
                  onChange={onChangeSirName}
                  name="surName"
                  validation={{ required: true, maxLength: 16 }}
                  error={errors.exp_year}
                  register={register}
                  errorMessage={"Enter Sure Name"}
                  className={`mb-4  ${classes.inputField}`}
                />
              </div>
              <div className="flex items-center justify-between">
                <Input
                  type="text"
                  placeholder={"Date of Birth"}
                  name="dob"
                  value={dob}
                  onChange={onChangeDob}
                  //   value={moment(profile?.dob).format("YYYY-MM-DD")}
                  validation={{ required: true, maxLength: 16 }}
                  error={errors.exp_year}
                  register={register}
                  errorMessage={"Enter Date of Birth"}
                  className={`mb-4  ${classes.inputField}`}
                />
                <Input
                  type="text"
                  placeholder={"Phone Number"}
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={onChangePhone}
                  validation={{ required: true, maxLength: 16 }}
                  error={errors.exp_year}
                  register={register}
                  errorMessage={"Enter Phone Number"}
                  className={`mb-4  ${classes.inputField}`}
                />
              </div>
            </div>

            {/* test */}
            <input
              multiple
              accept="image/*"
              type="file"
              name="image"
              ref={hiddenFileInput}
              onChange={handleImage}
              style={{ display: "none" }}
            />

            {/* <img src={imageState} className={`${classes.image} `} /> */}

            {/* end */}
            <div className={classes.editOuter}>
              <img
                className={`${classes.image} `}
                src={profile?.image || assets.blackLogo}
              />
              <div className={classes.edit} onClick={() => handleClick()}>
                <div>Edit</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center mt-8 px-12">
            <div>
              <button
                style={{ fontSize: 13, height: 45, border: "2px solid black" }}
                className=" bg-white  w-full text-whiteColor font-bold py-2 px-4 rounded items-center sm:w-40 w-32 mr-4"
              >
                <span className="text-center m-auto text-black">Edit</span>
              </button>
            </div>

            <div>
              <button
                style={{ fontSize: 13, height: 45 }}
                className=" bg-black w-full text-whiteColor font-bold py-2 px-4 rounded items-center sm:w-40 w-32 ml-4"
              >
                <span className="text-center m-auto">Save</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfilePage;

const useStyles = makeStyles((theme) => ({
  editOuter: {
    position: "relative",
    borderRadius: 12,
    maxWidth: "300px",
    minWidth: "300px",
  },

  edit: {
    cursor: "pointer",
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
    overflow: "hidden",
  },
  image: {
    height: "170px",
    width: "100%",
    // width: "300px",
    borderRadius: 12,
  },
  title: {
    fontFamily: "Nunito",
    fontSize: "24px",
    fontWeight: "700",
  },
  inputField: {
    width: "100%",
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
  signupWrapper: {
    width: "58rem",
    maxWidth: " 80%",
    height: "max-content",
    overflowY: "visible",
    /* box-shadow: 0px 4px 4px rgb(0 0 0 / 25%), */
    boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "16px",
    paddingBottom: "20px",
  },
}));
