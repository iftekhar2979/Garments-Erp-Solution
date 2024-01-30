
import { apiSlice } from "./apiSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addPi: builder.mutation({
            query: (selectedValues) => ({
                url: '/pi',
                method: 'POST',
                body: selectedValues
            }),      
        }),
        }),
       
    })


export const { useAddPiMutation } = authApi;

// export const {useGetProductSummaryQuery,useAddDeliveryAndUpdateOrdersMutation}=summaryApiSlice