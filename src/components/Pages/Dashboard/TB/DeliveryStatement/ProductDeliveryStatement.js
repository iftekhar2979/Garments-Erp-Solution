import { format } from 'date-fns';
import react, { useState } from 'react';
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import usePrintButton from '../../../../CustomHooks/usePrintButton';
import useDocumentTitle from '../../../../CustomHooks/useDocumentTitle';


const ProductDeliveryStatement = ({ data }) => {

  function mergeRows(data) {
    const mergedData = [];
    if (data) {
     [...data].forEach(item => {
        const existingItem = mergedData.find(
          mergedItem => mergedItem.productName === item.productName
        );

        if (existingItem) {
          // If the product name already exists, add chalan info to the existing row
          existingItem.chalanInfo.push(...item.chalanInfo);
        } else {
          // If the product name doesn't exist, add a new row
          mergedData.push({ ...item, chalanInfo: [...item.chalanInfo] });
        }
      });
    }

    return mergedData;
  }

  const mergedData = mergeRows(data);

  return (
    <>
        <table className={`b_b mx-8 text-[12pt] w-[1000px]`}>
          <thead>
            <tr >
              <th className='b_b w-52'>Product Name</th>
              <th className='b_b w-32'>Date</th>
              <th className='b_b w-36'>Chalan Number</th>
              <th className='b_b w-36'> Quantity</th>
            </tr>
          </thead>
          <tbody>
            {mergedData.map((item, index) => (
              <>
                <tr key={`${item.productName}-${index}`} className="b_b">
                  <td rowSpan={item.chalanInfo.length} className='b_b text-center b_b_None text-xl'>{item.productName}</td>
                  <td className='b_b w-32 text-center'>{format(new Date(item.chalanInfo[0].createdAt), 'PP')}</td>
                  <td className='b_b w-32 text-center'>{item.chalanInfo[0].chalanNumber}</td>
                  <td className='b_b w-32 text-center'  >{item.chalanInfo[0].deliveryQuantity.toLocaleString()}</td>
                </tr>
                {item.chalanInfo.slice(1).map((info, subIndex) => (
                  <>
                    <tr key={`${item.productName}-${subIndex}`} className='b_b ' >
                      <td className='b_b w-32 text-center'>{info.createdAt && format(new Date(info.createdAt), 'PP')}</td>
                      <td className='b_b w-32 text-center'> {info.chalanNumber}</td>
                      <td className='b_b w-32 text-center'>{info.deliveryQuantity.toLocaleString()}</td>
                    </tr>
                  </>
                ))}
                <tr key="" className=''>
                  <td></td>
                  <td></td>
                  <td className='text-center text-md font-semibold'>Total</td>
                  <td className='text-center b_b text-md font-semibold'>{item.totalQuantity.toLocaleString()}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
    
    </>
  )
};
export default ProductDeliveryStatement;