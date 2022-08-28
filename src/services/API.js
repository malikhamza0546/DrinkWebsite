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
// 	console.log(productID, " productID in getCartData ")
// 	const token = localStorage.getItem("access")
// 	console.log("token in Post Favourite", token)
// 	return new Promise((resolve, reject) => {
// 		axios({
// 			method: "get",
// 			url: `${REACT_APP_API_URL}/establishment/product/addons/${productID}`,
// 			headers: {
// 				"x-access-token": token,
// 				Authorization: `Bearer ${token}`,
// 			},
// 		})
// 			.then((res) => resolve(res))
// 			.catch((err) => {
// 				reject(err)
// 			})
// 	})
// }

export const getStripeToken = async (cardDetails) => {
  const token = localStorage.getItem("access");
  console.log("token in Post Favourite", token);
  return new Promise((resolve, reject) => {
    axios({
      method: "post",
      url: `${REACT_APP_API_URL}/users/payment/get-token`,
      headers: {
        "x-access-token": token,
        Authorization: `Bearer ${token}`,
      },
      data: cardDetails,
    })
      .then((res) => resolve(res))
      .catch((err) => {
        reject(err);
      });
  });
};

export const addVicaCardToCustm = async (cardDetails) => {
  const token = localStorage.getItem("access");
  console.log("token in Post Favourite", token);
  return new Promise((resolve, reject) => {
    axios({
      method: "post",
      url: `${REACT_APP_API_URL}/users/payment/stripe`,
      headers: {
        "x-access-token": token,
        Authorization: `Bearer ${token}`,
      },
      data: cardDetails,
    })
      .then((res) => resolve(res))
      .catch((err) => {
        reject(err);
      });
  });
};

export const cardDetailsShow = async () => {
  const token = localStorage.getItem("access");
  console.log("token in cardDetailsShow", token);
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: `${REACT_APP_API_URL}/users/payment`,
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

export const getExploreCardData = async (maxNum, PageNumber, catagory) => {
  const token = localStorage.getItem("access");
  console.log("catagory getExploreCardData", catagory);
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      //   url: `${REACT_APP_API_URL}/establishment/web?limit=${
      //     maxNum || null
      //   }&page=${PageNumber || null}&catagory=${catagory || null}`,
      url: `${REACT_APP_API_URL}/establishment/web?limit=${maxNum}&page=${PageNumber}&category=${catagory}`,
    })
      .then((res) => resolve(res))
      .catch((err) => {
        reject(err);
      });
  });
};

export const postSocailAccount = async (Data) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "post",
      url: `${REACT_APP_API_URL}/auth/social-media-auth/customer`,
      data: Data,
    })
      .then((res) => resolve(res))
      .catch((err) => {
        reject(err);
      });
  });
};

export const postOrder = async (establishmentID, data) => {
  const token = localStorage.getItem("access");
  console.log("token in Post dataaaaaaaaaa for order", establishmentID);
  return new Promise((resolve, reject) => {
    axios({
      method: "post",
      url: `${REACT_APP_API_URL}/order/establishment/${establishmentID}`,
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

export const OrderHistoryApi = async () => {
  const token = localStorage.getItem("access");
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: `${REACT_APP_API_URL}/order/history`,
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

export const postTip = async (ID, percentage, data) => {
  const token = localStorage.getItem("access");
  console.log(ID, "ID", percentage, "percentage", data, "data");
  return new Promise((resolve, reject) => {
    axios({
      method: "post",
      url: `${REACT_APP_API_URL}/order/tip/${ID}/${percentage}`,
      data: data,
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

export const getProfile = async () => {
  const token = localStorage.getItem("access");
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: `${REACT_APP_API_URL}/users/manage/profile`,
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

export const UpdateProfile = async (data) => {
  console.log("data from api", data);
  const token = localStorage.getItem("access");
  return new Promise((resolve, reject) => {
    axios({
      method: "post",
      url: `${REACT_APP_API_URL}/users/manage/profile`,
      data: data,
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

export const UpdateProfilePicture = async (data) => {
  console.log("data from api", data);
  const token = localStorage.getItem("access");
  return new Promise((resolve, reject) => {
    axios({
      method: "post",
      url: `${REACT_APP_API_URL}/users/profile/pic`,
      data: data,
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
