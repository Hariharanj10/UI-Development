
import { Buy_Cake,Add_Cake } from "./cakeTypes";
const intialState = {
  numofCakes: 10,
};
const cakeReducer = (state = intialState, action) => {
  switch (action.type) {
    case Buy_Cake:
      return {
        ...state,
        numofCakes: state.numofCakes - 1,
      };
    case Add_Cake:
      return {
        ...state,
        numofCakes: state.numofCakes + 1,
      };
    default:
      return state;
  }
};
export default cakeReducer;
