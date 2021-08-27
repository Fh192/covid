import React from 'react';
import DeathsIcon from '../../../svg/DeathsIcon';
import GlobeIcon from '../../../svg/GlobeIcon';
import InfectedIcon from '../../../svg/InfectedIcon';
import RecoveredIcon from '../../../svg/RecoveredIcon';
import { Global } from '../../../types/apiTypes';
import styles from './Stats.module.css';

interface Props {
  globalStatistic: Global;
}

const Stats: React.FC<Props> = ({ globalStatistic }) => {
  const { cases, todayCases, recovered, todayRecovered, deaths, todayDeaths } =
    globalStatistic;

  return (
    <ul className={styles.stats}>
      <li className={`${styles.item} ${styles.infected}`}>
        <div className={styles.icon}>
          <InfectedIcon size='30px' />
        </div>
        <div className={styles.info}>
          <span className={styles.name}>Infected</span>
          <div className={styles.today}>
            {`+${todayCases.toLocaleString()}`}
          </div>
          <span className={styles.value}>{cases.toLocaleString()}</span>
        </div>
      </li>
      <li className={`${styles.item} ${styles.recovered}`}>
        <div className={styles.icon}>
          <RecoveredIcon size='20px' />
        </div>
        <div className={styles.info}>
          <span className={styles.name}>Recovered</span>
          <div className={styles.today}>
            {`+${todayRecovered.toLocaleString()}`}
          </div>
          <span className={styles.value}>{recovered.toLocaleString()}</span>
        </div>
      </li>
      <li className={`${styles.item} ${styles.deaths}`}>
        <div className={styles.icon}>
          <DeathsIcon size='30px' />
        </div>
        <div className={styles.info}>
          <span className={styles.name}>Deaths</span>
          <span className={styles.value}>{deaths.toLocaleString()}</span>
          <div className={styles.today}>
            {`+${todayDeaths.toLocaleString()}`}
          </div>
        </div>
      </li>
      <li className={styles.item}>
        <div className={`${styles.icon} ${styles.country}`}>
          <GlobeIcon size='30px' />
        </div>
        <div className={styles.info}>
          <span className={styles.name}>Location</span>
          <span className={styles.value}>Global</span>
        </div>
      </li>
    </ul>
  );
};

export default Stats;
