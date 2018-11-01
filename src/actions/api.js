// @flow

import { actionTypes } from '../constant';

export function apiRequestPending() {
  return { type: actionTypes.API_REQUEST_PENDING };
}

export function apiRequestDone() {
  return { type: actionTypes.API_REQUEST_DONE };
}

export function apiRequestFail() {
  return { type: actionTypes.API_REQUEST_FAIL };
}
