import { Filters } from "../component/Filters";
import { FoodItem } from "../component/FoodItemCard";
import { useMenuContext } from "../context/MenuContext";

export const Menu = () => {
  const { isLoading, getFilteredItems } = useMenuContext();

  return (
    <div>
      <p>{isLoading && "Loading..."}</p>
      {!isLoading && (
        <>
          <Filters />
          <h3>Menu</h3>
          <div className="menu-container">
            {getFilteredItems.map((foodItem) => (
              <FoodItem key={foodItem.id} foodItem={foodItem} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
