// @flow
import {
  takeLatest, put, all, fork,
} from 'redux-saga/effects';
import toCamelCase from 'camelcase-keys';
import { makeReq, refreshToken } from '../api';
import { actionTypes, requestUrls } from '../constant';
import { decodeToken, saveTokens } from '../utils';
import { setUserData, fetchUserData, authenticateUser } from '../actions/user';

export function* getUserDetails(): Generator<*, *, *> {
  try {
    const { url, method } = requestUrls.userDetails;
    const response = yield makeReq(url, method);
    yield put(setUserData(toCamelCase(response.data)));
  } catch (error) {
    if (error.response.status === 401) {
      const isSuccess = yield refreshToken();
      if (isSuccess) {
        yield put(fetchUserData());
      } else {
        console.log('token refreshed failed');
      }
    }
    console.log(error);
  }
}
export function* signupUser({
  data,
}: {
  data: {
    username: string,
    password: string,
    name: string,
  },
}): Generator<*, *, *> {
  try {
    const { url, method } = requestUrls.signup;
    const response = yield makeReq(url, method, data);
    decodeToken(response.data.jwt);
    yield saveTokens(toCamelCase(response.data));
    yield getUserDetails();
    yield put(authenticateUser(true));
  } catch (error) {
    console.log(error);
  }
}

//= ===========Watchers===================//

export function* watchSignUpUser(): Generator<*, *, *> {
  yield takeLatest(actionTypes.SIGN_UP_USER, signupUser);
}

export function* watchFetchUserData(): Generator<*, *, *> {
  yield takeLatest(actionTypes.FETCH_USER_DATA, getUserDetails);
}

export function* watchUserSagas(): Generator<*, *, *> {
  yield all([fork(watchSignUpUser), fork(watchFetchUserData)]);
}
