import { createStore, combineReducers } from "redux";
import modeReducer from "./reducers/modeReducer";

const rootReducer = combineReducers({
  mode: modeReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;