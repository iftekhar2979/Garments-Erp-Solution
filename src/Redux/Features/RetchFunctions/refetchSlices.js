import { createSlice } from "@reduxjs/toolkit"

const initialState={
    
}
const refetchingSlice=createSlice({
    name:'refetchingSlice',
    initialState,
    reducers:{
        reFetchingOrder:(state,action)=>{
            const {payload}=action
            state.refetchOrder=payload
        }
    }

})
export default refetchingSlice.reducer
export const {reFetchingOrder}=refetchingSlice.actions