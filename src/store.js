import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import { promiseMiddleware } from 'promise-middleware-redux';

// eslint-disable-next-line no-undef
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(promiseMiddleware)
  )
);
