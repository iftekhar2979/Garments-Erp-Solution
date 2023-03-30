import { createContext, useState } from 'react';
export const ViewContextProvider = createContext(null);
const ViewContext = ({ children }) => {
  const [poState,setPoState]=useState()
//  const [context,dispatch]=useReducer(contextReducer,contextState)
console.log(poState)
const obj={poState,setPoState}
  return (
    <ViewContextProvider.Provider value={obj}>
      {children}
    </ViewContextProvider.Provider>
  );
};

export default ViewContext;
