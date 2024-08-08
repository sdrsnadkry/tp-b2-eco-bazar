import Image from "next/image";
import React from "react";

import { products } from "../../../constants/products";

const SubCategory = (props) => {
  console.log(props.params['sub-category'], "props");
  return (
    <div className="container mx-auto mt-10">
      SubCategory - {props.params['sub-category']}
      <div className="grid grid-cols-4 mt-10">
        {products.filter(product => product.category.toLowerCase() === props.params['sub-category'].toLowerCase()).map((product) => (
          <Product
            key={product.id}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default SubCategory;

const Product = (props) => {
  return (
    <div>
      <Image
        src={
          "https://www.shutterstock.com/shutterstock/photos/2274412231/display_1500/stock-vector-many-rainbow-gradient-random-bright-soft-balls-background-colorful-balls-background-for-kids-zone-2274412231.jpg"
        }
        alt="Banner"
        height={1920}
        width={1080}
        className="w-[200px] h-[300px] object-cover"
      />
      <p className="mt-2 font-semibold mb-2 text-xl">{props.name}</p>
      <p>$ {props.price}</p>
    </div>
  );
};
