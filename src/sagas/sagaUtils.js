// @flow
import { put } from 'redux-saga/effects';
import { apiRequestDone, apiRequestFail, apiRequestPending } from '../actions/api';
import { clearUserData } from '../actions/user';
import { displayErrorMessage, displaySuccessMessage, displayMessage } from '../utils/toast';
import { errorMessageType } from '../constant';

export function* requestPending(): Generator<*, *, *> {
  yield put(apiRequestPending());
}

export function* handleErrorSaga(error: Object): Generator<*, *, *> {
  yield put(apiRequestFail());
  if (error.response.status === 401) {
    yield put(clearUserData());
    const message = { title: 'Authentication error', message: 'Log in to continue' };
    displayMessage(errorMessageType, message);
  } else displayErrorMessage(error);
}

export function* handleSuccessSaga(message: string): Generator<*, *, *> {
  if (message) {
    displaySuccessMessage(message);
  }
  yield put(apiRequestDone());
}
