import react, { useContext } from 'react';
import { ViewContextProvider } from '../../../../../contextApi/ViewContext';
import NestedChalanTable from './NestedChalanTable';
import NewChalanObj from './NewChalanObj';

const ChalanTable = ({props,sizeSystem,tableState}) => {
    // const {colorQuantity,style}=props
    const {style,colorName,deliverySize,deliveryQuantity,sizeName}=props
  
    return (
        <>
   {deliveryQuantity>0 ? <>

  
    <tr className='b_b w-full' >
            <td className='b_b text-center text-[12px]'>{style}</td>
            {sizeSystem==='L-W-H'? < td className='b_b text-center text-[12px]'>{sizeName}</td>:<td className='border border-black text-[10px] text-center '>{colorName}</td>}
            
        
    <NestedChalanTable sizeSystem={sizeSystem} deliverySize={deliverySize}></NestedChalanTable>
    
            <td className='w-20 b_b text-center text-[12px]'>{deliveryQuantity}</td>
        </tr>
    </>:''
    } 
        </> 
    )
};
export default ChalanTable;