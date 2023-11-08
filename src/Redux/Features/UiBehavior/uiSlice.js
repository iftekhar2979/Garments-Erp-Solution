import { createSlice } from "@reduxjs/toolkit"

const initialState={
    tbArray:[]
}
const uiSlice=createSlice({
    name:'uiSlice',
    initialState,
    reducers:{
        findingTbArray:(state,action)=>{
            const {payload}=action
            state.tbArray=payload
        }
    }

})
export default uiSlice.reducer
export const {findingTbArray}=uiSlice.actions