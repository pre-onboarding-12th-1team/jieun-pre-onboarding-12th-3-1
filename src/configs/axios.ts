import axios from 'axios'

let production = false

export const axiosInstance = axios.create({
  baseURL: production ? '' : 'http://localhost:4000'
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)