import axios from 'axios';

const api = axios.create({
  baseURL: '192.168.0.58',
});

export default api;

/* Em base URL você precisa inserir o IP que consta no log do expo. Fique 
atento pois pode haver alterações no IP.
*/

