import React, { useEffect, useState } from 'react';
import covidAPI from '../api/covidAPI';
import { Countries, Global } from '../types/apiTypes';
import './App.css';
import Main from './Main/Main';
import Sidebar from './Sidebar/Sidebar';

const App: React.FC = () => {
  const [countriesStatistic, setCountriesStatistic] =
    useState<Countries | null>(null);
  const [globalStatistic, setGlobalStatistic] = useState<Global | null>(null);

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

  return (
    <div className='App'>
      <div className='container'>
        {countriesStatistic && globalStatistic ? (
          <>
            <Sidebar countriesStatistic={countriesStatistic} />
            <Main
              globalStatistic={globalStatistic}
              countriesStatistic={countriesStatistic}
            />
          </>
        ) : (
          '....'
        )}
      </div>
    </div>
  );
};

export default App;
