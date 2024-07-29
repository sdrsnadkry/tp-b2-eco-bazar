import React from "react";
import CategoryItem from "./categoryItem";
import { appleIcon, saladActiveIcon } from "@/assets/icons";
import Slider from "./slider";

const categoryItems = [
  {
    id: 1,
    icon: appleIcon,
    activeIcon: saladActiveIcon,
    title: "Fruit Items",
  },
  {
    id: 2,
    icon: appleIcon,
    activeIcon: saladActiveIcon,
    title: "Vegetables",
  },
  {
    id: 3,
    icon: appleIcon,
    activeIcon: saladActiveIcon,
    title: "Chicken & Meat",
  },
  {
    id: 4,
    icon: appleIcon,
    activeIcon: saladActiveIcon,
    title: "Chicken & Meat",
  },
  {
    id: 5,
    icon: appleIcon,
    activeIcon: saladActiveIcon,
    title: "Chicken & Meat",
  },
];

const Banner = () => {
  return (
    <section className="mx-10 grid grid-cols-12 mt-6 gap-6">
      <div className="col-span-3 border border-grey-400">
        {categoryItems.map((category) => (
          <CategoryItem
            title={category.title}
            key={category.id}
            icon={category.icon}
            active={category.id === 2}
            activeIcon={category.activeIcon}
          />
        ))}
      </div>
      <div className="col-span-9">
        <Slider />
      </div>
    </section>
  );
};

export default Banner;
