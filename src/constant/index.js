// @flow
export const scoreRange: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const defaultIdea = {
  content: '',
  id: '',
  impact: 10,
  ease: 10,
  confidence: 10,
  averageScore: 10.0,
};

export const routes = {
  login: '/login',
  signup: '/signup',
  ideas: '/ideas',
  home: '/',
};

export const actionTypes = {
  SIGN_UP_USER: '@@user/signUp',
  LOGIN_USER: '@@user/login',
  LOGOUT_USER: '@@user/logout',
  SET_USER_DATA: '@@user/setData',
  CLEAR_USER_DATA: '@@user/clearData',
  USER_AUTH: '@@user/auth',
  FETCH_USER_DATA: '@@user/fetchData',
  APP_INITIALIZE: '@@app/initialize',
  SET_IDEAS: '@@idea/set',
  CREATE_IDEA: '@@idea/create',
  UPDATE_IDEA: '@@idea/update',
  DELETE_IDEA: '@@idea/delete',
  GET_IDEAS: '@@idea/getAll',
  API_REQUEST_PENDING: '@@api/pending',
  API_REQUEST_DONE: '@@api/done',
  API_REQUEST_FAIL: '@@api/fail',
};

export const requestUrls = {
  refreshToken: { url: '/access-tokens/refresh', method: 'post' },
  login: { url: '/access-tokens', method: 'post' },
  logout: { url: '/access-tokens', method: 'delete' },
  signup: { url: '/users', method: 'post' },
  userDetails: { url: '/me', method: 'get' },
  createIdeas: { url: '/ideas', method: 'post' },
  fetchIdeas: { url: '/ideas', method: 'get' },
  getDeleteIdeasUrl: (id: string) => ({ url: `/ideas/${id}`, method: 'delete' }),
  getUpdateIdeasUrl: (id: string) => ({ url: `/ideas/${id}`, method: 'put' }),
};

export const warningMessageType = 'warning';
export const successMessageType = 'success';
export const infoMessageType = 'info';
export const errorMessageType = 'error';
export const defaultErrorMessage = 'Operation was unsuccessful';

export const tokenKey = 'I_TOKENS_APP';
