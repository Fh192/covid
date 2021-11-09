import React from 'react';
import CovidMap from './CovidMap/CovidMap';
import styles from './Main.module.css';
import Stats from './Stats/Stats';

const Main: React.FC = () => {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div className={styles.title}>Spread of COVID-19</div>
        <Stats />
      </div>
      <CovidMap />
    </main>
  );
};

export default Main;
