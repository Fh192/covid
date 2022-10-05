import React, { useRef, useState } from 'react';
import { useOnScroll } from '../../../hooks/useOnScroll';
import { useSelector } from '../../../hooks/useSelector';
import { selectStatisticsState } from '../../../store/selectors';
import styles from './CountriesList.module.css';
import CountriesListItem from './CountriesListItem/CountriesListItem';

interface Props {
  date: Date;
}

const CountriesList: React.FC<Props> = ({ date }) => {
  const listRef = useRef<HTMLUListElement>(null);
  const today = date.toLocaleDateString() === new Date().toLocaleDateString();
  const [listLength, setListLength] = useState(20);
  const { countries, historical } = useSelector(selectStatisticsState);

  useOnScroll(listRef, listLength < countries.length, () => {
    setListLength(l => l + 20);
  });

  return (
    <div className={styles.countriesList}>
      <h2 className={styles.title}>Countries</h2>
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
