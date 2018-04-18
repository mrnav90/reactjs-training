import reduxAPI from 'redux-api';
import axiosRequest from './axios';

export default reduxAPI({
  list: {
    url: 'products',
    options: {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  }
}).use('fetch', axiosRequest).use('rootUrl', API_URL);
