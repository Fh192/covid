import React from 'react';
import styles from './CountriesListItem.module.css';

interface Props {
  flag: string;
  country: string;
  cases: number;
}

const CountriesListItem: React.FC<Props> = ({ flag, country, cases }) => {
  return (
    <li className={styles.country}>
      <div className={styles.inner}>
        <img className={styles.flag} src={flag} alt={`${country} flag`} />
        <div className={styles.name}>{country}</div>
      </div>
      <div className={styles.cases}>{cases.toLocaleString()}</div>
    </li>
  );
};

export default CountriesListItem;
