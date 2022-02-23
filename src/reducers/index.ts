import {
  applyMiddleware, combineReducers, compose, createStore,
} from 'redux';
import thunk from 'redux-thunk';
import user from './user';

export type Action = {
    type: string,
    payload: Object,
}

const rootReducer = combineReducers({
  user,
});

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
