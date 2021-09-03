import React, { useState, useEffect, useRef } from 'react';
import { Countries, CountriesHistory } from '../../../types/apiTypes';
import styles from './CountriesList.module.css';
import CountriesListItem from './CountriesListItem/CountriesListItem';

interface Props {
  countriesStatistic: Countries;
  historicalCountriesStatistic: CountriesHistory;
  date: Date;
}

const CountriesList: React.FC<Props> = ({
  historicalCountriesStatistic,
  countriesStatistic,
  date,
}) => {
  const listRef = useRef<HTMLUListElement>(null);
  const [listLength, seyListLength] = useState(20);

  const isToday = date.toDateString() === new Date().toDateString();
  const year = date.getFullYear().toString();
  const dateAsObjKey = `${date.getMonth() + 1}/${date.getDate()}/${
    year[year.length - 2] + year[year.length - 1]
  }`;

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
  }, [listLength, countriesStatistic]);

  return (
    <div className={styles.countriesList}>
      <div className={styles.title}>Countries</div>
      <ul className={styles.list} ref={listRef}>
        {countriesStatistic.slice(0, listLength).map(c => {
          if (isToday) {
            return <CountriesListItem {...c} key={c.country} />;
          } else {
            const historicalStatistic = historicalCountriesStatistic.find(
              a => a.country === c.country
            );

            if (historicalStatistic) {
              return (
                <CountriesListItem
                  {...c}
                  cases={historicalStatistic.timeline.cases[dateAsObjKey]}
                  key={c.country}
                />
              );
            }
          }
          return null;
        })}
      </ul>
    </div>
  );
};

export default CountriesList;
