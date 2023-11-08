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
                <div className='h-full '>
                    {sizeName?.map((item,i)=><td key={i} className='  w-[90px] text-[12px] align-middle  text-center h-[50px] border-black border-l first:border-l-0  last:border-r-0 '>{deliverySize[item] ?deliverySize[item]:0}</td>)}
                    
                </div>
            </>
           
        }
               {
          sizeSystem==='L-W-H' &&
            <>
              <p className='text-center  border-black'>{deliverySize.lwhSize}</p>
            </>
           
        }
          {
            sizeSystem==='SINGLE-INPUT' &&
            <>
              <p className='text-center  border-black'>{deliverySize.singleInput}</p>
            </>
           
        }
     
        </>
    )
};
export default NestedChalanTable;