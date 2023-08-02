import { combineReducers } from "redux";
import InputReducer from "./InputReducer";
import { createStore } from "redux";
import { userReducer } from "../user/userReducer";
const rootReducer=combineReducers(
    {
        form:InputReducer,
        user:userReducer
    }
)
export const store =createStore(rootReducer)