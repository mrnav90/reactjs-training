import {ACTION_TYPES} from 'constants';

export function requestGetProduct() {
  return {
    type: ACTION_TYPES.GET_LIST_PRODUCT_REQUESTED,
    isLoading: true
  };
}
