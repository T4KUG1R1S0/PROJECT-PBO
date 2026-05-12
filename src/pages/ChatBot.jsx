import { useState } from "react";
import { Send, Bot } from "lucide-react";

export default function ChatBot() {

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Halo 👋 saya AI Assistant CiviCare. Ada yang bisa saya bantu?",
    },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {

    if (input.trim() === "") return;

    // MESSAGE USER
    const userMessage = {
      sender: "user",
      text: input,
    };

    // RESPONSE BOT
    const botMessage = {
      sender: "bot",
      text: "Terima kasih, laporan atau pertanyaan Anda sedang diproses 😊",
    };

    setMessages([
      ...messages,
      userMessage,
      botMessage,
    ]);

    setInput("");
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">

      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* HEADER */}
        <div className="bg-cyan-600 text-white p-5 flex items-center gap-3">

          <Bot />

          <div>

            <h1 className="text-xl font-bold">
              CiviCare AI Assistant
            </h1>

            <p className="text-sm opacity-80">
              Online 24 Jam
            </p>

          </div>

        </div>

        {/* CHAT AREA */}
        <div className="h-[500px] overflow-y-auto p-6 space-y-4 bg-slate-50">

          {messages.map((msg, index) => (

            <div
              key={index}
              className={`flex ${
                msg.sender === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >

              <div
                className={`max-w-[70%] px-5 py-3 rounded-2xl shadow ${
                  msg.sender === "user"
                    ? "bg-cyan-600 text-white"
                    : "bg-white text-slate-700"
                }`}
              >

                {msg.text}

              </div>

            </div>

          ))}

        </div>

        {/* INPUT */}
        <div className="p-4 border-t flex items-center gap-3">

          <input
            type="text"
            placeholder="Tulis pesan..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-4 border rounded-2xl outline-none focus:border-cyan-500"
          />

          <button
            onClick={sendMessage}
            className="bg-cyan-600 text-white p-4 rounded-2xl hover:bg-cyan-700"
          >

            <Send size={20} />

          </button>

        </div>

      </div>

    </div>
  );
}