// components/Item.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faStar } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import VisibleComponent from "../Visible";

const ItemSolution = ({ gambarfitur, judulgambar, descjudul, index }) => {
  const isEvenRow = index % 2 === 0;
  const imageurl = process.env.NEXT_PUBLIC_IMG_URL;
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
        src={`${imageurl}${gambarfitur}`}
        alt={`Image ${index + 1}`}
        className="size-52 sm:size-60 md:size-72 lg:size-96 object-contain rounded-2xl"
      />
      <div className="p-4 text-start">
        <h2 className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-gray-800 font-medium  md:text-4xl md:font-bold">
          {judulgambar}
        </h2>
        <p className="text-sm text-gray-600 mt-3 md:mt-8 md:text-lg md:font-light text-justify">
          {descjudul}
        </p>
        <div className="flex flex-row mt-3 md:mt-10 md:gap-x-4">
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font text-center text-white rounded-full bg-red-500 hover:bg-red-800 font-light"
          >
            Konsultasi
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
          <div className="flex items-center justify-start  gap-x-1 ms-2">
            <FontAwesomeIcon icon={faStar} className=" text-yellow-400" />
            <p className="md:text-md lg:text-lg text-xs font-light">400++ successful project</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemSolution;
