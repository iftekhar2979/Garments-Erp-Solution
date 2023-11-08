import { createSlice } from "@reduxjs/toolkit"

const initialState={
    filteredState:'',
    page:0,
    isFiltered:false,
}
const orderListFilter = createSlice({
    name: 'orderListFilter',
    initialState,
    reducers: {
        filtering:(state,action)=>{
            state.filteredState=action.payload
            state.isFiltered=true
        },
        changingPage:(state,action)=>{
            state.pageNumber=action.payload
        }
    }
})
export default orderListFilter.reducer
export const {changingPage,filtering } = orderListFilter.actions