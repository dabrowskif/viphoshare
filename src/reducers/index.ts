import {
  applyMiddleware, combineReducers, compose, createStore,
} from 'redux';
import thunk from 'redux-thunk';

import user from './user';

const rootReducer = combineReducers({
  user,
});

export default createStore(rootReducer, compose(applyMiddleware(thunk)));
