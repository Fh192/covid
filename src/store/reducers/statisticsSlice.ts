import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Countries, CountriesHistory, Global, Statistics } from '../../types';

const initialState = {
  countries: [] as Countries,
  global: {} as Global,
  historical: [] as CountriesHistory,
  fetching: true,
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
