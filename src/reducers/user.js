import { actionTypes } from '../constant';
import defaultState from './defaultState';

export function setUserData(state = defaultState.user, { type, data }) {
  switch (type) {
    case actionTypes.SET_USER_DATA:
      return data;
    default:
      return state;
  }
}

export function setUserAuth(state = defaultState.isAuthenticated, { type, isAuthenticated }) {
  switch (type) {
    case actionTypes.USER_AUTH:
      return isAuthenticated;
    default:
      return state;
  }
}
