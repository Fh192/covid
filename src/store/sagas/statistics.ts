import { call, put, takeEvery } from '@redux-saga/core/effects';
import covidAPI from '../../api/covidAPI';
import { Countries, CountriesHistory, Global } from '../../types';
import { getStatistics, setStatistics } from '../reducers/statisticsSlice';

export const fetchCountriesStatistic = () => {
  return covidAPI.getCountriesStats();
};

export const fetchGlobalStatistic = () => {
  return covidAPI.getGlobalStats();
};

export const fetchHistoricalStatistic = () => {
  return covidAPI.getCountriesHistoryStats();
};

export function* statisticsWorker() {
  const countries: Countries = yield call(fetchCountriesStatistic);
  const global: Global = yield call(fetchGlobalStatistic);
  const historical: CountriesHistory = yield call(fetchHistoricalStatistic);

  yield put(setStatistics({ countries, global, historical }));
}

export default function* statisticsWatcher() {
  yield takeEvery(getStatistics.type, statisticsWorker);
}
