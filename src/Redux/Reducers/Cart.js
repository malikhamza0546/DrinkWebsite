// const INITIAL_STATE = {
//   products: [],
//   quantity: 0,
//   total: 0,
// };
// export default function cartReducer(state = INITIAL_STATE, action) {
//   switch (action.type) {
//     case "ADDTOCART":
//       return {
//         ...state,
//         quantity: action.payload.quantity + 1,
//          state.products.push(action.payload.products),
//         total: (total += action.payload.price),
//       };
//     default:
//       return state;
//   }
// }

const initialState = {
  products: [],
  quantity: 0,
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADDTOCART":
      return {
        ...state,
        quantity: state.quantity + 1,
        products: [
          ...state.products,
          {
            // id: action.payload.id,
            // name: action.payload.name,
            // brand: action.payload.brand,
            // quantity: action.payload.quantity,
          },
        ],
      };
    default:
      return state;
  }
}
