<<<<<<< HEAD
import React, { useContext, useEffect, useState } from 'react';
import ColorTable from './ColorTable';
import { UidGenarate, contextState } from './Reducer/intialState';
import { ViewContextProvider } from '../../../../contextApi/ViewContext';
import { useSelector } from 'react-redux';

let tableHeadingsFull = [
  {
    id: UidGenarate(),
=======
import React, { useState } from 'react';
import ColorTable from './ColorTable';

const tableHeadings = [
  {
    id: 385,
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
    heading: 'Color',
    class: 'border w-24',
  },
  {
<<<<<<< HEAD
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

=======
    id: 256,
    heading: 'T. Quantity',
    class: 'border w-24',
  },
  {
    id: 113,
    heading: 'Del. QTY',
    class: 'border  w-24',
  },
  {
    id: 114,
    heading: 'Rest. QTY',
    class: 'border  w-24',
  },
  {
    id: 116,
    heading: 'Comp. Date',
    class: 'border px-1 w-16 ',
  },
  {
    id: 197,
    heading: 'Ad. Note',
    class: 'border px-1 w-16 ',
  },
  {
    id: 127,
    heading: 'Status',
    class: 'border px-1 w-16 ',
  },
];
const sizeName = ['XS', 'SM', 'M', 'L', 'XL', 'XXL', 'XXXL'];
const status = ['Ordered', 'Pending', 'Completed', 'Canceled'];

const PoTable = ({ quantity, style}) => {
  const [arr, setArr] = useState(new Array(style?.colorQuantity));

  
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900

  return (
    <>
      <tr className='border bg-gray-50 border hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700'>
        <th className='border font-medium text-gray-900 w-24 px-2'>
          <p>{style?.style}</p>
        </th>
        <td >
          <table>
<<<<<<< HEAD
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
=======
         <thead>
          <tr>
              {tableHeadings?.map((th,index) => (
                <th key={index}>{th.heading}</th>
              ))}
              </tr>
            </thead>
            <tbody>
              {[...arr].map((item,index) => (
                <ColorTable options={sizeName} style={style?.style} key={index}  status={status}/>
              ))}
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
            </tbody>
          </table>
        </td>
      </tr>
    </>
  );
};

export default PoTable;
