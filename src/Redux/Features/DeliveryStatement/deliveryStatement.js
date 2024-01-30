import { apiSlice } from "../api/apiSlice";

const deliveryStatement=apiSlice.injectEndpoints({
    endpoints:(builder)=>({
       deliveryStatement:builder.mutation({
            query:(data)=>({
                url:'/deliveryStatement',
                method:'POST',
                body:data
            })
        })
    })
})
export const {useDeliveryStatementMutation}=deliveryStatement