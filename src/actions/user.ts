import { Dispatch } from 'redux';

import { UserSignUpData } from '../ts/types';

export const signUp = (formData: UserSignUpData, history: any) => async (dispatch: Dispatch) => {
  try {
    // const { data } = await api.signup(formData);
    // await dispatch(getCharacter(data?.result?._id, history));
    // dispatch({ type: SIGNIN, data });
  } catch (error) {
    throw new Error();
  }
};
