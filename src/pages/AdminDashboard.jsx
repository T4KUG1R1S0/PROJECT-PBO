import {
  LayoutDashboard,
  FileText,
  Users,
  Bot,
} from "lucide-react";

import FloatingChat from "../components/FloatingChat";
export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-slate-100">

      {/* SIDEBAR */}
      <div className="w-[250px] bg-blue-700 text-white p-6">

        <h1 className="text-3xl font-bold mb-10">
          CiviCare
        </h1>

        <div className="space-y-4">

          <button className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-blue-600">

            <LayoutDashboard />

            Dashboard

          </button>

          <button className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-blue-600">

            <FileText />

            Pengaduan

          </button>

          <button className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-blue-600">

            <Users />

            Masyarakat

          </button>

          <button className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-blue-600">

            <Bot />

            AI Assistant

          </button>

        </div>

      </div>

      {/* CONTENT */}
      <div className="flex-1 p-8">

        <h1 className="text-4xl font-bold text-slate-800">
          Dashboard Admin
        </h1>

        <p className="text-gray-500 mt-2">
          Selamat datang di sistem pelayanan masyarakat CiviCare.
        </p>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-white p-6 rounded-3xl shadow-lg">

            <h2 className="text-gray-500">
              Total Pengaduan
            </h2>

            <p className="text-5xl font-bold text-blue-600 mt-4">
              120
            </p>

          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg">

            <h2 className="text-gray-500">
              Diproses
            </h2>

            <p className="text-5xl font-bold text-yellow-500 mt-4">
              45
            </p>

          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg">

            <h2 className="text-gray-500">
              Selesai
            </h2>

            <p className="text-5xl font-bold text-green-500 mt-4">
              75
            </p>

          </div>

        </div>

        {/* TABLE */}
        <div className="bg-white mt-10 rounded-3xl shadow-lg p-6">

          <h2 className="text-2xl font-bold mb-6">
            Pengaduan Terbaru
          </h2>

          <table className="w-full">

            <thead>

              <tr className="text-left border-b">

                <th className="pb-3">Nama</th>

                <th className="pb-3">Laporan</th>

                <th className="pb-3">Status</th>

              </tr>

            </thead>

            <tbody>

              <tr className="border-b">

                <td className="py-4">Budi</td>

                <td>Jalan rusak</td>

                <td className="text-yellow-500">
                  Diproses
                </td>

              </tr>

              <tr className="border-b">

                <td className="py-4">Andi</td>

                <td>Lampu mati</td>

                <td className="text-green-500">
                  Selesai
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>
      <FloatingChat />  
    </div>
  );
}