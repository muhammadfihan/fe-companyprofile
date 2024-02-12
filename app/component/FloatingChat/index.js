// components/FloatingActionButton.js
"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faCoffee,
  faComment,
  faCommentAlt,
  faCommentDots,
  faCommentSms,
  faComments,
  faMessage,
  faPaperPlane,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

const solutions = [
  {
    name: "Insights",
    description: "Measure actions your users take",
    href: "##",
  },
  {
    name: "Automations",
    description: "Create your own targeted content",
    href: "##",
  },
  {
    name: "Reports",
    description: "Keep track of your growth",
    href: "##",
  },
];

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    // Tambahkan logika untuk menangani klik di sini
    console.log("Floating Action Button clicked!");
  };

  return (
    // <div className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-50 animate-fade-left animate-once animate-duration-[2000ms] animate-delay-1000 animate-ease-in-out">
    //   <button
    //     onClick={handleClick}
    //     className="bg-red-500 border-2 border-red-500 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-red-600 focus:outline-none "
    //   >
    //     <FontAwesomeIcon icon={faCommentDots} className="text-xl md:text-2xl text-white" />
    //   </button>
    // </div>
    <div className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-50">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
              ${open ? "text-white" : "text-white/90"}
              bg-red-500 border-2 border-red-500 text-white p-2 md:p-3 rounded-full shadow-lg hover:bg-red-600 focus:outline-none size-16`}
            >
              {open ? (
                <FontAwesomeIcon icon={faClose} className="text-xl md:text-2xl text-white" />
              ) : (
                <FontAwesomeIcon icon={faCommentDots} className="text-xl md:text-2xl text-white" />
              )}
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute bottom-20 md:bottom-20 right-0 md:right-0 mt-3 w-80 md:w-screen max-w-sm transform sm:px-0 lg:max-w-md">
                {/* <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                  <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                      >
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900">{item.name}</p>
                          <p className="text-sm text-gray-500">{item.description}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="bg-gray-50 p-4">
                    <a
                      href="##"
                      className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                    >
                      <span className="flex items-center">
                        <span className="text-sm font-medium text-gray-900">Documentation</span>
                      </span>
                      <span className="block text-sm text-gray-500">
                        Start integrating products and tools
                      </span>
                    </a>
                  </div>
                </div> */}
                <div className=" bg-white shadow-md rounded-lg ">
                  <div className="p-4 border-b bg-red-500 text-white rounded-t-lg flex justify-between items-center">
                    <p className="text-lg font-semibold">Tanyakan Pada Kami</p>
                    <button className="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400 me-2">
                      <img src="../../../wa.svg" alt="" className="h-7 w-7" />
                    </button>
                  </div>
                  <div className="bg-[url(/bgchat.png)] bg-center bg-cover">
                    <div id="chatbox" className="p-4 h-80  overflow-y-auto  ">
                      <div className="mb-3 text-right">
                        <p className="bg-red-500 text-white rounded-lg py-2 px-4 inline-block">
                          this example of chat
                        </p>
                      </div>
                      <div className="mb-3 flex items-start gap-2.5">
                        <img
                          className="w-8 h-8 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                          alt="Jese image"
                        />
                        <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl ">
                          <div className="flex items-center space-x-2 rtl:space-x-reverse">
                            <span className="text-sm font-semibold text-gray-900 ">
                              Nakula Sadewa
                            </span>
                            <span className="text-sm font-normal text-gray-500 ">11:46</span>
                          </div>
                          <p className="text-sm font-normal py-2.5 text-gray-900 ">
                            That's awesome. I think our users will really appreciate the
                            improvements.
                          </p>
                          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            Diterima
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border-t flex">
                    <input
                      id="user-input"
                      type="text"
                      placeholder="Tulis Pesan"
                      className="w-full px-3 py-2 border rounded-l-md focus:outline-none select-none"
                      autoComplete="off"
                    />
                    <button
                      id="send-button"
                      className="bg-red-500 text-white px-4 py-2 rounded-r-md hover:bg-red-600 transition duration-300"
                    >
                      <FontAwesomeIcon icon={faPaperPlane} />
                    </button>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};

export default FloatingActionButton;
