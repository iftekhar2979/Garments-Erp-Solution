import react, { useContext } from 'react';
import SizeTable from '../../Pages/Dashboard/Orders/View PO/SizeTable';
import RestTable from '../../Pages/Dashboard/Orders/View PO/RestTable';
import { ViewContextProvider } from '../../contextApi/ViewContext';
import AnotherRestTable from './AnotherRestTable';

const ToogleTable = ({data}) => {
    const {style,colorName,deliverySize,deliveryQuantity,restSize,restQuantity,sizeName}=data
    return (
      <>
       {
        deliveryQuantity ?  <tr className='w-full'>
          <td className='border px-2  w-48'>
        <p>{style}</p>
        </td>

         {
          sizeName?
          <td className='border  w-48'>
          <textarea
              type='text'
              className='text-md p-2 h-16 w-full border border-md'
              name='sizeName'
              defaultValue={sizeName}
            ></textarea>
            
          </td>
          :
          <td className='border  w-48'>
          <textarea
              type='text'
              className='text-md p-2 h-16 w-full border border-md'
              name='colorName'
              defaultValue={colorName}
            ></textarea>
            
          </td>

        }
      
     
        <td className='border w-48'>
          <AnotherRestTable
          options={Object.keys(deliverySize)}
          defaultValue={deliverySize}
          total={deliveryQuantity}
          />
         
        </td>
        <td className='border w-48'>
        <AnotherRestTable
          options={restSize && Object.keys(restSize)}
          defaultValue={restSize}
          total={restQuantity}
          />
  
        </td> 
  
        
      </tr>:
      ''

      }
      
    
      </>)
};
export default ToogleTable;