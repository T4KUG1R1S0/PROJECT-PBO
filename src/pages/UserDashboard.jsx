import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

import { useState } from "react";

import {
  Home,
  FileText,
  MessageCircle,
  User,
  PlusCircle,
  Moon,
} from "lucide-react";

import { Link } from "react-router-dom";

import FloatingChat from "../components/FloatingChat";

export default function UserDashboard() {

  const [darkMode, setDarkMode] = useState(false);
  const data = [
  { name: "Selesai", value: 5 },
  { name: "Diproses", value: 3 },
  { name: "Pending", value: 2 },
];

  const COLORS = [
    "#22c55e",
    "#eab308",
    "#ef4444",
];

  return (
    <div
      className={
        darkMode
          ? "flex min-h-screen bg-slate-900 text-white transition-all duration-300"
          : "flex min-h-screen bg-slate-100 text-black transition-all duration-300"
      }
    >

      {/* SIDEBAR */}
      <div
        className={
          darkMode
            ? "w-[250px] p-6 bg-slate-800 text-white transition-all duration-300"
            : "w-[250px] p-6 bg-cyan-600 text-white transition-all duration-300"
        }
      >

        <h1 className="text-3xl font-bold mb-10">
          CiviCare
        </h1>

        <div className="space-y-4">

          {/* DASHBOARD */}
          <button className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-slate-700 transition-all">

            <Home />

            Dashboard

          </button>

          {/* PENGADUAN */}
          <button className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-slate-700 transition-all">

            <FileText />

            Pengaduan Saya

          </button>

          {/* BANTUAN */}
          <button className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-slate-700 transition-all">

            <MessageCircle />

            Bantuan

          </button>

          {/* PROFILE */}
          <button className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-slate-700 transition-all">

            <User />

            Profile

          </button>

        </div>

      </div>

      {/* CONTENT */}
      <div className="flex-1 p-8">

        <h1 className="text-4xl font-bold">
          Dashboard Masyarakat
        </h1>

        <p
          className={
            darkMode
              ? "mt-2 text-slate-300"
              : "mt-2 text-gray-500"
          }
        >
          Selamat datang di layanan pengaduan masyarakat CiviCare.
        </p>

        {/* DARK MODE BUTTON */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mt-5 flex items-center gap-2 bg-slate-800 text-white px-5 py-3 rounded-2xl hover:bg-slate-700 transition-all"
        >

          <Moon size={20} />

          {darkMode ? "Light Mode" : "Dark Mode"}

        </button>

        {/* BUTTON BUAT PENGADUAN */}
        <Link
          to="/create-report"
          className="mt-8 inline-flex items-center gap-3 bg-cyan-600 text-white px-6 py-4 rounded-2xl shadow-lg hover:bg-cyan-700 transition-all"
        >

          <PlusCircle />

          Buat Pengaduan Baru

        </Link>

        {/* CARD STATUS */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          {/* CARD 1 */}
          <div
            className={
              darkMode
                ? "bg-slate-800 p-6 rounded-3xl shadow-lg transition-all duration-300"
                : "bg-white p-6 rounded-3xl shadow-lg transition-all duration-300"
            }
          >

            <h2
              className={
                darkMode
                  ? "text-slate-300"
                  : "text-gray-500"
              }
            >
              Total Pengaduan
            </h2>

            <p className="text-5xl font-bold text-cyan-600 mt-4">
              8
            </p>

          </div>

          {/* CARD 2 */}
          <div
            className={
              darkMode
                ? "bg-slate-800 p-6 rounded-3xl shadow-lg transition-all duration-300"
                : "bg-white p-6 rounded-3xl shadow-lg transition-all duration-300"
            }
          >

            <h2
              className={
                darkMode
                  ? "text-slate-300"
                  : "text-gray-500"
              }
            >
              Diproses
            </h2>

            <p className="text-5xl font-bold text-yellow-500 mt-4">
              3
            </p>

          </div>

          {/* CARD 3 */}
          <div
            className={
              darkMode
                ? "bg-slate-800 p-6 rounded-3xl shadow-lg transition-all duration-300"
                : "bg-white p-6 rounded-3xl shadow-lg transition-all duration-300"
            }
          >

            <h2
              className={
                darkMode
                  ? "text-slate-300"
                  : "text-gray-500"
              }
            >
              Selesai
            </h2>

            <p className="text-5xl font-bold text-green-500 mt-4">
              5
            </p>

          </div>

        </div>

{/* CHART */}
<div
  className={
    darkMode
      ? "bg-slate-800 mt-10 rounded-3xl shadow-lg p-6"
      : "bg-white mt-10 rounded-3xl shadow-lg p-6"
  }
>

  <h2 className="text-2xl font-bold mb-6">
    Statistik Pengaduan
  </h2>

  <div className="h-[300px]">

    <ResponsiveContainer width="100%" height="100%">

      <PieChart>

        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          outerRadius={100}
          label
        >

          {data.map((entry, index) => (
            <Cell
              key={index}
              fill={COLORS[index % COLORS.length]}
            />
          ))}

        </Pie>

      </PieChart>

    </ResponsiveContainer>

  </div>

</div>
        {/* RIWAYAT PENGADUAN */}

        <div
          className={
            darkMode
              ? "bg-slate-800 mt-10 rounded-3xl shadow-lg p-6 transition-all duration-300"
              : "bg-white mt-10 rounded-3xl shadow-lg p-6 transition-all duration-300"
          }
        >

          <h2 className="text-2xl font-bold mb-6">
            Riwayat Pengaduan
          </h2>

          <table className="w-full">

            <thead>

              <tr
                className={
                  darkMode
                    ? "text-left border-b border-slate-700"
                    : "text-left border-b"
                }
              >

                <th className="pb-3">
                  Laporan
                </th>

                <th className="pb-3">
                  Tanggal
                </th>

                <th className="pb-3">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              <tr
                className={
                  darkMode
                    ? "border-b border-slate-700"
                    : "border-b"
                }
              >

                <td className="py-4">
                  Jalan rusak depan rumah
                </td>

                <td>
                  10 Mei 2026
                </td>

                <td className="text-yellow-500">
                  Diproses
                </td>

              </tr>

              <tr
                className={
                  darkMode
                    ? "border-b border-slate-700"
                    : "border-b"
                }
              >

                <td className="py-4">
                  Lampu jalan mati
                </td>

                <td>
                  07 Mei 2026
                </td>

                <td className="text-green-500">
                  Selesai
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

      {/* FLOATING CHAT */}
      <FloatingChat />

    </div>
  );
}