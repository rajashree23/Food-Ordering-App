import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

export const Header = () => {
  const { state } = useCartContext();
  return (
    <nav>
      <NavLink to="/" className="headers">
        Home
      </NavLink>
      <NavLink to="/menu" className="headers">
        Menu
      </NavLink>
      <NavLink to="/cart" className="headers">
        Cart({state.cartItems.length})
      </NavLink>
    </nav>
  );
};
