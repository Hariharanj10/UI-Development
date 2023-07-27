import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SignIn from "./signIn";
import Contact from "./contactus";
import About from "./about";
import Header from "./Header";
import "./App.css";
import CrudComponent from "./CrudComponent";
import Card from './Card'
import { useState } from "react";
function App() {
  const [value,setValue]=useState([])
  const [findLength,setFindLength]=useState(0)
  return (
    <>
      <Router>
        <Header findLength={findLength}></Header>
        <Routes>
          <Route path="/" element={<CrudComponent setValue={setValue} setFindLength={setFindLength}/>}/>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="Home" element={ <CrudComponent setFindLength={setFindLength}/>} />
          <Route path="/Card" element={ <Card items={value} setValue={setValue} setFindLength={setFindLength}/>} />
        </Routes>
      </Router> 
      
    </>
  );
}

export default App;
