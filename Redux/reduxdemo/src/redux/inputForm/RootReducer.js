import { combineReducers } from "redux";
import InputReducer from "./InputReducer";
import { createStore } from "redux";
const rootReducer=combineReducers(
    {
        form:InputReducer
    }
)
export const store =createStore(rootReducer)