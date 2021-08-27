import React from 'react';
import { Tooltip } from 'react-leaflet';
import DeathsIcon from '../../../../svg/DeathsIcon';
import InfectedIcon from '../../../../svg/InfectedIcon';
import RecoveredIcon from '../../../../svg/RecoveredIcon';
import { Country } from '../../../../types/apiTypes';
import styles from './CovidTooltip.module.css';

interface Props {
  flag: string;
  c: Country;
  countriesIndexByCases: { [key: string]: number };
}

const CovidTooltip: React.FC<Props> = ({ c, flag, countriesIndexByCases }) => {
  return (
    <Tooltip
      className={styles.tooltip}
      sticky={true}
      direction='auto'
      opacity={1}
    >
      <div className={styles.row}>
        <div className={styles.flag}>
          <img src={flag} alt={`${c.country} flag`} />
        </div>
        <div>
          <span>{c.country}</span>
        </div>
        <div>
          <span>{`#${countriesIndexByCases[c.country]}`}</span>
        </div>
        <div>
          <span>{c.cases.toLocaleString()}</span>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.statistic}>
          <div className={`${styles.icon} ${styles.infected}`}>
            <InfectedIcon size='13px' />
          </div>
          <div className={styles.value}>
            <span>{c.todayCases.toLocaleString()}</span>
          </div>
        </div>
        <div className={styles.statistic}>
          <div className={`${styles.icon} ${styles.recovered}`}>
            <RecoveredIcon size='10px' />
          </div>
          <div className={styles.value}>
            <span>{c.todayRecovered.toLocaleString()}</span>
          </div>
        </div>
        <div className={styles.statistic}>
          <div className={`${styles.icon} ${styles.deaths}`}>
            <DeathsIcon size='13px' />
          </div>
          <div className={styles.value}>
            <span>{c.todayDeaths.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </Tooltip>
  );
};

export default CovidTooltip;
