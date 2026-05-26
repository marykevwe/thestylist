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
import AdminLayout from "../layouts/AdminLayout";
import AdminProsPage from "../pages/admin/AdminProsPage";
import AdminReviewsPage from "../pages/admin/AdminReviewsPage";
import AdminSettingsPage from "../pages/admin/AdminSettingsPage";
import AdminPaymentsPage from "../pages/admin/AdminPaymentsPage";

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
    <ProtectedRoute allowedRoles={["client", "professional"]}>
      <DashboardLayout />
    </ProtectedRoute>
  }
>
  {/* CLIENT */}
  <Route path="/client" element={<ClientDashboard />} />
  <Route path="/client/bookings" element={<ClientBookingsPage />} />
  <Route path="/client/reviews" element={<ClientReviewsPage />} />

  {/* PROFESSIONAL */}
  <Route path="/pro" element={<ProDashboard />} />
  <Route path="/pro/services" element={<ProServicesPage />} />
  <Route path="/pro/bookings" element={<ProBookingsPage />} />
  <Route path="/pro/clients" element={<ProClientsPage />} />
</Route>

{/* ADMIN */}
<Route
  path="/admin"
  element={
    <ProtectedRoute allowedRoles={["admin"]}>
      <AdminLayout />
    </ProtectedRoute>
  }
>
  <Route index element={<AdminDashboard />} />
  <Route path="users" element={<AdminUsersPage />} />
  <Route path="pros" element={<AdminProsPage />} />
  <Route path="bookings" element={<AdminBookingsPage />} />
  <Route path="reviews" element={<AdminReviewsPage />} />
  <Route path="settings" element={<AdminSettingsPage />} />
  <Route path="payments" element={<AdminPaymentsPage />} />
</Route>
    </Routes>
  );
}
