import { UseSelector, useDispatch, useSelector } from "react-redux";
import { addIceCream, cancelIceCream } from "../redux/iceCream/IceCreamAction";
export const IceCreamContainer = () => {
  const numofIceCream = useSelector((state) => state?.iceCream?.numofIceCream);
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(cancelIceCream())}>BuyIceCream</button>
      <button onClick={() => dispatch(addIceCream())}>AddIceCream</button>
      <h2>NumofCakes {numofIceCream}</h2>
    </>
  );
};
