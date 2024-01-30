import { createSlice } from "@reduxjs/toolkit"
import { grandTotalQuantity, totalCount } from "../../../components/CustomHooks/totalCounting";

const initialState = {
  deliveryStatment:[]
}
const deliveryStatement = createSlice({

    name: 'deliveryStatement',
    initialState,
    reducers: {
        deliveryStatementDetails:(state,action)=>{
            
            state.deliveryStatment=action.payload
        }
    }
})
export default deliveryStatement.reducer
export const {  deliveryStatementDetails} = deliveryStatement.actions