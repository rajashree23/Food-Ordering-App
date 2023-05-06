import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/CartReducer";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    cartItems: [],
    applyDiscount: null,
  });

  const summary = state.cartItems.reduce(
    (priceAndDelivery, { delivery_time, price }) => {
      priceAndDelivery.totalDeliveryTime += delivery_time;
      priceAndDelivery.totalPrice += price;
      return priceAndDelivery;
    },
    { totalDeliveryTime: 0, totalPrice: state.applyDiscount ?? 0 }
  );

  return (
    <CartContext.Provider
      value={{
        state,
        summary,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
