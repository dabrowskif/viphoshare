import { SIGNUP, LOGOUT, SIGNIN } from '../constants/actionTypes';
import { Action } from './index';

const user = (state = { authenticationData: null }, action: Action) => {
  switch (action.type) {
    case SIGNIN:
      console.log(action.payload);
      return state;
    case SIGNUP:
      console.log(action.payload);
      return state;
    case LOGOUT:
      console.log(action.payload);
      return state;
    default:
      throw new Error();
  }
};

export default user;
