import "./App.css";
import { Provider } from "react-redux";
import {store} from './redux/inputForm/RootReducer'
import InputComponent from "./components/InputComponent";
import DisplayFormData from "./components/DisplayFormData";
import User from "./components/User";
function App() {
  return (
    
    
    <Provider store={store}>
      {/* <InputComponent/>
      <DisplayFormData/> */}
      <User/>
    </Provider>
  );
}

export default App;
