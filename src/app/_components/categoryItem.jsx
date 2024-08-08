import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryItem = (props) => {

  console.log(props.category.toLowerCase())
  return (
    <Link
      href={`/category/${props.category.toLowerCase()}`}
      className={`flex items-center px-5 py-4  ${
        props.active ? "bg-success" : ""
      }`}
    >
      <Image src={props.active ? props.activeIcon : props.icon} alt="Apple" />

      <span
        className={`text-body-small ml-3 ${
          props.active ? "text-white" : "text-grey-900"
        } `}
      >
        {props.title}
      </span>
    </Link>
  );
};

export default CategoryItem;
