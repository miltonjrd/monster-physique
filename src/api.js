import axios from 'axios';

const url = 'http://localhost:8000/api';

axios.defaults.baseURL = url;
axios.defaults.headers.common['Authorization'] = 'bearer '+sessionStorage.getItem('authorization');
axios.defaults.headers.post['Content-Type'] = 'application/json';

const api = axios;

export default api;