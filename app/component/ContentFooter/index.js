"use client";

import axios from "axios";
import { useState, useEffect } from "react";

const ContentFooter = () => {
  const url = process.env.NEXT_PUBLIC_API_URL;
  const imageurl = process.env.NEXT_PUBLIC_IMG_URL;
  const [loading, setLoading] = useState(true);

  const [mainfooter, setMain] = useState(null);
  const [isifooter, setIsi] = useState(null);
  const [kontak, setKontak] = useState(null);
  const [karir, setKarir] = useState(null);
  const [alamat, setAlamat] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setTimeout(async () => {
          const response = await axios.get(
            `${url}/footer-utama?populate[0]=main_footer.logo.media&populate[1]=main_footer.footer_contacts&populate[2]=main_footer.footer_karirs&populate[3]=main_footer.footer_alamats&populate[4]=gambar_footer.media`
          );
          setMain(response.data.data.attributes);
          setIsi(response.data.data.attributes.main_footer);
          setKontak(response.data.data.attributes.main_footer.footer_contacts.data);
          setKarir(response.data.data.attributes.main_footer.footer_karirs.data);
          setAlamat(response.data.data.attributes.main_footer.footer_alamats.data);

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
      {loading ? (
        <></>
      ) : (
        <div>
          {/* <section className="w-full">
            <div className="grid grid-rows-2 relative">
              <div className="h-64 bg-white"></div>
              <div className="h-64 bg-gray-200"></div>
              <div className="bg-transparant absolute  top-0 left-0 z-10 h-full w-full flex items-center justify-center md:px-8 lg:px-28">
                <div className="flex justify-center ">
                  <div className="relative md:rounded-3xl overflow-hidden mt-4 md:mx-10">
                    <img
                      className="w-screen h-[550px] md:h-[420px] sm:w-[1200px] xl:w-screen object-cover brightness-custom"
                      src={`${imageurl}${mainfooter.gambar_footer.data.attributes.url}`}
                      alt="Company Logo"
                    />
                  </div>
                  <div className="absolute">
                    <div className="relative">
                      <div className="xl:grid xl:grid-cols-2 xl:px-48">
                        <div className="self-center hidden xl:block xl:px-8">
                          <div className="grid grid-rows-1 text-white gap-y-10">
                            <p className="font-medium text-xl">{mainfooter.subjudul}</p>
                            <p className="font-bold text-4xl">{mainfooter.judul_utama}</p>
                            <p className="font-light text-lg">{mainfooter.deskripsi}</p>
                          </div>
                        </div>
                        <div className="text-center ">
                          <div className="grid grid-cols-1 gap-6 ">
                            <div className="md:max-w-xl max-w-md mx-auto mt-10 md:mt-4 md:p-6 bg-transparant  w-screen md:px-16 sm:px-0 xl:px-20">
                              <div className="backdrop-blur-sm bg-white/20 rounded-lg mt-2">
                                <form className="w-full max-w-lg p-6">
                                  <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                      <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        type="text"
                                        placeholder="Nama"
                                      />
                                    </div>
                                    <div className="w-full md:w-1/2 px-3">
                                      <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        type="text"
                                        placeholder="Email"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                      <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        type="text"
                                        placeholder="No Handphone"
                                      />
                                    </div>
                                    <div className="w-full md:w-1/2 px-3">
                                      <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        type="text"
                                        placeholder="Perusahaan"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full px-3">
                                      <textarea
                                        className="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        type="text"
                                        placeholder="Pesan"
                                      ></textarea>
                                    </div>
                                  </div>
                                  <button
                                    type="submit"
                                    className="bg-red-500 text-white py-2 px-4 rounded-md w-full"
                                  >
                                    Kirim Pesan
                                  </button>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          <section className="bg-gray-200">
            <div className="grid grid-rows-3 md:grid-cols-2 lg:grid-cols-3 py-8 px-10 gap-y-6 md:px-20 lg:px-36 lg:grid-rows-1">
              <div className="flex flex-col gap-3 self-center md:self-start">
                <div className="grid grid-cols-1">
                  <img
                    className="w-[auto] h-[50px]"
                    src={`${imageurl}${isifooter.logo.data.attributes.url}`}
                    alt="Company Logo"
                  />
                </div>
                <p className="font-light text-md md:me-5 lg:me-8">{isifooter.deskripsi}</p>
              </div>
              <div className="flex flex-col gap-4 self-center md:self-start">
                <div>
                  <p className="font-medium text-lg">Kontak</p>
                  {kontak.map((item, index) => (
                    <p key={item.id} className="font-light text-sm">
                      {item.attributes.lokasi} : {item.attributes.email}
                    </p>
                  ))}
                </div>
                <div>
                  <p className="font-medium text-lg">Karir</p>
                  {karir.map((item, index) => (
                    <p key={item.id} className="font-light text-sm">
                      {item.attributes.email}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="font-medium text-lg">Alamat</p>
                  {alamat.map((item, index) => (
                    <div key={item.id} className="leading-9">
                      <p className="font-medium text-md">{item.attributes.lokasi}</p>
                      <p className="font-light text-sm">{item.attributes.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default ContentFooter;
