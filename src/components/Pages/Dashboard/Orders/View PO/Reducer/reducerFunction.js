
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
    }
}