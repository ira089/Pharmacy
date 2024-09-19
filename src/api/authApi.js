import axios from 'axios';
axios.defaults.baseURL = 'https://pharmacybackend-b38i.onrender.com/api';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};
export const fetchRegister = async body => {
  const { data } = await axios.post('/users/register', body);
  setAuthHeader(data.token);
  return data;
};

export const fetchLogin = async body => {
  const { data } = await axios.post('/users/login', body);
  setAuthHeader(data.token);
  return data;
};

export const fetchLogOut = async () => {
  const { data } = await axios.post('/users/logout');
  clearAuthHeader();
  return data;
};

export const fetchRefresh = async token => {
  setAuthHeader(token);
  try {
    const { data } = await axios.get('/users/current');
    return data;
  } catch (error) {
    clearAuthHeader();
    throw error;
  }
};
export const fetchCurrentFull = async token => {
  setAuthHeader(token);
  try {
    const { data } = await axios.get('/users/current/full');
    return data;
  } catch (error) {
    clearAuthHeader();
    throw error;
  }
};

export const fetchUpdOrder = async (token, id, body) => {
  setAuthHeader(token);
  try {
    const { data } = await axios.put(`/users/current/upd/${id}`, body);

    return data;
  } catch (error) {
    clearAuthHeader();
    throw error;
  }
};
