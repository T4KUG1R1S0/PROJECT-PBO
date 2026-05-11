import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import CreateReport from "./pages/CreateReport";



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

        
      </Routes>

    </BrowserRouter>
  );
}

export default App;