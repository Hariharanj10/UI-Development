import { combineReducers } from "redux";
import InputReducer from "./InputReducer";
import { createStore, applyMiddleware } from "redux";
import { userReducer } from "../user/userReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { phoneNumReducer } from "../phoneNum/phoneReducer";
const rootReducer = combineReducers({
  form: InputReducer,
  user: userReducer,
  phoneNums: phoneNumReducer,
});
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
