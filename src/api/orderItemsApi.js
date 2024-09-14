import axios from 'axios';
axios.defaults.baseURL = 'https://pharmacybackend-b38i.onrender.com/api';

// const setAuthHeader = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

export const fetchOrderItemAdd = async body => {
  console.log(body);
  const { data } = await axios.post('/orderitems', body);
  console.log(data);
  //   setAuthHeader(data.token);
  return data;
};

export const fetchOrdertItemUpd = async (id, body) => {
  // console.log(id);
  // console.log(body);
  const { data } = await axios.put(`/orderitems/${id}`, body);
  // console.log(data);
  //   setAuthHeader(data.token);
  return data;
};

export const fetchOrdertItemAll = async id => {
  console.log(id);
  const { data } = await axios.get(`/orderitems/${id}`);
  // console.log(data);
  return data;
};

export const fetchOrdertItemDel = async id => {
  console.log(id);
  const { data } = await axios.delete(`/orderitems/${id}`);
  console.log(data);
  //   setAuthHeader(data.token);
  return data;
};
