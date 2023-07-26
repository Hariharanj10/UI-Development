import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SignIn from "./signIn";
import Contact from "./contactus";
import About from "./about";
import Header from "./Header";
import Home from "./home";
import "./App.css";
import CrudComponent from "./CrudComponent";
function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<CrudComponent/>}/>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="Home" element={ <CrudComponent/>} />
        </Routes>
      </Router> 
      
    </>
  );
}

export default App;
