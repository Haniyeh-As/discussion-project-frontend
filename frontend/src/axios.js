import axios from 'axios';

const Axios = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1/'
});
Axios.defaults.withCredentials = true;

export default Axios;