import axios from 'axios';

const api = axios.create({
  baseURL: 'https://coffee-shop-3e94a.firebaseio.com',
});

export default api;
