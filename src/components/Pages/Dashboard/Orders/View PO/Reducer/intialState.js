export const UidGenarate=()=>  
{  
   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {  
      var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);  
      return v.toString(16);  
   });  
}  
  
export const intialState={
    id:'',
    colorName:'',
    sizeName:'',
    size:{
        XXS:0,
        XS:0,
        S:0,
        L:0,
        M:0,
        XL:0,
        XXL:0,
        XXXL:0,
        lwhSize:0,
        singleInput:0

    },
    deliverySize:{
        XXS:0,
        XS:0,
        S:0,
        L:0,
        M:0,
        XL:0,
        XXL:0,
        XXXL:0,
        lwhSize:0,
        singleInput:0
        
    },
    restSize:{
        XXS:0,
        XS:0,
        S:0,
        L:0,
        M:0,
        XL:0,
        XXL:0,
        XXXL:0,
        lwhSize:0,
        singleInput:0
    },
    totalQuantity:0,
    deliveryQuantity:0,
    restQuantity:0,
    style:''
}
export const contextState=[]
export const detailTableContextState=[]
export const grandQuantityState={
    grandTotalQuantity:0,
    grandRestQuantity:0,
    grandDeliveryQuantity:0,
}
export const orderListState={
    companyName:'',
    location:'',
    buyerName:'',
    productName:'',
    quantityOrder:[],
    orderNumber:'',
    range:'',
    orderedDate:'',
    targetDate:new Date(),
    sizeSystem:'',
    sizeQuantities:''
}
export const intialOrderNumber={
    status:'',
    completeDate:'',
    adminNote:''
}
export const detailTableState={
    deliverySize:{
        XXS:0,
        XS:0,
        S:0,
        L:0,
        M:0,
        XL:0,
        XXL:0,
        XXXL:0,
        lwhSize:0,
        singleInput:0
        
    },
    oldrestSize:{
        XXS:0,
        XS:0,
        S:0,
        L:0,
        M:0,
        XL:0,
        XXL:0,
        XXXL:0,
        lwhSize:0,
        singleInput:0
    },
    restSize:{
        XXS:0,
        XS:0,
        SM:0,
        L:0,
        M:0,
        XL:0,
        XXL:0,
        XXXL:0,
        lwhSize:0,
        singleInput:0
    },
    size:{
        XXS:0,
        XS:0,
        SM:0,
        L:0,
        M:0,
        XL:0,
        XXL:0,
        XXXL:0,
        lwhSize:0,
        singleInput:0

    },
    totalQuantity:0,
    restQuantity:0,
    deliveryQuantity:0,
    style:'',
    id:'',
    colorName:'',
    sizeName:'',
}
export const detailTableGrandState={
    grandRestQuantity:0,
    grandDeliveryQuantity:0,
}