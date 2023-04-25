import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
});

export const requestData = async (endpoint) => {
  const response = await api.get(endpoint);
  return response;
};

export const postData = async (endpoint, data) => {
  const response = await api.post(endpoint, data);
  return response;
};

export const putData = async (endpoint, data) => {
  const response = await api.put(endpoint, data);
  return response;
};

export default api;