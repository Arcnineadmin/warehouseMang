// /src/services/api/axiosInstance.ts
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10000,
  headers: {},
  withCredentials: false,
});

// Interceptors for requests
// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("accessToken"); // Example: Retrieving token from localStorage
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // Interceptors for responses
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     // Handle common errors (like 401, 403)
//     if (error.response?.status === 401) {
//       console.error("Unauthorized! Redirecting to login...");
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
