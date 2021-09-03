import { combineReducers } from 'redux';
import countriesReducer from './countriesReducer';
import globalReducer from './globalReducer';
import historicalReducer from './historicalReducer';

const rootReducer = combineReducers({
  countriesStatistic: countriesReducer,
  globalStatistic: globalReducer,
  historicalStatistic: historicalReducer,
});

export default rootReducer;
