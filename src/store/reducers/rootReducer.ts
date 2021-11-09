import { combineReducers } from 'redux';
import statisticsSlice from './statisticsSlice';

const rootReducer = combineReducers({
  statistics: statisticsSlice,
});

export default rootReducer;
