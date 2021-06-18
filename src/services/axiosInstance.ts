import axios, { AxiosInstance } from 'axios';
const instance: AxiosInstance = axios.create({
  baseURL: 'https://gateway.marvel.com',
  params: {
    apikey: '30f72876b09f076b463d9d4a8078d53a',
  },
});

export default instance;
