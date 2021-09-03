import { CountriesHistory } from '../../types/apiTypes';
import { createReducer, createAction } from '@reduxjs/toolkit';

export const setHistoricalStatistic = createAction(
  'historicalReducer/SET_HISTORICAL_STATISTIC',
  (statistic: CountriesHistory) => ({ payload: { statistic } })
);

export const getHistoricalStatistic = createAction(
  'historicalReducer/GET_HISTORICAL_STATISTIC'
);

const historicalReducer = createReducer([] as CountriesHistory, b => {
  b.addCase(
    setHistoricalStatistic,
    (state, action) => action.payload.statistic
  );
});

export default historicalReducer;
