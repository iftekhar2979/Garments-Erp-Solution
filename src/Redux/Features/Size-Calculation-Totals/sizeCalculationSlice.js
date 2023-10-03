import { createSlice } from "@reduxjs/toolkit"
import { totalCount } from "../../../components/CustomHooks/totalCounting";
import { id } from "date-fns/locale";

const initialState = {
    id: '',
    colorName: '',
    sizeName: '',
    size: {
        XXS: 0,
        XS: 0,
        S: 0,
        L: 0,
        M: 0,
        XL: 0,
        XXL: 0,
        XXXL: 0,
        lwhSize: 0,
        singleInput: 0
    },
    deliverySize: {
        XXS: 0,
        XS: 0,
        S: 0,
        L: 0,
        M: 0,
        XL: 0,
        XXL: 0,
        XXXL: 0,
        lwhSize: 0,
        singleInput: 0

    },
    restSize: {
        XXS: 0,
        XS: 0,
        S: 0,
        L: 0,
        M: 0,
        XL: 0,
        XXL: 0,
        XXXL: 0,
        lwhSize: 0,
        singleInput: 0
    },
    totalQuantity: 0,
    deliveryQuantity: 0,
    restQuantity: 0,
    style: ''

}
const sizeCalculationSlice = createSlice({

    name: 'sizeCalculationSlice',
    initialState,
    reducers: {
        changeSize: (state, action) => {
            const { payload } = action
            const propertyNames = Object.keys(payload);

            if (propertyNames.length > 0) {
                state.size[propertyNames[0]]=parseFloat(payload[propertyNames[0]])
                
            }
        },
        restSizeChanging:(state,action)=>{
            const { payload } = action
            const propertyNames = Object.keys(payload);

            if (propertyNames.length > 0) {
                state.restSize[propertyNames[0]]=parseFloat(payload[propertyNames[0]])
                
            }
        },
        id_ColorName_SizeName_StyleChanging:(state,action)=>{
            const { payload:{color,style,size} } = action
            state.colorName=color
            state.style=style
            state.sizeName=size

        },
        idGenerator:(state,action)=>{
          
           state.id=action.payload.id

        },
        totalQuantityCalculation:(state,action)=>{
                state.totalQuantity=totalCount(state.size)
                state.restQuantity=totalCount(state.size)    
        }


    }
})
export default sizeCalculationSlice.reducer
export const { changeSize,restSizeChanging,id_ColorName_SizeName_StyleChanging,totalQuantityCalculation,idGenerator } = sizeCalculationSlice.actions