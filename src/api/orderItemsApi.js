import axios from 'axios';
axios.defaults.baseURL = 'https://pharmacybackend-b38i.onrender.com/api';

export const fetchOrderItemAdd = async body => {
  const { data } = await axios.post('/orderitems', body);

  return data;
};

export const fetchOrdertItemUpd = async (id, body) => {
  const { data } = await axios.put(`/orderitems/${id}`, body);
  return data;
};

export const fetchOrdertItemAll = async id => {
  const { data } = await axios.get(`/orderitems/${id}`);
  return data;
};

export const fetchOrdertItemDel = async id => {
  const { data } = await axios.delete(`/orderitems/${id}`);
  return data;
};
