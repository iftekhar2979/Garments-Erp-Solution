import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const summaryApiSlice = createApi({
    reducerPath: 'summaryApiSlice',
    baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:8000` }),
    endpoints: (builder) => ({

        getProductSummary: builder.query({
            query: () => '/productSummary',
            keepUnusedDataFor: 60,
        }),
    })
})
export const {useGetProductSummaryQuery}=summaryApiSlice