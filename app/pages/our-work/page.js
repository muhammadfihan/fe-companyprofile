"use client";

import logo from "../../../public/code.png";
import { usePathname } from "next/navigation";
import Footer1 from "../../component/Footer";
import ItemWork from "../../component/DataWork";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faCoffee, faStar } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Navbar from "../../component/Navbar";
import Animation from "../../component/Animation";

export default function Work() {
  const url = process.env.NEXT_PUBLIC_API_URL;
  const imageurl = process.env.NEXT_PUBLIC_IMG_URL;
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get(
        //   `https://jsonplaceholder.typicode.com/photos?_limit=${itemsPerPage}&_page=${currentPage}`
        // );
        // setData(response.data);
        setTimeout(async () => {
          const response1 = await axios.get(
            `${url}/portfolios?populate[0]=gambarporto.media&populate[1]=galeriportofolios.gambar.media&populate[2]=hasil_portos.gambarhasil.media&populate[3]=fitur_portos_limit=${itemsPerPage}&_page=${currentPage}`
          );
          setData1(response1.data);

          setLoading(false);
        }, 1200);
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
        <section className="w-full h-[full]">
          <div className="grid grid-rows-2 relative">
            <div className="h-[480px] bg-gradient-to-r from-red-500 to-red-800">
              <div className="py-8 px-[5%] md:px-[10%]">
                <div className="flex flex-col gap-y-4">
                  <div className="flex flex-row gap-x-1">
                    <div className="font-semibold text-sm md:text-md text-white">
                      Our Solutions /
                    </div>
                    <div className="font-light text-xs md:text-sm text-white self-center">
                      Custom Development Software
                    </div>
                  </div>
                  <div className="font-semibold text-xl md:text-2xl text-white">
                    Where Ideas Meet Innovation:
                  </div>
                  <div className="font-bold text-2xl md:text-2xl lg:text-4xl text-white">
                    Our Software Development Projects
                  </div>
                  <div className="font-light text-sm md:text-lg text-white text-justify">
                    With over 15 years of dedicated experience in software development, we take
                    pride in offering a comprehensive range of services and tailor-made solutions
                    meticulously designed to precisely meet the diverse and evolving needs of our
                    esteemed clients. Our commitment to excellence is reflected in every aspect of
                    our work, ensuring that we deliver the highest quality results.
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[10%] z-[15] bg-transparant absolute self-center justify-self-center ">
              <div className="mt-36 py-8 px-[5%]">
                <div className="flex flex-col text-center mb-5">
                  <div className="text-md lg:text-lg font-medium text-red-500 ">OVERVIEW</div>
                  <div className="text-lg lg:text-4xl font-medium text-black mb-5">
                    Our Completed Projects
                  </div>
                </div>
                <div>
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <div
                        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-red-500 motion-reduce:animate-[spin_1.5s_linear_infinite]"
                        role="status"
                      >
                        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                          Loading...
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="lg:grid lg:grid-cols-3 sm:grid sm:grid-cols-2 md:px-[5%]">
                        {data1.data.map((item, index) => (
                          <div key={item.id}>
                            {item.attributes.gambarporto.data == null ? (
                              <ItemWork
                                gambarporto="../../noimg.svg"
                                judulporto={item.attributes.judulporto}
                                perusahaan={item.attributes.perusahaan}
                                slug={item.attributes.slug}
                                index={index}
                              />
                            ) : (
                              <ItemWork
                                gambarporto={`${imageurl}${item.attributes.gambarporto.data.attributes.url}`}
                                judulporto={item.attributes.judulporto}
                                perusahaan={item.attributes.perusahaan}
                                slug={item.attributes.slug}
                                index={index}
                              />
                            )}
                          </div>
                        ))}
                      </div>
                      {data.length >= itemsPerPage && (
                        <div className="mt-4 flex justify-center items-center text-center gap-4">
                          <button
                            onClick={handlePrevPage}
                            disabled={currentPage === 1}
                            className="mr-2 px-4 py-2    disabled:opacity-60 border border-red-500"
                          >
                            <FontAwesomeIcon
                              icon={faChevronLeft}
                              className="text-red-500 text-bold"
                            />
                          </button>
                          <button
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                            className="mr-2 px-4 py-2    disabled:opacity-60 border border-red-500"
                          >
                            <FontAwesomeIcon
                              icon={faChevronRight}
                              className="text-red-500 text-bold"
                            />
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div className="">
                <Footer1 />
              </div>
            </div>
            <div className="bg-transparant  absolute top-0 left-0 w-full h-full flex items-center justify-center md:px-8 lg:px-16">
              <div className="flex justify-center w-full px-[5%] md:px-[6%]">
                <div className="border bg-white rounded-3xl shadow-md w-screen flex flex-col p-5 gap-y-3 min-h-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x-2 md:divide-y-0">
                    <div className="p-3 grid grid-cols-2 md:flex-row md:flex md:gap-x-4 md:justify-center md:py-8">
                      <div className="text-gray-600 font-bold text-lg lg:text-4xl self-center">
                        300+
                      </div>
                      <div className="text-gray-400 font-light text-sm self-center lg:text-xl">
                        Expert Employees
                      </div>
                    </div>
                    <div className="p-3 grid grid-cols-2 md:flex-row md:flex md:gap-x-4 md:justify-center">
                      <div className="text-gray-600 font-bold text-lg lg:text-4xl self-center">
                        15+
                      </div>
                      <div className="text-gray-400 font-light text-sm self-center lg:text-xl">
                        Years of Commitment
                      </div>
                    </div>
                    <div className="p-3 grid grid-cols-2 md:flex-row md:flex md:gap-x-4 md:justify-center">
                      <div className="text-gray-600 font-bold text-lg lg:text-4xl self-center">
                        500+
                      </div>
                      <div className="text-gray-400 font-light text-sm self-center lg:text-xl">
                        Successful Projects
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="mt-[100%] sm:md-[30%] md:mt-[50%] lg:mt-[68%]">
          <Footer1 />
        </section> */}
      </Animation>
    </div>
  );
}
