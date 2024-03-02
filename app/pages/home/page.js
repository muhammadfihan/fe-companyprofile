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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

export default function Landing() {
  const url = process.env.NEXT_PUBLIC_API_URL;
  const imageurl = process.env.NEXT_PUBLIC_IMG_URL;
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const [sectionbisnis, setSectionbisnis] = useState(null);
  const [sectionhero, setSectionhero] = useState(null);
  const [sectionclient, setSectionclient] = useState(null);
  const [sectionproduk, setSectionproduk] = useState(null);
  const [sectionlistproduk, setSectionlistproduk] = useState(null);
  const [sectionlistbisnis, setSectionlistbisnis] = useState(null);
  const [sectionkeunggulan, setSectionkeunggulan] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${url}/home?populate[0]=hero_section.gambar_hero.media&populate[1]=list_logos.logo_client.media&populate[2]=produk_section&populate[3]=list_produks.gambar_produk.media&populate[4]=keunggulan_section.mockup_produk.media&populate[5]=keunggulan_section.list_fiturs&populate[6]=bisnis_section&populate[7]=list_bidangs.icon_bisnis.media`
        );
        setSectionbisnis(response.data.data.attributes.bisnis_section);
        setSectionhero(response.data.data.attributes.hero_section);
        setSectionclient(response.data.data.attributes.list_logos);
        setSectionproduk(response.data.data.attributes.produk_section);
        setSectionlistproduk(response.data.data.attributes.list_produks);
        setSectionlistbisnis(response.data.data.attributes.list_bidangs);
        setSectionkeunggulan(response.data.data.attributes.keunggulan_section);
        setLoading(false);
      } catch (error) {
        console.clear();
        return router.push("error");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="h-full ">
      {loading ? (
        <div className="flex justify-center items-center min-h-full">
          <Image
            src="/logo.png"
            className="size-24 object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse "
            width={200}
            height={300}
            style={{ width: "300", height: "300" }}
          />
        </div>
      ) : (
        <Animation>
          <section className="flex justify-center ">
            <HeroSection
              gambar={
                sectionhero.gambar_hero.data
                  ? `${imageurl}${sectionhero.gambar_hero.data.attributes.url}`
                  : "../../noimg.svg"
              }
              perusahaan={sectionhero.nama_pt}
              kalimat={sectionhero.kalimat_utama}
              deskripsi={sectionhero.kalimat_kedua}
            />
          </section>
          <div className="px-12 lg:px-36 mt-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.75 }}
            >
              <div className="flex items-center   ">
                <Marquee autoFill={true} gradient={true} gradientWidth={50}>
                  {sectionclient.data.map((item) => (
                    <Image
                      key={item.id}
                      src={`${imageurl}${item.attributes.logo_client.data.attributes.url}`}
                      alt=""
                      className="h-14 w-18 md:h-26 md:w-30 object-scale-up rounded-2xl md-1 md:mx-3"
                      height={300}
                      width={300}
                      style={{ width: "auto", height: "auto" }}
                    />
                  ))}
                </Marquee>
              </div>
            </motion.div>
          </div>

          <section className=" items-center justify-center">
            <div className=" px-4 py-8 mt-10">
              <div className="row-span-2 text-center mb-10">
                <h2 className="text-xl px-8 font-medium  text-center text-red-500 lg:text-xl md:px-36 ">
                  {sectionproduk.judul}
                </h2>
                <h2 className="text-sm font-medium text-center mt-4 px-8 md:text-4xl lg:px-[20%] ">
                  {sectionproduk.subjudul}
                </h2>
              </div>
              <div className=" flex items-center justify-center mb-20">
                <div className="grid grid-cols-1 gap-4">
                  {sectionlistproduk.data.map((item, index) => (
                    <ItemSolution
                      key={item.id}
                      gambarfitur={item.attributes.gambar_produk.data.attributes.url}
                      judulgambar={item.attributes.nama_produk}
                      descjudul={item.attributes.deskripsi}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className="bg-gray-100 ">
            <OurProduct
              text={sectionkeunggulan.judul}
              desc={sectionkeunggulan.deskripsi}
              image={
                sectionkeunggulan.mockup_produk.data
                  ? `${imageurl}${sectionkeunggulan.mockup_produk.data.attributes.url}`
                  : "../../noimg.svg"
              }
              listfitur={sectionkeunggulan.list_fiturs.data.map((itemfitur) => (
                <div key={itemfitur.id}>
                  <li className="flex gap-x-2 ">
                    <p className="md:text-md lg:text-lg text-xs font-light self-baseline">
                      <FontAwesomeIcon icon={faCheckCircle} className=" text-green-500 " />
                    </p>
                    <p className="md:text-md lg:text-lg text-xs font-light self-baseline">
                      {itemfitur.attributes.fitur}
                    </p>
                  </li>
                </div>
              ))}
            />
          </section>
          <section className="py-16">
            <div className="row-span-2 text-center mb-10 ">
              <h2 className="text-xl px-8 font-medium  text-center text-red-500 lg:text-xl md:px-36 ">
                {sectionbisnis.judul}
              </h2>
              <h2 className="text-sm font-medium text-center mt-4 px-8 md:text-4xl lg:px-[20%] ">
                {sectionbisnis.subjudul}
              </h2>
            </div>
            <div className="md:flex md:flex-row md:justify-center">
              <div className="min-h-0 items-center justify-center mb-8 mt-4 ">
                <div
                  className={`flex flex-wrap-reverse justify-center gap-4 max-w-[72rem] ${
                    sectionlistbisnis.data.length == 4
                      ? "px-[2rem] md:px-[10rem]"
                      : "px-[2rem] md:px-[1rem]"
                  }`}
                >
                  {sectionlistbisnis.data.map((item, index) => (
                    <div key={item.id} className="w-72 flex-auto bg-transparant min-h-0 ">
                      {item.attributes.icon_bisnis.data == null ? (
                        <ItemFeature
                          gambar="../../noimg.svg"
                          bidangbisnis={item.attributes.bidang_bisnis}
                          penjelas={item.attributes.deskripsi}
                        />
                      ) : (
                        <ItemFeature
                          gambar={`${imageurl}${item.attributes.icon_bisnis.data.attributes.url}`}
                          bidangbisnis={item.attributes.bidang_bisnis}
                          penjelas={item.attributes.deskripsi}
                        />
                      )}
                    </div>
                  ))}
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
