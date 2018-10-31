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
  USER_AUTH: '@@user/auth',
  FETCH_USER_DATA: '@@user/fetchData',
  API_REQUEST_PENDING: '@@api/pending',
  API_REQUEST_SUCCESS: '@@api/success',
  API_REQUEST_FAIL: '@@api/fail',
  APP_INITIALIZE: '@@app/initialize',
};

export const requestUrls = {
  refreshToken: { url: '/access-tokens/refresh', method: 'post' },
  login: { url: '/access-tokens', method: 'post' },
  logout: { url: '/access-tokens', method: 'delete' },
  signup: { url: '/users', method: 'post' },
  userDetails: { url: '/me', method: 'get' },
  createIdeas: { url: '/ideas', method: 'post' },
  fetchIdeas: { url: '/ideas', method: 'get' },
  getDeleteIdeasUrl: { url: (id: string) => `/ideas/${id}`, method: 'delete' },
  getUpdateIdeasUrl: { url: (id: string) => `/ideas/${id}`, method: 'put' },
};

export const tokenKey = 'I_TOKENS_APP';
