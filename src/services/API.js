import axios from "axios";
const REACT_APP_API_URL = "https://pacific-brushlands-27461.herokuapp.com/v1";

export const getEstablishment = async () => {
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: `${REACT_APP_API_URL}/establishment/web`,
    })
      .then((res) => resolve(res))
      .catch((err) => {
        reject(err);
      });
  });
};

export const postFavourite = async (establishmentID) => {
  const token = localStorage.getItem("access");
  console.log("token in Post Favourite", token);
  return new Promise((resolve, reject) => {
    axios({
      method: "post",
      url: `${REACT_APP_API_URL}/establishment/user/favourite/${establishmentID}`,
      headers: {
        "x-access-token": token,
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => resolve(res))
      .catch((err) => {
        reject(err);
      });
  });
};

export const getProducts = async (establishmentID, category) => {
  console.log(establishmentID, category, " establishmentID, category,");
  const token = localStorage.getItem("access");
  console.log("token in Post Favourite", token);
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: `${REACT_APP_API_URL}/establishment/Products/${establishmentID}/${category}`,
      headers: {
        "x-access-token": token,
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => resolve(res))
      .catch((err) => {
        reject(err);
      });
  });
};

export const getCartData = async (productID) => {
  console.log(productID, " productID in getCartData ");
  const token = localStorage.getItem("access");
  console.log("token in Post Favourite", token);
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: `${REACT_APP_API_URL}/establishment/product/addons/${productID}`,
      headers: {
        "x-access-token": token,
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => resolve(res))
      .catch((err) => {
        reject(err);
      });
  });
};

export const getTimeSlot = async (establishmentID, date) => {
  console.log("data time slot", date, establishmentID);
  const token = localStorage.getItem("access");
  console.log("time slot token", token);
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: `${REACT_APP_API_URL}/establishment/slot/available/${establishmentID}/${date}`,

      headers: {
        "x-access-token": token,
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => resolve(res))
      .catch((err) => {
        reject(err);
      });
  });
};

export const postReservation = async (establishmentID, data) => {
  const token = localStorage.getItem("access");
  console.log("token in Post dataaaaaaaaaa", establishmentID.EstablishmentID);
  return new Promise((resolve, reject) => {
    axios({
      method: "post",
      url: `${REACT_APP_API_URL}/establishment/reservation/book/${establishmentID.EstablishmentID}`,
      data,
      headers: {
        "x-access-token": token,
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => resolve(res))
      .catch((err) => {
        reject(err);
      });
  });
};
