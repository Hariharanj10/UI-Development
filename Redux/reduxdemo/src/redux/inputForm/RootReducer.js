import { combineReducers } from "redux";
import InputReducer from "./InputReducer";
import { createStore,applyMiddleware } from "redux";
import { userReducer } from "../user/userReducer";
import thunk from 'redux-thunk'
const rootReducer=combineReducers(
    {
        form:InputReducer,
        user:userReducer
    }
)
export const store =createStore(rootReducer,applyMiddleware(thunk))