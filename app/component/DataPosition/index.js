// components/Item.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faStar } from "@fortawesome/free-solid-svg-icons";

const ItemPosition1 = ({ image, text, index }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 mb-4">
      <div className="mb-4 p-2 border rounded-xl sm:mx-2 text-center">
        <div className="flex flex-row gap-x-4 sm:flex-col p-4">
          <div className="self-center">
            <img alt={`Image ${index + 1}`} className=" w-[80px] object-cover" src={image} />
          </div>
          <div className="flex flex-row sm:flex-col gap-y-1 sm:px-3 sm:mt-3 md:mt-4">
            <div className="text-sm font-semibold text-black lg:text-lg self-center ">{text}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPosition1;
