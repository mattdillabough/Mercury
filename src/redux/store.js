import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import modeReducer from "./reducers/modeReducer";

const rootReducer = combineReducers({
  modeReducer,
});

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;
