"use client";

import gambar from "../../../public/image5.jpg";
import Image from "next/image";
import ContentFooter from "../ContentFooter";
import axios from "axios";
import { useState, useEffect } from "react";

const Footer2 = () => {
  const url = process.env.NEXT_PUBLIC_API_URL;
  const imageurl = process.env.NEXT_PUBLIC_IMG_URL;
  const [loading, setLoading] = useState(true);

  const [isifooter, setIsi] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setTimeout(async () => {
          const response = await axios.get(`${url}/footer-kedua?populate=gambar_footer.media`);
          setIsi(response.data.data.attributes);
          setLoading(false);
        }, 300);
      } catch (error) {
        console.error("Error fetching API data:", error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {loading ? (
        <></>
      ) : (
        <div>
          <section className="w-full">
            <div className="grid grid-rows-2 relative">
              <div className="h-64 bg-white"></div>
              <div className="h-44 bg-gray-200"></div>
              <div className="bg-transparant absolute  top-0 left-0 z-10 h-full w-full flex items-center justify-center md:px-8 lg:px-28">
                <div className="flex justify-center ">
                  <div className=" rounded-3xl overflow-hidden mt-4 md:mx-10 mx-5">
                    <img
                      className="md:h-[20vw] h-[40vw] sm:h-[40vw] w-[100vw] lg:h-[15vw] object-cover brightness-custom"
                      src={`${imageurl}${isifooter.gambar_footer.data.attributes.url}`}
                      alt="Company Logo"
                    />
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
                    <h1 className="text-lg font-medium text-white md:text-2xl lg:text-3xl">
                      {isifooter.judul}
                    </h1>
                    <p className="text-sm text-white font-light md:text-lg">{isifooter.subjudul}</p>
                    <button className="bg-red-500 mt-3 text-white text-xs p-1 px-10 rounded-full md:text-lg mx-8 ">
                      Kirim Pesan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="-mt-36 md:-mt-32 relative z-20">
            <ContentFooter />
          </section>
        </div>
      )}
    </div>
  );
};

export default Footer2;
