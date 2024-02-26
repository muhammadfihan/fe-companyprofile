// components/Item.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faStar } from "@fortawesome/free-solid-svg-icons";

const ItemPrincipal = ({ gambar, judul, deskripsi, index }) => {
  return (
    <div className="lg:grid lg:grid-cols-1 mb-4 w-80 lg:w-96 mt-10">
      <div className="mb-4 p-2 sm:mx-2 text-center">
        <div className="sm:flex flex-row gap-x-4 sm:flex-col p-4">
          <div className="self-center ">
            <img
              alt={`Image ${index + 1}`}
              className=" w-[80px] object-cover mx-auto"
              src={gambar}
            />
          </div>
          <div className="sm:flex flex-row sm:flex-col gap-y-1 sm:px-3 sm:mt-3 md:mt-4 p-2">
            <div className="text-sm font-semibold text-black lg:text-lg self-center ">{judul}</div>
            <p className="text-sm font-normal text-black lg:text-md self-center ">{deskripsi}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPrincipal;
