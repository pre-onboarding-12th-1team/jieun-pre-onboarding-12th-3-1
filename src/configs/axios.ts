import type { InternalAxiosRequestConfig } from 'axios';
import axios from 'axios';

let production = false

export const axiosInstance = axios.create({
  baseURL: production ? '' : 'http://localhost:4000',
  headers: {
    //'Cache-Control': 'max-age=3600'
  },
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) => {
    const { url } = config
    const cacheName = 'api' + url
    console.log(url, typeof url)

    caches.open(cacheName).then((cache) => { 
      cache.match(JSON.stringify(url)).then((settings) => {
        console.log(settings)
      })
    })

    caches.keys().then((keys) => {
      if(!keys)
      console.info("calling api")
    })

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response) => {
    const { config, data } = response
    const url: any = config.url
    const cacheName = 'api' + url

    caches.open(cacheName).then((cache) => { 
      cache.put(url, new Response(data))
    })

    return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)