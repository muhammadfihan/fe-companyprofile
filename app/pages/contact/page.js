"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faCoffee,
  faEnvelope,
  faLocation,
  faLocationDot,
  faLocationPin,
  faMessage,
  faPhone,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Footer1 from "../../component/Footer";
import Navbar from "../../component/Navbar";
import Animation from "../../component/Animation";

export default function Test() {
  return (
    <div>
      <Navbar />
      <Animation className="h-full w-full">
        <section className="">
          <div className="h-[90px] bg-gradient-to-r from-red-500 to-red-800 ">
            <div className="py-8 px-[5%] md:px-[10%]">
              <div className="flex flex-col gap-y-4">
                <div className="flex flex-row gap-x-1">
                  <div className="font-normal text-sm md:text-lg text-white">
                    <b>Contact Us /</b> Excecutive
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full">
            <div className="flex flex-col gap-8 xl:flex-row xl:px-52 xl:mt-20 lg:px-40 lg:mt-20">
              <div className="flex flex-col justify-center items-center gap-8">
                <div className="bg-white rounded-xl shadow-md border h-[380px] w-[340px] mt-8 flex justify-center items-center">
                  <img
                    src="../../../profile.jpeg"
                    alt=""
                    className="size-52 sm:size-60 md:size-72 lg:size-96 object-cover rounded-2xl self-center"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-5 justify start items-start mx-9 lg:mt-10">
                <div className="">
                  <div className="text-sm font-light md:text-lg">TAKE THE LEAD</div>
                  <div className="text-lg font-medium md:text-2xl">Reach out to our COO</div>
                </div>
                <div className="">
                  <div className="text-sm font-light text-justify md:text-lg">
                    Looking for a reliable development partner to drive your business forward? Get
                    in touch with us today! We’re ready to help you reach your objectives and
                    elevate your software development projects to new heights.
                  </div>
                </div>
                <div className="flex flex-row gap-4 xl:mb-3">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-md bg-gray-400 rounded-lg shadow-md  text-white p-3"
                  />
                  <div className="flex justify-center self-center font-light text-sm md:text-xl">
                    asutomo@code.id
                  </div>
                </div>
                <div className="flex flex-row gap-4 xl:mb-3">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-md bg-gray-400 rounded-lg shadow-md  text-white p-3"
                  />
                  <div className="flex justify-center self-center font-light text-sm md:text-xl">
                    +62-21-2933 9528
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-md bg-gray-400 rounded-lg shadow-md  text-white p-3"
                  />
                  <div className="flex justify-center self-center font-light text-sm md:text-xl">
                    PT. Code Development Indonesia APL Tower 30th Floor Central Park Jalan Letjen S.
                    Parman Kav 28 Jakarta, 11470, Indonesia
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="mt-[14%]">
          <Footer1 />
        </div>
      </Animation>
    </div>
  );
}
