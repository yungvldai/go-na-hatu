import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://gonahatu.herokuapp.com/'
});
