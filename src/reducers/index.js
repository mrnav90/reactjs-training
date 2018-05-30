import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import product from './products';
import translation from './translation';

export default combineReducers({
  routing: routerReducer,
  i18n: translation,
  product
});
