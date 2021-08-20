import React from 'react';
import styles from './Main.module.css';
import Stats from './Stats/Stats';

const Main: React.FC = () => {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div className={styles.title}>Spread of COVID-19</div>
        <Stats />
      </div>
    </main>
  );
};

export default Main;
