import 'bootstrap';
// import 'libs/font-awesome.min.css';
// import 'libs/owl.carousel.css';

// import 'libs/jquery.owl.carousel.js';
// import 'libs/jquery.tweet.min.js';
// import 'libs/masonry.pkgd.min.js';
// import 'libs/retina.min.js';

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
