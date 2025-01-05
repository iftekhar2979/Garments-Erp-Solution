<<<<<<< HEAD
import { createContext, useEffect, useReducer, useState } from 'react';
import { UidGenarate, contextState, detailTableContextState, detailTableGrandState, grandQuantityState } from '../Pages/Dashboard/Orders/View PO/Reducer/intialState';
import { contextReducer, detailContextFunction, detailTableGrandFunction, grandReducer } from '../Pages/Dashboard/Orders/View PO/Reducer/reducerFunction';
export const ViewContextProvider = createContext(null);

const tableHeadingsFull = [
  {
    id: UidGenarate(),
    heading: 'COLOR',
    class: 'border w-24 text-center',
  },
  {
    id:  UidGenarate(),
    heading: 'TOTAL QUANTITY',
    class: 'border w-24 text-center',
  },

  {
    id:  UidGenarate(),
    heading: 'REST QUANTITY',
    class: 'border  w-24 text-center',
  },


];
const tableDetailHeading = [
  {
    id:  UidGenarate(),
    heading: 'STYLE',
    class: 'border w-24 text-center',
  },
  {
    id:  UidGenarate(),
    heading: 'COLOR',
    class: 'border w-24 text-center',
  },
  {
    id:  UidGenarate(),
    heading: 'TOTAL QUANTITY',
    class: 'border w-24 text-center',
  },
  {
    id:  UidGenarate(),
    heading: 'DELIVERY QUANTITY',
    class: 'border  w-24 text-center',
  },
  {
    id:  UidGenarate(),
    heading: 'REST QUANTITY',
    class: 'border  w-24 text-center',
  },


];
const lwhHeading = [
  {
    id:  UidGenarate(),
    heading: 'Size',
    class: 'border w-24',
  },
  {
    id:  UidGenarate(),
    heading: 'Order Quantity',
    class: 'border w-24',
  },

  {
    id:  UidGenarate(),
    heading: 'Rest QTY',
    class: 'border  w-24',
  },


]
const lwhHeadingDetailTable = [
  {
    id:  UidGenarate(),
    heading: 'Style',
    class: 'border w-24',
  },
  {
    id:  UidGenarate(),
    heading: 'Size',
    class: 'border w-24',
  },
  {
    id:  UidGenarate(),
    heading: 'Ord. Quantity',
    class: 'border w-24',
  },
  {
    id:  UidGenarate(),
    heading: 'Del. QTY',
    class: 'border  w-24',
  },
  {
    id:  UidGenarate(),
    heading: 'Rest. QTY',
    class: 'border  w-24',
  },


]
let sizes = ['XXS','XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
const status = ['Ordered', 'Pending', 'Completed', 'Canceled'];
const ViewContext = ({ children }) => {
  const [poState, setPoState] = useState()
  const [action,setAction]=useState(false)
  const [context, contextDispatch] = useReducer(contextReducer, contextState)
  const [grandTotal, grandDispatch] = useReducer(grandReducer, grandQuantityState)
  const [detailTableContext, detailContextDispatch] = useReducer(detailContextFunction,detailTableContextState)
 const [detailTableGrandTotal,detailTableGrandDispatch]=useReducer(detailTableGrandFunction,detailTableGrandState)
  const [sizeName, setsizeName] = useState([])


  useEffect(() => {
   
    if (poState?.sizeSystem === "L-W-H") {
      setsizeName(['lwhSize'])
    } else if (poState?.sizeSystem === 'SINGLE-INPUT') {
      setsizeName(['singleInput'])
    } else {
      setsizeName(sizes)
    }
  }, [poState?.sizeSystem, setsizeName,])
  // console.log(poState)
  useEffect(() => {
    const totals = context?.reduce((prev, cur) => {
      return prev + cur.totalQuantity
    }, 0)
    const delivery = context?.reduce((prev, cur) => {
      return prev + cur.deliveryQuantity
    }, 0)
    const rest = context?.reduce((prev, cur) => {
      return prev + cur.restQuantity
    }, 0)
    const grandTotal = { total: totals, delivery: delivery, rest: rest }
    grandDispatch({ type: 'TOTAL_DEL_REST', payload: grandTotal })

  }, [grandDispatch, context]) 

  useEffect(() => {
    const delivery = detailTableContext?.reduce((prev, cur) => {
      return prev + cur.deliveryQuantity
    }, 0)
    const rest = detailTableContext?.reduce((prev, cur) => {
      return prev + cur.restQuantity
    }, 0)
    const grandTotal = {  delivery: delivery, rest: rest,total:poState?.grandTotalQuantity }
    detailTableGrandDispatch({ type: 'TOTAL_DEL_REST', payload: grandTotal })
   

  }, [detailTableGrandDispatch, detailTableContext])
  const obj = { poState, setPoState, context,detailTableGrandTotal,setAction,action, contextDispatch, sizeName,lwhHeadingDetailTable, setsizeName,detailContextDispatch, grandDispatch, grandTotal, tableHeadingsFull, tableDetailHeading, lwhHeading, sizes, status,detailTableContext }
=======
import { createContext, useReducer, useState } from 'react';
import { contextState } from '../Pages/Dashboard/Orders/View PO/Reducer/intialState';
import { contextReducer } from '../Pages/Dashboard/Orders/View PO/Reducer/reducerFunction';
export const ViewContextProvider = createContext(null);
const ViewContext = ({ children }) => {
  const [poState,setPoState]=useState()
 const [context,contextDispatch]=useReducer(contextReducer,contextState)
console.log(context)
const obj={poState,setPoState,context,contextDispatch}
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
  return (
    <ViewContextProvider.Provider value={obj}>
      {children}
    </ViewContextProvider.Provider>
  );
};

export default ViewContext;
