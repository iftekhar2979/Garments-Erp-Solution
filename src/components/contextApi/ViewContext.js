import { createContext, useState } from 'react';
export const ViewContextProvider = createContext(null);
const ViewContext = ({ children }) => {
  const [state,setState]=useState({})
const handleFound=(e)=>{
  
  console.log(state)
}
const obj={handleFound,setState,state}
  return (
    <ViewContextProvider.Provider value={obj}>
      {children}
    </ViewContextProvider.Provider>
  );
};

export default ViewContext;
