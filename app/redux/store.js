import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';

import reducers from '../reducers';

const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);

const logger = createLogger({
})

const store = createStore(
  reducers,
  applyMiddleware(middleware, logger, promiseMiddleware()),
);

export default store;