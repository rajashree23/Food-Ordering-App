export const cartReducer = (state, action) => {
  switch (action.type) {
    case "HANDLE_CART_ITEMS":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
case "APPLY_DISCOUNT":
    return {
        ...state,
        applyDiscount: action.payload,
      };
    default:
      return state;
  }
};
