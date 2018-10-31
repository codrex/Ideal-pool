// @flow

import { actionTypes } from '../constant';

export function signUpUser(data: Object) {
  return { type: actionTypes.SIGN_UP_USER, data };
}

export function loginUser(data: Object) {
  return { type: actionTypes.LOGIN_USER, data };
}

export function setUserData(data: Object) {
  return { type: actionTypes.SET_USER_DATA, data };
}

export function fetchUserData() {
  return { type: actionTypes.FETCH_USER_DATA };
}

export function authenticateUser(isAuthenticated: boolean) {
  return { type: actionTypes.USER_AUTH, isAuthenticated };
}
