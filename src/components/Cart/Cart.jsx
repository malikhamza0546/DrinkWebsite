import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import assets from "../../assets/assets";
import TextField from "../../components/Forms/Input/TextField";
import Button from "../../components/Forms/Button/AuthButton";
// import "./signup.css";
import Google from "../../components/Forms/Button/Google";
import Apple from "../../components/Forms/Button/Apple";
import Facebook from "../../components/Forms/Button/Facebook";
import colors from "../../assets/colors";
import { makeStyles } from "@mui/styles";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { borderRadius } from "@mui/system";
import { getCartData } from "../../services/API";
import { AddToCart } from "../../Redux/Actions/Cart";
import { useDispatch } from "react-redux";
import { ContentPasteOffSharp } from "@mui/icons-material";

const data = [
  { name: "Rice" },
  { name: "Beans" },
  { name: "Fries" },
  { name: "Ceasear Salad" },
  { name: "Bread" },
  { name: "Mashed Potatoes" },
  { name: "Ice Cubes" },
  { name: "No Ice" },
];

const Cart = ({ ID, productName, productDescription, EstablishmentID }) => {
  // const product = ["food", "milk"];

  const classes = useStyles();
  const dispatch = useDispatch();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const theme = useTheme();
  const isXS = useMediaQuery(theme.breakpoints.down("sm"));
  const [data, setAPIData] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [addons, setAddons] = useState([]);
  const [arrayNew, setArrayNew] = useState([]);

  let navigate = useNavigate();
  const { state } = useLocation();
  const CartProductPayLoad = state?.payload;
  console.log("cart redux sent", state?.payload);

  const handleAddons = (e) => {
    console.log("e", e.target.value);
    if (e.target.checked) {
      addons.push(e.target.value);
    } else {
      var newArray = addons.filter((item) => {
        return item != e.target.value;
      });
      setAddons(newArray);
    }
  };

  console.log("ID in EstablishmentIDEstablishmentID", EstablishmentID);

  // const [counter, setCounter] = useState(0);
  const cartValueGetter = async () => {
    try {
      const response = await getCartData(ID);
      setAPIData(response?.data);
      console.log("response in cartValueGetter", response?.data);
    } catch (e) {
      console.log(" error in cartValueGetter", e);
    }
  };

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    const inner = {};
    inner["addons"] = addons;
    inner["count"] = quantity;
    inner["product"] = ID;

    console.log("inner from func", inner);

    dispatch(AddToCart({ arrayNew, quantity }));
    // dispatch({ type: "ProductCount", payload: quantity })
    dispatch({
      type: "Products",
      payload: {
        ProductAndCount: {
          Product: CartProductPayLoad,
          Count: quantity,
        },
      },
    });
    navigate("/order", {
      state: {
        products: {
          products: [inner],
        },
        establishmentID: state.EstablishmentID,
      },
    });
  };

  useEffect(() => {
    // getEstablishmentThunk();
    cartValueGetter();
  }, []);
  return (
    <div className="w-screen h-screen signup-outer-wrapper relative overflow-x-hidden mt-12 ">
      <div
        className="absolute my-12 z-10 bg-white overflow-clip mx-auto signup-wrapper left-0 top-0 bottom-0 right-0"
        style={{ background: "white" }}
      >
        {isXS ? (
          <Grid xs={12}>{<img src={assets.headerImage1} />}</Grid>
        ) : (
          <div className="h-16  grid grid-cols signup-tabs">
            <div
              className={`${"active"} text-xl flex justify-center items-center`}
            >
              Appetizers Copens
            </div>
          </div>
        )}

        <Grid className="p-6">
          <div className={`${classes.title} mb-2`}>{state.productName}</div>
          <div>{state.productDescripion}</div>
        </Grid>

        <Grid className="px-6">
          <div className={`${classes.subtitle} mb-2`}>Sides</div>
          {data.map((item) => (
            <div className="flex justify-between px-4">
              <div className={`${classes.name} `}>{item.name}</div>
              {/* <input className="mb-2 "type="checkbox"/>     */}
              <Checkbox
                {...label}
                sx={{ "& .MuiSvgIcon-root": { margin: 0, padding: 0 } }}
                onChange={handleAddons}
                value={item?.id}
              />
            </div>
          ))}
        </Grid>
        <div className="flex align-center justify-center py-3">
          <div
            className={classes.removeCart}
            // onClick={() => {
            //   if (counter > 0) setCounter(counter - 1);
            // }}
            onClick={() => handleQuantity("dec")}
          >
            -
          </div>
          <div className={classes.number}>{quantity}</div>
          <div
            className={classes.addCart}
            onClick={() => handleQuantity("inc")}
          >
            +
          </div>
        </div>
        <Grid container className="my-8">
          <Grid item xs={1} md={3}></Grid>
          <Grid item xs={10} md={6}>
            {/* <Button label="Add To Cart" onClick={() => alert("aa")} /> */}
            <button
              style={{ fontSize: 13, height: 45 }}
              className="flex bg-black w-full text-whiteColor font-bold py-2 px-4 rounded items-center"
              onClick={handleClick}
            >
              <span className="text-center m-auto">{"Add to Cart"}</span>
            </button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Cart;

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Nunito",
    fontSize: "22px",
    fontWeight: "700",
  },
  subtitle: {
    fontFamily: "Nunito",
    fontSize: "20px",
    fontWeight: "700",
  },
  name: {
    fontFamily: "Nunito",
    fontSize: "16px",
    fontWeight: "400",
  },
  detail: {
    fontFamily: "Nunito",
    fontSize: "16px",
    color: "#2B2B43",
  },
  removeCart: {
    border: "1px solid #000000",
    borderRadius: "6px 0px 0px 6px",
    width: "40px",
    height: "40px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  addCart: {
    border: "1px solid #000000",
    borderRadius: "0px 6px 6px 0px",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  number: {
    border: "1px solid #000000",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "10px",
    marginRight: "10px",
  },
  signupWrapper: {
    width: "38rem",
    maxWidth: "80%",
    height: "maxContent",
    overflowY: "visible",
    /* box-shadow: 0px 4px 4px rgb(0 0 0 / 25%), */
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "16px",
    marginBottom: "48px",
    marginTop: "120px",

    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      borderRadius: "0px",
      marginTop: "0px",
      marginBottom: "0px",
    },

    outerWrapper: {
      marginBottom: "20px",
    },
  },
}));
