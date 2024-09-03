import axios from 'axios';
axios.defaults.baseURL = 'https://pharmacybackend-b38i.onrender.com/api';

export const fetchMedStore = async () => {
   
    const { data } = await axios.get('/pharmacies');
    // console.log(data)
    
    return data;
  };

  export const fetchMedStoreSix = async () => {
   
    const { data } = await axios.get('/pharmacies/six');
    console.log(data)
    
    return data;
  };