import axios from 'axios';
axios.defaults.baseURL = 'https://pharmacybackend-b38i.onrender.com/api';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

export const fetchCartAdd = async body => {
  const { data } = await axios.post('/cart/checkout', body);
  console.log(data);
  setAuthHeader(data.token);
  return data;
};

export const fetchCartUpd = async body => {
    const { data } = await axios.put('/cart/update', body);
    console.log(data);
    setAuthHeader(data.token);
    return data;
  };

  export const fetchCartGet = async () => {
    const { data } = await axios.get('/cart');
    console.log(data);
    setAuthHeader(data.token);
    return data;
  };