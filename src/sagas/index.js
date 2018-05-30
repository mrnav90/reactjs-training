import {all} from 'redux-saga/effects';
import productRequest from './products';

export default function* rootSaga() {
  yield all([
    ...productRequest
  ]);
}
