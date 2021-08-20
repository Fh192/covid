import React, { useEffect, useState } from 'react';
import covidAPI from '../../../api/covidAPI';
import { Countries } from '../../../types/apiTypes';
import styles from './CountriesList.module.css';
import CountriesListItem from './CountriesListItem/CountriesListItem';

const CountriesList: React.FC = () => {
  const [countriesStats, setCountriesStats] = useState<Countries | null>(null);
  const [listLength, seyListLength] = useState(5);

  useEffect(() => {
    const fetchCountriesStats = async () => {
      const data = await covidAPI.getCountriesStats();

      setCountriesStats(data);
    };

    fetchCountriesStats();
  }, []);

  return (
    <div className={styles.countriesList}>
      <div className={styles.title}>Countries</div>
      {countriesStats && (
        <>
          <ul className={styles.list}>
            {countriesStats
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
      )}
    </div>
  );
};

export default CountriesList;
