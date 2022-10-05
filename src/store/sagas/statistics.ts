import { all, call, put, takeEvery } from '@redux-saga/core/effects';
import covidAPI from '../../api/covidAPI';
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
  const { countries, global, historical } = yield all({
    countries: call(fetchCountriesStatistic),
    global: call(fetchGlobalStatistic),
    historical: call(fetchHistoricalStatistic),
  });

  yield put(setStatistics({ countries, global, historical }));
}

export default function* statisticsWatcher() {
  yield takeEvery(getStatistics.type, statisticsWorker);
}
