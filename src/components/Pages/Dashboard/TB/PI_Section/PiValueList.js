import react, { memo, useEffect, useState } from 'react';
import { useAsyncError } from 'react-router-dom';
import InputDropDown from '../../../../Utility-Component/Form/InputDropDown';

const PiValueList = ({ detail, slNo, state, }) => {
  

    const { productName, color, totalQuantity, amount, perPics, size = '', length = '' } = detail




    return (
        <>
            <tr class="border text-black"  >
                {
                    state?.map((itemName, index) => {
                        const { heading } = itemName
                        switch (heading) {
                            case 'S.L.':
                                return <td className={itemName.class} >{slNo + 1}</td>
                                break;
                            case 'Description Of Goods':

                                return <td className={itemName.class} >{productName}</td>
                                break;
                            case 'Length x Width (CM)':
                                return <td className={itemName.class} >{length}</td>
                                break;
                            case 'Color':
                                return <td className={itemName.class} >{color}</td>
                                break;
                            case 'Size':
                                return <td className={itemName.class} >{size}</td>
                                break;
                            case 'Quantity':
                                return <><td className={itemName.class} >
                                    {totalQuantity}

                                </td>
                                </>
                                break;
                            case 'Unit Price':
                                return <td className={itemName.class} ><p className='flex justify-between mx-2'><span >$</span> <span>{perPics}</span></p></td>
                                break;
                            case 'Total Amount':
                                return <td className={itemName.class} ><p className='flex justify-between mx-2'><span >$</span> <span>{amount}</span></p></td>
                                break;
                            default:
                                return <td className={itemName.class} >{itemName.heading}</td>
                                break;
                        }


                    })
                }
                {/* <td class="w-10 text-center border text-[10pt] border">{slNo+1}</td>
                            <td class="w-60 text-center border text-[10pt]">{productName}</td>
                            <td class="w-52 text-center border text-[10pt]">{length}</td>
                            <td class="w-24 text-center border text-[10pt]">{color}</td>
                            <td class="w-24 text-center border text-[10pt]">{size}</td>
                            <td class="w-44 text-center border text-[10pt]">{totalQuantity}</td>
                            <td class="w-20 text-center border text-[10pt]">{perPics}</td>
                            <td class="w-44 text-center border text-[10pt]">${amount}</td> */}
            </tr>
        </>
    )
};
export default memo(PiValueList);