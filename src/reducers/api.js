import { actionTypes } from '../constant';
import defaultState from './defaultState';

export function setApi(state = defaultState.requests, { type }) {
  switch (type) {
    case actionTypes.API_REQUEST_PENDING:
      return state + 1;
    case actionTypes.API_REQUEST_DONE:
    case actionTypes.API_REQUEST_FAIL:
      return state ? state - 1 : state;
    default:
      return state;
  }
}
