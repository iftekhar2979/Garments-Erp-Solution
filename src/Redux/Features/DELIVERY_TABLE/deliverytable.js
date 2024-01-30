import { createSlice } from "@reduxjs/toolkit"
import { totalCount } from "../../../components/CustomHooks/totalCounting";
import { deliveryStyleId } from "date-fns/locale";

const initialState = {
    details: [
       
    ],
    grandTotalQuantity: 0,
    grandDeliveryQuantity:0,
    grandRestQuantity: 0,
}
const deliverySizeCalculation = createSlice({

    name: 'deliverySizeCalculation',
    initialState,
    reducers: {
        pushingDetailOfDeliveryOrder: (state, action) => {
            // console.log(action.payload)
            let { details } = state
            const alreadyExist = details?.some((singleDetail) => singleDetail.deliveryStyleId === action.payload.deliveryStyleId);
            // console.log(alreadyExist)
            if (!alreadyExist && action.payload) {
            details.push(action.payload)
            } else {
                const indexOfProductName = details.findIndex((singleDetail) => singleDetail.deliveryStyleId === action.payload.deliveryStyleId);
                details[indexOfProductName] = action.payload
            }    
        },
        calculateGrandDeliveryAndRestTotal: (state, action) => {
            let { details=[] } = state
            // immutable filter 
            // function mutableFilter(arr, condition) {
            //     for (let i = arr.length - 1; i >= 0; i--) {
            //         if (!condition(arr[i])) {
            //             arr.splice(i, 1); // Remove the element at index i
            //         }
            //     }
            // }
            // //delete the product which perpics is equal to 0;
            // mutableFilter(details, (item) => item?.deliveryQuantity !== 0)
    
            state.grandDeliveryQuantity = details?.reduce((acc, cur) => {

                return acc + cur?.deliveryQuantity
            }, 0)

            state.grandRestQuantity = details?.reduce((acc, cur) => {
            
                return acc + cur?.restQuantity
            }, 0)
           
        },
        clearingDeliveryState: (state, action) => {
            state.details = [
            ]
            state.grandDeliveryQuantity=0
            state.grandTotalQuantity = 0
            state.grandRestQuantity = 0
        }

    }
})
export default deliverySizeCalculation.reducer
export const {pushingDetailOfDeliveryOrder,calculateGrandDeliveryAndRestTotal,clearingDeliveryState } = deliverySizeCalculation.actions