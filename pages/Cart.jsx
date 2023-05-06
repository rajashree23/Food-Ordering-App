import { FoodItem } from "../component/FoodItemCard";
import { useCartContext } from "../context/CartContext";

export const Cart = () => {
  const { state, dispatch, summary } = useCartContext();
  return (
    <div>
      <h3>Cart</h3>
      <p>
        <strong>
          {state.cartItems.length === 0 &&
            "Hungry? Go and add yummy food items from our delicious menu right now!!!"}
        </strong>
      </p>

      {state.cartItems.length > 0 && (
        <>
          <p>
            <strong>
              Total Delivery Time: {summary.totalDeliveryTime} minutes
            </strong>
          </p>
          <p>
            <strong>Total Price: Rs {summary.totalPrice.toFixed(2)}</strong>
          </p>
          <button
            onClick={() =>
              dispatch({
                type: "APPLY_DISCOUNT",
                payload: !state.applyDiscount ? 5 : null,
              })
            }
          >
            {state.applyDiscount ? "Remove discount" : "Apply Discount"}
          </button>
          <div className="menu-container">
            {state.cartItems.map((foodItem) => (
              <FoodItem key={foodItem.id} foodItem={foodItem} hideButton />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
