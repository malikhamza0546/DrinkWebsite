export const startLoader = (data) => {
  return {
    type: "START_LOADER",
    payload: data,
  };
};

export const stopLoader = () => {
  return {
    type: "STOP_LOADER",
  };
};
