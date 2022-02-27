import axios from 'axios';
import { UserSignUpData, UserSignInData } from '../ts/types';

const API = axios.create({ baseURL: process.env.REACT_APP_SERVER_URL });

export const signin = (formData: UserSignInData) => API.post('/user/signin', formData);
export const signup = (formData: UserSignUpData) => API.post('/user/signup', formData);
