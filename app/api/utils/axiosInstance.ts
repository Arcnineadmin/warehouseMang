// /src/services/api/axiosInstance.ts
import axios from "axios";
import crypto from "crypto";

export const generateNodSignature = ({
  apiKey = "f29501c5d3cae9cd410b852f509f9e22", // Replace with your actual API key
  userHeaderValue = "71c5ca0051f8b8d126a050a69c12ca17", // Replace with your actual User ID
  httpVerb = "GET", // HTTP method (e.g., GET, POST)
  url = "http://api.b2b.nod.ro/products/?search=photocamera", // Full URL of the request
  navigationValue = "1", // Navigation header value
} = {}) => {
  // Generate the current UTC date string
  const dateHeader = new Date().toUTCString();

  // Process the URL: Remove the protocol and extract the path
  const urlParts = url.replace(/http:\/\/|https:\/\//, "").split("/");
  urlParts.shift(); // Remove the domain
  const path = urlParts.join("/");
  // const path = "products/?search=photocamera";

  console.log("11111111111111     ========>>>>>>>>>     ", path);

  // Concatenate the signature string
  const signatureString = `${httpVerb}${path}/${userHeaderValue}${dateHeader}`;

  // Generate the HMAC-SHA1 signature using the API key
  const hmac = crypto.createHmac("sha1", apiKey);
  const signature = hmac.update(signatureString).digest("base64");

  // Return the headers for the API request
  return {
    "X-NodWS-Auth": signature,
    "X-NodWs-Date": dateHeader,
    "X-NodWS-User": userHeaderValue,
    "X-NodWS-Navigation": navigationValue,
  };
};

const nodAxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_NOD_API_BASE_URL,
  timeout: 10000,
  withCredentials: false,
});

export async function nodApiRequest(
  method: string,
  query: string,
  params: any = {}
) {
  const paramKeys = Object.keys(params);
  let paramsArray = [];
  for (let key of paramKeys) {
    paramsArray.push(`${key}=${params[key]}`);
  }

  let url = `https://api.b2b.nod.ro${query}`;
  if (paramsArray.length) {
    url = `${url}?${paramsArray.join("&")}`;
  }

  console.log("7866666666666666", url);

  const resource = url.replace(/^https?:\/\//, "").split("/")[1];

  const currentUtcTime = new Date();

  const date = currentUtcTime.toUTCString();

  const signature = `${method}${resource}/${"71c5ca0051f8b8d126a050a69c12ca17"}${date}`;

  const hmacHash = crypto
    .createHmac("sha1", "f29501c5d3cae9cd410b852f509f9e22")

    .update(signature)

    .digest();

  const token = hmacHash.toString("base64");

  return axios({
    method: method,
    url: url,
    headers: {
      "X-NodWS-User": "71c5ca0051f8b8d126a050a69c12ca17",

      "X-NodWS-Date": date,

      "X-NodWS-Auth": token,

      "X-NodWS-Accept": "json",

      "X-NodWS-Navigation": 1,
    },
  })
    .then((response) => response.data)

    .catch((error) =>
      console.error("Error making API request:", error.response)
    );
}

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

export default nodAxiosInstance;
