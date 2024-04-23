import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/admin/layouts";
import { SuperDashboard } from "@/superAdmin/layouts";
import HomePage from "./landing_page/home";

function App() {
  return (
    <Routes>
      <Route path="/admin/*" element={<Dashboard />} />
      <Route path="/super-admin/*" element={<SuperDashboard />} />
      <Route path="/home/*" element={<HomePage />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="*" element={<Navigate to="/admin/home" replace />} />
    </Routes>
  );
}

export default App;
