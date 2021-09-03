import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountriesStatistic } from '../store/reducers/countriesReducer';
import { getGlobalStatistic } from '../store/reducers/globalReducer';
import { getHistoricalStatistic } from '../store/reducers/historicalReducer';
import { RootState } from '../store/store';
import './App.css';
import Main from './Main/Main';
import Preloader from './Preloader/Preloader';
import Sidebar from './Sidebar/Sidebar';

export type Nullable<T> = T | null;

const App: React.FC = () => {
  const countriesStatistic = useSelector(
    (state: RootState) => state.countriesStatistic
  );
  const globalStatistic = useSelector(
    (state: RootState) => state.globalStatistic
  );
  const historicalStatistic = useSelector(
    (state: RootState) => state.historicalStatistic
  );

  const [isReady, setIsReady] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountriesStatistic());
    dispatch(getGlobalStatistic());
    dispatch(getHistoricalStatistic());
  }, [dispatch]);

  useEffect(() => {
    if (
      countriesStatistic.length > 0 &&
      Object.keys(globalStatistic).length > 0 &&
      historicalStatistic.length > 0
    ) {
      setIsReady(true);
    }
  }, [countriesStatistic, globalStatistic, historicalStatistic]);

  return (
    <div className='App'>
      {isReady ? (
        <div className='container'>
          <Sidebar
            countriesStatistic={countriesStatistic}
            historicalCountriesStatistic={historicalStatistic}
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
