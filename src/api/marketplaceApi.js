import api from "./axios";

export const getProfessionals = (params = {}) => api.get("/professionals", { params });
export const getProfessionalById = (id) => api.get(`/professionals/${id}`);
export const createBooking = (payload) => api.post("/bookings", payload);
export const getMyBookings = () => api.get("/bookings/my-bookings");
export const createReview = (payload) => api.post("/reviews", payload);
export const getMyServices = () => api.get("/services/my-services");
export const createService = (payload) => api.post("/services", payload);
export const updateService = (id, payload) => api.put(`/services/${id}`, payload);
export const deleteService = (id) => api.delete(`/services/${id}`);
export const getProDashboard = () => api.get("/professionals/dashboard/overview");
export const getAdminDashboard = () => api.get("/admin/dashboard");
