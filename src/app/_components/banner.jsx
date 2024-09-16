import React from "react";
import CategoryItem from "./categoryItem";
import Slider from "./slider";
import { categoryItems } from "../../constants/products";

const Banner = (props) => {
  return (
    <section className="mx-10 grid grid-cols-12 mt-6 gap-6">
      <div className="col-span-12 lg:col-span-3 border border-grey-400">
        {categoryItems.map((category) => (
          <CategoryItem
            title={category.title}
            key={category.id}
            icon={category.icon}
            active={category.id === 2}
            activeIcon={category.activeIcon}
            category={category.category}
          />
        ))}
      </div>
      <div className="col-span-12 lg:col-span-9">
        <Slider />
      </div>
      {props.fruit}
    </section>
  );
};

export default Banner;
