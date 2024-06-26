import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/admin/layouts";
import { SuperDashboard } from "@/superAdmin/layouts";
import HomePage from "@/landing_page/home";
import Brigade from "./brigade/brigade";

function App() {
  return (
    <Routes>
      <Route path="/admin/*" element={<Dashboard />} />
      <Route path="/super-admin/*" element={<SuperDashboard />} />
      <Route path="/brigadir/*" element={<Brigade />} />
      <Route path="/home/*" element={<HomePage />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
      {/*  */}
    </Routes>
  );
}

export default App;
