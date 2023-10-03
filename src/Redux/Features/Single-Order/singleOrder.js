import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getOrder } from "./getOrder"

const initialState = {
    isLoading: false,
    singleOrderDetails: {},
    error: '',
    isError: false,

}
export const fetchSingleOrder = createAsyncThunk('fetchSingleOrder/order', async ({ id }) => {
    const order = await getOrder(`orderList/${id}`)
    return order
})
const singleOrder = createSlice({
    name: 'singleOrder',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchSingleOrder.pending, (state, action) => {
            state.isLoading = true
            state.isError = false
            state.error = ''
        })
            .addCase(fetchSingleOrder.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.singleOrderDetails = action.payload
                state.error = ''
            }).addCase(fetchSingleOrder.rejected, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.singleOrderDetails = {}
                state.error = action.payload
            })
    }
})
export default singleOrder.reducer