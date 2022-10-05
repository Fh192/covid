import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { useSelector } from '../../hooks/useSelector';
import { selectStatisticsState } from '../../store/selectors';
import CountriesList from './CountriesList/CountriesList';
import styles from './Sidebar.module.css';

const Sidebar: React.FC = () => {
  const { historical } = useSelector(selectStatisticsState);
  const [date, setDate] = useState(new Date());
  const maxDate = new Date();
  const minDate = new Date(Object.keys(historical[0].timeline.cases)[0]);

  return (
    <div className={styles.sidebar}>
      <Calendar
        value={date}
        onChange={setDate}
        maxDate={maxDate}
        minDate={minDate}
      />
      <CountriesList date={date} />
    </div>
  );
};

export default Sidebar;
