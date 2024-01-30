import { createSlice } from "@reduxjs/toolkit"
import { grandTotalQuantity, totalCount } from "../../../components/CustomHooks/totalCounting";

const initialState = {
    details: [

    ],
    grandTotalQuantity: 0,
    grandRestQuantity: 0,


}
const orderDetails = createSlice({

    name: 'orderDetails',
    initialState,
    reducers: {

        pushSingleDetailsOfOrderDetails: (state, action) => {
            let { details } = state
            const alreadyExist = details?.some((singleProduct) => singleProduct?.id === action.payload?.id);
            if (!alreadyExist && action.payload) {
                details.push(action.payload)
            } else {
                const indexOfProductName = details.findIndex((singleProduct) => singleProduct?.id === action.payload?.id);
                details[indexOfProductName] = action.payload
            }
        },
        calculateGrandTotalAndRestTotal: (state, action) => {
            let { details } = state
            // immutable filter 
            function mutableFilter(arr, condition) {
                for (let i = arr.length - 1; i >= 0; i--) {
                    if (!condition(arr[i])) {
                        arr.splice(i, 1); // Remove the element at index i
                    }
                }
            }
            //delete the product which perpics is equal to 0;
            mutableFilter(details, (item) => item.totalQuantity !== 0)
            // console.log(state.details)
            state.grandRestQuantity = details?.reduce((acc, cur) => {
             
                return acc + cur?.totalQuantity
            }, 0)
          
            state.grandTotalQuantity = details?.reduce((acc, cur) => {
                return acc + cur?.totalQuantity
            }, 0)

        },
        clearingState: (state, action) => {
            state.details = [

            ]
            state.grandTotalQuantity = 0
            state.grandRestQuantity = 0
        }

    }
})
export default orderDetails.reducer
export const { pushSingleDetailsOfOrderDetails, calculateGrandTotalAndRestTotal, clearingState } = orderDetails.actions