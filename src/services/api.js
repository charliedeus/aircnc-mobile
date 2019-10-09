import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.71.0.88:3333'
  // baseURL: 'exp://az-aff.anonymous.mobile.exp.direct:80'
});

export default api;