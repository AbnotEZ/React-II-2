import { useState ,  useEffect } from "react";
import MyContextApi from "./MyContextApi";
const MyContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const url = "https://digimon-api.herokuapp.com/api/digimon";
  
  const getData = async () => {
    const data = await fetch(url)
    const result = data.json()
    clg
    
  }

  useEffect(() => {
    getData()
  
  }, [])
  

  useEffect(() => {
    (async function () {
      const data = await fetch(url);
      const data2= data.forEach(item => item.like = false);
      const result = await data2.json();
    const filtrado = result.slice(0,8) 
       console.log(filtrado) 
       setData(filtrado);
    })();
  }, []);


  return (
    <MyContextApi.Provider value={{ data, setData }}>
      {children}
    </MyContextApi.Provider>
  );
};
export default MyContextProvider;
