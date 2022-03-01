import { Dispatch } from 'redux';

import { CustomFile } from '../ts/types';
import * as API from '../api';
import { UPLOAD } from '../constants/actionTypes';

export const uploadFile = (file: CustomFile) => async (dispatch: Dispatch) => {
  try {
    const { data } = await API.uploadFile(file);
    dispatch({ type: UPLOAD, payload: data.result });
  } catch (error) {
    throw Error(error.message);
  }
};
