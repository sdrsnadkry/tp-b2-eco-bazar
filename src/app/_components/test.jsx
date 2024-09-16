import React, { useContext } from "react";
import { FruitContext } from "../../context/fruitContext";

const Test = () => {
  const fruits = useContext(FruitContext);

  console.log(fruits);

  return (
    <div>
      {fruits.content.drink}

      <button
        onClick={() => {
          fruits.handleChangeDrink("Coca Cola");
        }}
      >
        Click to change drink
      </button>
    </div>
  );
};

export default Test;
