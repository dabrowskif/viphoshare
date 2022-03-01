import {
  applyMiddleware, combineReducers, compose, createStore,
} from 'redux';
import thunk from 'redux-thunk';

import files from './files';

const rootReducer = combineReducers({
  files,
});

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof store.getState>;

export default store;
