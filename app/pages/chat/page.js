"use client";

import { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    // Add user message to the chat
    const msg = [...messages, { content: input, role: "user" }];
    setMessages(msg);
    setInput("");

    // Call OpenAI API to get the bot's response
    const response = await getOpenAIResponse(msg);
    setMessages([...msg, { content: response, role: "assistant" }]);
  };

  const getOpenAIResponse = async (userInput) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(userInput);
      }, 1000); // Jeda waktu 1 detik
    });
    // const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY; // Replace with your OpenAI API key
    // const apiUrl = "https://api.openai.com/v1/chat/completions"; // Example endpoint, adjust based on your OpenAI API usage

    // try {
    //   const response = await fetch(apiUrl, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${apiKey}`,
    //     },
    //     body: JSON.stringify({
    //       prompt: userInput,
    //       model: "gpt-3.5-turbo",
    //       max_tokens: 50,
    //     }),
    //   });

    //   if (!response.ok) {
    //     throw new Error(`HTTP error! Status: ${response.status}`);
    //   }

    //   const data = await response.json();
    //   return data.choices[0].text;
    // } catch (error) {
    //   console.error("Error making OpenAI API request:", error);
    //   return "Error making OpenAI API request";
    // }
  };

  return (
    <div id="chat-container" className="overflow-y-auto p-10 rounded-md max-w-3xl mx-auto">
      <div>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-2 ${message.role === "assistant" ? "text-blue-600" : "text-green-600"}`}
          >
            <span className="font-bold">{`${message.role}: `}</span>
            {message.role === "assistant" && <span>Hello</span>}
            {message.role !== "assistant" && message.content}
          </div>
        ))}
      </div>
      <div className="pt-5 flex items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded-md text-black bg-transparent focus:outline-none"
        />
        <button onClick={sendMessage} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md">
          Send
        </button>
      </div>
    </div>
  );
}

// // components/Chatbot.js
// import { useState, useEffect } from "react";
// import axios from "axios";

// const Chatbot = () => {
//   const [input, setInput] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [isBotTyping, setIsBotTyping] = useState(false);

//   useEffect(() => {
//     // Ambil pesan dari local storage saat komponen di-mount
//     const storedMessages = JSON.parse(localStorage.getItem("chatMessages")) || [];
//     setMessages(storedMessages);
//   }, []);

//   const handleSendMessage = async () => {
//     const userMessage = {
//       user: "User",
//       text: input,
//     };

//     // Simpan pesan baru dari pengguna ke local storage
//     const updatedMessages = [...messages, userMessage];
//     localStorage.setItem("chatMessages", JSON.stringify(updatedMessages));

//     // Set isBotTyping menjadi true untuk menampilkan efek "sedang mengetik" pada bot
//     setIsBotTyping(true);

//     // Simulasi waktu mengetik bot
//     setTimeout(async () => {
//       try {
//         // Kirim pesan ke server atau API untuk mendapatkan balasan otomatis
//         const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");

//         const botResponse = {
//           user: "Chatbot",
//           text: response.data.title,
//         };

//         // Simpan pesan balasan dari bot ke local storage
//         const updatedMessagesWithBotResponse = [...updatedMessages, botResponse];
//         localStorage.setItem("chatMessages", JSON.stringify(updatedMessagesWithBotResponse));

//         // Setelah mendapatkan balasan, nonaktifkan efek "sedang mengetik"
//         setIsBotTyping(false);

//         // Update state dengan pesan balasan dari bot
//         setMessages(updatedMessagesWithBotResponse);
//       } catch (error) {
//         console.error("Error sending message:", error);

//         // Jika ada kesalahan, tetap nonaktifkan efek "sedang mengetik"
//         setIsBotTyping(false);
//       }
//     }, 1000); // Menunggu 1 detik sebelum bot memberikan balasan

//     // Bersihkan input setelah pengguna mengirim pesan
//     setInput("");
//   };

//   return (
//     <div>
//       <div>
//         {messages.map((message, index) => (
//           <div key={index}>
//             <strong>{message.user}:</strong> {message.text}
//           </div>
//         ))}
//         {isBotTyping && (
//           <div>
//             <em>Chatbot sedang mengetik...</em>
//           </div>
//         )}
//       </div>
//       <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
//       <button onClick={handleSendMessage}>Send</button>
//     </div>
//   );
// };

// export default Chatbot;
