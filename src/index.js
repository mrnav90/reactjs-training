import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'owl-carousel/owl-carousel/owl.carousel.css';

import 'masonry-layout';
import 'owl-carousel/owl-carousel/owl.carousel.js';
import 'Tweet/twitter/jquery.tweet.min.js';
import 'retinajs';

import 'styles/main.scss';
import 'styles/theme/script';

import React from 'react';
import ReactDOM from 'react-dom';
import routes from 'routes';
import {AppRoot} from 'components/Application';
import store from 'store';

ReactDOM.render((
  <AppRoot store={store} routes={routes}/>
), document.getElementById('app'));
