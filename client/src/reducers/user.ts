import { AnyAction } from 'redux';
import { SIGNUP, LOGOUT, SIGNIN } from '../constants/actionTypes';

type InitialState = { authenticationData: null };

const user = (state: InitialState = { authenticationData: null }, action: AnyAction): InitialState => {
  switch (action.type) {
    case SIGNIN:
      return state;
    case SIGNUP:
      return state;
    case LOGOUT:
      return state;
    default:
      return state;
  }
};

export default user;
