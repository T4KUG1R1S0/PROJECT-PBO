import { MessageCircle, Bot, Headset } from "lucide-react";
import { useState } from "react";

export default function FloatingChat() {

  const [open, setOpen] = useState(false);

  return (
    <div>

      {/* FLOAT BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-5 rounded-full shadow-2xl hover:bg-blue-700 z-50"
      >

        <MessageCircle size={30} />

      </button>

      {/* CHAT BOX */}
      {open && (

        <div className="fixed bottom-24 right-6 w-[320px] bg-white rounded-3xl shadow-2xl p-5 z-50">

          <h2 className="text-2xl font-bold text-slate-800">
            CiviCare Assistant
          </h2>

          <p className="text-gray-500 mt-2">
            Ada yang bisa kami bantu?
          </p>

          {/* AI BOT */}
          <button className="w-full mt-6 flex items-center gap-4 bg-slate-100 hover:bg-slate-200 p-4 rounded-2xl">

            <Bot className="text-blue-600" />

            <div className="text-left">

              <h3 className="font-bold">
                Tanya AI Assistant
              </h3>

              <p className="text-sm text-gray-500">
                Bantuan otomatis 24 jam
              </p>

            </div>

          </button>

          {/* LIVE CS */}
          <button className="w-full mt-4 flex items-center gap-4 bg-slate-100 hover:bg-slate-200 p-4 rounded-2xl">

            <Headset className="text-green-600" />

            <div className="text-left">

              <h3 className="font-bold">
                Hubungi CS Admin
              </h3>

              <p className="text-sm text-gray-500">
                Bantuan langsung petugas
              </p>

            </div>

          </button>

        </div>

      )}

    </div>
  );
}