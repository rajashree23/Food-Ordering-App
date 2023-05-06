export const menuReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA_FROM_API":
      return {
        ...state,
        menu: [...action.payload],
        isLoading: false,
      };
    case "HANDLE_SEARCH":
      return {
        ...state,
        filters: {
          ...state.filters,
          searchedFoodItem: action.payload,
        },
      };
    case "HANDLE_SORTING":
      return {
        ...state,
        filters: {
          ...state.filters,
          selectedSorting: action.payload,
        },
      };

    case "HANDLE_CHECKBOX":
      const cuisine = action.payload.value;
      const isChecked = action.payload.checked;

      if (isChecked) {
        return {
          ...state,
          filters: {
            ...state.filters,
            selectedCuisine: [...state.filters.selectedCuisine, cuisine],
          },
        };
      } else {
        return {
          ...state,
          filters: {
            ...state.filters,
            selectedCuisine: state.filters.selectedCuisine.filter(
              (filterValue) => filterValue !== cuisine
            ),
          },
        };
      }

    default:
      return state;
  }
};
