import react, { useContext } from 'react';
import { ViewContextProvider } from '../../../../../contextApi/ViewContext';
import NestedChalanTable from './NestedChalanTable';

const ChalanTable = ({props,sizeSystem}) => {

    const {style,colorName,deliverySize,deliveryQuantity,sizeName}=props
  
    
    return (
        <>
    {deliveryQuantity>0 ? <>
        <tr className='border w-full'>
            <th className='border W-6'>{style}</th>
            {sizeSystem==='L-W-H'?<td className='border text-center W-6'>{sizeName}</td>:<td className='border text-center W-6'>{colorName}</td>}
            
            <td className=''>
    <NestedChalanTable sizeSystem={sizeSystem} deliverySize={deliverySize}></NestedChalanTable>
            </td>
            <td className='w-20 border'>{deliveryQuantity}</td>
        </tr>
    </>:''
    }
        
        </>
    )
};
export default ChalanTable;