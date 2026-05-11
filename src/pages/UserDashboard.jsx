import {
  Home,
  FileText,
  MessageCircle,
  User,
  PlusCircle,
} from "lucide-react";

import { Link } from "react-router-dom";

import FloatingChat from "../components/FloatingChat";

export default function UserDashboard() {
  return (
    <div className="flex min-h-screen bg-slate-100">

      {/* SIDEBAR */}
      <div className="w-[250px] bg-cyan-600 text-white p-6">

        <h1 className="text-3xl font-bold mb-10">
          CiviCare
        </h1>

        <div className="space-y-4">

          <button className="flex items-center gap-3 w-full p-3 rounded-xl bg-cyan-500">

            <Home />

            Dashboard

          </button>

          <button className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-cyan-500">

            <FileText />

            Pengaduan Saya

          </button>

          <button className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-cyan-500">

            <MessageCircle />

            Bantuan

          </button>

          <button className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-cyan-500">

            <User />

            Profile

          </button>

        </div>

      </div>

      {/* CONTENT */}
      <div className="flex-1 p-8">

        <h1 className="text-4xl font-bold text-slate-800">
          Dashboard Masyarakat
        </h1>

        <p className="text-gray-500 mt-2">
          Selamat datang di layanan pengaduan masyarakat CiviCare.
        </p>

        {/* BUTTON BUAT PENGADUAN */}
        <Link
          to="/create-report"
          className="mt-8 inline-flex items-center gap-3 bg-cyan-600 text-white px-6 py-4 rounded-2xl shadow-lg hover:bg-cyan-700"
        >

          <PlusCircle />

          Buat Pengaduan Baru

        </Link>

        {/* STATUS CARD */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-white p-6 rounded-3xl shadow-lg">

            <h2 className="text-gray-500">
              Total Pengaduan
            </h2>

            <p className="text-5xl font-bold text-cyan-600 mt-4">
              8
            </p>

          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg">

            <h2 className="text-gray-500">
              Diproses
            </h2>

            <p className="text-5xl font-bold text-yellow-500 mt-4">
              3
            </p>

          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg">

            <h2 className="text-gray-500">
              Selesai
            </h2>

            <p className="text-5xl font-bold text-green-500 mt-4">
              5
            </p>

          </div>

        </div>

        {/* RIWAYAT */}
        <div className="bg-white mt-10 rounded-3xl shadow-lg p-6">

          <h2 className="text-2xl font-bold mb-6">
            Riwayat Pengaduan
          </h2>

          <table className="w-full">

            <thead>

              <tr className="text-left border-b">

                <th className="pb-3">Laporan</th>

                <th className="pb-3">Tanggal</th>

                <th className="pb-3">Status</th>

              </tr>

            </thead>

            <tbody>

              <tr className="border-b">

                <td className="py-4">
                  Jalan rusak depan rumah
                </td>

                <td>10 Mei 2026</td>

                <td className="text-yellow-500">
                  Diproses
                </td>

              </tr>

              <tr className="border-b">

                <td className="py-4">
                  Lampu jalan mati
                </td>

                <td>07 Mei 2026</td>

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