import {
  FETCH_PHONE_REQUEST,
  FETCH_PHONE_SUCCESS,
  FETCH_PHONE_ERROR,
} from "./phoneTypes";
const initialState = {
  phoneNums: [],
  loading: false,
  error: "",
};
export const phoneNumReducer = (state = initialState, action) => {
  switch (action?.type) {
    case FETCH_PHONE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PHONE_SUCCESS:
      return {
        ...state,
        loading: false,
        phoneNums: action?.payload,
      };
    case FETCH_PHONE_ERROR:
      return {
        ...state,
        loading: false,
        error: action?.payload,
        phoneNums: [],
      };
    default:
      return state;
  }
};
