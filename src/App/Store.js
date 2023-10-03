import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import piSlice from "../Redux/Features/pi/piSlice";
import singleOrder from "../Redux/Features/Single-Order/singleOrder";
import sizeCalculationSlice from "../Redux/Features/Size-Calculation-Totals/sizeCalculationSlice";
import orderDetails from "../Redux/Features/Order_Details/orderDetails";
import { apiSlice } from "../Redux/Features/api/apiSlice";
import deliverytable from "../Redux/Features/DELIVERY_TABLE/deliverytable";
import { summaryApiSlice } from "../Redux/Features/api/summaryApiSlice";



export const store=configureStore({
    reducer:{
        pI:piSlice,
        singleOrder:singleOrder,
        sizeCalculation:sizeCalculationSlice,
        orderDetails:orderDetails,
        deliveryTable:deliverytable,
        [apiSlice.reducerPath]:apiSlice.reducer,
    },
   middleware:(getDefaultMiddleware)=>{
   return getDefaultMiddleware().concat(apiSlice.middleware)
   }
})