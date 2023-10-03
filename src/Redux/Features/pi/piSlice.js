import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    companyName: '',
    piNumber: '',
    piValue: [],
    tbNumbers: [],
    createdAt: '',
    totalAmount:0,
    totalQuantity:0,
    cleared:false
}
const piSlice = createSlice({
    name: 'piSlice',
    initialState,
    reducers: {
        addPi: (state, action) => {
            let { piValue } = state
            const alreadyExist = piValue?.some((singleProduct) => singleProduct.productName === action.payload.productName);
            if (!alreadyExist) {
                piValue.push(action.payload)
            } else {
                const indexOfProductName = piValue.findIndex((singleProduct) => singleProduct.productName === action.payload.productName);
                piValue[indexOfProductName] = action.payload
            }
            //immutable filter 
            function mutableFilter(arr, condition) {
                for (let i = arr.length - 1; i >= 0; i--) {
                    if (!condition(arr[i])) {
                        arr.splice(i, 1); // Remove the element at index i
                    }
                }
            }
            //delete the product which perpics is equal to 0;
            mutableFilter(piValue, (item) => item.perPics !== 0)
        },
        addCompanyName: (state, action) => {
            const {companyName,shortForm}=action.payload
            state.companyName=companyName
            
        
            const currentDate = new Date();
        
            function getCurrentTimestamp () {
                return Date.now()
              }
            const date = new Date();
            let year = date.getFullYear();
            state.piNumber = `ABC-${shortForm}-${getCurrentTimestamp()}/${year}`
        },
        addTBNumbersAndDates: (state, action) => {
           
            state.tbNumbers = action.payload
            const currentDate = new Date();
            const serializedDate = currentDate.toISOString(); 
            state.createdAt=serializedDate
        },
        totalQuantityCounting:(state,action)=>{
            state.totalAmount=state.piValue?.reduce((acc,cur)=>{
                return acc+cur?.amount
            },0)
            state.totalQuantity=state.piValue?.reduce((acc,cur)=>{
                return acc+cur?.totalQuantity
            },0)    
        },
        clearingState: (state) => {
                state.cleared=true
                state.companyName = '';
                state.piNumber = '';
                state.piValue = [];
                state.tbNumbers = [];
                state.createdAt = '';
                state.totalAmount=0;
                state.totalQuantity=0
        }
    }
})
export default piSlice.reducer
export const { addPi, addCompanyName, addTBNumbersAndDates ,clearingState,totalQuantityCounting} = piSlice.actions