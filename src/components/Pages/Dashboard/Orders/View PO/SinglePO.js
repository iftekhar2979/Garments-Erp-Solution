import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Heading from '../../../../Utility-Component/Heading';
import Table from '../../../../Utility-Component/Table/Table';
import DetailPOProduct from './DetailPOProduct';
import PoTable from './PoTable';

const SinglePO = () => {
  const poDetail = useLoaderData();
  const {
    poNumber,
    quantity,
    color,
  
  } = poDetail;
  console.log(color)
  const tableHeadings = [
    {
      id: 111,
      heading: 'Color',
      class: 'border font-medium text-gray-900 w-24 px-2',
    },
    {
      id: 112,
      heading: 'Size',
      class: 'w-4',
    },
    {
      id:256,
      heading:'T. Quantity',
      class:'border w-24'
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
      heading: 'ORD. Rate',
      class: 'border px-1 w-16 ',
    },
    {
      id: 117,
      heading: 'Act. Rate',
      class: 'border px-1 w-16 ',
    },
    {
      id: 118,
      heading: 'Amount',
      class: 'border px-1 w-24',
    },
    {
      id: 124,
      heading: 'Comp. Date',
      class: 'border px-1 w-24 ',
    },
    {
      id: 127,
      heading: 'Status',
      class: 'border px-1 w-16 ',
    },
  ];

  return (
    <div>
      <Heading heading={`Your Selected PO Number : ${poNumber}`}></Heading>
      <DetailPOProduct properties={poDetail}></DetailPOProduct>

      <Table tableHeadings={tableHeadings} tableData={[]}>
   
       {color.map(item=><PoTable color={item} quantity={quantity} />)}
       
      </Table>
    </div>
  );
};

export default SinglePO;
