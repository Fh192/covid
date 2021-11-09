import { all } from '@redux-saga/core/effects';
import statisticsWatcher from './statistics';

export default function* rootSaga() {
  yield all([statisticsWatcher()]);
}
