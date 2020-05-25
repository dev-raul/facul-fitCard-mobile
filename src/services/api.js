import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fb-fit-card-backend.herokuapp.com',
  headers: {'Content-Type': '	application/json; charset=utf-8'},
});

export default api;
