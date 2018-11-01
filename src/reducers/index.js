// @flow
import { combineReducers } from 'redux';
import { setApi as requests } from './api';
import { setUserData as user, setUserAuth as isAuthenticated } from './user';
import { setIdeas as ideas } from './ideas';

const reducers = combineReducers({
  user,
  requests,
  isAuthenticated,
  ideas,
});

export default reducers;
