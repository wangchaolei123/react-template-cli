import { message } from 'antd';
import axios, { AxiosRequestConfig } from 'axios';

axios.interceptors.request.use((config) => {
  return {
    ...config,
    headers: {
      ...config?.headers,
      common: {
        ...config?.headers?.common,
        Authorization: `Bearer ${JSON.parse(<string>localStorage.getItem('ACCESS_TOKEN'))}`,
      },
    },
    params: {
      ...config?.params,
      timestamp: Date.now(),
    },
  };
});

axios.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    return response.data;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    if (error?.response) {
      let msg = '哎呀，发生了一个错误。';
      if (typeof error.response.data.message === 'string') {
        msg = error.response.data.message;
      } else if (typeof error.response.data.error === 'string') {
        msg = error.response.data.error;
        msg = '请求异常！';
      }
      message.error(msg);
    }

    if (error?.response?.status === 401) {
      // Go to log in;
    }

    return Promise.reject(error?.message);
  },
);

const restApi = {
  get: (url: string, config: AxiosRequestConfig | undefined) => {
    return axios.get(url, config);
  },
  delete: (url: string, config: AxiosRequestConfig | undefined) => {
    return axios.delete(url, config);
  },
  post: <T>(url: string, data: T, config?: AxiosRequestConfig | undefined) => {
    return axios.post(url, data, config);
  },
  put: <T>(url: string, data: T, config: AxiosRequestConfig | undefined) => {
    return axios.put(url, data, config);
  },
};

export default restApi;
