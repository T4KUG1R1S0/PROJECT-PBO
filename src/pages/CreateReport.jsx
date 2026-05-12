import { Upload } from "lucide-react";
import { useState } from "react";

export default function CreateReport() {

  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {

    const file = e.target.files[0];

    if (file) {

      setImage(URL.createObjectURL(file));

    }

  };

  return (
    <div className="min-h-screen bg-slate-100 p-10">

      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10">

        <h1 className="text-4xl font-bold text-slate-800">
          Buat Pengaduan
        </h1>

        <p className="text-gray-500 mt-2">
          Laporkan masalah masyarakat dengan lengkap dan jelas.
        </p>

        {/* FORM */}
        <div className="mt-10 space-y-6">

          {/* JUDUL */}
          <div>

            <label className="font-medium text-gray-700">
              Judul Pengaduan
            </label>

            <input
              type="text"
              placeholder="Contoh: Jalan Rusak"
              className="w-full mt-2 p-4 border rounded-2xl outline-none focus:border-cyan-500"
            />

          </div>

          {/* KATEGORI */}
          <div>

            <label className="font-medium text-gray-700">
              Kategori
            </label>

            <select className="w-full mt-2 p-4 border rounded-2xl outline-none focus:border-cyan-500">

              <option>Infrastruktur</option>

              <option>Kebersihan</option>

              <option>Keamanan</option>

              <option>Pelayanan Publik</option>

            </select>

          </div>

          {/* DESKRIPSI */}
          <div>

            <label className="font-medium text-gray-700">
              Deskripsi
            </label>

            <textarea
              rows="6"
              placeholder="Jelaskan masalah secara detail..."
              className="w-full mt-2 p-4 border rounded-2xl outline-none focus:border-cyan-500"
            ></textarea>

          </div>

          {/* UPLOAD */}
          <div>

            <label className="font-medium text-gray-700">
              Upload Gambar
            </label>

            <div className="mt-3 border-2 border-dashed rounded-3xl p-10 text-center">

              <Upload
                size={50}
                className="mx-auto text-cyan-600"
              />

              <p className="mt-4 text-gray-500">
                Klik untuk upload gambar laporan
              </p>

              <input
                type="file"
                onChange={handleImageChange}
                className="mt-5"
              />

              {/* PREVIEW */}
              {image && (

                <img
                  src={image}
                  alt="Preview"
                  className="mt-6 w-full max-h-[400px] object-cover rounded-2xl shadow-lg"
                />

              )}

            </div>

          </div>

          {/* BUTTON */}
          <button className="w-full bg-cyan-600 text-white py-4 rounded-2xl hover:bg-cyan-700 shadow-lg">

            Kirim Pengaduan

          </button>

        </div>

      </div>

    </div>
  );
}