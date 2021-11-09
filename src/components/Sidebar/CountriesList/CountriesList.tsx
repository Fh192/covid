import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from '../../../hooks/useSelector';
import styles from './CountriesList.module.css';
import CountriesListItem from './CountriesListItem/CountriesListItem';

interface Props {
  date: Date;
}

const CountriesList: React.FC<Props> = ({ date }) => {
  const listRef = useRef<HTMLUListElement>(null);
  const today = date.toLocaleDateString() === new Date().toLocaleDateString();
  const [listLength, seyListLength] = useState(20);
  const { countries, historical } = useSelector(s => s.statistics);

  useEffect(() => {
    const element = listRef.current as HTMLUListElement;

    const listener = () => {
      const { scrollHeight, scrollTop, offsetHeight } = element;

      if (!(listLength >= countries.length)) {
        if (scrollTop + offsetHeight >= scrollHeight - 100) {
          seyListLength(l => l + 20);
        }
      }
    };

    element.addEventListener('scroll', listener);
    return () => element.removeEventListener('scroll', listener);
  }, [listLength, countries]);

  return (
    <div className={styles.countriesList}>
      <div className={styles.title}>Countries</div>
      <ul className={styles.list} ref={listRef}>
        {countries.slice(0, listLength).map(c => {
          let cases = c.cases;
          if (!today) {
            const country = historical.find(v => v.country === c.country);

            if (country) {
              const casesTimeline = country.timeline.cases;
              const casesKey = Object.keys(casesTimeline).find(d => {
                const d1 = new Date(d).toDateString();
                const d2 = new Date(date).toDateString();
                return d1 === d2;
              }) as string;
              cases = casesTimeline[casesKey];
            }
          }

          return (
            <CountriesListItem
              flag={c.countryInfo.flag}
              cases={cases}
              country={c.country}
              key={c.country}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default CountriesList;
