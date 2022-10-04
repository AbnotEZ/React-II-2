import React, { useContext } from "react";
import MyContextApi from "../context/MyContextApi";

function MiApi() {
  const { data } = useContext(MyContextApi);
  
  

  return (
    <>
      <div className="container flex flex-wrap justify-center items-center bg-fixed">
        {data.map((item, i) => (
          <div
            key={item.name}
            className="w-1/2 sm:w-1/3 md:w-1/5 m-2 items-center flex flex-col justify-center rounded-x1 trasnform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2x "
          >
            <div className="p-1 m-1 bg-amber-200 justify-center rounded-x1 trasnform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2x">
              <button className="text-gray-50">♥</button>
            </div>
            <img
              className=" w-24 h-24 rounded-full shadow-lg"
              src={item.img}
              alt="img"
            />
            <h5 className=" text-lg font-medium text-black  mb-1">
              {item.name}
            </h5>
            <h6 className=" text-lg font-medium text-gray-900  mb-0">Level:</h6>
            <h6 className=" text-lg font-medium text-amber-600  mb-2">
              {item.level}
            </h6>
          </div>
        ))}
      </div>
    </>
  );
}

export default MiApi;
