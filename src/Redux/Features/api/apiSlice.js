import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:8000",
    credentials: "include",
  });
export const apiSlice = createApi({
    reducerPath: 'apiSlice',
    baseQuery,
    tagTypes: ['Product', 'company', 'SingleOrderAndDetails', 'CREATEDPI', 'ORDER', 'DeliveryMan'],
    endpoints: (builder) => ({
        // Company and Buyer Related Endpoints
        addCompany: builder.mutation({
            query: (companyInfo) => ({
                url: '/addCompany',
                method: 'POST',
                body: companyInfo
            }),
            invalidatesTags: ['company']

        }),
        getCompany: builder.query({
            query: () => '/companies',
            keepUnusedDataFor: 60,
            providesTags: ['company']
        }),
        getCompanyNames: builder.query({
            query: () => '/companyNames',
            keepUnusedDataFor: 60,
            providesTags: ['company']

        }),
        getBuyers: builder.query({
            query: () => '/buyers',
            keepUnusedDataFor: 600,
        }),
        //Product Related Endpoints
        addProduct: builder.mutation({
            query: (product) => ({
                url: '/addProducts/64161bb6a541e87d78c95b47',
                method: 'PUT',
                body: product,

            }),
            invalidatesTags: ['Product']
        }),
        deleteProduct: builder.mutation({
            query: (product) => ({
                url: `/products/64161bb6a541e87d78c95b47?productName=${product}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Product']
        }),
        getProducts: builder.query({
            query: () => '/products/64161bb6a541e87d78c95b47',
            providesTags: ['Product'],
            keepUnusedDataFor: 600
        }),
        // Order Related EndPoints
        addOrder: builder.mutation({

            query: (order) => ({
                url: '/addOrder',
                method: 'POST',
                body: order
            }),
            invalidatesTags: ['ORDER']

        }),
        //Single Order Related EndPoints
        getSingleOrder: builder.query({
            query: (id) => `/orderList/${id}`,
            keepUnusedDataFor: 600,
            providesTags: ['SingleOrderAndDetails']
        }),
        addDetailsInSingleOrder: builder.mutation({
            query: ({ details, _id }) => ({
                url: `/addTotalOrder/${_id}`,
                method: 'PUT',
                body: details
            }),
            invalidatesTags: ['SingleOrderAndDetails']
        }),
        addDeliveryAndUpdateOrders: builder.mutation({
            query: ({ id, deliveryDetails, patchedOrderInfo }) => ({
                url: `/updateOrder/${id}`,
                method: 'POST',
                body: { deliveryDetails, patchedOrderInfo }
            }),
            invalidatesTags: ['SingleOrderAndDetails']

        }),
        patchInSingleOrder: builder.mutation({
            query: ({ patchedOrderInfo, _id }) => ({
                url: `/addTotalOrder/${_id}`,
                method: 'PATCH',
                body: patchedOrderInfo
            }),
            invalidatesTags: ['SingleOrderAndDetails']
        }),
        //DELIVERY DETAILS ADDING
        addDelivery: builder.mutation({
            query: (deliveryInfo) => ({
                url: '/deliverDetail',
                method: 'POST',
                body: deliveryInfo
            }),

        }),
        //PATCH THE OLDER SIZES AND REST'S FROM THE ORDER
        patchOlderDataFromDeliveryWhenDelete: builder.mutation({
            query: ({ _id, orderId }) => ({
                url: `deleteDeliveryDetail?id=${_id}&postId=${orderId}`,
                method: 'PATCH',
            }),
            invalidatesTags: ['SingleOrderAndDetails']
        }),
        //DELETE DELIVERY
        deleteDelivery: builder.mutation({
            query: (_id) => ({
                url: `deleteDeliveryDetail?id=${_id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['SingleOrderAndDetails']
        }),
        deletingDelivery:builder.mutation({
            query: ({ _id, orderId }) => ({
                url: `deleteDelivery?id=${_id}&postId=${orderId}`,
                method: 'PATCH',
            }),
            invalidatesTags: ['SingleOrderAndDetails']
        }),
        //PI Related Endpoints
        getPI: builder.mutation({
            query: (selectedValue) => ({
                url: `/pi`,
                method: 'POST',
                body: selectedValue
            }),
            invalidatesTags: ['CREATEDPI']
        }),
        //GETTING DELIVERY STATEMENT
        getDeliveryStatement: builder.mutation({
            query: (selectedValue) => ({
                url: `/deliveryStatement`,
                method: 'POST',
                body: selectedValue

            })
        }),
        //Getting Tb List
        getPiList: builder.query({
            query: (url) => url,
            keepUnusedDataFor: 600,
            providesTags: ['CREATEDPI', 'ORDER']
            // providesTags:['company']
        }),
        //adding PI
        addPI: builder.mutation({
            query: (piState) => ({
                url: `/addPi`,
                method: 'POST',
                body: piState
            }),
            invalidatesTags: ['CREATEDPI']
        }),

        getProductSummary: builder.query({
            query: () => '/productSummary',
            keepUnusedDataFor: 600,
            // providesTags:['company']
        }),
        getCreatedPILists: builder.query({
            query: () => '/piList',
            keepUnusedDataFor: 600,
            providesTags: ['CREATEDPI']
        }),
        getSinglePiStatement: builder.query({
            query: (id) => `/piStatement/${id}`,
            providesTags: ['CREATEDPI']
        }),
        getDeliveryMan: builder.query({
            query: () => `/deliveryMan/64bb861c152398f7395f9268`,
            keepUnusedDataFor: 600,
            providesTags: ['DeliveryMan']

        }),
        addDeliveryMan: builder.mutation({
            query: (body) => ({
                url: '/deliveryMan/64bb861c152398f7395f9268',
                method: 'PATCH',
                body: body
            }),
            invalidatesTags: ['DeliveryMan']
        })
    }),

})
export const { useGetCompanyNamesQuery, useGetProductsQuery, useAddOrderMutation,
    useAddCompanyMutation, useGetBuyersQuery, useAddProductMutation, useDeleteProductMutation,
    useGetCompanyQuery, useAddDetailsInSingleOrderMutation, useGetPIMutation, useGetSingleOrderQuery,
    usePatchInSingleOrderMutation, useGetCreatedPIListsQuery, useGetSinglePiStatementQuery,
    useGetDeliveryStatementMutation, useGetDeliveryManQuery, useAddDeliveryManMutation, useGetProductSummaryQuery, useGetPiListQuery, useAddDeliveryMutation
    , usePatchOlderDataFromDeliveryWhenDeleteMutation, useDeletingDeliveryMutation,useAddDeliveryAndUpdateOrdersMutation, useAddPIMutation, useDeleteDeliveryMutation } = apiSlice










