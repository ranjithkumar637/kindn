import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import GetHelpForm from "./pages/GetHelpForm";
import VolunteerForm from "./pages/VolunteerForm";
import ContactPage from "./pages/ContactPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import HelpPage from "./pages/HelpPage";
import CookiePage from "./pages/CookiePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthContext } from "./context/AuthContext";

// Dummy pages for demonstration
const AdminDashboard = () => <div><h2>Admin Dashboard</h2></div>;
const VolunteerDashboard = () => <div><h2>Volunteer Dashboard</h2></div>;
const RequesterDashboard = () => <div><h2>Help Seeker Dashboard</h2></div>;

const PrivateRoute = ({ children, roles }) => {
  const { user } = useContext(AuthContext);
  if (!user) return <Navigate to="/login" />;
  if (roles && !roles.includes(user.user.role)) return <Navigate to="/" />;
  return children;
};

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/cookies" element={<CookiePage />} />
            <Route path="/get-help" element={<PrivateRoute roles={["requester","volunteer"]}><GetHelpForm /></PrivateRoute>} />
            <Route path="/want-to-help" element={<PrivateRoute roles={["volunteer"]}><VolunteerForm /></PrivateRoute>} />
            <Route path="/admin" element={<PrivateRoute roles={["admin"]}><AdminDashboard /></PrivateRoute>} />
            <Route path="/dashboard" element={<PrivateRoute roles={["volunteer"]}><VolunteerDashboard /></PrivateRoute>} />
            <Route path="/my-requests" element={<PrivateRoute roles={["requester"]}><RequesterDashboard /></PrivateRoute>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
