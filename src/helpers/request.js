import Axios from 'axios';

export const request = (endpoint, options = { method: 'get' }) => {
  return Axios({
    url: `${endpoint}`,
    ...options,
  });
};
