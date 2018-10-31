// @flow
import { takeLatest, put } from 'redux-saga/effects';
import { actionTypes } from '../constant';
import { hasToken } from '../utils';
import { fetchUserData, authenticateUser } from '../actions/user';

export function* initializeApp(): Generator<*, *, *> {
  const isLoggedIn = yield hasToken();
  if (isLoggedIn) {
    yield put(fetchUserData());
  }
  yield put(authenticateUser(isLoggedIn));
}

//= ===========Watchers===================//

export function* watchInitializeApp(): Generator<*, *, *> {
  yield takeLatest(actionTypes.APP_INITIALIZE, initializeApp);
}
