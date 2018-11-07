// @flow
import axios from 'axios';
import { requestUrls } from '../constant';
import { getTokens, saveTokens } from '../utils';

axios.defaults.baseURL = 'https://small-project-api.herokuapp.com';

export async function refreshToken() {
  try {
    const tokens = getTokens();
    const { url, method } = requestUrls.refreshToken;
    const { data } = await axios[method](url, { refresh_token: tokens.refreshToken });
    tokens.jwt = data.jwt;
    saveTokens(tokens);
    return true;
  } catch (error) {
    return false;
  }
}

export async function send(url: string, method: string, options?: Object) {
  try {
    const tokens = getTokens();
    axios.defaults.headers.common['x-access-token'] = tokens ? tokens.jwt : 'no-token';
    const response = await axios[method](url, options);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function makeReq(url: string, method: string, options?: Object) {
  try {
    const response = await send(url, method, options);
    return response;
  } catch (error) {
    if (error.response.status === 401) {
      const isSuccess = await refreshToken();
      if (isSuccess) {
        const response = await send(url, method, options);
        return response;
      }
    }
    throw error;
  }
}
