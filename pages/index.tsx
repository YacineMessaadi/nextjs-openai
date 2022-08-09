import Layout from "../components/layout";
import { useState } from "react";
import axios from "axios";
import Header from "../components/header";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      message: "Hi, I'm your virtual assistant ! What can I do for you ?",
      from: "ai",
    },
  ]);

  const submitMessage = (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    setMessages((messages) => [
      ...messages,
      { from: "user", message: message },
    ]);
    processMessage(message);
    setMessage("");
  };

  const processMessage = async (message: string) => {
    axios
      .post("/api/prompt", {
        message,
      })
      .then((res) => {
        setMessages((messages) => [
          ...messages,
          { from: "ai", message: res.data.message },
        ]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Layout>
      <div className="flex flex-col h-screen overflow-hidden">
        <Header />
        <div
          id="messages"
          className="overflow-y-scroll h-screen mt-4 flex flex-col space-y-4 p-3 scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
        >
          {messages.map((message, index) => {
            return message.from === "ai" ? (
              <div key={index} id="ai" className="chat-message">
                <div className="flex items-end">
                  <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                    <div>
                      <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-200 text-gray-600 text-lg">
                        {message.message}
                      </span>
                    </div>
                  </div>
                  <span className="w-6 h-6 rounded-full order-1 ring ring-gray-800 text-center text-gray-800">
                    AI
                  </span>
                </div>
              </div>
            ) : (
              <div key={index} id="user" className="chat-message">
                <div className="flex items-end justify-end">
                  <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                    <div>
                      <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white text-lg">
                        {message.message}
                      </span>
                    </div>
                  </div>
                  <span className="w-6 h-6 rounded-full order-2 ring ring-blue-800 text-center text-blue-800">
                    Y
                  </span>
                </div>
              </div>
            );
          })}
          {isLoading && (
            <div id="ai" className="chat-message">
              <div className="animate-pulse flex items-end">
                <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                  <div>
                    <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600 text-lg">
                      Let me think...
                    </span>
                  </div>
                </div>
                <span className="w-6 h-6 rounded-full order-1 ring ring-gray-800 text-center text-gray-800">
                  AI
                </span>
              </div>
            </div>
          )}
        </div>
        <div
          id="type-field"
          className="w-full border-t-2 border-gray-200 px-4 py-4 sm:mb-0"
        >
          <form onSubmit={submitMessage} className="relative flex gap-2">
            <input
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              type="text"
              name="message"
              placeholder="Write your message !"
              className="w-full rounded-xl focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 bg-gray-200 py-3 pl-5 block"
            />
            <div className="items-center inset-y-0 hidden sm:flex">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-xl px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-700 hover:bg-blue-400 focus:outline-none"
              >
                <span className="font-bold">Send</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-6 w-6 ml-2 transform rotate-90"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
