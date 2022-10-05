import api from '.';
import { Countries, CountriesHistory, Global } from '../types';

const covidAPI = {
  getGlobalStats: async (): Promise<Global> => {
    const { data } = await api.get<Global>('all');
    return data;
  },
  getCountriesStats: async (): Promise<Countries> => {
    const { data } = await api.get<Countries>('countries');
    return data;
  },
  getCountriesHistoryStats: async (): Promise<CountriesHistory> => {
    const { data } = await api.get<CountriesHistory>('historical');
    return data;
  },
};

export default covidAPI;
