import axios from 'axios';
axios.defaults.baseURL = 'https://pharmacybackend-b38i.onrender.com/api';

export const fetchProducts = async ({ page, query, category }) => {
  const { data } = await axios.get(
    `/products?page=${page}&limit=12&keyword=${query}&category=${category}`
  );
console.log(data)
  return data;
};
