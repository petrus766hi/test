import Axios from 'axios';
import AppConfig from '../config/config';
import token from '../config/token'

export const api = Axios.create({
  baseURL: AppConfig.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token.token}`,
  },
});

export const get = async (url, isAuthenticated = false, tokens) => {
  if (isAuthenticated) {
    const token = `Bearer ${tokens}`;
    api.defaults.headers.common['Authorization'] = token;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
  return api.get(url);
};

export const post = async (url, data = {}, isAuthenticated = false , tokens) => {
   const token = `Bearer ${tokens}`;
  if (isAuthenticated) {
    api.defaults.headers.common['Authorization'] = token;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }

  return api.post(url, data);
};

export const put = async (url, data, isAuthenticated = false, tokens) => {
   const token = `Bearer ${tokens}`;
  if (isAuthenticated) {
    const token = await AsyncStorage.getItem('user_token');
      api.defaults.headers.common['Authorization'] = token;
  } else {
    delete api.defaults.headers.common.Authorization;
  }

  return api.put(url, data);
};