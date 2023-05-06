import { Link } from "react-router-dom";

import { useCartContext } from "../context/CartContext";

export const FoodItem = ({ foodItem, hideButton }) => {
  const { state, dispatch } = useCartContext();

  const isPresentInCart = (foodId) =>
    state.cartItems.findIndex(({ id }) => id === foodId);

  return (
    <div className="menu-card">
      <img src={foodItem.image} alt={foodItem.name} width="200" height="150" />
      <p>Name: {foodItem.name}</p>
      <p>
        <span>Description:</span> {foodItem.description}
      </p>
      <p>Price: {foodItem.price}</p>
      <p>Delivery Time: {foodItem.delivery_time}</p>

      {!hideButton && isPresentInCart(foodItem.id) >= 0 ? (
        <Link to="/cart">
          <button>Go to Cart</button>
        </Link>
      ) : !hideButton ? (
        <button
          onClick={() =>
            dispatch({ type: "HANDLE_CART_ITEMS", payload: foodItem })
          }
        >
          Add to Cart
        </button>
      ) : null}
    </div>
  );
};
