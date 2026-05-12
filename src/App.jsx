import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import CreateReport from "./pages/CreateReport";
import ChatBot from "./pages/ChatBot";


function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route
          path="/admindashboard"
          element={<AdminDashboard />}

        />

        <Route
          path="/userdashboard"
          element={<UserDashboard />}
        />

        <Route
          path="/create-report"
          element={<CreateReport />}
        />

        <Route
          path="/chatbot"
          element={<ChatBot />}
        />
        


        
      </Routes>

    </BrowserRouter>
  );
}

export default App;