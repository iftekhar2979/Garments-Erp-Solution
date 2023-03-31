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
    size:{
        XS:0,
        SM:0,
        L:0,
        M:0,
        XL:0,
        XXL:0,
        XXXL:0

    },
    deliverySize:{
        XS:0,
        SM:0,
        L:0,
        M:0,
        XL:0,
        XXL:0,
        XXXL:0
    },
    restSize:{
        XS:0,
        SM:0,
        L:0,
        M:0,
        XL:0,
        XXL:0,
        XXXL:0
    },
    totalQuantity:0,
    deliveryQuantity:0,
    restQuantity:0,
    completedDate:'',
    style:''
}
export const contextState=[

]