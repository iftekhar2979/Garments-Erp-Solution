import React, { useState } from 'react';
import ColorTable from './ColorTable';

const tableHeadings = [
  {
    id: 385,
    heading: 'Color',
    class: 'border w-24',
  },
  {
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
              {tableHeadings?.map((th,index) => (
                <th key={index}>{th.heading}</th>
              ))}
              </tr>
            </thead>
            <tbody>
              {[...arr].map((item,index) => (
                <ColorTable options={sizeName} style={style?.style} key={index}  status={status}/>
              ))}
            </tbody>
          </table>
        </td>
      </tr>
    </>
  );
};

export default PoTable;
