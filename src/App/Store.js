import { configureStore, createSerializableStateInvariantMiddleware, getDefaultMiddleware } from "@reduxjs/toolkit";
import piSlice from "../Redux/Features/pi/piSlice";
import singleOrder from "../Redux/Features/Single-Order/singleOrder";
import sizeCalculationSlice from "../Redux/Features/Size-Calculation-Totals/sizeCalculationSlice";
import orderDetails from "../Redux/Features/Order_Details/orderDetails";
import { apiSlice } from "../Redux/Features/api/apiSlice";
import deliverytable from "../Redux/Features/DELIVERY_TABLE/deliverytable";
import { summaryApiSlice } from "../Redux/Features/api/summaryApiSlice";
import uiSlice from "../Redux/Features/UiBehavior/uiSlice";
import orderListFilter from "../Redux/Features/orderListFilter/orderListFilter";
import deliveryStatementSlice from "../Redux/Features/DeliveryStatement/deliveryStatementSlice";
import userSlice from "../Redux/Features/api/Users/userSlice";
import refetchSlices from "../Redux/Features/RetchFunctions/refetchSlices";


export const store=configureStore({
    reducer:{
        pI:piSlice,
        singleOrder:singleOrder,
        sizeCalculation:sizeCalculationSlice,
        orderDetails:orderDetails,
        deliveryTable:deliverytable,
        uiSlice:uiSlice,
        refetching:refetchSlices,
        orderListFilter:orderListFilter,
        deliveryStatement:deliveryStatementSlice,
        [apiSlice.reducerPath]:apiSlice.reducer,
        user:userSlice
    },
   middleware:(getDefaultMiddleware)=>{
   return getDefaultMiddleware().concat(apiSlice.middleware)
   },
   devTools:false
})