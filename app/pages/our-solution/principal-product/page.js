"use client";
import Navbar from "../../../component/Navbar";
import logo from "../../../../public/code.png";
import Layout from "../../../component/layout";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Animation from "../../../component/Animation";

export default function Test() {
  return (
    <div>
      <Navbar />
      <Animation>
        <section className="h-full md:py-5 relative">
          <div className="flex flex-wrap flex-col gap-y-6 sm:flex sm:flex-col sm:gap-y-8 px-4 py-1 relative z-20 md:px-16 lg:px-44 md:grid md:grid-cols-2 md:gap-x-14 md:mt-10">
            <div className="flex flex-col gap-y-2 md:gap-y-5 sm:flex-col">
              <div className="bg-gray-100 text-xs md:w-80 self-start p-2 rounded-lg md:text-lg">
                <b>Our Solutions </b>/ Principal Product
              </div>
              <p className="text-lg font-semibold md:text-2xl">Unlocking Innovation with</p>
              <p className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-gray-800 md:text-4xl">
                Our Principal Product
              </p>
              <div className="bg-white rounded-xl drop-shadow-2xl p-5 md:p-10 mb-3 lg:mt-5">
                <p className="font-semibold text-lg md:text-xl md:mb-2">Insight for you!</p>
                <p className="text-justify md:text-lg">
                  This product has earned acclaim for its user-friendly interface and powerful
                  features, making it a go-to choice for businesses seeking efficient project
                  management solutions.
                </p>
              </div>
              <div className="bg-white rounded-xl drop-shadow-2xl p-5 grid grid-cols-2 gap-x-4 md:p-10 ">
                <div className="grid grid-rows-2 md:flex md:self-center md:flex-col">
                  <p className="text-3xl font-medium ">10+</p>
                  <p className="text-md font-normal">Business Sectors</p>
                </div>
                <div className="grid grid-rows-2 md:flex md:self-center md:flex-col">
                  <p className="text-3xl font-medium ">200+</p>
                  <p className="text-md font-normal">Products</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-wrap gap-y-5 md:flex-col-reverse md:flex-auto md:self-start flex-auto lg:self-end">
              <div className="">
                <img
                  src="../../../principal.png"
                  className="object-cover rounded-xl shadow-md lg:h-[23vw]"
                  alt=""
                />
              </div>
              <div className="">
                <p>
                  For more than 15 years, code.id has been dedicated to prioritizing client requests
                  aligned with company needs, while consistently delivering our cutting-edge
                  principal product, which is a comprehensive software solution designed to
                  streamline and optimize project management processes across various industries.
                </p>
                <button className="bg-red-500 py-2 px-5 text-sm font-normal text-white rounded-full mt-4">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="bg-red-500 h-80 absolute bottom-[70vw] md:bottom-0 w-full bg-gradient-to-r from-red-500 to-red-800 z-10"></div>
        </section>
        <section></section>
      </Animation>
    </div>
  );
}
