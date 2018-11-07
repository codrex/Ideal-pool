// @flow
import { all, fork } from 'redux-saga/effects';
import { watchUserSagas } from './user';
import { watchInitializeApp } from './app';
import { watchIdeasSagas } from './ideas';

function* sagas(): Generator<*, *, *> {
  yield all([fork(watchUserSagas), fork(watchInitializeApp), fork(watchIdeasSagas)]);
}

export default sagas;
