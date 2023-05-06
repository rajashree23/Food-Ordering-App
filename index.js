import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { CartContextProvider } from "./context/CartContext";
import { MenuContextProvider } from "./context/MenuContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Router>
    <MenuContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </MenuContextProvider>
  </Router>
);
