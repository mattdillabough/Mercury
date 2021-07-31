import { TOGGLE_MODE } from "../actions";
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
        isDarkMode: !state.isDarkMode,
        mode: state.isDarkMode ? light : dark,
      };
    default:
      return state;
  }
};

export default modeReducer;
