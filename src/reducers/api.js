import { actionTypes } from '../constant';
import defaultState from './defaultState';

export function setApi(state = defaultState.requests, { type, requestName }) {
  switch (type) {
    case actionTypes.API_REQUEST_FAIL:
    case actionTypes.API_REQUEST_PENDING:
    case actionTypes.API_REQUEST_SUCCESS:
      return { ...state, [requestName]: type };
    default:
      return state;
  }
}
