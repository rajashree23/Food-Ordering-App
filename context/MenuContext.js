import { createContext, useContext, useEffect, useReducer } from "react";

import { fakeFetch } from "../api/fakeFetch";
import { menuReducer } from "../reducer/MenuReducer";

const fetchMenu = async (dispatch) => {
  try {
    const {
      status,
      data: { menu },
    } = await fakeFetch("https://example.com/api/menu");
    if (status === 200) {
      dispatch({ type: "SET_DATA_FROM_API", payload: menu });
    }
  } catch (err) {
    console.log(err);
    setIsLoading(true);
  }
};
const applyFilters = (state) => {
  let foodItems = [...state.menu];

  //filtering checkbox items
  if (state.filters.selectedCuisine.length)
    foodItems = foodItems.filter((foodItem) =>
      state.filters.selectedCuisine.every((f) => foodItem[f])
    );

  //filtering input field items
  if (state.filters.searchedFoodItem)
    foodItems = foodItems.filter((foodItem) =>
      foodItem.name
        .toLowerCase()
        .includes(state.filters.searchedFoodItem.toLowerCase())
    );

  //filtering radio button
  if (state.filters.selectedSorting)
    foodItems = [...foodItems].sort((a, b) =>
      state.filters.selectedSorting === "ascending"
        ? a.price - b.price
        : b.price - a.price
    );

  return foodItems;
};

const MenuContext = createContext();

export const MenuContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(menuReducer, {
    menu: [],
    isLoading: true,
    filters: {
      searchedFoodItem: "",
      selectedSorting: "",
      selectedCuisine: [],
    },
  });

  useEffect(() => {
    fetchMenu(dispatch);
  }, []);

  if(state.isLoading) {
    return <p>Loading menu...</p>
  }

  const getFilteredItems = applyFilters(state);

  return (
    <MenuContext.Provider
      value={{
        state,
        dispatch,
        getFilteredItems,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => useContext(MenuContext);
