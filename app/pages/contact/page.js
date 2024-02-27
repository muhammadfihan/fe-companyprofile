"use client";

import Footer1 from "../../component/Footer";
import Navbar from "../../component/Navbar";
import Animation from "../../component/Animation";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import axios from "axios";
import ItemCard from "../../component/ContactCard";

export default function Contact() {
  const url = process.env.NEXT_PUBLIC_API_URL;
  const imageurl = process.env.NEXT_PUBLIC_IMG_URL;
  const [loading, setLoading] = useState(true);

  const [mainsection, setMain] = useState(null);
  const [listcontact, setList] = useState(null);
  const [sectionclient, setSectionclient] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setTimeout(async () => {
          const response = await axios.get(`${url}/list-logos?populate=*`);
          setSectionclient(response.data.data);

          const response2 = await axios.get(
            `${url}/hubungi-kami?populate[0]=list_contacts.profile_picture.media`
          );
          setMain(response2.data.data.attributes);
          setList(response2.data.data.attributes.list_contacts.data);
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
      <Navbar />
      {loading ? (
        <></>
      ) : (
        <Animation className="h-full w-full">
          <section className="">
            <div className="h-[90px] bg-gradient-to-r from-red-500 to-red-800 ">
              <div className="py-8 px-[5%] md:px-[10%]">
                <div className="flex flex-col gap-y-4">
                  <div className="flex flex-row gap-x-1">
                    <div className="font-normal text-md md:text-lg text-white">
                      {mainsection.judul_path}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full">
              <div className="text-center p-8 lg:px-52 lg:p-10 lg:mt-9">
                <p className="font-semibold text-2xl mb-5">{mainsection.judul_utama}</p>
                <p className="font-normal text-lg">{mainsection.deskripsi}</p>
              </div>
              <div className="flex flex-row flex-wrap gap-8 justify-center ">
                {listcontact.map((item, index) => (
                  <ItemCard
                    key={item.id}
                    itemprofile={`${imageurl}${item.attributes.profile_picture.data.attributes.url}`}
                    itemnama={item.attributes.nama}
                    itememail={item.attributes.email}
                  />
                ))}
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
              <div className="px-12 lg:px-36 mt-20">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ ease: "easeInOut", duration: 0.75 }}
                >
                  <div className="flex items-center   ">
                    <Marquee autoFill={true} gradient={true} gradientWidth={50}>
                      {sectionclient.map((item) => (
                        <img
                          key={item.id}
                          src={`${imageurl}${item.attributes.logo_client.data.attributes.url}`}
                          alt=""
                          className="h-16 w-18 md:h-26 md:w-30 object-scale-up rounded-2xl md-1 md:mx-3"
                        />
                      ))}
                    </Marquee>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
          <div className="mt-[4rem] md:mt-[2%]">
            <Footer1 />
          </div>
        </Animation>
      )}
    </div>
  );
}
