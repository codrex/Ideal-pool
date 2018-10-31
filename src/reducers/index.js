// @flow
import { combineReducers } from 'redux';
import { setApi as requests } from './api';
import { setUserData as user, setUserAuth as isAuthenticated } from './user';
import defaultState from './defaultState';

const reducers = combineReducers({
  defaultState,
  user,
  requests,
  isAuthenticated,
});

export default reducers;
