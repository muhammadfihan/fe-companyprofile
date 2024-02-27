"use client";

import { usePathname } from "next/navigation";
import Footer2 from "../../../component/Footer2";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Navbar from "../../../component/Navbar";
import ItemCustom from "../../../component/DataCustomDev";
import Animation from "../../../component/Animation";

export default function CustomDev() {
  const url = process.env.NEXT_PUBLIC_API_URL;
  const imageurl = process.env.NEXT_PUBLIC_IMG_URL;
  const [loading, setLoading] = useState(true);

  const [mainsection, setMainsection] = useState(null);
  const [countsection, setCountsection] = useState(null);
  const [judulsection, setJudulsection] = useState(null);
  const [listservice, setListservice] = useState(null);
  const [metode, setMetode] = useState(null);

  useEffect(() => {
    async function fetchService() {
      try {
        setTimeout(async () => {
          const response = await axios.get(
            `${url}/layanan-kami?populate[0]=main_section&populate[1]=count_section&populate[2]=service_section&populate[3]=list_services.icon_service.media&populate[4]=list_services.list_service_details&populate[5]=Metode_Pengembangan.icon_metodepengembangan.media`
          );
          setMainsection(response.data.data.attributes.main_section);
          setCountsection(response.data.data.attributes.count_section);
          setJudulsection(response.data.data.attributes.service_section);
          setListservice(response.data.data.attributes.list_services);
          setMetode(response.data.data.attributes.Metode_Pengembangan);

          setLoading(false);
        }, 500);
      } catch (error) {
        console.error("Error fetching API data:", error.message);
        setLoading(false);
      }
    }
    fetchService();
  }, []);

  return (
    <div>
      <Navbar />
      {loading ? (
        <></>
      ) : (
        <Animation>
          <section className="w-full h-[full]">
            <div className="grid grid-rows-2 relative">
              <div className="h-[480px] bg-gradient-to-r from-red-500 to-red-800 z-[5]">
                <div className="py-8 px-[5%] md:px-[10%]">
                  <div className="flex flex-col gap-y-4 md:mt-10">
                    <div className="flex flex-row gap-x-1">
                      <div className="font-normal text-sm md:text-lg text-white">
                        {mainsection.judul_path}
                      </div>
                    </div>
                    <div className="font-semibold text-xl md:text-2xl text-white">
                      {mainsection.subjudul}
                    </div>
                    <div className="font-bold text-2xl md:text-2xl lg:text-5xl text-white">
                      {mainsection.judul_utama}
                    </div>
                    <div className="font-normal text-sm md:text-lg text-white text-justify">
                      {mainsection.deskripsi}
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[10%] z-[15] bg-transparant absolute self-center justify-self-center ">
                <div className="mt-36 py-8 px-[2%]">
                  <div className="flex flex-col text-center mb-5">
                    <div className="text-md lg:text-lg font-medium text-red-500 ">
                      {judulsection.judul_service}
                    </div>
                    <div className="text-lg lg:text-4xl font-medium text-black mb-5">
                      {judulsection.subjudul}
                    </div>
                  </div>
                  <div>
                    <div className="min-h-screen flex items-center justify-center mb-20">
                      {loading ? (
                        <p>Loading</p>
                      ) : (
                        <div className="grid grid-cols-1 gap-4">
                          {listservice.data.map((item, index) => (
                            <ItemCustom
                              key={item.id}
                              gambarservice={
                                item.attributes.icon_service.data
                                  ? `${imageurl}${item.attributes.icon_service.data.attributes.url}`
                                  : "../../../noimg.svg"
                              }
                              service={item.attributes.judul_service}
                              descservice={item.attributes.deskripsi_service}
                              listservice={item.attributes.list_service_details.data.map(
                                (itemfitur) => (
                                  <div key={itemfitur.id}>
                                    <li className="flex gap-x-2 ">
                                      <p className="md:text-md lg:text-lg text-xs font-light self-baseline">
                                        <FontAwesomeIcon
                                          icon={faCheckCircle}
                                          className=" text-green-500 "
                                        />
                                      </p>
                                      <p className="md:text-md lg:text-lg text-xs font-light self-baseline">
                                        {itemfitur.attributes.nama_fiturservice}
                                      </p>
                                    </li>
                                  </div>
                                )
                              )}
                              index={index}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className=" md:px-[5%] lg:px-[12%] ">
                  <div className="flex justify-center self-start items-start bg-gray-100 boreder rounded-2xl py-7 ">
                    <div className="flex flex-col gap-y-8 md:px-6 text-center md:py-10">
                      <div className="font-medium text-black text-xl md:text-3xl">
                        {metode.metode_pengembangan}
                      </div>
                      <div className="font-light text-gray-600 text-lg mx-3">
                        {metode.deskripsi}
                      </div>
                      <div className="flex justify-center items-center text-center">
                        <img
                          src={`${imageurl}${metode.icon_metodepengembangan.data.attributes.url}`}
                          alt=""
                          className="size-52 sm:size-60 md:size-80 object-cover rounded-2xl text-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <Footer2 />
                </div>
              </div>
              <div className="bg-transparant  absolute top-0 left-0 w-full h-full flex items-center justify-center md:px-8 lg:px-16">
                <div className="flex justify-center w-full px-[5%] md:px-[6%]">
                  <div className="border bg-white rounded-3xl shadow-md w-screen flex flex-col p-5 gap-y-3 min-h-0 z-[6]">
                    <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x-2 md:divide-y-0">
                      <div className="p-3 grid grid-cols-2 md:flex-row md:flex md:gap-x-4 md:justify-center md:py-8">
                        <div className="text-gray-600 font-bold text-lg lg:text-4xl self-center">
                          {countsection.count1}
                        </div>
                        <div className="text-gray-400 font-normal text-sm self-center lg:text-xl">
                          {countsection.deskripsi1}
                        </div>
                      </div>
                      <div className="p-3 grid grid-cols-2 md:flex-row md:flex md:gap-x-4 md:justify-center">
                        <div className="text-gray-600 font-bold text-lg lg:text-4xl self-center">
                          {countsection.count2}
                        </div>
                        <div className="text-gray-400 font-normal text-sm self-center lg:text-xl">
                          {countsection.deskripsi2}
                        </div>
                      </div>
                      <div className="p-3 grid grid-cols-2 md:flex-row md:flex md:gap-x-4 md:justify-center">
                        <div className="text-gray-600 font-bold text-lg lg:text-4xl self-center">
                          {countsection.count3}
                        </div>
                        <div className="text-gray-400 font-normal text-sm self-center lg:text-xl">
                          {countsection.deskripsi3}
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
      )}
    </div>
  );
}
