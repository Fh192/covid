import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from '../hooks/useSelector';
import { getStatistics } from '../store/reducers/statisticsSlice';
import './App.css';
import Main from './Main/Main';
import Preloader from './Preloader/Preloader';
import Sidebar from './Sidebar/Sidebar';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { fetching } = useSelector(s => s.statistics);

  useEffect(() => {
    dispatch(getStatistics());
  }, [dispatch]);

  return (
    <div className='App'>
      {!fetching ? (
        <div className='container'>
          <Sidebar />
          <Main />
        </div>
      ) : (
        <Preloader size='50px' />
      )}
    </div>
  );
};

export default App;
