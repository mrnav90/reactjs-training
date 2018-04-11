import {Application} from 'components/Application';

import {
  HomePage
} from 'pages';

const routes = [
  {
    component: Application,
    routes: [
      {path: '/', exact: true, component: HomePage}
    ]
  }
];

export default routes;
