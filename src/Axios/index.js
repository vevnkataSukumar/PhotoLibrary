import axios from 'axios';
import * as constants from '../constants';

// Axios Instance to make request for vehicle routes
export const AppUrl = axios.create({
  baseURL: constants.URL,
  timeout: 4500,
  headers: {
    Accept: 'application/json',
  },
  responseType: 'json',
});