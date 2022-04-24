import { apiServer } from "./api";

export const getAllProducts = async () => {
  try {
    const res = await apiServer.get("/api/product");
    return res;
  } catch (error) {
    return error;
  }
};

export const getProduct = async (id) => {
  try {
    const res = await apiServer.get(`/api/product/${id}`);
    return res;
  } catch (error) {
    return error;
  }
};

export const AddToCart = async (data) => {
  try {
    const res = await apiServer.post(`/api/cart`, data);
    return res;
  } catch (error) {
    return error;
  }
};
