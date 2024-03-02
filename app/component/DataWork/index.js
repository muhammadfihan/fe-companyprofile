import React from "react";
import Link from "next/link";
import VisibleComponent from "../Visible";
import Image from "next/image";

const ItemWork = ({ gambarporto, judulporto, perusahaan, index, slug }) => {
  const { ref, isVisible } = VisibleComponent();

  return (
    <div
      ref={ref}
      className={`${
        isVisible
          ? "animate-fade-up animate-once animate-duration-500 animate-delay-0 animate-ease-in"
          : "opacity-0"
      } grid grid-cols-1 md:grid-cols-1 mb-4 p-2 `}
    >
      <div className="flex justify-center">
        <div className=" bg-white border border-gray-200 rounded-lg shadow place-items-center ">
          <a className="flex justify-center p-2" href="#">
            <Image
              className="object-cover min-h-64 rounded-xl"
              src={gambarporto}
              alt={`Image ${index + 1}`}
              width={500}
              height={500}
              style={{ width: "500", height: "500", objectFit: "cover" }}
              priority={true}
            />
          </a>
          <div className="p-5 py-8">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                {perusahaan}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 line-clamp-1">{judulporto}</p>
            <Link
              href={`/pages/our-work/${slug}`}
              target="_blank"
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
