import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Countries, CountriesHistory } from '../../types/apiTypes';
import CountriesList from './CountriesList/CountriesList';
import styles from './Sidebar.module.css';

interface Props {
  countriesStatistic: Countries;
  historicalCountriesStatistic: CountriesHistory;
}

const Sidebar: React.FC<Props> = ({
  historicalCountriesStatistic,
  ...props
}) => {
  const [date, setDate] = useState(new Date());
  const availableDates = Object.keys(
    historicalCountriesStatistic[0].timeline.cases
  );
  const maxDate = new Date();
  const minDate = new Date(availableDates[0]);

  return (
    <div className={styles.sidebar}>
      <Calendar
        value={date}
        onChange={setDate}
        maxDate={maxDate}
        minDate={minDate}
      />
      <CountriesList
        date={date}
        historicalCountriesStatistic={historicalCountriesStatistic}
        countriesStatistic={props.countriesStatistic}
      />
    </div>
  );
};

export default Sidebar;
