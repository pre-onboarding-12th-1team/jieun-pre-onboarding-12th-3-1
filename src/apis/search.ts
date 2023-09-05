import { axiosInstance } from 'configs/axios'

export const getSick = async (keyword: string) => {
  if(!keyword) return []

  return axiosInstance.get(`/sick?q=${keyword}`) 
}