import { Add_IceCream, Cancel_IceCream } from "./IceTypes";
const initialState = {
  numofIceCream: 10,
};
export const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case Add_IceCream:
      return {
        ...state,
        numofIceCream: state.numofIceCream + 1,
      };
    case Cancel_IceCream:
      return {
        ...state,
        numofIceCream: state.numofIceCream - 1,
      };
    default:
      return state;
  }
};
