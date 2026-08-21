import api from "./axios";

export const getProducts = async () => {
  const response = await api.get("/products");
  return response.data;
};

export const deleteProducts = async (id) => {
  const response = await api.delete(`/products/${id}`);
  return response.data;
}

export const createProducts = async (data) => {
  const response = await api.post (`/products`,data);
  return response.data;
}

export const updateProducts = async (id,data) => {
  const response = await api.put (`/products/${id}`,data);
  return response.data;
}


export default { getProducts , deleteProducts , createProducts , updateProducts};
