"use client";
import React from "react";
import axios from "axios";
import DetailItem from "../../../component/DetailWork";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Navbar from "../../../component/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Marquee from "react-fast-marquee";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import {
  faChevronLeft,
  faChevronRight,
  faCoffee,
  faStar,
  faCheckCircle,
  faBuildingUser,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import Footer2 from "../../../component/Footer2";
import Animation from "../../../component/Animation";

export default function DetailPage() {
  const [detail, setData] = useState(null);
  const url = process.env.NEXT_PUBLIC_API_URL;
  const imageurl = process.env.NEXT_PUBLIC_IMG_URL;
  const router = useParams();
  const paramslug = router.slug;

  const [content, setContent] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}/list-portofolios/${paramslug}`);
        const updatedData = response.data.data;
        setData(updatedData);
        setContent(response.data.data.attributes.deskripsi);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      {loading ? (
        <div></div>
      ) : (
        <Animation>
          <section>
            <div className="h-[90px] bg-gradient-to-r from-red-500 to-red-800 ">
              <div className="py-8 px-[5%] md:px-[10%]">
                <div className="flex flex-col gap-y-4">
                  <div className="flex flex-row gap-x-1">
                    <div className="font-normal text-sm md:text-lg text-white">
                      <b>Portofolio /</b> Detail Project
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="">
              <article className=" md:max-w-[75%] prose md:prose-xl px-8 mx-auto mt-5 text-justify">
                <h3 className="">{detail.attributes.nama_aplikasi}</h3>
                <div className="flex flex-row gap-x-4">
                  <div className="text-sm font-light text-gray-700 flex gap-x-2 md:text-xl">
                    <FontAwesomeIcon
                      className="text-2xl text-gray-500 self-center"
                      icon={faCircleUser}
                    />
                    <div className="self-center font-normal text-[18px]">
                      {detail.attributes.perusahaan}
                    </div>
                  </div>
                </div>
                <div className="-mt-6">
                  <img
                    className="w-full object-scale-up rounded-xl md:w-full md:h-96 "
                    src={`${imageurl}${detail.attributes.gambar_utama.data.attributes.url}`}
                    alt=""
                  />
                </div>

                <article className=" prose-a:text-red-500 -mt-7">
                  <BlocksRenderer content={content} />
                </article>
                <div className="">
                  <div className="">
                    <Marquee autoFill={true} gradientWidth={20}>
                      {detail.attributes.galeri_portofolio.data.map((item) => (
                        <img
                          key={item.id}
                          src={`${imageurl}${item.attributes.url}`}
                          alt=""
                          className="mx-3 size-64 object-cover"
                        />
                      ))}
                    </Marquee>
                  </div>
                </div>
              </article>
            </div>
          </section>
          {/* <section className="md:mt-10">
            <div className=" px-8 py-4 gap-y-3 flex flex-col md:px-36">
              <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-gray-800 md:text-3xl md:text-center md:py-5">
                Result
              </p>
              {detail.attributes.hasil_portos.data.length > 0 ? (
                <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid md:grid-cols-3">
                  {detail.attributes.hasil_portos.data.map((item) => (
                    <div
                      key={item.id}
                      className="grid grid-cols-1 md:grid-cols-1 mb-4 p-2 border rounded-xl sm:mx-2 mx-3"
                    >
                      <div className="flex-row gap-x-4 sm:flex-col md:my-3">
                        <div className=" flex justify-center px-3 mt-3">
                          <img
                            className=" w-[300px] object-cover rounded-xl"
                            src={`${imageurl}${item.attributes.gambarhasil.data.attributes.url}`}
                            alt=""
                          />
                        </div>
                        <div className="px-3 py-2">
                          <div className="flex flex-col gap-y-1 px-2 mt-2 sm:px-3 md:px-4 sm:mt-3 md:mt-4 lg:px-6">
                            <div className="text-xs font-semibold lg:text-lg ">
                              {item.attributes.hasil}
                            </div>
                            <div>
                              <div className="text-xs font-light lg:text-lg ">
                                {item.attributes.penjelasan}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col justify-center items-center self-center ">
                  <img src="../../../nodata.svg" className="h-48" alt="" />
                  <p className="text-2xl font-normal p-4">No Data</p>
                </div>
              )}
            </div>
          </section> */}
          <div className="-mt-24">
            <Footer2 />
          </div>
        </Animation>
      )}
    </div>
  );
}
