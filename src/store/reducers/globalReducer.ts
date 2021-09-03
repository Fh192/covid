import { createReducer, createAction } from '@reduxjs/toolkit';
import { Global } from '../../types/apiTypes';

export const setGlobalStatistic = createAction(
  'globalReducer/SET_GLOBAL_STATISTIC',
  (statistic: Global) => ({ payload: { statistic } })
);

export const getGlobalStatistic = createAction(
  'globalReducer/GET_GLOBAL_STATISTIC'
);

const globalReducer = createReducer({} as Global, b => {
  b.addCase(setGlobalStatistic, (state, action) => action.payload.statistic);
});

export default globalReducer;
