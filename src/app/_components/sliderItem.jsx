import React from "react";

const SliderItem = (props) => {
  return (
    <div className="h-[35rem] flex flex-col  justify-center bg-success-dark p-12 bg-banner-image bg-right bg-no-repeat	bg-cover">
      <h2 className="text-h2 font-bold text-white max-w-[23rem]">
        {props.title}
      </h2>

      <div className="mt-5 ">{props.subTitle}</div>

      <div className="mt-8">
        <button className="bg-success text-white px-4 py-2 rounded-full">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default SliderItem;
