"use client";

import gambar from "../../../public/image5.jpg";
import gambar4 from "../../../public/image4.png";
import Image from "next/image";
import Footer1 from "../../component/Footer";
import Marquee from "react-fast-marquee";
import { useState, useEffect } from "react";
import axios from "axios";
import ItemSolution from "../../component/DataSolution";
import ItemFeature from "../../component/DataFeature";
import Navbar from "../../component/Navbar";
import Animation from "../../component/Animation";
import { motion } from "framer-motion";
import VisibleComponent from "../../component/Visible";
import HeroSection from "../../component/Hero";
import OurProduct from "../../component/OurProduct";

export default function Landing() {
  const url = process.env.NEXT_PUBLIC_API_URL;
  const imageurl = process.env.NEXT_PUBLIC_IMG_URL;
  const [fitur, setFitur] = useState(null);
  const [clientlogo, setClientlogo] = useState(null);
  const [hero, setHero] = useState(null);
  const [bisnis, setBisnis] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setTimeout(async () => {
          const response1 = await axios.get(`${url}/fiturs?populate=*`);
          setFitur(response1.data);

          const response2 = await axios.get(`${url}/logoclient?populate=*`);
          setClientlogo(response2.data.data.attributes.logoupload.data);

          const response3 = await axios.get(`${url}/hero?populate=*`);
          setHero(response3.data.data.attributes);

          const response4 = await axios.get(`${url}/bisnisbidangs?populate=*`);
          setBisnis(response4.data);

          setLoading(false);
        }, 500);
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
        <div className="flex py-56 md:py-52 justify-center items-center self-center ">
          <img src="../../logo.png" className="object-cover animate-pulse" />
        </div>
      ) : (
        <Animation>
          <section className="flex justify-center ">
            <HeroSection
              gambar={`${imageurl}${hero.gambar.data.attributes.url}`}
              perusahaan={hero.perusahaan}
              kalimat={hero.kalimat}
              deskripsi={hero.deskripsi}
            />
          </section>
          <div className="px-12 lg:px-36 mt-6">
            {loading ? (
              <div className="flex items-center justify-center">
                <p>Loading...</p>
              </div>
            ) : (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
              >
                <div className="flex items-center   ">
                  <Marquee autoFill={true} gradient={true} gradientWidth={50}>
                    {clientlogo.map((item) => (
                      <img
                        key={item.id}
                        src={`${imageurl}${item.attributes.url}`}
                        alt=""
                        className="h-14 w-18 md:h-26 md:w-30 object-scale-up rounded-2xl md-1 md:mx-3"
                      />
                    ))}
                  </Marquee>
                </div>
              </motion.div>
            )}
          </div>

          <section className=" items-center justify-center">
            <div className=" px-4 py-8 mt-10">
              <div className="row-span-2 text-center mb-10">
                <h2 className="text-xl px-8 font-medium  text-center text-red-500 lg:text-xl md:px-36 ">
                  OUR SOLUTIONS
                </h2>
                <h2 className="text-sm font-medium text-center mt-4 px-8 md:text-4xl lg:px-[20%] ">
                  The One-Stop Solution to Empower Business Towards Success
                </h2>
              </div>
              <div className="min-h-screen flex items-center justify-center mb-20">
                {loading ? (
                  <p>Loading</p>
                ) : (
                  <div className="grid grid-cols-1 gap-4">
                    {fitur.data.map((item, index) => (
                      <ItemSolution
                        key={item.id}
                        gambarfitur={item.attributes.gambarfitur.data.attributes.url}
                        judulgambar={item.attributes.judulgambar}
                        descjudul={item.attributes.descgambar}
                        index={index}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
          <section className="bg-gray-100 ">
            <OurProduct />
          </section>
          <section className="py-16">
            <div className="row-span-2 text-center mb-10 ">
              <h2 className="text-xl px-8 font-medium  text-center text-red-500 lg:text-xl md:px-36 ">
                OVERVIEW
              </h2>
              <h2 className="text-sm font-medium text-center mt-4 px-8 md:text-4xl lg:px-[20%] ">
                Our Powerful Value
              </h2>
            </div>
            <div className="md:flex md:flex-row md:justify-center">
              <div className="min-h-0 items-center justify-center mb-8 mt-4 ">
                <div className="flex flex-wrap justify-center gap-4 px-[10vw]">
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <p>Loading...</p>
                    </div>
                  ) : (
                    <>
                      {bisnis.data.map((item, index) => (
                        <div key={item.id} className="w-72 flex-auto bg-transparant min-h-0 ">
                          {item.attributes.gambar.data == null ? (
                            <ItemFeature
                              gambar="../../noimg.svg"
                              bidangbisnis={item.attributes.scopebisnis}
                              penjelas={item.attributes.penjelas}
                            />
                          ) : (
                            <ItemFeature
                              gambar={`${imageurl}${item.attributes.gambar.data.attributes.url}`}
                              bidangbisnis={item.attributes.scopebisnis}
                              penjelas={item.attributes.penjelas}
                            />
                          )}
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>
          <section className="w-full">
            <Footer1 />
          </section>
        </Animation>
      )}
    </div>
  );
}
