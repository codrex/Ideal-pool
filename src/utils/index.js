// @flow
import jwtDecode from 'jwt-decode';
import { tokenKey } from '../constant';

type Tokens = {
  jwt: string,
  refreshToken: string,
};

export function saveTokens(tokens: Tokens) {
  global.localStorage.setItem(`${tokenKey}jwt`, tokens.jwt);
  global.localStorage.setItem(`${tokenKey}refresh`, tokens.refreshToken);
}

export function clearTokens() {
  global.localStorage.removeItem(`${tokenKey}jwt`);
  global.localStorage.removeItem(`${tokenKey}refresh`);
}

export function getTokens(): Object {
  const jwt = global.localStorage.getItem(`${tokenKey}jwt`);
  const refreshToken = global.localStorage.getItem(`${tokenKey}refresh`);

  return { jwt, refreshToken };
}

export function decodeToken(jwtToken: string) {
  const decodedToken = jwtDecode(jwtToken);
  return decodedToken;
}

export function hasToken() {
  const jwt = global.localStorage.getItem(`${tokenKey}jwt`);
  if (jwt) {
    return true;
  }
  return false;
}
