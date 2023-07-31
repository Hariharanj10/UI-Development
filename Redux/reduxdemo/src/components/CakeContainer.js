import { connect, useSelector } from "react-redux";
import {buyCake,addCake} from "../redux/cakes/CakeAction";
import { UseSelector,useDispatch } from "react-redux";
const CakeContainer = () => {
    const numofCakes=useSelector(state =>state.cake.numofCakes)
    const dispatch=useDispatch()
  return (
    <>
      <button onClick={()=>dispatch(buyCake())}>Buycake</button>
      <button onClick={()=>dispatch(addCake())}>AddCake</button>
      <h2>NumofCakes {numofCakes}</h2>
    </>
  );
};
// const mapStateToProps = (state) => {
//   return {
//     numofCakes: state.numofCakes,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     buyCake: () => dispatch(buyCake()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
export default CakeContainer;