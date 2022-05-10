import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import missionsReducer, { fetchMissions } from './missions/missions';
import rocketsReducer, { fetchRockets } from './rockets/rockets';

const rootReducer = combineReducers({
  rocketsReducer,
  missionsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));
store.dispatch(fetchMissions());
store.dispatch(fetchRockets());
export default store;
