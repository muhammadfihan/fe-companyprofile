import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faCoffee, faStar } from "@fortawesome/free-solid-svg-icons";
import VisibleComponent from "../Visible";

const ItemCommercials = ({ itemicon, itemjudul, itemsubjudul, produk, index, listitem }) => {
  return (
    <div className="flex flex-col flex-auto p-6  max-w-md text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow  xl:p-8 w-[21rem] transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110  duration-400  min-h-[37rem] md:hover:bg-gray-800 hover:text-white mb-4">
      <div className="flex gap-x-5">
        <div>
          <img
            src={itemicon}
            alt={`Image ${index + 1}`}
            className=" w-[80px] object-scale-down self-center"
          />
        </div>
        <div className="text-start self-center ">
          <h3 className="text-xl font-semibold ">{itemjudul}</h3>
          <p className="font-light  sm:text-lg ">{itemsubjudul}</p>
        </div>
      </div>

      <div className="flex justify-start items-baseline my-8">
        <span className="mr-2 text-xl md:text-2xl font-bold text-start">{produk}</span>
      </div>

      <ul role="list" className={`mb-8 space-y-4 text-left ${!listitem ? "hidden" : ""}`}>
        {listitem}
      </ul>
    </div>
  );
};

export default ItemCommercials;
