import { Countries } from './../../types/apiTypes';
import { createReducer, createAction } from '@reduxjs/toolkit';

export const setCountriesStatistic = createAction(
  'countriesReducer/SET_COUNTRIES_STATISTIC',
  (statistic: Countries) => ({ payload: { statistic } })
);

export const getCountriesStatistic = createAction(
  'countriesReducer/GET_COUNTRIES_STATISTIC'
);

const countriesReducer = createReducer([] as Countries, b => {
  b.addCase(setCountriesStatistic, (state, action) => {
    return action.payload.statistic.sort((a, b) => b.cases - a.cases);
  });
});

export default countriesReducer;