import axios from 'axios';
axios.defaults.baseURL = 'https://pharmacybackend-b38i.onrender.com/api';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchOrderAdd = async body => {
  const { data } = await axios.post('/order', body);
  console.log(data);
  setAuthHeader(data.token);
  return data;
};

export const fetchOrdertUpd = async (id, body)=> {
    const { data } = await axios.put(`/order/${id}`, body);
    console.log(data);
    setAuthHeader(data.token);
    return data;
  };