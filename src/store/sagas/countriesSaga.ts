import { takeEvery, put, call } from 'redux-saga/effects';
import covidAPI from '../../api/covidAPI';
import {
  getCountriesStatistic,
  setCountriesStatistic,
} from '../reducers/countriesReducer';

export async function fetchCountriesStatistic() {
  return await covidAPI.getCountriesStats();
}

export function* countriesWorker() {
  const countries = call(fetchCountriesStatistic);
  yield put(setCountriesStatistic(yield countries));
}

export default function* countriesWatcher() {
  yield takeEvery(getCountriesStatistic.type, countriesWorker);
}
