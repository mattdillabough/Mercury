import { TOGGLE_MODE } from "../actions/types";
import light from "../../themes/Light";
import dark from "../../themes/Dark";

const initialState = {
  mode: light,
  isDarkMode: false,
};

const modeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODE:
      return {
        ...state,
        mode: state.isDarkMode ? light : dark,
        isDarkMode: !isDarkMode,
      };
    default:
      return state;
  }
};

export default modeReducer;
