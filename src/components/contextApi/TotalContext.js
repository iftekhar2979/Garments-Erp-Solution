import react, { createContext, useState } from 'react';
export const OrderContextProvider=createContext(null)
const OrderContext = ({children}) => {
    const [state,setState]=useState('ifti')
    const obj={state,setState}
    return (
        <OrderContextProvider.Provider value={obj}>
            {children}
        </OrderContextProvider.Provider>
    )
};
export default OrderContext;