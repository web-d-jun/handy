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

interface MsgInterface {
  msg?: string;
}

interface TokenResponse extends MsgInterface {
  state: string;
  accessToken: string;
}

const loginResponse = {
  postRes: (res: AxiosResponse<TokenResponse>) => res.data,
};
export const loginApi = {
  post: async (loginInfo: LoginInfo) => instance.post('/login', loginInfo).then(loginResponse.postRes),
};
