import axios from 'axios';
axios.defaults.baseURL = 'https://pharmacybackend-b38i.onrender.com/api';

export const fetchReview = async () => {
  const { data } = await axios.get('/reviews');
  console.log(data)

  return data;
};