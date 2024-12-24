// import { error } from "console";
// import nodAxiosInstance, { generateNodSignature } from "../utils/axiosInstance";

// export const fetchNodProducts = async (query: string) => {
//   try {
//     const headers = generateNodSignature();
//     console.log(headers);

//     const response = await nodAxiosInstance.get(`/products?search=${query}`, {
//       headers,
//     });
//     console.log(response);
//     return response.data;
//   } catch (error: any) {
//     console.log(error.response.data);
//   }
// };
