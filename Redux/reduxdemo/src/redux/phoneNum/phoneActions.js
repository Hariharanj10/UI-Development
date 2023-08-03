import axios from "axios";
import {
  FETCH_PHONE_REQUEST,
  FETCH_PHONE_SUCCESS,
  FETCH_PHONE_ERROR,
} from "./phoneTypes";
export const fetchPhoneApiRequest = () => {
  return {
    type: FETCH_PHONE_REQUEST,
  };
};
export const fetchPhoneApiSuccess = (phoneNums) => {
  return {
    type: FETCH_PHONE_SUCCESS,
    payload: phoneNums,
  };
};
export const fetchPhoneApiError = (err) => {
  return {
    type: FETCH_PHONE_ERROR,
    payload: err,
  };
};
const URL =
  "https://gist.githubusercontent.com/devhammed/78cfbee0c36dfdaa4fce7e79c0d39208/raw/07df5ed443941c504c65e81c83e6313473409d4c/countries.json";
export const apiRequest = () => {
  return async (dispatch) => {
    dispatch(fetchPhoneApiRequest());
    try {
      const response = await axios.get(URL);
      const phoneNums = response?.data;
      dispatch(fetchPhoneApiSuccess(phoneNums));
    } catch (error) {
      const err = error?.message;
      dispatch(fetchPhoneApiError(err));
    }
  };
};
