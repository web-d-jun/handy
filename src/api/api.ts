import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: { 'Content-Type': 'application/json' },
});

export async function getUsers2() {
  const result: AxiosResponse = await instance.get('/users');
  return result;
}

interface LoginInfo {
  id: string;
  pw: string;
}

interface ResponseData {
  state: string;
  accessToken: string;
  msg?: string;
}

const loginResponse = {
  postRes: (res: AxiosResponse<ResponseData>) => res.data,
};
export const loginApi = {
  post: async (loginInfo: LoginInfo) => instance.post('/login', loginInfo).then(loginResponse.postRes),
};
