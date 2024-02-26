// components/Item.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faCoffee, faStar } from "@fortawesome/free-solid-svg-icons";
import VisibleComponent from "../Visible";

const ItemCustom = ({ gambarservice, service, descservice, index, listservice }) => {
  const isEvenRow = index % 2 === 0;
  const url = process.env.NEXT_PUBLIC_API_URL;
  const { ref, isVisible } = VisibleComponent();
  return (
    <div
      ref={ref}
      className={`grid grid-col-1 md:grid-cols-2 md:flex md:px-[5%] lg:px-[12%] md:flex-row md:gap-10 items-center mb-4 place-items-center px-4 ${
        isEvenRow
          ? `${
              isVisible
                ? `animate-fade-left animate-once animate-duration-500 animate-delay-0 animate-ease-in`
                : "opacity-0"
            } grid-cols-1 md:grid-cols-2 `
          : `${
              isVisible
                ? "animate-fade-right animate-once animate-duration-500 animate-delay-0 animate-ease-in"
                : "opacity-0"
            } grid-cols-1 md:grid-cols-2 md:flex-row-reverse`
      }`}
    >
      <img
        src={gambarservice}
        alt={`Image ${index + 1}`}
        className="size-52 sm:size-60 md:size-72 lg:size-80 object-scale-up rounded-2xl"
      />
      <div className="p-4 text-start">
        <h2 className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-gray-800 font-medium  md:text-4xl md:font-bold">
          {service}
        </h2>
        <p className="text-sm text-gray-600 mt-3 md:mt-8 md:text-lg md:font-light text-justify">
          {descservice}
        </p>
        <div className={`mt-2 ${!listservice ? "hidden" : ""}`}>
          <ul className="grid list-none grid-cols-1 md:grid-cols-2 gap-y-2">{listservice}</ul>
        </div>
        <button className="flex flex-row mt-3 md:mt-10 md:gap-x-4">
          <div className="text-center rounded-full border bg-red-600">
            <h2 className="md:text-md lg:text-lg text-xs p-1 mx-3 text-white font-light ">
              See more
            </h2>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ItemCustom;
