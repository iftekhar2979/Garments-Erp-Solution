import React, { useContext, useEffect, useState } from 'react';
import ColorTable from './ColorTable';
import { UidGenarate, contextState } from './Reducer/intialState';
import { ViewContextProvider } from '../../../../contextApi/ViewContext';
import { useSelector } from 'react-redux';

let tableHeadingsFull = [
  {
    id: UidGenarate(),
    heading: 'Color',
    class: 'border w-24',
  },
  {
    id: UidGenarate(),
    heading: 'Total Quantity',
    class: 'border w-24',
  },

  {
    id: UidGenarate(),
    heading: 'Rest QTY',
    class: 'border  w-24',
  },
];
let tableHeadingsFullWithCartoonSticker = [
  {
    id: UidGenarate(),
    heading: 'Product Name',
    class: 'border w-24',
  },
  {

    id: UidGenarate(),
    heading: 'PO Number',
    class: 'border w-24',

  },
  {
    id: UidGenarate(),
    heading: 'Total Quantity',
    class: 'border w-24',
  },

  {
    id: UidGenarate(),
    heading: 'Rest QTY',
    class: 'border  w-24',
  },

];
const PoTable = ({ style, isCheacked, setisCheacked }) => {
  // const { isLoading, isError, singleOrderDetails: poState } = useSelector(state => state.singleOrder)
  const details = useSelector(state => state.orderDetails)
  const [arr, setArr] = useState(new Array(style?.colorQuantity));
  const { lwhHeading, sizes, status, grandTotal,poState } = useContext(ViewContextProvider)
  const [sizeName, setsizeName] = useState([])


  useEffect(() => {
    if (poState?.sizeSystem === "L-W-H") {
      setsizeName(['size'])
    } else if (poState?.sizeSystem === 'SINGLE-INPUT') {
      let newLwh = new Array(1)
      setsizeName(['input'])
    } else {
      console.log(sizes)
      setsizeName(sizes)
    }
  }, [poState?.sizeSystem, setsizeName])


  return (
    <>
      <tr className='border bg-gray-50 border hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700'>
        <th className='border font-medium text-gray-900 w-24 px-2'>
          <p>{style?.style}</p>
        </th>
        <td >
          <table>
            <thead>
              <tr>
                {(poState?.sizeSystem === 'L-W-H') ?
                  lwhHeading?.map((th, index) => (
                    <th key={index} className='border text-center'>{th.heading}</th>
                  )) :
                  (poState?.cartoonSticker) ?
                    tableHeadingsFullWithCartoonSticker?.map((th, index) => (
                      <th key={index} className='border text-center'>{th.heading}</th>
                    )) :
                    tableHeadingsFull?.map((th, index) => (
                      <th key={index} className='border text-center'>{th.heading}</th>
                    ))}
              </tr>
            </thead>
            <tbody>
              {[...arr].map((item, index) => (
                <ColorTable options={sizeName} style={style?.style} key={index} isCheacked={isCheacked} setisCheacked={setisCheacked} status={status} />
              ))}
              <td></td>
              <td>Order Qty: <span className='font-bold '>{details?.grandTotalQuantity}</span></td>
              <td>Rest Qty:  <span className='font-bold '>{details?.grandRestQuantity}</span></td>
            </tbody>
          </table>
        </td>
      </tr>
    </>
  );
};

export default PoTable;
