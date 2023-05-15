import react, { useContext } from 'react';
import { ViewContextProvider } from '../../../../../contextApi/ViewContext';

const NestedChalanTable = ({sizeSystem,deliverySize}) => {
    // console.log(props)
    const { poState,sizeName } = useContext(ViewContextProvider)
    return (
        <>
        {
            sizeSystem==='SM-XL' &&
            <>
               <tr className=' '>
                    {sizeName?.map((item,i)=><td key={i} className=' border-l w-[78px]'>{item}</td>)}
                    
                </tr>
                <tr className='border-t'>
                    {sizeName?.map((item,i)=><td key={i} className='text-xs border-l'>{deliverySize[item]}</td>)}
                    
                </tr>
            </>
           
        }
               {
            sizeSystem==='L-W-H' &&
            <>
              <p>{deliverySize.lwhSize}</p>
            </>
           
        }
          {
            sizeSystem==='SINGLE-INPUT' &&
            <>
              <p>{deliverySize.singleInput}</p>
            </>
           
        }
     
        </>
    )
};
export default NestedChalanTable;