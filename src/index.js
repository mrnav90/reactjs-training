import React from 'react';
import ReactDOM from 'react-dom';
import routes from 'routes';
import {AppRoot} from 'components/Application';
import store from 'store';

ReactDOM.render((
  <AppRoot store={store} routes={routes}/>
), document.getElementById('app'));
