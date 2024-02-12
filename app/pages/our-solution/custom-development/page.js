"use client";

import { usePathname } from "next/navigation";
import Footer2 from "../../../component/Footer2";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faCoffee,
  faStar,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Navbar from "../../../component/Navbar";
import ItemCustom from "../../../component/DataCustomDev";
import Animation from "../../../component/Animation";

export default function CustomDev() {
  const url = process.env.NEXT_PUBLIC_API_URL;
  const imageurl = process.env.NEXT_PUBLIC_IMG_URL;
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchService() {
      const response = await axios.get(`${url}/customdevs?populate=*`);
      setService(response.data);

      setLoading(false);
    }
    fetchService();
  }, []);

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
                    <div className="font-normal text-sm md:text-md text-white">
                      <b>Our Solutions / </b>Custom Development Software
                    </div>
                  </div>
                  <div className="font-semibold text-xl md:text-2xl text-white">
                    Where Ideas Meet Innovation:
                  </div>
                  <div className="font-bold text-2xl md:text-2xl lg:text-5xl text-white">
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
              <div className="mt-36 py-8 px-[2%]">
                <div className="flex flex-col text-center mb-5">
                  <div className="text-md lg:text-lg font-medium text-red-500 ">INSIGHT</div>
                  <div className="text-lg lg:text-4xl font-medium text-black mb-5">
                    What we deliver
                  </div>
                </div>
                <div>
                  <div className="min-h-screen flex items-center justify-center mb-20">
                    {loading ? (
                      <p>Loading</p>
                    ) : (
                      <div className="grid grid-cols-1 gap-4">
                        {service.data.map((item, index) => (
                          <ItemCustom
                            key={item.id}
                            gambarservice={`${imageurl}${item.attributes.gambarservice.data.attributes.url}`}
                            service={item.attributes.service}
                            descservice={item.attributes.descservice}
                            listservice={item.attributes.fitur_services.data.map((itemfitur) => (
                              <div key={itemfitur.id}>
                                <div className="flex gap-x-2 ">
                                  <FontAwesomeIcon
                                    icon={faCheckCircle}
                                    className=" text-green-500 self-center"
                                  />
                                  <p className="md:text-md lg:text-lg text-xs font-light">
                                    {itemfitur.attributes.namafitur}
                                  </p>
                                </div>
                              </div>
                            ))}
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
                      Methodology Development
                    </div>
                    <div className="font-light text-gray-600 text-lg mx-3">
                      Code.id’s development process embraces Agile methodology, ensuring a dynamic
                      and collaborative approach to custom software development. This involves
                      breaking down projects into manageable sprints, where teams work in short,
                      focused bursts to deliver functional components. Regular meetings and open
                      communication channels facilitate continuous feedback loops, allowing for
                      swift adaptation to evolving client requirements.
                    </div>
                    <div className="flex justify-center items-center text-center">
                      <img
                        src="../../../agile.jpg"
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
