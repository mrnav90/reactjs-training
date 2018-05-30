// import {createStore, applyMiddleware} from 'redux';
// import reduxThunk from 'redux-thunk';
// import rootReducer from 'reducers';

// const store = createStore(rootReducer, applyMiddleware(reduxThunk));

// export default store;

import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from 'reducers';
import {translationWithStore} from 'utils';
import rootSaga from 'sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

translationWithStore(store);
sagaMiddleware.run(rootSaga);

export default store;
