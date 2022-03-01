import axios, { AxiosResponse } from 'axios';

import { CustomFile } from '../ts/types';

// const API = axios.create({ baseURL: process.env.REACT_APP_SERVER_URL });
const API = axios.create({ baseURL: 'http://localhost:5000' });

export const uploadFile = (file: CustomFile): Promise<AxiosResponse> => {
  const customFileFormData = new FormData();
  customFileFormData.append('file', file.source);

  return API.post('/files/upload', customFileFormData, { headers: { 'Content-Type': 'multipart/form-data' } });
};
