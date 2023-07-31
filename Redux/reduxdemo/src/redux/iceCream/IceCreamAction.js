import { Add_IceCream, Cancel_IceCream } from "./IceTypes";
export const addIceCream = () => {
  return {
    type: Add_IceCream,
  };
};
export const cancelIceCream = () => {
  return {
    type: Cancel_IceCream,
  };
};
