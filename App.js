import { Routes, Route } from "react-router-dom";
import { Header } from "./component/Header";
import { Cart } from "./pages/Cart";
import { Homepage } from "./pages/Homepage";
import { Menu } from "./pages/Menu";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
