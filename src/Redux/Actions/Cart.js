export const AddToCart = (data) => {
  console.log("action data add to cart", data);
  return {
    type: "ADDTOCART",
    payload: data,
  };
};
