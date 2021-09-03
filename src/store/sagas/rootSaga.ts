import { all } from '@redux-saga/core/effects';
import countriesWatcher from './countriesSaga';
import globalWatcher from './globalSaga';
import historicalWatcher from './historicalSaga';

export default function* rootSaga() {
  yield all([countriesWatcher(), globalWatcher(), historicalWatcher()]);
}
