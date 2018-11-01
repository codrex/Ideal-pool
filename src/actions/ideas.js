// @flow

import { actionTypes } from '../constant';

export function setIdea(data: Object) {
  return { type: actionTypes.SET_IDEAS, data };
}

export function createIdea(data: Object) {
  return { type: actionTypes.CREATE_IDEA, data };
}

export function updateIdea(data: Object) {
  return { type: actionTypes.UPDATE_IDEA, data };
}

export function deleteIdea(id: string) {
  return { type: actionTypes.DELETE_IDEA, id };
}

export function getIdeas() {
  return { type: actionTypes.GET_IDEAS };
}
