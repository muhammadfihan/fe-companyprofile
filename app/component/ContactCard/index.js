import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faCoffee, faStar } from "@fortawesome/free-solid-svg-icons";
import VisibleComponent from "../Visible";

const ItemCard = ({
  itemprofile,
  itemnama,
  itememail,
  itemlinkfb,
  itemlinkig,
  itemlinktwt,
  index,
}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ">
      <div className="flex h-full">
        <div className="relative flex flex-col items-center rounded-[20px] border-[1px] border-gray-200 w-[20rem] md:w-[22rem] p-4 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] min-h-[20rem]">
          <div className="relative flex h-20 w-full justify-center rounded-xl bg-cover">
            <div className="absolute flex h-32 w-full justify-center rounded-xl bg-cover bg-gradient-to-r from-red-500 to-pink-700"></div>
            <div className="absolute -bottom-24 flex h-[100px] w-[100px] items-center justify-center rounded-full border-[4px] border-white bg-white ">
              <img
                className="h-full w-full rounded-full"
                src={itemprofile ? `${itemprofile}` : "../../../logo.png"}
                alt=""
              />
            </div>
          </div>
          <div className="mt-28 flex flex-col items-center">
            <h4 className="text-xl font-bold text-navy-700 ">{itemnama}</h4>
            <p className="text-base font-normal text-gray-600">{itememail}</p>
          </div>
          <div className="mt-6 mb-3 flex gap-7 md:!gap-7">
            <button className="flex flex-col items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ">
              <img className="size-8" src="../../facebook.svg" alt="" />
            </button>
            <button className="flex flex-col items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ">
              <img className="size-8" src="../../instagram.svg" alt="" />
            </button>
            <button className="flex flex-col items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ">
              <img className="size-8" src="../../twitter.svg" alt="" />
            </button>
          </div>
          <div className="mt-3 mb-2 w-full">
            <button className="bg-white border border-red-500 w-full font-semibold rounded-lg p-2 text-md text-red-500">
              Hubungi Kami
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
