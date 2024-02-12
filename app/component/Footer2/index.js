import gambar from "../../../public/image5.jpg";
import Image from "next/image";

const Footer2 = () => {
  return (
    <div>
      <section className="w-full">
        <div className="grid grid-rows-2 relative">
          <div className="h-64 bg-white"></div>
          <div className="h-44 bg-gray-300"></div>
          <div className="bg-transparant absolute  top-0 left-0 z-10 h-full w-full flex items-center justify-center md:px-8 lg:px-28">
            <div className="flex justify-center ">
              <div className=" rounded-3xl overflow-hidden mt-4 md:mx-10 mx-5">
                <img
                  className="md:h-[20vw] h-[40vw] sm:h-[40vw] w-[100vw] lg:h-[15vw] object-cover brightness-custom"
                  src="../../../image5.jpg"
                  alt="Company Logo"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
                <h1 className="text-lg font-medium text-white md:text-2xl lg:text-3xl">
                  Find the right position and apply
                </h1>
                <p className="text-sm text-white font-light md:text-lg">Reach out to us now!</p>
                <div className="bg-red-500 mt-3 text-white text-xs p-1 rounded-full md:text-lg mx-8 md:mx-[26%]">
                  Send Email
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-300 z-50">
        <div className="md:grid md:grid-rows-3 md:grid-cols-2 lg:grid-cols-3  px-10 gap-y-6 md:px-20 lg:px-36 lg:grid-rows-1 -mt-20">
          <div className="flex flex-col gap-3 md:mt-0 mb-6">
            <div className="grid grid-cols-1">
              <img className="w-[auto] h-[30px]" src="../../../code.png" alt="Company Logo" />
            </div>
            <p className="font-light text-md md:me-5 lg:me-8">
              CODE.ID is a software development service company that focuses on helping clients turn
              their best ideas into a product, application, or website.
            </p>
          </div>
          <div className="flex flex-col gap-4 self-center md:self-start mb-6">
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
            <div className="mb-10">
              <p className="font-medium text-md">Sydney</p>
              <p className="font-light text-sm">861/2 Copper PI , zetlandNSW, Sydney 2017</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer2;
