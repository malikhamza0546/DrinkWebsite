export const login = (data) => {
  console.log("action data", data);
  return {
    type: "LOGIN",
    payload: data,
  };
};

export const forgotPassword = (data) => {
  return {
    type: "FORGOT_PASSWORD",
    payload: data,
  };
};

export const updatePassword = (data) => {
  return {
    type: "UPDATE_PASSWORD",
    payload: data,
  };
};

export const register = (data) => {
  return {
    type: "REGISTER",
    payload: data,
  };
};
