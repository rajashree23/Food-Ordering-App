import { Link } from "react-router-dom";

export const Homepage = () => {
  return (
    <div>
      <h1>Welcome to neoG Food Ordering App</h1>
      <Link to="/menu">
        <button> Go to Menu</button>
      </Link>
    </div>
  );
};
