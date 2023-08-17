import axios from 'axios';

export const httpInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 0,
  headers: {
    'X-GitHub-Api-Version': '2022-11-28',
  },
});
