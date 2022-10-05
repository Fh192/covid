import React from 'react';
import CovidMap from './CovidMap/CovidMap';
import styles from './Main.module.css';
import Stats from './Stats/Stats';

const Main: React.FC = () => {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.title}>Spread of COVID-19</h1>
        <Stats />
      </div>
      <CovidMap />
    </main>
  );
};

export default Main;
