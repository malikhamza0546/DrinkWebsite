const INITIAL_STATE = {
  products: [],
  quantity: 0,
  total: 0,
};
export default function cartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADDTOCART":
      return {
        ...state,
        quantity: action.payload.quantity + 1,
        products: products.push(action.payload.products),
        total: (total += action.payload.price),
      };
    default:
      return state;
  }
}
