// @flow

import { actionTypes } from '../constant';

export function apiRequestPending(requestName: string) {
  return { type: actionTypes.API_REQUEST_PENDING, requestName };
}

export function apiRequestSuccess(requestName: string) {
  return { type: actionTypes.API_REQUEST_SUCCESS, requestName };
}

export function apiRequestFail(requestName: string) {
  return { type: actionTypes.API_REQUEST_FAIL, requestName };
}
