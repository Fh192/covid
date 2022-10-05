import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Statistics, StatisticsSliceState } from '../../types';

const initialState: StatisticsSliceState = {
  fetching: true,
  countries: [],
  historical: [],
  global: {
    updated: 0,
    cases: 0,
    todayCases: 0,
    deaths: 0,
    todayDeaths: 0,
    recovered: 0,
    todayRecovered: 0,
    active: 0,
    tests: 0,
    population: 0,
    casesPerOneMillion: 0,
  },
};

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {
    setStatistics: (state, action: PayloadAction<Statistics>) => {
      const { countries, global, historical } = action.payload;
      state.countries = countries.sort((a, b) => b.cases - a.cases);
      state.global = global;
      state.historical = historical;
      state.fetching = false;
    },
    getStatistics: state => {
      state.fetching = true;
    },
  },
});

export const { setStatistics, getStatistics } = statisticsSlice.actions;

export default statisticsSlice.reducer;
