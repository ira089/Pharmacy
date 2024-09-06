import axios from 'axios';
axios.defaults.baseURL = 'https://pharmacybackend-b38i.onrender.com/api';
// axios.defaults.baseURL = 'http://localhost:3000/api/';

export const fetchProducts = async ({ page, query, category }) => {
  const { data } = await axios.get(
    `/products?page=${page}&limit=12&keyword=${query}&category=${category}`
  );
  return data;
};

export const fetchProductsId = async id => {
  const { data } = await axios.get(
    `/products/${id}`
  );
  return data;
};
