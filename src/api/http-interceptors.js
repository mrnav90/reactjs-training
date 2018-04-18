import axios from 'axios';
import {REQUEST_HEADER} from 'constants';

const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLmJhb25nb2NzdG9yZS5jb20vdjEvYXV0aC9sb2dpbiIsImlhdCI6MTUyNDA0MzI1OCwiZXhwIjoxNTI0MTI5NjU4LCJuYmYiOjE1MjQwNDMyNTgsImp0aSI6ImtQZUZZblA0eW50a21vMXkiLCJzdWIiOjIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.FmvrLHsWBzclNXMuUkch2bALJ3YzOpyRDK84rg9UyO8';

axios.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${accessToken}`;
  Object.assign(config.headers, REQUEST_HEADER);
  return config;
}, (error) => {
  return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
  return response.data.data;
}, (error) => {
  const statusCode = error.response.status;
  switch (statusCode) {
    case 401: break;
    case 403: break;
    case 404: break;
    case 500: break;
    default: break;
  }
  return Promise.reject(error.response.data);
});
