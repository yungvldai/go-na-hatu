import axios from 'axios';
import router from '@/router.js';

const api_addr = 'https://gonahatu.herokuapp.com/';

const api = axios.create({
  baseURL: api_addr
});

function handleError(error) {
  if (error.response.status === 404) {
    router.push('/notfound');
  }
}

api.interceptors.response.use(response => response,
  error => {
    handleError(error);
    return Promise.reject(error);
  }
);


export { api_addr, api };
