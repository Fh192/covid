import { call, put, takeEvery } from 'redux-saga/effects';
import covidAPI from '../../api/covidAPI';
import {
  setHistoricalStatistic,
  getHistoricalStatistic,
} from '../reducers/historicalReducer';

export async function fetchHistoricalStatistic() {
  return await covidAPI.getCountriesHistoryStats();
}

export function* historicalWorker() {
  const statistic = call(fetchHistoricalStatistic);
  yield put(setHistoricalStatistic(yield statistic));
}

export default function* historicalWatcher() {
  yield takeEvery(getHistoricalStatistic.type, historicalWorker);
}
