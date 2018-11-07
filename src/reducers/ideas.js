import { actionTypes } from '../constant';
import defaultState from './defaultState';

export function setIdeas(state = defaultState.ideas, { type, data }) {
  switch (type) {
    case actionTypes.SET_IDEAS:
      return data;
    default:
      return state;
  }
}
