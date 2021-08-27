import React, { useState, useEffect, useRef } from 'react';
import { Countries } from '../../../types/apiTypes';
import styles from './CountriesList.module.css';
import CountriesListItem from './CountriesListItem/CountriesListItem';

interface Props {
  countriesStatistic: Countries;
}

const CountriesList: React.FC<Props> = ({ countriesStatistic }) => {
  const [listLength, seyListLength] = useState(20);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const element = listRef.current as HTMLUListElement;

    const listener = (e: Event) => {
      const { scrollHeight, scrollTop, offsetHeight } = element;

      if (!(listLength >= countriesStatistic.length)) {
        if (scrollTop + offsetHeight >= scrollHeight - 100) {
          seyListLength(l => l + 20);
        }
      }
    };
    element.addEventListener('scroll', listener);

    return () => element.removeEventListener('scroll', listener);
  }, []);

  return (
    <div className={styles.countriesList}>
      <div className={styles.title}>Countries</div>
      <>
        <ul className={styles.list} ref={listRef}>
          {countriesStatistic
            .sort((a, b) => b.cases - a.cases)
            .slice(0, listLength)
            .map(c => (
              <CountriesListItem {...c} key={c.country} />
            ))}
        </ul>
      </>
    </div>
  );
};

export default CountriesList;
