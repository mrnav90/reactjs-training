import {ACTION_TYPES} from 'constants';

export default (state = {}, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_LIST_PRODUCT_REQUESTED:
      return {
        ...state,
        isLoading: action.isLoading
      };
    case ACTION_TYPES.GET_LIST_PRODUCT_SUCCEEDED:
      return {
        ...state,
        data: action.data,
        isLoading: false,
        success: true
      };
    case ACTION_TYPES.GET_LIST_PRODUCT_FAILED:
      return {
        ...state,
        isLoading: false,
        success: false
      };
    default:
      return state;
  }
};
