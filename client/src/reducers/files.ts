import { AnyAction } from 'redux';
import { UPLOAD } from '../constants/actionTypes';

type InitialState = { lastUploadedFileURL: null };

const files = (state: InitialState = { lastUploadedFileURL: null }, action: AnyAction): InitialState => {
  switch (action.type) {
    case UPLOAD:
      return { ...state, lastUploadedFileURL: action.payload };
    default:
      return state;
  }
};

export default files;
