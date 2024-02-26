// components/Item.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faStar } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import VisibleComponent from "../Visible";

const ItemWork = ({ gambarporto, judulporto, perusahaan, index, slug }) => {
  const { ref, isVisible } = VisibleComponent();

  return (
    <div
      ref={ref}
      className={`${
        isVisible
          ? "animate-fade-down animate-once animate-duration-500 animate-delay-0 animate-ease-in"
          : "opacity-0"
      } grid grid-cols-1 md:grid-cols-1 mb-4 p-2 `}
    >
      {/* <div className="flex-row gap-x-4 sm:flex-col md:my-3">
        <div className=" flex justify-center">
          <img className=" w-[300px] object-cover" src={gambarporto} alt={`Image ${index + 1}`} />
        </div>
        <div className="">
          <div className="flex flex-col gap-y-1 px-2 mt-2 sm:px-3 md:px-4 sm:mt-3 md:mt-4 lg:px-6">
            <div className="text-xs font-semibold text-red-500 lg:text-lg ">{perusahaan}</div>
            <div className="text-sm font-medium text-black lg:text-xl">{judulporto}</div>
            <div>
              <Link href={`/pages/our-work/${slug}`}>
                <button className="w-full md:w-1/3 lg:w-1/2 sm:mt-4 text-center rounded-md border-[0.5px] border-red-500 hover:border-red-600 bg-white hover:bg-red-600">
                  <h2 className="text-[9px] font-medium text-red-500 hover:text-white p-1 md:text-md md:p-1 lg:text-[15px]">
                    See More
                  </h2>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div> */}
      <div className="flex justify-center">
        <div className="size-[28rem] bg-white border border-gray-200 rounded-lg shadow place-items-center">
          <a className="flex justify-center p-2" href="#">
            <img
              className="object-cover min-h-64 rounded-xl"
              src={gambarporto}
              alt={`Image ${index + 1}`}
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                {perusahaan}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 line-clamp-1">{judulporto}</p>
            <Link
              href={`/pages/our-work/${slug}`}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-700 focus:outline-none  "
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemWork;
