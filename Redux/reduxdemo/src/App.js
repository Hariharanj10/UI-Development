import "./App.css";
import { Provider } from "react-redux";
import { IceCreamContainer } from "./components/IceCreamContainer";
import CakeContainer from "./components/CakeContainer";
import {store} from './redux/inputForm/RootReducer'
import InputComponent from "./components/InputComponent";
import DisplayFormData from "./components/DisplayFormData";
function App() {
  return (
    // <Provider store={store}>
    //   <CakeContainer></CakeContainer>
    //   <IceCreamContainer></IceCreamContainer>
    //   <div className="App"></div>
    // </Provider>
    
    <Provider store={store}>
      <InputComponent/>
      <DisplayFormData/>
    </Provider>
  );
}

export default App;
