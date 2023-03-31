
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

        return [
            ...state,
            action.payload
        ]
    }else if(action.type==='REMOVE_FROM_CONTEXT'){
        const filteredState=state?.filter(item=>item.id!==action.payload.id)
        return [
            ...filteredState
        ]
    }
}
