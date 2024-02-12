"use client";
import { useState, useEffect } from "react";

export default function Test() {
  const [absoluteHeight, setAbsoluteHeight] = useState(0);

  useEffect(() => {
    // Mengukur tinggi elemen absolute setelah komponen dipasang
    const absoluteElement = document.getElementById("absoluteElement");
    if (absoluteElement) {
      const height = absoluteElement.clientHeight;
      setAbsoluteHeight(height);
    }
  }, []); // Efek hanya dijalankan sekali setelah komponen dipasang

  return (
    <div>
      <div className="relative mt-24">
        <div className=" absolute top-0 left-0 w-full h-80 bg-blue-500">
          <div className="bg-transparant  absolute top-0 left-0 z-10 w-full h-full flex items-center justify-center md:px-8 lg:px-28">
            <div className="flex justify-center w-screen px-[5%] md:px-[12%]">
              <div className="border bg-white rounded-3xl shadow-md w-screen  flex flex-col p-5 gap-y-3 min-h-0">
                <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x-2 md:divide-y-0">
                  <div className="p-3 grid grid-cols-2 md:flex-row md:flex md:gap-x-4 md:justify-center">
                    <div className="text-gray-600 font-bold text-lg lg:text-2xl self-center">
                      300+
                    </div>
                    <div className="text-gray-400 font-light text-sm self-center lg:text-md">
                      Expert Employees
                    </div>
                  </div>
                  <div className="p-3 grid grid-cols-2 md:flex-row md:flex md:gap-x-4 md:justify-center">
                    <div className="text-gray-600 font-bold text-lg lg:text-2xl self-center">
                      15+
                    </div>
                    <div className="text-gray-400 font-light text-sm self-center lg:text-md">
                      Years of Commitment
                    </div>
                  </div>
                  <div className="p-3 grid grid-cols-2 md:flex-row md:flex md:gap-x-4 md:justify-center">
                    <div className="text-gray-600 font-bold text-lg lg:text-2xl self-center">
                      500+
                    </div>
                    <div className="text-gray-400 font-light text-sm self-center lg:text-md">
                      Successful Projects
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-300 p-4">
            {/* Konten Lain di Dalam Elemen Induk */}
            <p>This is other content.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
