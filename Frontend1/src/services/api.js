import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333'
});

export default api;

/*
Base URL você precisa inserir o endereço em que se encontra seu back-end

*/