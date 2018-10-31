// @flow
import { all, fork } from 'redux-saga/effects';
import { watchUserSagas } from './user';
import { watchInitializeApp } from './app';

function* sagas(): Generator<*, *, *> {
  yield all([fork(watchUserSagas), fork(watchInitializeApp)]);
}

export default sagas;
