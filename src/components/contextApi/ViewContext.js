import { createContext, useReducer, useState } from 'react';
import { contextState } from '../Pages/Dashboard/Orders/View PO/Reducer/intialState';
import { contextReducer } from '../Pages/Dashboard/Orders/View PO/Reducer/reducerFunction';
export const ViewContextProvider = createContext(null);
const ViewContext = ({ children }) => {
  const [poState,setPoState]=useState()
 const [context,contextDispatch]=useReducer(contextReducer,contextState)
console.log(context)
const obj={poState,setPoState,context,contextDispatch}
  return (
    <ViewContextProvider.Provider value={obj}>
      {children}
    </ViewContextProvider.Provider>
  );
};

export default ViewContext;
