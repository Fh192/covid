import React from 'react';
import { Countries } from '../../types/apiTypes';
import CountriesList from './CountriesList/CountriesList';
import styles from './Sidebar.module.css';

interface Props {
  countriesStatistic: Countries;
}

const Sidebar: React.FC<Props> = props => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.datePicker}></div>
      <CountriesList countriesStatistic={props.countriesStatistic} />
    </div>
  );
};

export default Sidebar;
