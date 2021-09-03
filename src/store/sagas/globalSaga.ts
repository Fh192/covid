import { call, put, takeEvery } from 'redux-saga/effects';
import covidAPI from '../../api/covidAPI';
import {
  getGlobalStatistic,
  setGlobalStatistic,
} from '../reducers/globalReducer';

export async function fetchGlobalStatistic() {
  return await covidAPI.getGlobalStats();
}

export function* globalWorker() {
  const statistic = call(fetchGlobalStatistic);
  yield put(setGlobalStatistic(yield statistic));
}

export default function* globalWatcher() {
  yield takeEvery(getGlobalStatistic.type, globalWorker);
}
