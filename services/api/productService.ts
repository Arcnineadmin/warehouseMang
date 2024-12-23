import axiosInstance from "./axiosInstance";

export const fetchNodProducts = async (query: string, page?: number) => {
  try {
    const response = await axiosInstance.get(`/nod-product/products`, {
      params: {
        search: query,
        page: page || 1,
      },
    });
    return response.data;
  } catch (error) {}
};

export const fetchAbisisProducts = async (query: string, page?: number) => {
  try {
    const response = await axiosInstance.get(`/absis/products`, {
      params: {
        search: query,
        page: page || 1,
      },
    });
    return response.data;
  } catch (error) {}
};

export const fetchProductById = async (productId: string) => {
  const response = await axiosInstance.get(`/products/${productId}`);
  return response.data;
};

export const createProduct = async (productData: any) => {
  const response = await axiosInstance.post("/products", productData);
  return response.data;
};

export const updateProduct = async (productId: string, productData: any) => {
  const response = await axiosInstance.put(
    `/products/${productId}`,
    productData
  );
  return response.data;
};

export const deleteProduct = async (productId: string) => {
  const response = await axiosInstance.delete(`/products/${productId}`);
  return response.data;
};
