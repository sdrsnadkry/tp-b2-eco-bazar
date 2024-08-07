import Image from "next/image";
import React from "react";
import { hamburgerIcon } from "../../assets/icons";

const productsListA = [
  { id: 1, title: "a", desc: "b" },
  { id: 2, title: "c", desc: "d" },
  { id: 3, title: "e", desc: "f" },
];

const AboutUs = () => {
  return (
    <div className="grid grid-cols-3">
      <ProductGroup title="Hot deals" products={productsListA} />
      <ProductGroup title="Top Rated" />
      <ProductGroup title="ANything" />
    </div>
  );
};

export default AboutUs;

const ProductGroup = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>

      {props.products?.map((product) => (
        <Product key={product.id} title={product.title} desc={product.desc} />
      ))}
    </div>
  );
};

const Product = (props) => {
  return (
    <div>
      <Image src={hamburgerIcon} alt="PI" className="w-10 h-10" />
      <p>{props.title}</p>
      <p>{props.desc} </p>
    </div>
  );
};
