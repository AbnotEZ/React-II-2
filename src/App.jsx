import { useState } from "react";
import "./App.css";
import MiApi from "./assets/components/MiApi";
import MyContextApi from "./assets/context/MyProvider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <MyContextApi>
        <MiApi />
    </MyContextApi>
  );
}

export default App;
