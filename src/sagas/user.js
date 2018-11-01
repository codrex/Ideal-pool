// @flow
import {
  takeLatest, put, all, fork, call,
} from 'redux-saga/effects';
import toCamelCase from 'camelcase-keys';
import { makeReq } from '../api';
import { actionTypes, requestUrls } from '../constant';
import { saveTokens, getTokens, clearTokens } from '../utils';
import { setUserData, authenticateUser } from '../actions/user';
import { getIdeas, setIdea } from '../actions/ideas';
import { displayErrorMessage } from '../utils/toast';

export function* getUserDetails(): Generator<*, *, *> {
  try {
    const { url, method } = requestUrls.userDetails;
    const response = yield makeReq(url, method);
    yield put(setUserData(toCamelCase(response.data)));
  } catch (error) {
    displayErrorMessage(error);
  }
}

function* afterSuccessLoginOrSignup(response): Generator<*, *, *> {
  yield saveTokens(toCamelCase(response.data));
  yield call(getUserDetails);
  yield put(getIdeas());
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
    displayErrorMessage(error);
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
    displayErrorMessage(error);
  }
}

export function* logoutUser(): Generator<*, *, *> {
  try {
    const tokens = yield getTokens();
    const { url, method } = requestUrls.logout;
    yield makeReq(url, method, { data: { refresh_token: tokens.refreshToken } });
    yield call(clearTokens);
    yield put(authenticateUser(false));
    yield put(setUserData({}));
    yield put(setIdea([]));
  } catch (error) {
    displayErrorMessage(error);
  }
}

//= ===========Watchers===================//

export function* watchSignUpUser(): Generator<*, *, *> {
  yield takeLatest(actionTypes.SIGN_UP_USER, signupUser);
}

export function* watchLoginUser(): Generator<*, *, *> {
  yield takeLatest(actionTypes.LOGIN_USER, loginUser);
}

export function* watchLogoutUser(): Generator<*, *, *> {
  yield takeLatest(actionTypes.LOGOUT_USER, logoutUser);
}

export function* watchFetchUserData(): Generator<*, *, *> {
  yield takeLatest(actionTypes.FETCH_USER_DATA, getUserDetails);
}

export function* watchUserSagas(): Generator<*, *, *> {
  yield all([
    fork(watchSignUpUser),
    fork(watchFetchUserData),
    fork(watchLoginUser),
    fork(watchLogoutUser),
  ]);
}
