import axiosInstance from "./axiosInstance";

export const fetchNodProducts = async (
  query: string,
  page?: number,
  filters?: any
) => {
  try {
    const params: any = {
      search: query?.toLowerCase(),
      page: page || 1,
    };

    if (filters) {
      if (filters.manufactures?.length)
        params.vendorsList = filters.manufactures;
      if (filters.price?.length) {
        params.minPrice = filters.price[0];
        params.maxPrice = filters.price[1];
      }
      if (filters.warranty?.length) {
        params.minWarranty = filters.warranty[0];
        params.maxWarranty = filters.warranty[1];
      }
      if (filters.stock?.length) {
        params.minStock = filters.stock[0];
        params.maxStock = filters.stock[1];
      }
    }

    const response = await axiosInstance.get(`/nod-product/products`, {
      params,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
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
