"use client";

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
import { Tab } from "@headlessui/react";
import Footer2 from "../../../component/Footer2";
import Animation from "../../../component/Animation";
import VisibleComponent from "../../../component/Visible";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DevService() {
  const url = process.env.NEXT_PUBLIC_API_URL;
  const imageurl = process.env.NEXT_PUBLIC_IMG_URL;
  const [loading, setLoading] = useState(true);
  const { ref, isVisible } = VisibleComponent();

  const [mainsection, setMainsection] = useState(null);
  const [developersection, setDevelopersection] = useState(null);
  const [judulskill, setJudulskill] = useState(null);
  const [listskill, setListskill] = useState(null);

  useEffect(() => {
    async function fetchSkill() {
      const response = await axios.get(
        `${url}/skill-developer?populate[0]=main_section&populate[1]=developer_section.icon_center.media&populate[2]=developer_section.banner_icon.media&populate[3]=skill_section.list_skills.list_skill_details.icon_skill.media`
      );
      setMainsection(response.data.data.attributes.main_section);
      setDevelopersection(response.data.data.attributes.developer_section);
      setJudulskill(response.data.data.attributes.skill_section);
      setListskill(response.data.data.attributes.skill_section.list_skills);
      setLoading(false);
    }

    fetchSkill();
  }, []);

  return (
    <div>
      <Navbar />
      {loading ? (
        <></>
      ) : (
        <Animation>
          <section className="h-full">
            <div className="flex flex-col items-center self-center py-28 h-full  bg-gradient-to-r from-gray-100 to-gray-300">
              <div className="flex flex-col text-center mt-10 gap-y-8">
                <div className="bg-gray-100 font-normal text-xs md:text-sm md:w-80 self-center p-2 rounded-xl">
                  {mainsection.judul_path}
                </div>
                <div className="text-xl font-semibold md:text-4xl"> {mainsection.subjudul}</div>
                <div className="px-[8%] font-bold md:text-4xl md:mx-[20%] text-2xl bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-gray-800">
                  {mainsection.judul_utama}
                </div>
                <div className="px-[10%] md:text-xl md:mx-[10%] tex-sm font-light text-gray-600">
                  {mainsection.deskripsi}
                </div>
                <div className="flex flex-row justify-center items-center gap-x-5">
                  <button className="bg-red-500 p-2 text-white px-4 rounded-full text-xs md:text-lg">
                    Mulai Konsultasi
                  </button>
                  <button className="bg-gray-100 p-2 text-gray-800 px-4 rounded-full text-xs md:text-lg">
                    Selengkapnya
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="h-screen">
            <div className=" bg-gradient-to-r from-red-500 to-red-800 ">
              <div className="py-16 px-[5%] md:px-[15%]">
                <div className="font-medium text-lg md:text-4xl text-white flex flex-col justify-center items-center gap-y-4">
                  <h1> {mainsection.banner_text}</h1>
                  <button className="bg-white md:text-lg text-red-500 font-medium p-2 px-6 rounded-xl">
                    Contact Us !
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col text-center mt-16">
              <div className="text-md lg:text-lg font-medium text-red-500 mb-5">
                {developersection.subjudul}
              </div>
              <div className="text-lg lg:text-4xl font-medium text-black mb-5">
                {developersection.judul_utama}
              </div>
              <div className="px-[10%] md:text-xl md:mx-[10%] tex-sm font-extralight text-gray-600 mb-10">
                {developersection.deskripsi}
              </div>
              <div className="flex flex-col md:px-[6%] mt-10">
                <div className="grid grid-rows-1 md:grid-cols-2 gap-y-4">
                  <div className="text-start px-8 md:px-20">
                    <h1 className="font-medium md:text-2xl">{developersection.judul1}</h1>
                    <p className="font-extralight md:text-lg">{developersection.deskripsi1}</p>
                  </div>
                  <div className="text-start md:text-end px-8 md:px-20">
                    <h1 className="font-medium md:text-2xl">{developersection.judul2}</h1>
                    <p className="font-extralight md:text-lg">{developersection.deskripsi2}</p>
                  </div>
                </div>
                <div className="p-10 self-center order-first md:order-none">
                  <img
                    src={`${imageurl}${developersection.icon_center.data.attributes.url}`}
                    className="w-52"
                    alt=""
                  />
                </div>
                <div className="grid grid-rows-1 md:grid-cols-2 gap-y-4 mt-4">
                  <div className="text-start px-8 md:px-20">
                    <h1 className="font-medium md:text-2xl">{developersection.judul3}</h1>
                    <p className="font-extralight md:text-lg">Ou{developersection.deskripsi3}</p>
                  </div>
                  <div className="text-start md:text-end px-8 md:px-20">
                    <h1 className="font-medium md:text-2xl">{developersection.judul4}</h1>
                    <p className="font-extralight md:text-lg">{developersection.deskripsi4}</p>
                  </div>
                </div>
                <div className="bg-gray-100 mt-16 rounded-xl shadow-lg mx-10 md:mx-20">
                  <div className="py-10">
                    <div className="gap-x-6 w-3/4 ms-10 font-medium text-lg md:text-2xl text-white flex justify-center items-center gap-y-4">
                      <div>
                        <img
                          src={`${imageurl}${developersection.banner_icon.data.attributes.url}`}
                          className="hidden md:block w-24"
                          alt=""
                        />
                      </div>
                      <h1 className="text-start text-gray-800 ">{developersection.banner_text}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-20 px-[2%]">
              <div className="flex flex-col text-center">
                <div className="text-md lg:text-lg font-medium text-red-500 mb-5">
                  {judulskill.subjudul}
                </div>
                <div className="text-lg lg:text-4xl font-medium text-black mb-5">
                  {judulskill.judul_utama}
                </div>
                <div className="px-[10%] md:text-lg md:mx-[10%] tex-sm font-extralight text-gray-600">
                  {judulskill.deskripsi}
                </div>
              </div>
              <div className="grid grid-rows-1 place-items-center">
                {loading ? (
                  <p>Loading</p>
                ) : (
                  <div className="w-auto flex flex-col px-2 py-16 sm:px-0">
                    <Tab.Group>
                      <Tab.List className="flex flex-wrap md:grid md:grid-flow-col rounded-xl md:rounded-full bg-gray-200 ">
                        {Object.values(listskill.data).map((item, index) => (
                          <Tab
                            key={item.id}
                            className={({ selected }) =>
                              classNames(
                                "w-full rounded-xl md:rounded-full p-5 text-md md:text-[14px] font-medium leading-5 ",
                                " focus:outline-none ",
                                selected
                                  ? "bg-red-500 text-white"
                                  : "text-gray-700 hover:text-white hover:bg-red-500 font-light"
                              )
                            }
                          >
                            {item.attributes.Skill}
                          </Tab>
                        ))}
                      </Tab.List>
                      <Tab.Panels className="mt-2">
                        {Object.values(listskill.data).map((item, index) => (
                          <Tab.Panel
                            key={item.id}
                            className={classNames("flex flex-wrap gap-5 justify-center mt-4")}
                          >
                            {item.attributes.list_skill_details.data.map((skillitem) => (
                              <div
                                key={skillitem.id}
                                className="relative rounded-md p-3 hover:bg-gray-100"
                              >
                                <ul className="mt-1 flex flex-col justify-center items-center space-y-2 leading-4 text-gray-500 animate-jump-in animate-once animate-duration-500 animate-delay-0 animate-ease-in">
                                  <li>
                                    <img
                                      src={`${imageurl}${skillitem.attributes.icon_skill.data.attributes.url}`}
                                      alt=""
                                      ref={ref}
                                      className="size-12 "
                                    />
                                  </li>
                                  <li className="text-md font-medium">
                                    {skillitem.attributes.skill}
                                  </li>
                                </ul>
                              </div>
                            ))}
                          </Tab.Panel>
                        ))}
                      </Tab.Panels>
                    </Tab.Group>
                  </div>
                )}
              </div>
            </div>
            <Footer2 />
          </section>
        </Animation>
      )}
    </div>
  );
}
