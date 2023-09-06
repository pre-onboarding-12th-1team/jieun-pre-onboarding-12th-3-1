import axios from 'axios'
import type { InternalAxiosRequestConfig } from 'axios'
import { setSessionStorage } from './sessionStorage';

let production = false

export const axiosInstance = axios.create({
  baseURL: production ? '' : 'http://localhost:4000'
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) => {
    console.info("calling api")

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)