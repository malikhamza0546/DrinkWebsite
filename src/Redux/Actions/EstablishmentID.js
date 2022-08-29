export const EstablishmentID = (data) => {
  // console.log("action data EstablishmentID", data)
  return {
    type: "EstablishmentID",
    payload: data,
  };
};

export const RESET_ACTION = () => {
  return {
    type: "RESET",
  };
};
