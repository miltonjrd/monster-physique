import useSWR from 'swr';
import axios from 'axios';

export const baseUrl = 'http://localhost:8000';
const apiUrl = baseUrl+'/api';

axios.defaults.baseURL = apiUrl;
axios.defaults.headers.common['Authorization'] = 'bearer '+sessionStorage.getItem('authorization');
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const useApi = (url, payload = null) => {
    const fetcher = async (url) => (await axios(url, payload)).data;

    const { data, error } = useSWR(url, fetcher);
    
    return {
        data,
        loading: !data && !error,
        error
    };
};

const api = axios;

export default api;