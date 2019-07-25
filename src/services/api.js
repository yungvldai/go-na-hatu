import axios from 'axios';

const api_addr = 'https://gonahatu.herokuapp.com/';

const api = axios.create({
  baseURL: api_addr
});


export { api_addr, api };
