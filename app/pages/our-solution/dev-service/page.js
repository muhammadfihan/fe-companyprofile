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
  const [skill, setSkill] = useState(null);
  const [loading, setLoading] = useState(true);
  const { ref, isVisible } = VisibleComponent();

  useEffect(() => {
    async function fetchSkill() {
      const response = await axios.get(
        `${url}/skills?populate[0]=detailskills&populate[1]=detailskills.gambarskill&populate[2]=detailskills.gambarskill.media`
      );
      setSkill(response.data);

      setLoading(false);
    }

    fetchSkill();
  }, []);

  return (
    <div>
      <Navbar />
      <Animation>
        <section className="h-full">
          <div className="flex flex-col items-center self-center py-28 h-full  bg-gradient-to-r from-gray-100 to-gray-300">
            <div className="flex flex-col text-center mt-10 gap-y-8">
              <div className="bg-gray-100 text-xs md:text-sm md:w-80 self-center p-2 rounded-xl">
                <b>Our Solutions </b>/ Developer as a Service
              </div>
              <div className="text-xl font-semibold md:text-4xl">Connecting you with</div>
              <div className="px-[8%] font-bold md:text-4xl md:mx-[20%] text-2xl bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-gray-800">
                High-Skilled Developers Through Developer as a Service
              </div>
              <div className="px-[10%] md:text-xl md:mx-[10%] tex-sm font-light text-gray-600">
                Tap into a dedicated team of highly skilled developers who are strategically aligned
                with your specific time zone, ensuring seamless collaboration and timely project
                deliveries - all at a remarkably affordable price.
              </div>
              <div className="flex flex-row justify-center items-center gap-x-5">
                <button className="bg-red-500 p-2 text-white px-4 rounded-full text-xs md:text-lg">
                  Start Consultant
                </button>
                <button className="bg-gray-100 p-2 text-gray-800 px-4 rounded-full text-xs md:text-lg">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="h-screen">
          <div className=" bg-gradient-to-r from-red-500 to-red-800 ">
            <div className="py-16 px-[5%] md:px-[15%]">
              <div className="font-medium text-lg md:text-4xl text-white flex flex-col justify-center items-center gap-y-4">
                <h1>Looking for Skilled Developer ?</h1>
                <button className="bg-white md:text-lg text-red-500 font-medium p-2 px-6 rounded-xl">
                  Contact Us !
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-center mt-16">
            <div className="text-md lg:text-lg font-medium text-red-500 mb-5">OUR EXCELLENCE</div>
            <div className="text-lg lg:text-4xl font-medium text-black mb-5">
              Discover the Potential in Our IT Bootcamp
            </div>
            <div className="px-[10%] md:text-xl md:mx-[10%] tex-sm font-extralight text-gray-600 mb-10">
              Our proven IT bootcamp have equipped us with invaluable expertise of junior developer
              in a range of programming languages including .NET, Ruby, Node.JS, Java, Golang,
              Python, Flutter, Software Quality Assurance, and more.
            </div>
            <div className="flex flex-col md:px-[6%] mt-10">
              <div className="grid grid-rows-1 md:grid-cols-2 gap-y-4">
                <div className="text-start px-8 md:px-20">
                  <h1 className="font-medium md:text-2xl">
                    Your Path to Industry-Ready Proficiency Starts Here!
                  </h1>
                  <p className="font-extralight md:text-lg">
                    Our IT Bootcamp boasts a meticulously structured curriculum tailored
                    specifically to software development. This enables participants to acquire
                    precise skills aligned with industry demands.
                  </p>
                </div>
                <div className="text-start md:text-end px-8 md:px-20">
                  <h1 className="font-medium md:text-2xl">
                    Your Path to Industry-Ready Proficiency Starts Here!
                  </h1>
                  <p className="font-extralight md:text-lg">
                    Our IT Bootcamp boasts a meticulously structured curriculum tailored
                    specifically to software development. This enables participants to acquire
                    precise skills aligned with industry demands.
                  </p>
                </div>
              </div>
              <div className="p-10 self-center order-first md:order-none">
                <img src="../../../academy.png" className="w-52" alt="" />
              </div>
              <div className="grid grid-rows-1 md:grid-cols-2 gap-y-4 mt-4">
                <div className="text-start px-8 md:px-20">
                  <h1 className="font-medium md:text-2xl">
                    Your Path to Industry-Ready Proficiency Starts Here!
                  </h1>
                  <p className="font-extralight md:text-lg">
                    Our IT Bootcamp boasts a meticulously structured curriculum tailored
                    specifically to software development. This enables participants to acquire
                    precise skills aligned with industry demands.
                  </p>
                </div>
                <div className="text-start md:text-end px-8 md:px-20">
                  <h1 className="font-medium md:text-2xl">
                    Your Path to Industry-Ready Proficiency Starts Here!
                  </h1>
                  <p className="font-extralight md:text-lg">
                    Our IT Bootcamp boasts a meticulously structured curriculum tailored
                    specifically to software development. This enables participants to acquire
                    precise skills aligned with industry demands.
                  </p>
                </div>
              </div>
              <div className="bg-gray-100 mt-16 rounded-xl shadow-lg mx-10 md:mx-20">
                <div className="py-10">
                  <div className="gap-x-6 w-3/4 ms-10 font-medium text-lg md:text-2xl text-white flex justify-center items-center gap-y-4">
                    <div>
                      <img src="../../../icon3.png" className="hidden md:block w-24" alt="" />
                    </div>
                    <h1 className="text-start text-gray-800 ">
                      Learn more about our IT bootcamp and hiring junior developers today!
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 px-[2%]">
            <div className="flex flex-col text-center">
              <div className="text-md lg:text-lg font-medium text-red-500 mb-5">Expertise</div>
              <div className="text-lg lg:text-4xl font-medium text-black mb-5">
                High-quality Developer Skillsetsr
              </div>
              <div className="px-[10%] md:text-lg md:mx-[10%] tex-sm font-extralight text-gray-600">
                We’re provide a wide range of developer skills, mastering various languages,
                frameworks, and technologies for projects from web and mobile apps to complex
                software systems.
              </div>
            </div>
            <div className="grid grid-rows-1 place-items-center">
              {loading ? (
                <p>Loading</p>
              ) : (
                <div className="w-auto flex flex-col px-2 py-16 sm:px-0">
                  <Tab.Group>
                    <Tab.List className="flex flex-wrap md:grid md:grid-flow-col rounded-xl md:rounded-full bg-gray-200 ">
                      {Object.values(skill.data).map((item, index) => (
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
                          {item.attributes.bidangskill}
                        </Tab>
                      ))}
                    </Tab.List>
                    <Tab.Panels className="mt-2">
                      {Object.values(skill.data).map((item, index) => (
                        <Tab.Panel
                          key={item.id}
                          className={classNames("flex flex-wrap gap-5 justify-center mt-4")}
                        >
                          {item.attributes.detailskills.data.map((skill) => (
                            <div
                              key={skill.id}
                              className="relative rounded-md p-3 hover:bg-gray-100"
                            >
                              <ul className="mt-1 flex flex-col justify-center items-center space-y-2 leading-4 text-gray-500 animate-jump-in animate-once animate-duration-500 animate-delay-0 animate-ease-in">
                                <li>
                                  <img
                                    src={`${imageurl}${skill.attributes.gambarskill.data.attributes.url}`}
                                    alt=""
                                    ref={ref}
                                    className="size-12 "
                                  />
                                </li>
                                <li className="text-md font-medium">
                                  {skill.attributes.namaskill}
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
    </div>
  );
}
