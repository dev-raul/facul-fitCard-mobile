import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.2.2:3333',
  headers: {'Content-Type': '	application/json; charset=utf-8'},
});

export default api;
