// components/Item.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faGear,
  faPeopleGroup,
  faStar,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import gambar4 from "../../../public/noimg.svg";
import VisibleComponent from "../Visible";

const OurProduct = ({ gambar, perusahaan, deskripsi, kalimat }) => {
  const imageurl = process.env.NEXT_PUBLIC_IMG_URL;
  const { ref, isVisible } = VisibleComponent();

  return (
    <div
      ref={ref}
      className={`${
        isVisible
          ? "animate-fade-up animate-once animate-duration-[800ms] animate-delay-0 animate-ease-in"
          : "opacity-0"
      } px-8 flex flex-col gap-y-4  lg:flex lg:flex-row-reverse md:px-16 lg:px-40 py-20`}
    >
      <div className={`flex justify-center`}>
        {/* <img
          className="lg:w-[50vw] md:w-[30vw] w-[29vw] h-auto"
          src="../../../our.png"
          alt="Company Logo"
        /> */}

        <div className="">
          <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[500px] w-[300px] shadow-xl">
            <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
            <div className="rounded-[2rem] overflow-hidden w-[272px] h-[472px] bg-white dark:bg-gray-800">
              {/* <img src="../../../mockup.png" className=" w-[272px] h-[572px]" alt="" /> */}
              {/* <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png"
                className="hidden dark:block w-[222px] h-[472px]"
                alt=""
              /> */}
            </div>
          </div>
        </div>
      </div>
      <div className={` md:w-full md:mt-16 md:me-24`}>
        <h2 className="text-3xl font-bold text-gray-800 items-center flex py-4">Our Product</h2>
        <p className="text-lg text-gray-700 md:mb-6 mb-8 text-justify ">
          Code.id offers product such as Activo that enables organizations to efficiently monitor,
          evaluate, and maintain their fixed assets, ensuring optimal utilization and reducing
          depreciation costs and Klaim that offers a seamless platform for processing and managing
          claims. These solutions exemplify our commitment to innovative software solutions for
          businesses.
        </p>
        <div className="flex flex-col text-lg md:flex-row md:gap-x-10 md:grid md:grid-cols-2">
          <div className="">
            <FontAwesomeIcon icon={faUserGroup} className="text-3xl text-red-500 py-1" />
            <p className="md:text-xl font-semibold">Online Sistem</p>
            <p className="font-light">
              Pantau nomor antrian di smartphone, mengurangi beban ruang tunggu.
            </p>
          </div>
          <div className="">
            <FontAwesomeIcon icon={faGear} className="text-3xl text-red-500 py-1" />
            <p className="md:text-xl font font-semibold">Plug and Play</p>
            <p className="font-light">
              Instalasi mesin antrian semudah memasang perangkat komputer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProduct;
