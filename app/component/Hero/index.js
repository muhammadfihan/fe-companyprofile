// components/Item.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faStar } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import VisibleComponent from "../Visible";

const HeroSection = ({ gambar, perusahaan, deskripsi, kalimat }) => {
  const imageurl = process.env.NEXT_PUBLIC_IMG_URL;
  const { ref, isVisible } = VisibleComponent();

  return (
    <div
      ref={ref}
      className={`${
        isVisible
          ? "animate-fade-up animate-once animate-duration-[800ms] animate-delay-0 animate-ease-in"
          : "opacity-0"
      } relative rounded-3xl overflow-hidden mt-4 md:mx-10 mx-10`}
    >
      {/* <img src={gambar} alt="" className="w-[1200px] h-[550px] object-cover brightness-50 " />
      <div className="absolute mt-8 flex top-4 left-1/2 -translate-x-1/2">
        <div className="text-center rounded-xl border">
          <h2 className="text-sm text-white p-2 md:text-lg md:p-3">{perusahaan}</h2>
        </div>
      </div>
      <div className=" absolute inset-0 row items-center justify-center mt-28 md:mt-36">
        <h2 className="text-xl px-8 font-medium text-white  text-center lg:text-5xl md:px-36 ">
          {kalimat}
        </h2>
        <h2 className="text-sm text-white font-light text-center mt-4 px-8 md:text-lg md:px-44">
          {deskripsi}
        </h2>
      </div>
      <div className=" absolute mb-8 flex gap-x-8 bottom-4 left-1/2 -translate-x-1/2">
        <div className="text-center rounded-xl border hover:border-red-600 bg-white hover:bg-red-600">
          <h2 className="text-sm font-light text-gray-600 hover:text-white p-2 md:text-md md:p-3">
            Mulai Konsultasi
          </h2>
        </div>
        <div className="text-center rounded-xl border hover:bg-white">
          <h2 className="text-sm font-light text-white p-2 hover:text-black md:text-md md:p-3">
            Selengkapnya
          </h2>
        </div>
      </div> */}

      <section
        style={{ backgroundImage: `url(${gambar})` }}
        className="bg-cover bg-center bg-gray-500 bg-blend-multiply"
      >
        <div className="px-4 mx-auto max-w-screen-xl text-center py-20 lg:py-28">
          <a
            href="#"
            className="inline-flex justify-center mb-10 hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
          >
            {perusahaan}
          </a>
          <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-white md:text-5xl lg:text-6xl lg:px-20">
            {kalimat}
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            {deskripsi}
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-full bg-red-500 hover:bg-white hover:text-red-500"
            >
              Mulai Konsultasi
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
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-full border border-white hover:bg-gray-100 hover:text-red-500"
            >
              Selengkapnya
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
