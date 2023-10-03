import { axiosInstance } from "../../../utils/axios"


export const getOrder=async(link)=>{
    const orders=await axiosInstance.get(link)
    return orders.data
}