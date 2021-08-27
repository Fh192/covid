import React, { useState } from 'react';
import { Countries } from '../../../types/apiTypes';
import styles from './CountriesList.module.css';
import CountriesListItem from './CountriesListItem/CountriesListItem';

interface Props {
  countriesStatistic: Countries;
}

const CountriesList: React.FC<Props> = ({ countriesStatistic }) => {
  const [listLength, seyListLength] = useState(5);

  return (
    <div className={styles.countriesList}>
      <div className={styles.title}>Countries</div>
      <>
        <ul className={styles.list}>
          {countriesStatistic
            .sort((a, b) => b.cases - a.cases)
            .slice(0, listLength)
            .map(c => (
              <CountriesListItem {...c} key={c.country} />
            ))}
        </ul>
        <div className={styles.loadBtn}>
          <button onClick={() => seyListLength(l => l + 5)}>Load more</button>
        </div>
      </>
    </div>
  );
};

export default CountriesList;
