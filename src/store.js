import { createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(
  rootReducer
  // DevTools extension removed
);

export default store;
