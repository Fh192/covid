import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://corona.lmao.ninja/v3/covid-19/',
});

export default instance;
