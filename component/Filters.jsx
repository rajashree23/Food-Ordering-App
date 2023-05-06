import { CHECKBOX, RADIO } from "../constants/filterConstants";
import { useMenuContext } from "../context/MenuContext";

export const Filters = () => {
  const { state, dispatch } = useMenuContext();
  return (
    <div>
      <h3>Filters:</h3>

      <label>
        <input
          placeholder="Search food here"
          value={state.filters.searchedFoodItem}
          onChange={(e) =>
            dispatch({ type: "HANDLE_SEARCH", payload: e.target.value })
          }
        />
      </label>

      {CHECKBOX.map((option) => (
        <label key={option.key}>
          <input
            type="checkbox"
            value={option.key}
            onChange={(e) =>
              dispatch({ type: "HANDLE_CHECKBOX", payload: e.target })
            }
            checked={state.filters.selectedCuisine.includes(option.key)}
          />
          {option.value}
        </label>
      ))}

      {RADIO.map((option) => (
        <label key={option.key}>
          <input
            type="radio"
            checked={state.filters.selectedSorting === option.value}
            value={option.value}
            onChange={(e) =>
              dispatch({ type: "HANDLE_SORTING", payload: e.target.value })
            }
          />
          {option.key}
        </label>
      ))}
    </div>
  );
};
