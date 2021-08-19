import {
  Continents,
  Countries,
  CountriesHistory,
  Country,
  CountryHistory,
  Global,
} from '../types/apiTypes';
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

  getCountryStats: async (country: string) => {
    const response = await instance.get<Country>(`countries/${country}`);

    return response.data;
  },

  getContinentsStats: async () => {
    const response = await instance.get<Continents>('continents');

    return response.data;
  },

  getCountriesHistoryStats: async () => {
    const response = await instance.get<CountriesHistory>('historical');

    return response.data;
  },

  getCountryHistoryStats: async (country: string) => {
    const response = await instance.get<CountryHistory>(
      `historical/${country}`
    );

    return response.data;
  },
};

export default covidAPI;
