import { axiosInstance } from 'configs/axios'

export const getSick = async (keyword: string) => {
  if(!keyword) return []

  const params = {sickNm_like: keyword}
  return axiosInstance.get(`/sick`, {params}) 
}