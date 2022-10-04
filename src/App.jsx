import { useState } from "react";
import "./App.css";
import MiApi from "./assets/components/MiApi";
import MyContextApi from "./assets/context/MyProvider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./assets/components/NotFound";
import Favorites from "./assets/components/Favorites";
import NavBar from "./assets/components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <MyContextApi>
      <Router>
      <NavBar /> 
      <Routes>
        <Route path="/" element={<MiApi/>} />    
        <Route path="/Favorites" element={<Favorites/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
        
    </MyContextApi> 
  );
}

export default App;
