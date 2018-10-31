// @flow

import { actionTypes } from '../constant';

export function initializeApp() {
  return { type: actionTypes.APP_INITIALIZE };
}
