import { Countries, CountriesHistory, Global } from '../types';
import instance from './instance';

const covidAPI = {
  getGlobalStats: async () => {
    const response = await instance.get<Global>('all');

    return response.data;
  },

  getCountriesStats: async () => {
    const response = await instance.get<Countries>('countries');

    return response.data;
  },

  getCountriesHistoryStats: async () => {
    const response = await instance.get<CountriesHistory>('historical');

    return response.data;
  },
};

export default covidAPI;
