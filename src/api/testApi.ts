import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: { 'Content-Type': 'application/json' },
});

export async function getUsers2() {
  const result: AxiosResponse = await instance.get('/users');
  return result;
}
