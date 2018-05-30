import {call, put, takeEvery, fork} from 'redux-saga/effects';
import {Products} from 'api';
import {ACTION_TYPES} from 'constants';

function* requestGetProduct() {
  try {
    const response = yield call(Products.actions.list.request);
    yield put({
      type: ACTION_TYPES.GET_LIST_PRODUCT_SUCCEEDED,
      data: response.data
    });
  } catch (e) {
    yield put({type: ACTION_TYPES.GET_LIST_PRODUCT_FAILED, message: e.message});
  }
}

function* watchListProduct() {
  yield takeEvery(ACTION_TYPES.GET_LIST_PRODUCT_REQUESTED, requestGetProduct);
}

export default [
  fork(watchListProduct)
];
