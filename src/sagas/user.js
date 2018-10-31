// @flow
import {
  takeLatest, put, all, fork, call,
} from 'redux-saga/effects';
import toCamelCase from 'camelcase-keys';
import { makeReq, refreshToken } from '../api';
import { actionTypes, requestUrls } from '../constant';
import { saveTokens } from '../utils';
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

function* afterSuccessLoginOrSignup(response): Generator<*, *, *> {
  yield saveTokens(toCamelCase(response.data));
  yield call(getUserDetails);
  yield put(authenticateUser(true));
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
    yield afterSuccessLoginOrSignup(response);
  } catch (error) {
    console.log(error);
  }
}

export function* loginUser({
  data,
}: {
  data: {
    username: string,
    password: string,
    name: string,
  },
}): Generator<*, *, *> {
  try {
    const { url, method } = requestUrls.login;
    const response = yield makeReq(url, method, data);
    yield afterSuccessLoginOrSignup(response);
  } catch (error) {
    console.log(error);
  }
}

//= ===========Watchers===================//

export function* watchSignUpUser(): Generator<*, *, *> {
  yield takeLatest(actionTypes.SIGN_UP_USER, signupUser);
}

export function* watchLoginUser(): Generator<*, *, *> {
  yield takeLatest(actionTypes.LOGIN_USER, loginUser);
}

export function* watchFetchUserData(): Generator<*, *, *> {
  yield takeLatest(actionTypes.FETCH_USER_DATA, getUserDetails);
}

export function* watchUserSagas(): Generator<*, *, *> {
  yield all([fork(watchSignUpUser), fork(watchFetchUserData), fork(watchLoginUser)]);
}
