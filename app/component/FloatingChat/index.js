// components/FloatingActionButton.js
"use client";
import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faCommentDots, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import axios from "axios";
import lunr from "lunr";

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const url = process.env.NEXT_PUBLIC_API_URL;
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [data, setData] = useState(null);
  const messagesEndRef = useRef(null);
  const [loading, setLoading] = useState(true);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}/chatbots`);
        setData(response.data.data);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching API data:", error.message);
      }
    };
    fetchData();
    scrollToBottom();
  }, [messages]);

  if (data == null) {
    return;
  }
  const lunrIndex = lunr(function () {
    this.field("id");
    this.field("pertanyaan");
    this.field("jawaban");

    data.forEach((doc) => {
      this.add({
        id: doc.id,
        pertanyaan: doc.attributes.pertanyaan,
        jawaban: doc.attributes.jawaban,
      });
    });
  });

  const getCurrentTime = () => {
    const now = new Date();
    const formattedTime = new Intl.DateTimeFormat("en", {
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    }).format(now);

    return formattedTime;
  };

  const searchData = (query) => {
    const result = lunrIndex.search(query);
    const akhir = result.filter((item) => item.score > 0.8);
    return akhir.map((item) => {
      return data.find((post) => +item.ref === post.id);
    });
  };

  const sendMessage = async () => {
    const msg = [...messages, { content: input, role: "user", time: getCurrentTime() }];
    setMessages(msg);
    setInput("");
    setTimeout(async () => {
      const datasearch = searchData(input);
      if (datasearch[0] == null) {
        setMessages([...msg, { content: null, role: "assistant" }]);
      } else {
        setMessages([
          ...msg,
          { content: datasearch[0].attributes.jawaban, role: "assistant", time: getCurrentTime() },
        ]);
      }
    }, 1000);
  };

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <div className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-50 animate-fade-left animate-once animate-duration-[800ms] animate-delay-[800ms] animate-ease-in">
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={`
              ${open ? "text-white" : "text-white/90"}
              bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 focus:outline-none size-14`}
                >
                  {open ? (
                    <FontAwesomeIcon
                      icon={faClose}
                      className="text-xl md:text-2xl text-white animate-fade animate-once animate-duration-300 animate-ease-in"
                      onClick={scrollToBottom()}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faCommentDots}
                      className="text-xl md:text-2xl text-white"
                    />
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
                    <div className=" bg-white shadow-md rounded-lg ">
                      <div className="p-4 border-b bg-red-500 text-white rounded-t-lg flex justify-between items-center">
                        <p className="text-lg font-semibold">Tanyakan Pada Kami</p>
                        <button className="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400 me-2">
                          <img src="../../../wa.svg" alt="" className="h-7 w-7" />
                        </button>
                      </div>
                      <div>
                        <div className="bg-[url(/bgchat.png)] bg-center bg-cover">
                          <div className="cp-4 h-80  overflow-y-auto p-4">
                            <div className="mb-3 flex items-start gap-2.5 animate-fade-right animate-once animate-duration-300 animate-ease-in">
                              <img
                                className="w-8 h-8 rounded-full object-cover"
                                src="../../logo.png"
                                alt="Nakula Sadewa"
                              />
                              <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl ">
                                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                  <span className="text-sm font-semibold text-gray-900 ">
                                    Nakula Sadewa
                                  </span>
                                  <span className="text-sm font-normal text-gray-500 ">
                                    {getCurrentTime()}
                                  </span>
                                </div>
                                <p className="text-sm font-normal py-2.5 text-gray-900 ">
                                  Selamat Datang Di PT Nakula Sadewa, Kami siap membantu anda,
                                  silahkan konsultasikan pada kami
                                </p>
                                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                  Admin Assistant
                                </span>
                              </div>
                            </div>
                            {messages.map((message, index) => (
                              <div key={index} id="chatbox">
                                {message.role !== "assistant" && (
                                  <div className="mb-3 flex justify-end ms-16 animate-fade-up animate-once animate-duration-300 animate-ease-linear">
                                    <span className="bg-red-500 text-white text-left rounded-lg py-2 px-3 inline-block">
                                      {message.content}
                                      <p className="text-right space-x-2 text-gray-100">
                                        <span className="text-xs font-semibold">Terkirim</span>
                                        <span className="text-xs font-light">{message.time}</span>
                                      </p>
                                    </span>
                                  </div>
                                )}
                                {message.role === "assistant" && (
                                  <div className="mb-3 flex items-start gap-2.5 animate-fade-up animate-once animate-duration-300 animate-ease-in">
                                    <img
                                      className="w-8 h-8 rounded-full object-cover"
                                      src="../../logo.png"
                                      alt="Nakula Sadewa"
                                    />
                                    <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl ">
                                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                        <span className="text-sm font-semibold text-gray-900 ">
                                          Nakula Sadewa
                                        </span>
                                        <span className="text-sm font-normal text-gray-500 ">
                                          {getCurrentTime()}
                                        </span>
                                      </div>
                                      {message.content == null ? (
                                        <span className="text-sm font-normal py-2.5 text-gray-900 ">
                                          <p>
                                            Mohon maaf, kami tidak memiliki informasi yang Anda
                                            cari. Silakan hubungi admin kami melalui WhatsApp
                                            melalui link dibawah untuk bantuan lebih lanjut
                                          </p>
                                          <button
                                            href=""
                                            className=" mt-2 text-xs font-semibold text-red-500"
                                          >
                                            Hubungi Kami
                                          </button>
                                        </span>
                                      ) : (
                                        <p className="text-sm font-normal py-2.5 text-gray-900 ">
                                          {message.content}
                                        </p>
                                      )}

                                      <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                        Admin Assistant
                                      </span>
                                    </div>
                                  </div>
                                )}
                                <div ref={messagesEndRef} />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <form className="p-4 border-t flex">
                        <input
                          id="user-input"
                          type="text"
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                          placeholder="Tulis Pesan"
                          className="w-full px-3 py-2 border rounded-l-md focus:outline-none select-none"
                          autoComplete="off"
                        />
                        <button
                          id="send-button"
                          disabled={!input.trim()}
                          type="submit"
                          onClick={sendMessage}
                          className="bg-red-500 text-white px-4 py-2 rounded-r-md hover:bg-red-600 transition duration-300"
                        >
                          <FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                      </form>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </div>
      )}
    </>
  );
};

export default FloatingActionButton;
