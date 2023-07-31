import { Buy_Cake, Add_Cake } from "./CakeTypes";
export const buyCake = () => {
  return {
    type: Buy_Cake,
  };
};
export const addCake = () => {
  return {
    type: Add_Cake,
  };
};
