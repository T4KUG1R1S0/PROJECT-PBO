import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    // LOGIN ADMIN
    if (email === "admin@gmail.com") {

      navigate("/admindashboard");

    }

    // LOGIN USER
    else {

      navigate("/userdashboard");

    }

  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">

      <div className="bg-white w-[400px] p-10 rounded-3xl shadow-2xl">

        <h1 className="text-4xl font-bold text-center text-blue-700">
          CiviCare
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Smart Community Service System
        </p>

        {/* EMAIL */}
        <div className="mt-8">

          <label className="text-gray-700 font-medium">
            Email
          </label>

          <input
            type="email"
            placeholder="Masukkan email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-2 p-3 border rounded-xl outline-none focus:border-blue-500"
          />

        </div>

        {/* PASSWORD */}
        <div className="mt-5">

          <label className="text-gray-700 font-medium">
            Password
          </label>

          <input
            type="password"
            placeholder="Masukkan password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mt-2 p-3 border rounded-xl outline-none focus:border-blue-500"
          />

        </div>

        {/* BUTTON */}
        <button
          onClick={handleLogin}
          className="w-full mt-8 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 duration-300"
        >
          Login
        </button>

      </div>

    </div>
  );
}