import React from 'react';
import { Country } from '../../../../types/apiTypes';
import styles from './CountriesListItem.module.css';

interface Props extends Country {}

const CountriesListItem: React.FC<Props> = ({
  countryInfo,
  country,
  cases,
}) => {
  const flag = countryInfo.flag;
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
