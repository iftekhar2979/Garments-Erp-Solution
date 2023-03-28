import { createContext } from 'react';
export const ViewContextProvider = createContext(null);
const ViewContext = ({ children }) => {
 
  // useEffect(() => {
  //   // total Quantity of sizes
  //   const reduced = Object.values(size);
  //   const totalQuanity = reduced.reduce((acc, cur) => {
  //       return acc + cur;
  //     }, 0);
  //     setTotal(totalQuanity);
  // }, [size]);

  

// const deliverySizeChange=(e)=>{
//     let values =e.target.value
//     if(isNaN(values)){
//       values=0
//     }
//     setdeliverySize(prev=>{
//         return {...prev,[e.target.name]:parseFloat(values)}})
//         setrestSize(prev=>{
//             return {...prev,[e.target.name]:parseFloat(size[e.target.name]-parseFloat(deliverySize[e.target.name]))}
//         })
//         console.log(restsize)
       
   
// }
  // const object = { size, setSize ,sizeChange,total,deliverySizeChange,restsize,deliverySize};
const object={}
  return (
    <ViewContextProvider.Provider value={object}>
      {children}
    </ViewContextProvider.Provider>
  );
};

export default ViewContext;
