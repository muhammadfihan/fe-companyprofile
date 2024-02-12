// components/Item.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faStar } from "@fortawesome/free-solid-svg-icons";
import VisibleComponent from "../Visible";

const ItemFeature = ({ gambar, bidangbisnis, penjelas, index }) => {
  const { ref, isVisible } = VisibleComponent();
  return (
    <div
      ref={ref}
      className={`${
        isVisible
          ? "animate-fade-down animate-once animate-duration-[800ms] animate-delay-0 animate-ease-linear"
          : "opacity-0"
      } flex-auto border bg-white p-6 rounded-xl shadow-md h-full `}
    >
      <div className="flex justify-center md:justify-normal">
        <img
          src={`${gambar}`}
          alt={`Image ${index + 1}`}
          className="size-32 md:size-36 object-scale-up p-3"
        />
      </div>
      <p className="text-md font-medium mt-2 mb-2 lg:text-xl">{bidangbisnis}</p>
      <p className="text-sm font-light md:text-[1.1vw] leading-6">{penjelas}</p>
    </div>
  );
};

export default ItemFeature;