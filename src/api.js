// src/api.js
// Central API helper — import this in any component

const BASE_URL = "http://localhost:5000/api";

const getToken = () => localStorage.getItem("fb_token");

export const api = async (endpoint, options = {}) => {
  const token = getToken();
  const isFormData = options.body instanceof FormData;

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      ...(!isFormData && { "Content-Type": "application/json" }),
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Something went wrong");
  return data;
};

// Auth helpers
export const loginUser = (email, password) =>
  api("/auth/login", { method: "POST", body: JSON.stringify({ email, password }) });

export const registerUser = (formData) =>
  api("/auth/register", { method: "POST", body: formData });

export const getMe = () => api("/auth/me");

// Food helpers
export const getFoods = (params = {}) => {
  const query = new URLSearchParams(params).toString();
  return api(`/foods?${query}`);
};

export const getSingleFood = (id) => api(`/foods/${id}`);

// Order helpers
export const placeOrder = (body) =>
  api("/orders", { method: "POST", body: JSON.stringify(body) });

export const getMyOrders = () => api("/orders/my");

export const cancelOrder = (id) =>
  api(`/orders/${id}/cancel`, { method: "PATCH" });

// Payment helpers
export const initializePayment = (orderId) =>
  api(`/payments/initialize/${orderId}`, { method: "POST" });

export const requestRefund = (orderId) =>
  api(`/payments/refund/${orderId}`, { method: "POST" });

// Reservation helpers
export const makeReservation = (body) =>
  api("/reservations", { method: "POST", body: JSON.stringify(body) });

export const getMyReservations = () => api("/reservations/my");

export const cancelReservation = (id) =>
  api(`/reservations/${id}/cancel`, { method: "PATCH" });

// Review helpers
export const getRestaurantReviews = () => api("/reviews/restaurant");

export const submitRestaurantReview = (body) =>
  api("/reviews/restaurant", { method: "POST", body: JSON.stringify(body) });

export const getFoodReviews = (foodId) => api(`/reviews/food/${foodId}`);

export const submitFoodReview = (foodId, body) =>
  api(`/reviews/food/${foodId}`, { method: "POST", body: JSON.stringify(body) });

// Auth state helpers
export const saveAuth = (token, user) => {
  localStorage.setItem("fb_token", token);
  localStorage.setItem("fb_user", JSON.stringify(user));
};

export const clearAuth = () => {
  localStorage.removeItem("fb_token");
  localStorage.removeItem("fb_user");
};

export const getStoredUser = () => {
  const u = localStorage.getItem("fb_user");
  return u ? JSON.parse(u) : null;
};

export const isLoggedIn = () => !!getToken();