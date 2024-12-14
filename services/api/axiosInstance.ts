// /src/services/api/axiosInstance.ts
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // Base URL from your environment variables
  timeout: 10000, // Set a timeout for requests
  headers: {
    "Content-Type": "application/json",
    "X-NodWS-User": "71c5ca0051f8b8d126a050a69c12ca17",
    "X-NodWS-Auth": "zhSXXCklkFX9y3+M7YioC+0UR7s=",
  },
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
