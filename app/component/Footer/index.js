const Footer1 = () => {
  return (
    <div>
      <section className="w-full">
        <div className="grid grid-rows-2 relative">
          <div className="h-64 bg-white"></div>
          <div className="h-64 bg-gray-300"></div>
          <div className="bg-transparant absolute  top-0 left-0 z-10 h-full w-full flex items-center justify-center md:px-8 lg:px-28">
            <div className="flex justify-center ">
              <div className="relative rounded-3xl overflow-hidden mt-4 md:mx-10 mx-10">
                <img
                  className="w-full h-[420px] sm:w-[1200px] xl:w-screen object-cover brightness-custom"
                  src="../../../image5.jpg"
                  alt="Company Logo"
                />
              </div>
              <div className="absolute">
                <div className="relative">
                  <div className="xl:grid xl:grid-cols-2 xl:px-48">
                    <div className="self-center hidden xl:block xl:px-8">
                      <div className="grid grid-rows-1 text-white gap-y-10">
                        <p className="font-medium text-xl">READY TO ASSIST</p>
                        <p className="font-bold text-4xl">
                          Join our growing list of satisfied clients today!
                        </p>
                        <p className="font-light text-lg">
                          Over 15 years in software development, we’ve had the privilege of
                          collaborating with a diverse array of esteemed companies, ranging from
                          industry leaders to innovative startups.
                        </p>
                      </div>
                    </div>
                    <div className="text-center ">
                      <div className="grid grid-cols-1 gap-6 mt-5 ">
                        <div className="md:max-w-xl max-w-md mx-auto mt-4 p-6 bg-transparant  w-screen px-16 sm:px-0 xl:px-20">
                          <h2 className="text-xl font-semibold mb-4 text-white">Contact Us</h2>
                          <form>
                            <div className="grid grid-cols-2 gap-x-4">
                              <div className="mb-4">
                                <input
                                  type="text"
                                  id="nama"
                                  name="nama"
                                  className="w-full rounded-md p-2 bg-gray-500 opacity-70"
                                />
                              </div>

                              <div className="mb-4">
                                <input
                                  type="email"
                                  id="email"
                                  name="email"
                                  className="w-full rounded-md p-2 bg-gray-500 opacity-70"
                                />
                              </div>
                              <div className="mb-4">
                                <input
                                  type="text"
                                  id="comany"
                                  name="nama"
                                  className="w-full rounded-md p-2 bg-gray-500 opacity-70"
                                />
                              </div>

                              <div className="mb-4">
                                <input
                                  type="email"
                                  id="client"
                                  name="email"
                                  className="w-full rounded-md p-2 bg-gray-500 opacity-70"
                                />
                              </div>
                            </div>

                            <div className="mb-4">
                              <textarea
                                id="pesan"
                                name="pesan"
                                rows="4"
                                className="w-full rounded-md p-2 bg-gray-500 opacity-70"
                              ></textarea>
                            </div>

                            <button
                              type="submit"
                              className="bg-red-500 text-white py-2 px-4 rounded-md w-full"
                            >
                              Kirim
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
      </section>
      <section className="bg-gray-300">
        <div className="grid grid-rows-3 md:grid-cols-2 lg:grid-cols-3 py-8 px-10 gap-y-6 md:px-20 lg:px-36 lg:grid-rows-1">
          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-1">
              <img className="w-[auto] h-[30px]" src="../../../code.png" alt="Company Logo" />
            </div>
            <p className="font-light text-md md:me-5 lg:me-8">
              CODE.ID is a software development service company that focuses on helping clients turn
              their best ideas into a product, application, or website.
            </p>
          </div>
          <div className="flex flex-col gap-4 self-center md:self-start">
            <div>
              <p className="font-medium text-lg">Contact</p>
              <p className="font-light text-sm">Jakarta : asutomo@code.id</p>
              <p className="font-light text-sm">Sydney : andrew.o@code.id</p>
            </div>
            <div>
              <p className="font-medium text-lg">Career</p>
              <p className="font-light text-sm">recruitment@code.id</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <p className="font-medium text-lg">Address</p>
              <p className="font-medium text-md">Jakarta</p>
              <p className="font-light text-sm">
                APL Tower 30th Floor, Jl. Letjen S. Parman Kav. 28 Jakarta, 11470, Indonesia
              </p>
              <p className="font-light text-sm">Phone: +6221 2933 9528</p>
            </div>
            <div>
              <p className="font-medium text-md">Sydney</p>
              <p className="font-light text-sm">861/2 Copper PI , zetlandNSW, Sydney 2017</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer1;
