import React from 'react';
import { Countries, Global } from '../../types/apiTypes';
import CovidMap from './CovidMap/CovidMap';
import styles from './Main.module.css';
import Stats from './Stats/Stats';

interface Props {
  countriesStatistic: Countries;
  globalStatistic: Global;
}

const Main: React.FC<Props> = ({ globalStatistic, countriesStatistic }) => {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div className={styles.title}>Spread of COVID-19</div>
        <Stats globalStatistic={globalStatistic} />
      </div>

      <CovidMap
        globalStatistic={globalStatistic}
        countriesStatistic={countriesStatistic}
      />
    </main>
  );
};

export default Main;
