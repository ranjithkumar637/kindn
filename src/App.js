import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import GetHelpForm from "./pages/GetHelpForm";
import VolunteerForm from "./pages/VolunteerForm";
import Navbar from "./components/Navbar";
import { AuthContext } from "./context/AuthContext";

// Dummy pages for demonstration
const AdminDashboard = () => <div><h2>Admin Dashboard</h2></div>;
const VolunteerDashboard = () => <div><h2>Volunteer Dashboard</h2></div>;
const RequesterDashboard = () => <div><h2>Help Seeker Dashboard</h2></div>;

const PrivateRoute = ({ children, roles }) => {
  const { user } = useContext(AuthContext);
  if (!user) return <Navigate to="/login" />;
  if (roles && !roles.includes(user.role)) return <Navigate to="/" />;
  return children;
};

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/get-help" element={<PrivateRoute roles={["requester","volunteer"]}><GetHelpForm /></PrivateRoute>} />
        <Route path="/want-to-help" element={<PrivateRoute roles={["volunteer"]}><VolunteerForm /></PrivateRoute>} />
        <Route path="/admin" element={<PrivateRoute roles={["admin"]}><AdminDashboard /></PrivateRoute>} />
        <Route path="/dashboard" element={<PrivateRoute roles={["volunteer"]}><VolunteerDashboard /></PrivateRoute>} />
        <Route path="/my-requests" element={<PrivateRoute roles={["requester"]}><RequesterDashboard /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
