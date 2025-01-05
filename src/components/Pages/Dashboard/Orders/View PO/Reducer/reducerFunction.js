<<<<<<< HEAD
import { act } from "react-dom/test-utils"
import { detailTableState, intialState } from "./intialState"

export const reducerFunction = (state, action) => {   
    if (action.type === 'SIZECHANGES') {
        return {
            ...state,
            size: {
                ...state.size,
                [action.property]: action[action.property],

            },
            totalQuantity: state.totalQuantity

        }
    } else if (action.type === 'DELIVERYSIZECHANGES') {
        return {
            ...state,
            deliverySize: {
                ...state.deliverySize,
                [action.property]: action[action.property],
            },
            deliveryQuantity: state.deliveryQty,
            restQuantity: state.restQuantity,

        }
    } else if (action.type === 'COLOR_NAME') {
        return {
            ...state,
            colorName: action[action.property],
            poNumber:action.payload

        }
    }else if(action.type==='SIZE_NAME') {
        return {
            ...state,
            sizeName:action[action.property]
        }
    }
    else if (action.type === 'ADMIN_NOTE') {
        return {
            ...state,
            [action.property]: action[action.property]
        }
    } else if (action.type === 'STYLE') {
        return {
            ...state,
            style: action?.payload,
            deliveryStyleId:action?._id
        }
    } else if (action.type === 'SIZE_CHANGE_LWH') {
        // console.log(action)
        return {
            ...state,
            totalQuantity: state.totalQuantity
        }
    }
    else if(action.type==='EMPTY_COLOR_STATE'){
        
        return {
            ...intialState
        }
    }
}
export const contextReducer = (state, action) => {

    if (action.type === 'ADD_ON_CONTEXT') {
        return [
            ...state,
            action.payload
        ]
    } else if (action.type === 'REMOVE_FROM_CONTEXT') {
        const filteredState = state?.filter(item => item.id !== action.payload.id)

        return [
            ...filteredState
        ]
    }
}
export const addOrderReducer = (state, action) => {
    const actionType = action.type
    if (actionType === 'COMPANY_NAME') {
console.log('form',action.payload)
        return {
            ...state,
            ...action.payload
        }
    } else if (actionType === 'BUYER_NAME') {
        return {
            ...state,
            buyerName: action.buyerName
        }
    } else if (actionType === 'PRODUCT_NAME') {
        return {
            ...state,
            productName: action.productName
        }
    } else if (actionType === 'TARGET_DATE') {
        return {
            ...state,
            targetDate: action.targetDate
        }
    } else if (actionType === 'QUANTITY_ORDER_STYLE') {
        return {
            ...state,
            quantityOrder: [...action.payload]
        }
       

    } 
   
    else if (actionType === 'QUANTITY_ORDER_DELETE') {
        return {
            ...state,
            quantityOrder: [...action.payload]
        }
    }

    else if (actionType === 'ORDER_NUMBER') {
        return {
            ...state,
            orderNumber: action.orderNumber,
        }
        
    } 
     else if(actionType ==='Season'){
        return  {
            ...state,
            season: action.season
        }
    }
    else if (actionType === 'RANGE') {
        return {
            ...state,
            range: action.range,
        }
    } else if (actionType === 'DATE') {
        return {
            ...state,
            orderedDate: action.orderedDate,
            targetDate: action.targetDate
        }
    } else if (actionType === 'SIZE_SYSTEM') {
        return {
            ...state,
            sizeSystem: action.item
        }
    } else if (actionType === 'SIZE_QUANTITIES') {
        const { name } = action
        return {
            ...state,
            sizeQuantities: parseFloat(action[name])
        }
    } else if (actionType === 'EMPTY_STATE') {
        return {
            ...action.payload
        }
    }else if (actionType === 'CARTOON_STICKER') {
        return {
            ...state,
            cartoonSticker:action.payload
        }
    }else if(actionType==='TB_NUMBER'){
        return {
            ...state,
            tbNumber:action.tbNumber
        }
    }
}
export const grandReducer = (state, action) => {
    const actionType = action.type
    if (actionType === 'TOTAL_DEL_REST') {
        const { total, delivery, rest } = action.payload
        return {
            ...state,
            grandTotalQuantity: total,
            grandRestQuantity: rest,
            grandDeliveryQuantity: delivery
        }
    } else if (actionType === 'grand_change') {
    }
}
export const singleStateFunction = (state, action) => {
    if (action.type === 'single-size-change') {

        return {
            ...state,
            orderedQuantity: action.total,
            restQuantity: action.rest
        }
    } else if (action.type === 'single_deliverySize_change') {

        // const {orderedQuantity}=state
        // console.log('del', action.payload)
        // console.log('sub',state.orderedQuantity)
        return {
            ...state,
            deliveryQuantity: action.payload,
            restQuantity: state.orderedQuantity - this.deliveryQuantity
        }
    }
}
export const orderNumberFunction = (state, action) => {
    if (action.type === 'STATUS') {
        return {
            ...state,
            [action.property]: action[action.property]
        }
    } else if (action.type === 'COMPLETED_DATE') {
        return {
            ...state,
            completeDate: action.payload
        }
    } else if (action.type === 'ADMIN_NOTE') {
        return {
            ...state,
            [action.property]: action[action.property]
        }
    }
}
export const detailTableFunction = (state, action) => {
    if (action.type === 'DELIVERY_CHANGES') {

        // console.log(action)
        return {
            ...state,
            deliverySize: {
                ...state.deliverySize,
                [action.name]: action[action.name],
            },
            id: action.id

        }
    } else if (action.type === 'REST_CHANGES') {
        const { payload } = action
        return {
            ...state,
            oldrestSize: {
                ...state.oldrestSize,
                ...payload
            }
        }
    }
    else if (action.type === 'SIZE_CHANGES') {
        const { payload, totalQuantity } = action
        return {
            ...state,
            size: {
                ...state.oldrestSize,
                ...payload
            },
            totalQuantity: totalQuantity
        }
    } else if (action.type === 'COLOR_AND_STYLE_CHANGES') {
        const { sizeName,colorName, style,_id } = action
        return {
            ...state,
            sizeName:sizeName,
            colorName: colorName,
            style: style,
            deliveryStyleId:_id
        }
    }else if(action.type==='EMPTY_DETAIL_TABLE'){
        return {
            ...state,
            deliveryQuantity:0,
            deliverySize: {
                ...detailTableState.deliverySize
            },
        }
    }
}
export const detailContextFunction = (state, action) => {
    if (action.type === 'COUNT_DETAIL_TABLE_DELIVERY_QUANTITY') {
=======

export const reducerFunction=(state,action)=>{
    // console.log('state',state)
    if(action.type==='SIZECHANGES'){
        return {
            ...state,
            size:{
                ...state.size,
                [action.property]:action[action.property],
            
            },
          
            totalQuantity:state.totalQuantity
            
        }
    }else if(action.type==='DELIVERYSIZECHANGES'){
       
      
        return {
            ...state,
            deliverySize:{
                ...state.deliverySize,
                [action.property]:action[action.property],
            },
            deliveryQuantity:state.deliveryQty,
            restQuantity:state.restQuantity,
           
        }
    }else if(action.type==='COLOR_NAME'){
        return{
            ...state,
            colorName:action[action.property]
        }
    }else if(action.type==='ADMIN_NOTE'){
        return{
            ...state,
            [action.property]:action[action.property]
        }
    }else if(action.type==='STATUS'){
        return {
            ...state,
            [action.property]:action[action.property]
        }
    }else if(action.type==='COMPLETE_DATE'){
        return {
            ...state,
            completedDate:action?.payload
        }
    }else if(action.type==='STYLE'){
        return {
            ...state,
            style:action?.payload
        }
    }
}
export const contextReducer=(state,action)=>{
    // console.log(state)
    // console.log(action)
    if(action.type==='ADD_ON_CONTEXT'){

>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
        return [
            ...state,
            action.payload
        ]
<<<<<<< HEAD
    } else if (action.type === 'REMOVE_DETAIL_TABLE_DELIVERY_QUANTITY') {
        const filteredState = state?.filter(item => item.id !== action.payload.id)

        return [
            ...filteredState
        ]
    }else if(action.type==='EMPTY_DETAIL_CONTEXT'){
        return [
            ...action.payload
        ]
    }

}
export const detailTableGrandFunction = (state, action) => {
    const actionType = action.type
    if (actionType === 'TOTAL_DEL_REST') {
        const { delivery, rest, total } = action.payload
        return {
            ...state,
            grandTotalQuantity: total,
            grandRestQuantity: rest,
            grandDeliveryQuantity: delivery
        }
    } else if (actionType === '') {
        // console.log(action.payload)
      
    }
}
=======
    }else if(action.type==='REMOVE_FROM_CONTEXT'){
        const filteredState=state?.filter(item=>item.id!==action.payload.id)
        return [
            ...filteredState
        ]
    }
}
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
