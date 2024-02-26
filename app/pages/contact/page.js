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
            <div className="text-center p-8 md:px-52">
              <p className="font-semibold text-2xl mb-5">Diskusikan dengan kami kebutuhan anda</p>
              <p className="font-normal text-lg">
                Nakula Sadewa bergerak dibidang Teknologi Informasi, membangun sistem yang akan
                mempermudah berbagai aktifitas anda didunia bisnis. Hubungi kami dan konsultasikan
                sistem yang dibutuhkan untuk meningkatkan kinerja anda.
              </p>
            </div>
            <div className="flex flex-row gap-8 justify-center">
              <div className="flex flex-col justify-center items-center gap-8">
                <div className="flex h-full">
                  <div className="relative flex flex-col items-center rounded-[20px] border-[1px] border-gray-200 w-[400px] mx-auto p-4 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] min-h-[30rem]">
                    <div className="relative flex h-32 w-full justify-center rounded-xl bg-cover">
                      <div className="absolute flex h-44 w-full justify-center rounded-xl bg-cover bg-gradient-to-r from-red-500 to-pink-700"></div>
                      <div className="absolute -bottom-24 flex h-[120px] w-[120px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 ">
                        <img
                          className="h-full w-full rounded-full"
                          src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar11.1060b63041fdffa5f8ef.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="mt-28 flex flex-col items-center">
                      <h4 className="text-xl font-bold text-navy-700 ">Adela Parkson</h4>
                      <p className="text-base font-normal text-gray-600">Product Manager</p>
                    </div>
                    <div className="mt-6 mb-3 flex gap-14 md:!gap-14">
                      <div className="flex flex-col items-center justify-center">
                        <p className="text-2xl font-bold text-navy-700 ">17</p>
                        <p className="text-sm font-normal text-gray-600">Posts</p>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <p className="text-2xl font-bold text-navy-700 ">9.7K</p>
                        <p className="text-sm font-normal text-gray-600">Followers</p>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <p className="text-2xl font-bold text-navy-700 ">434</p>
                        <p className="text-sm font-normal text-gray-600">Following</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="flex flex-col gap-5 justify start items-start mx-9 lg:mt-10">
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
              </div> */}
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
