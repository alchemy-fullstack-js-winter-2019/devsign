import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers/tweets';
import { promiseMiddleware } from 'promise-middleware-redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE_ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(promiseMiddleware))
);

export default store;
