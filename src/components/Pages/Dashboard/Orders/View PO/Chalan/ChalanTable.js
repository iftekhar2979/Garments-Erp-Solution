import react, { useContext } from 'react';
import { ViewContextProvider } from '../../../../../contextApi/ViewContext';
import NestedChalanTable from './NestedChalanTable';
import NewChalanObj from './NewChalanObj';

const ChalanTable = ({ props, sizeSystem, tableState }) => {
    const { poState, sizeName } = useContext(ViewContextProvider)
    const { style, colorName, deliverySize, deliveryQuantity ,} = props

    return (
        <>
            {deliveryQuantity > 0 ? <>


                <tr className='b_b w-full' >
                    <td className='b_b text-center text-[10pt]'>{style}</td>
                    {sizeSystem === 'L-W-H' ? < td className='b_b text-center text-[10pt]'>{props?.sizeName}</td> : <td className='border border-black text-[10px] text-center '>{colorName}</td>}
                    {
                        sizeSystem === 'SM-XL' &&
                        <>
                            <div className='h-full '>
                                {sizeName?.map((item, i) => {
                                    return (
                                        <>
                                            <td key={i} style={{overflow:'hidden',padding:'0px'}} className='w-[58px] text-[10pt] align-middle  text-center h-[50px] border-black border-l first:border-l-0  last:border-r-0 '>{deliverySize[item] ? deliverySize[item] : 0}</td>
                                        </>
                                    )
                                })}
                            </div>
                        </>
                    }
                    {
                        sizeSystem === 'L-W-H' &&
                        <>
                            <p className='text-center text-[10pt] border-black'>{deliverySize?.lwhSize}</p>
                        </>
                    }
                    {
                        sizeSystem === 'SINGLE-INPUT' &&
                        <>
                            <p className='text-center text-[10pt] border-black'>{deliverySize.singleInput}</p>
                        </>
                    }
                    <td className='w-20 b_b text-center text-[10pt]'>{deliveryQuantity}</td>
                </tr>
            </> : ''
            }
        </>
    )
};
export default ChalanTable;