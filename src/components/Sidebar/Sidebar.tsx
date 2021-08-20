import React from 'react';
import CountriesList from './CountriesList/CountriesList';
import styles from './Sidebar.module.css';

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <CountriesList />
    </div>
  );
};

export default Sidebar;
