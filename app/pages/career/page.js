"use client";
import logo from "../../../public/code.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faCoffee, faStar } from "@fortawesome/free-solid-svg-icons";
import Footer2 from "../../component/Footer2";
import { useState, useEffect } from "react";
import axios from "axios";
import ItemPosition1 from "../../component/DataPosition";
import Navbar from "../../component/Navbar";
import Animation from "../../component/Animation";

export default function Career() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/photos?_limit=${itemsPerPage}&_page=${currentPage}`
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching API data:", error.message);
      }
    };

    fetchData();
  }, [currentPage]);

  const totalPages = Math.ceil(100 / itemsPerPage);
  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  return (
    <div>
      <Navbar />
      <Animation>
        <section className="bg-gradient-to-r relative from-red-500 to-red-800 ">
          <div className="h-[350px]">
            <div className="py-8 px-[5%] md:px-[10%]">
              <div className="flex flex-col gap-y-4 md:mt-8">
                <div className="flex flex-row gap-x-1">
                  <div className="font-semibold text-sm md:text-lg text-white">Career /</div>
                  <div className="font-light text-xs md:text-lg text-white self-center lg:self-center">
                    Recruitment
                  </div>
                </div>
                <div className="flex flex-col gap-3 lg:gap-8 lg:flex-row">
                  <div className="font-bold text-3xl md:text-2xl lg:text-5xl text-white">
                    Career
                  </div>
                  <div className="flex flex-row gap-3">
                    <div className="grid text-center items-center rounded-full bg-[#E6959B]">
                      <h2 className="text-xs lg:px-6 px-2 py-2 flex gap-1 font-medium text-white">
                        <span>
                          <FontAwesomeIcon icon={faStar} className=" text-[#FFC725]" />
                        </span>
                        Junior
                      </h2>
                    </div>
                    <div className="grid text-center items-center rounded-full bg-[#E6959B]">
                      <h2 className="text-xs lg:px-6 px-2 py-2 flex gap-1 font-medium text-white">
                        <span>
                          <FontAwesomeIcon icon={faStar} className=" text-[#FFC725]" />
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faStar} className=" text-[#FFC725]" />
                        </span>
                        Middle
                      </h2>
                    </div>
                    <div className="grid text-center items-center rounded-full bg-[#E6959B]">
                      <h2 className="text-xs px-2 lg:px-6 py-2 flex gap-1 font-medium text-white">
                        <span>
                          <FontAwesomeIcon icon={faStar} className=" text-[#FFC725]" />
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faStar} className=" text-[#FFC725]" />
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faStar} className=" text-[#FFC725]" />
                        </span>
                        Senior
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="font-light text-sm md:text-lg text-white text-justify">
                  With over 15 years of dedicated experience in software development, we take pride
                  in offering a comprehensive range of services and tailor-made solutions
                  meticulously designed to precisely meet the diverse and evolving needs of our
                  esteemed clients. Our commitment to excellence is reflected in every aspect of our
                  work, ensuring that we deliver the highest quality results.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="">
          <div className="mt-8">
            <div className="flex flex-col text-center gap-5 mb-5">
              <div className="text-md lg:text-lg font-medium text-red-500 ">Information</div>
              <div className="text-lg lg:text-4xl font-medium text-black mb-5">
                Available Position
              </div>
            </div>
          </div>
          <div className="px-[4%] md:px-[5%] ]">
            {/* <DataPosition data={data} itemsPerPage={8} /> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:mx-20">
              {data.map((item, index) => (
                <ItemPosition1 key={item.id} image={item.url} text={item.title} index={index} />
              ))}
            </div>
            {data.length >= itemsPerPage && (
              <div className="mt-4 flex justify-center items-center text-center gap-4">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className="mr-2 px-4 py-2    disabled:opacity-60 border border-red-500"
                >
                  <FontAwesomeIcon icon={faChevronLeft} className="text-red-500 text-bold" />
                </button>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="mr-2 px-4 py-2    disabled:opacity-60 border border-red-500"
                >
                  <FontAwesomeIcon icon={faChevronRight} className="text-red-500 text-bold" />
                </button>
              </div>
            )}
          </div>
        </section>
        <div className="">
          <Footer2 />
        </div>
      </Animation>
    </div>
  );
}
