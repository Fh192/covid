import React, { useEffect, useState } from 'react';
import covidAPI from '../api/covidAPI';
import { Countries, CountriesHistory, Global } from '../types/apiTypes';
import './App.css';
import Main from './Main/Main';
import Preloader from './Preloader/Preloader';
import Sidebar from './Sidebar/Sidebar';

export type Nullable<T> = T | null;

const App: React.FC = () => {
  const [countriesStatistic, setCountriesStatistic] =
    useState<Nullable<Countries>>(null);
  const [globalStatistic, setGlobalStatistic] =
    useState<Nullable<Global>>(null);
  const [historicalCountriesStatistic, setHistoricalCountriesStatistic] =
    useState<Nullable<CountriesHistory>>(null);

  useEffect(() => {
    const fetchCountriesStatistic = async () => {
      const statistic = await covidAPI.getCountriesStats();
      setCountriesStatistic(statistic);
    };

    fetchCountriesStatistic();
  }, []);

  useEffect(() => {
    const fetchGlobalStatistic = async () => {
      const statistic = await covidAPI.getGlobalStats();
      setGlobalStatistic(statistic);
    };

    fetchGlobalStatistic();
  }, []);

  useEffect(() => {
    const fetchHistoricalStatistic = async () => {
      const statistic = await covidAPI.getCountriesHistoryStats();
      setHistoricalCountriesStatistic(statistic);
    };

    fetchHistoricalStatistic();
  }, []);

  return (
    <div className='App'>
      {countriesStatistic && globalStatistic && historicalCountriesStatistic ? (
        <div className='container'>
          <Sidebar
            countriesStatistic={countriesStatistic}
            historicalCountriesStatistic={historicalCountriesStatistic}
          />
          <Main
            globalStatistic={globalStatistic}
            countriesStatistic={countriesStatistic}
          />
        </div>
      ) : (
        <Preloader size='50px' />
      )}
    </div>
  );
};

export default App;
