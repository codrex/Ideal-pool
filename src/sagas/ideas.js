// @flow
import {
  takeLatest, put, all, fork, take,
} from 'redux-saga/effects';
import toCamelCase from 'camelcase-keys';
import { makeReq } from '../api';
import { actionTypes, requestUrls } from '../constant';
import { setIdea, getIdeas } from '../actions/ideas';
import { handleErrorSaga, handleSuccessSaga, requestPending } from './sagaUtils';

type Idea = {
  data: Object,
};

export function* createIdeaSaga({ data }: Idea): Generator<*, *, *> {
  try {
    yield requestPending();
    const { url, method } = requestUrls.createIdeas;
    yield makeReq(url, method, data);
    yield put(getIdeas());
    yield take(actionTypes.SET_IDEAS);
    yield handleSuccessSaga('Idea successfully created');
  } catch (error) {
    yield handleErrorSaga(error);
  }
}

export function* updateIdeaSaga({ data }: Idea): Generator<*, *, *> {
  try {
    yield requestPending();
    const { url, method } = requestUrls.getUpdateIdeasUrl(data.id);
    yield makeReq(url, method, data);
    yield put(getIdeas());
    yield take(actionTypes.SET_IDEAS);
    yield handleSuccessSaga('Idea successfully updated');
  } catch (error) {
    yield handleErrorSaga(error);
  }
}

function sortIdeas({ createdAt }, secondIdea) {
  return secondIdea.createdAt - createdAt;
}

export function* getIdeasSaga(): Generator<*, *, *> {
  try {
    yield requestPending();
    const { url, method } = requestUrls.fetchIdeas;
    const response = yield makeReq(url, method);
    const ideas = toCamelCase(response.data).sort(sortIdeas);
    yield put(setIdea(ideas));
    yield handleSuccessSaga('');
  } catch (error) {
    yield handleErrorSaga(error);
  }
}
export function* deleteIdeaSaga({ id }: { id: string }): Generator<*, *, *> {
  try {
    yield requestPending();
    const { url, method } = requestUrls.getDeleteIdeasUrl(id);
    yield makeReq(url, method);
    yield put(getIdeas());
    yield take(actionTypes.SET_IDEAS);
    yield handleSuccessSaga('Idea successfully deleted');
  } catch (error) {
    yield handleErrorSaga(error);
  }
}

//= ===========Watchers===================//

export function* watchCreateIdea(): Generator<*, *, *> {
  yield takeLatest(actionTypes.CREATE_IDEA, createIdeaSaga);
}

export function* watchUpdateIdea(): Generator<*, *, *> {
  yield takeLatest(actionTypes.UPDATE_IDEA, updateIdeaSaga);
}

export function* watchDeleteIdea(): Generator<*, *, *> {
  yield takeLatest(actionTypes.DELETE_IDEA, deleteIdeaSaga);
}

export function* watchGetIdeas(): Generator<*, *, *> {
  yield takeLatest(actionTypes.GET_IDEAS, getIdeasSaga);
}

export function* watchIdeasSagas(): Generator<*, *, *> {
  yield all([
    fork(watchCreateIdea),
    fork(watchUpdateIdea),
    fork(watchDeleteIdea),
    fork(watchGetIdeas),
  ]);
}
