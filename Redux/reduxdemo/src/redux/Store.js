import { createStore } from "redux";
import cakeReducer from "./cakes/CakeReducer";
import { iceCreamReducer } from "./iceCream/IceCreamReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

export const store = createStore(rootReducer);


