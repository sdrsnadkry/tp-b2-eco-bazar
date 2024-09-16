"use client";
import Banner from "./_components/banner";
import Test from "./_components/test";

import { FruitContext } from "../context/fruitContext";
import { useState } from "react";

export default function Home() {
  const [content, setContent] = useState({
    fruits: "Apple",
    veg: "Cabbage",
    drink: "Water",
  });

  const handleChangeDrink = (drink) => {
    setContent({ ...content, drink: drink });
  };

  return (
    <FruitContext.Provider
      value={{
        content: content,
        handleChangeDrink: handleChangeDrink,
      }}
    >
      <main className="">
        <Banner />

        <Test />
      </main>
    </FruitContext.Provider>
  );
}
