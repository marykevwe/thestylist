import { Route, Routes } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import ProtectedRoute from "./ProtectedRoute";
import HomePage from "../pages/public/HomePage";
import ProfessionalsPage from "../pages/public/ProfessionalsPage";
import ProfessionalDetailsPage from "../pages/public/ProfessionalDetailsPage";
import ForProsPage from "../pages/public/ForProsPage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import ClientDashboard from "../pages/client/ClientDashboard";
import ClientBookingsPage from "../pages/client/ClientBookingsPage";
import ClientReviewsPage from "../pages/client/ClientReviewsPage";
import ProDashboard from "../pages/pro/ProDashboard";
import ProServicesPage from "../pages/pro/ProServicesPage";
import ProBookingsPage from "../pages/pro/ProBookingsPage";
import ProClientsPage from "../pages/pro/ProClientsPage";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminUsersPage from "../pages/admin/AdminUsersPage";
import AdminBookingsPage from "../pages/admin/AdminBookingsPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/professionals" element={<ProfessionalsPage />} />
        <Route path="/professionals/:id" element={<ProfessionalDetailsPage />} />
        <Route path="/for-pros" element={<ForProsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route
        element={
          <ProtectedRoute allowedRoles={["client", "professional", "admin"]}>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/client" element={<ProtectedRoute allowedRoles={["client"]}><ClientDashboard /></ProtectedRoute>} />
        <Route path="/client/bookings" element={<ProtectedRoute allowedRoles={["client"]}><ClientBookingsPage /></ProtectedRoute>} />
        <Route path="/client/reviews" element={<ProtectedRoute allowedRoles={["client"]}><ClientReviewsPage /></ProtectedRoute>} />

        <Route path="/pro" element={<ProtectedRoute allowedRoles={["professional"]}><ProDashboard /></ProtectedRoute>} />
        <Route path="/pro/services" element={<ProtectedRoute allowedRoles={["professional"]}><ProServicesPage /></ProtectedRoute>} />
        <Route path="/pro/bookings" element={<ProtectedRoute allowedRoles={["professional"]}><ProBookingsPage /></ProtectedRoute>} />
        <Route path="/pro/clients" element={<ProtectedRoute allowedRoles={["professional"]}><ProClientsPage /></ProtectedRoute>} />

        <Route path="/admin" element={<ProtectedRoute allowedRoles={["admin"]}><AdminDashboard /></ProtectedRoute>} />
        <Route path="/admin/users" element={<ProtectedRoute allowedRoles={["admin"]}><AdminUsersPage /></ProtectedRoute>} />
        <Route path="/admin/bookings" element={<ProtectedRoute allowedRoles={["admin"]}><AdminBookingsPage /></ProtectedRoute>} />
      </Route>
    </Routes>
  );
}
