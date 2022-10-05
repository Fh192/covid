import { StatisticsSliceState } from '../../types';
import { RootState } from '../store';

export const selectStatisticsState = (
  state: RootState,
): StatisticsSliceState => {
  return state.statistics;
};

export const selectGlobalStatistics = (
  state: RootState,
): StatisticsSliceState['global'] => {
  const { global } = selectStatisticsState(state);
  return global;
};
